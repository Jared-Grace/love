import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_storage_unfrozen } from "./literals_frozen_storage_unfrozen.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function literals_frozen_storage_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every word a browser database is opened with is one this repo has promised not to move.");
  ("The list of frozen values is where that promise is kept, and until now nothing put a name onto it. A name arrived there because somebody writing a new key remembered to say so, and the day they did not, the value went on sitting in readers' browsers with nothing watching it - which is the whole failure, because what it protects against is invisible from here: the code loads, every caller compiles, and the damage is to data on disks nobody in this repo can reach.");
  ("Whether a word has escaped is usually a judgement, and guessing it from a name or a meaning would be worse than not asking. This asks nothing of the kind. A word passed to the opening of a browser database has escaped by that act alone - the browser wrote it down - so the question has an answer the code itself can give.");
  ("Measured against zero rather than against a record of what was already wrong, because the set was clear when this was written: two names were missing on the day it was built, both put right in the same breath, and there is nothing left to grandfather.");
  ("What it does not reach: the words that escape into local storage, which arrive at their seam as a key computed far from it rather than as a getter the opening imports. Those stay a judgement, and stay on the list by hand.");
  let offenders = await literals_frozen_storage_unfrozen();
  let f_name = fn_name("literals_frozen_names");
  let f_name2 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "a browser database is opened with a word nothing has frozen, so it could be changed here while readers' browsers go on looking under the old one - add the name to ",
      f_name,
      " and record what it says today with ",
      f_name2,
    ]),
    offenders,
  });
  let r = {
    checked: list_size(offenders),
    offenders,
  };
  return r;
}
