import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_storage_walked } from "./literals_frozen_storage_walked.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function literals_frozen_storage_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every word a browser database is opened with is one this repo has promised not to move.");
  ("The list of frozen values is where that promise is kept, and until now nothing put a name onto it. A name arrived there because somebody writing a new key remembered to say so, and the day they did not, the value went on sitting in readers' browsers with nothing watching it - which is the whole failure, because what it protects against is invisible from here: the code loads, every caller compiles, and the damage is to data on disks nobody in this repo can reach.");
  ("Whether a word has escaped is usually a judgement, and guessing it from a name or a meaning would be worse than not asking. This asks nothing of the kind. A word passed to the opening of a browser database has escaped by that act alone - the browser wrote it down - so the question has an answer the code itself can give.");
  ("Measured against zero rather than against a record of what was already wrong, because the set was clear when this was written: two names were missing on the day it was built, both put right in the same breath, and there is nothing left to grandfather.");
  ("What it does not reach: the words that escape into local storage, which arrive at their seam as a key computed far from it rather than as a getter the opening imports. Those stay a judgement, and stay on the list by hand.");
  ("Half of that gap has since been closed from the other side. A local storage key is a function's own NAME with a word after it, so what escapes there is a name rather than a value, and a gate over values could never have watched it, and the sibling that does keeps a record of its own. The word after the name is the half still standing here: it is written out at the call rather than held by a getter, so nothing reads it off a name.");
  ("How many openings were walked is carried out with the verdict, and it is the half this stood without for a while. What came back said checked and held the number of offenders, so a clean run answered nothing checked - which is also exactly what a walk that had stopped reaching any opening would answer, and there was no number anywhere that could tell those apart.");
  let walked = await literals_frozen_storage_walked();
  let openers = property_get(walked, "openers");
  let offenders = property_get(walked, "offenders");
  let f_name = fn_name("literals_frozen_name_add");
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "a browser database is opened with a word nothing has frozen, so it could be changed here while readers' browsers go on looking under the old one - name it with ",
      f_name,
      ", which puts it on the frozen list and records what it says today in one go, and then write the paragraph above the line it added saying how the word escaped",
    ]),
    offenders,
  });
  let r = {
    openers,
    offenders,
  };
  return r;
}
