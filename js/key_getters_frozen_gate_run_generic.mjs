import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function key_getters_frozen_gate_run_generic(pairs, part) {
  "QA gate: given every function called to name a field of one part of a page address, each of them has been frozen. The part is named so the complaint can say which half of the address it is about.";
  "Moving a word out of the sites and into a function is only half of what keeps a saved link working. The word can still be reworded inside that function, and then every link somebody saved spelling the old one opens on nothing - and there is no repair, because the link is on a disk nobody here can reach. Freezing is the other half, and it is the half nothing reminds you of: the sites are clean, the gate watching for written-out words is green, and the word is published unwatched all the same.";
  "That happened twice in one sitting, and both times it was caught by somebody remembering rather than by anything here.";
  "The whole set is counted as well as checked, because this passes by finding nothing and so does a walk that has stopped reaching anything. A count that has fallen to nothing is the reading breaking, not the repo getting cleaner.";
  "The part after the hash and the part after the question mark ask exactly this, and differ only in which walk hands the pairs over. Written out once each, the judging had to be got right twice and a repair to either copy left the other holding the fault.";
  "Throws so the dispatcher seam exits nonzero.";
  "The way out is two steps, and both are named because the second one alone does nothing. The list of frozen names is kept by hand, and the recorder only ever writes down what the names already on that list say today - so a function that has not been added yet is not missing a value, it is missing a mention, and running the recorder at it answers that it added nothing and leaves this exactly as red as it was.";
  "Naming the recorder on its own is what this said for a while, and it reads as the whole remedy. Somebody followed it on 2026-08-14, got added nothing back, and had to read three functions to find out that the hand-kept list was the step nobody had mentioned. The two gates next door over browser databases and over written-out words both name the list first; this was the one that did not.";
  arguments_assert(arguments, 2);
  let frozen = literals_frozen_names();
  let unfrozen = [];
  for (let pair of pairs) {
    let getter = property_get(pair, "getter");
    let kept = list_includes(frozen, getter);
    if (kept) {
      continue;
    }
    let f_name = property_get(pair, "f_name");
    let named = text_combine_multiple([f_name, " -> ", getter]);
    list_add_unique(unfrozen, named);
  }
  unfrozen.sort();
  let f_name2 = fn_name("literals_frozen_record_new");
  let f_name3 = literals_frozen_names.name;
  list_empty_is_assert_json(unfrozen, {
    hint: text_combine_multiple([
      "a word is being written into ",
      part,
      " of a page address by a function nothing has frozen, so rewording it there would quietly break every link already saved with it. Add the name to ",
      f_name3,
      " and record what it says today with ",
      f_name2,
      ", which only ever adds and cannot bless a word that has already moved",
    ]),
    unfrozen,
  });
  let r = {
    checked: list_size(pairs),
    unfrozen,
  };
  return r;
}
