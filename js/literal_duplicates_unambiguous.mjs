import { function_name_family } from "./function_name_family.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { literal_duplicates } from "./literal_duplicates.mjs";
import { list_add } from "./list_add.mjs";
export async function literal_duplicates_unambiguous() {
  "The repeated literals that are safe to route through their getter, without the ones that only look repeated";
  "Two getters holding the same spelling means there is no single right getter to route a site through, so picking either one is a coin flip that reads as tidying";
  "A site outside the getter's own family almost always spells the same word meaning something else, so it is dropped rather than rewritten";
  let found = await literal_duplicates();
  let claims = {};
  for (let entry of found) {
    let seen = property_get_or(claims, entry.literal, 0);
    claims[entry.literal] = seen + 1;
  }
  let prefixed = await apps_names_prefixed();
  let safe = [];
  for (let entry of found) {
    let claimed = property_get_or(claims, entry.literal, 0);
    if (greater_than(claimed, 1)) {
      continue;
    }
    let family = function_name_family(entry.f_name, prefixed);
    let files = [];
    for (let f_name of entry.files) {
      if (f_name.startsWith(family)) {
        list_add(files, f_name);
      }
    }
    if (greater_than(files.length, 0)) {
      list_add(safe, {
        f_name: entry.f_name,
        literal: entry.literal,
        family,
        files,
        means: entry.means,
      });
    }
  }
  function lambda(a, b) {
    let difference = subtract(b.files.length, a.files.length);
    return difference;
  }
  safe.sort(lambda);
  return safe;
}
