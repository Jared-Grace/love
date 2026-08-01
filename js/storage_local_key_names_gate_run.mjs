import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_names } from "./storage_local_key_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { storage_local_key_names_found } from "./storage_local_key_names_found.mjs";
import { list_difference } from "./list_difference.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function storage_local_key_names_gate_run() {
  "QA gate: every function name that has been written into a browser storage key is still a live function under that name.";
  "A setting saved by one of these is stored under the function's own name with a word after it. Rename the function and every reference in this repo follows it - the file loads, every caller compiles, the gates that watch code are all green - while the browser goes on looking under the old key, where the person's saved setting still sits and nothing can reach it. It is the one rename that is not behaviour-preserving, and renaming is auto-approved, so until now nothing stood between that and a commit.";
  "So the record is asked, not the source. What the source has is what is published today, and today is the only thing source can say; the name that matters is the one that WAS there, because that is what the data is filed under.";
  "A name the record has never held is told apart from one that has gone, because only the second loses anything. Adding a setting is ordinary work and its repair is a command that cannot do harm; losing a published name is a decision, and its repair is a reading.";
  arguments_assert(arguments, 0);
  let recorded = await storage_local_key_names();
  let live = await functions_names();
  let found = await storage_local_key_names_found();
  let gone = list_difference(recorded, live);
  let fresh = list_difference(found, recorded);
  let f_name = fn_name("storage_local_key_names_write");
  list_empty_is_assert_json(gone, {
    hint: text_combine_multiple([
      "a function whose name is written into keys in people's browsers no longer answers to that name - every setting saved under it is now unreachable. Put the old name back, or, if losing that data was meant, say so with ",
      f_name,
      " so the shrunken record stands in the commit",
    ]),
    gone,
  });
  let f_name3 = fn_name("storage_local_key_names_record_new");
  list_empty_is_assert_json(fresh, {
    hint: text_combine_multiple([
      "a function name has newly reached a browser storage key and the record has never held it - nothing is lost, so record it with ",
      f_name3,
      " which only ever adds and cannot clear a name that has gone",
    ]),
    fresh,
  });
  let r = {
    checked: list_size(recorded),
    gone,
    fresh,
  };
  return r;
}
