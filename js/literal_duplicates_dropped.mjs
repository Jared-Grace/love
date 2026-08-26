import { literal_duplicates } from "./literal_duplicates.mjs";
import { literal_duplicates_unambiguous } from "./literal_duplicates_unambiguous.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export async function literal_duplicates_dropped() {
  "Every repeated constant the safe list never offers, and every file left out of one it does offer.";
  "The two lists are both asked for and one is subtracted from the other, rather than the narrowing being worked out a second time here. What this names has to be exactly the complement of what the gate acts on, and a second copy of that judgment would agree with the first only until either one was edited. Subtraction cannot disagree.";
  "The narrowing drops a site for a written reason - that a word spelled outside its getter's own family almost always means something else there. That is a claim about files, and until it is counted nobody knows whether it holds. Measured 2026-08-26 the wide finder held thirty constants and the safe list offered two, and the five largest drops were the same spelling meaning the same thing in every file that held it.";
  "How many getters claim the spelling travels with each entry because the two ways of being dropped want different answers. A spelling two getters both hold needs somebody to decide which of them is the right one to route through. A lone getter with sites outside its family needs nothing decided, only somebody to read them.";
  let found = await literal_duplicates();
  let safe = await literal_duplicates_unambiguous();
  let offered = {};
  for (let entry of safe) {
    offered[entry.f_name] = entry.files;
  }
  let claims = {};
  for (let entry of found) {
    let seen = property_get_or(claims, entry.literal, 0);
    claims[entry.literal] = seen + 1;
  }
  let dropped = [];
  for (let entry of found) {
    let kept = property_get_or(offered, entry.f_name, []);
    let files = [];
    for (let f_name of entry.files) {
      let missing = list_includes_not(kept, f_name);
      if (missing) {
        list_add(files, f_name);
      }
    }
    if (greater_than(files.length, 0)) {
      let claimed = property_get_or(claims, entry.literal, 0);
      list_add(dropped, {
        f_name: entry.f_name,
        literal: entry.literal,
        claimed,
        files,
      });
    }
  }
  function lambda(a, b) {
    let difference = subtract(b.files.length, a.files.length);
    return difference;
  }
  dropped.sort(lambda);
  return dropped;
}
