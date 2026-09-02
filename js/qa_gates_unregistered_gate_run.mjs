import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_unregistered } from "./qa_gates_unregistered.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function qa_gates_unregistered_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every gate this repo holds is either asked by the whole-repo run or has been said, once, to be left out of it and why.");
  ("A gate that nothing runs is the quietest fault there is. It has no offenders because it is never asked for any, its file sits in the tree looking exactly like the ones that work, and every reading of how much of this repo is watched counts it. Six gates were outside the run on the day this was written and all six were meant to be; what there was no way to know was that all six were meant to be.");
  ("Whether a gate belongs in the run is a judgement about what it needs around it - a browser, a server, a bucket, a machine with drives in it - and none of that can be read off the code. So the judgement is not attempted here. What is asked is only whether the judgement has been made at all, and the answer to that is a word in a list.");
  ("Measured against zero rather than against a record of what was already wrong, because the set was clear when this was written: the six absences were each read and each written down in the same breath, so there is nothing to grandfather.");
  ("How many gates were found is asserted rather than reported. A walk that stopped reaching gates would find nobody unregistered and come back green, which is the same word it uses when everything is in order - and a number sitting unread beside a verdict is not a check, which is the whole lesson of the silences this exists among.");
  let walked = await qa_gates_unregistered();
  let named = property_get(walked, "named");
  let asked = property_get(walked, "asked");
  let unregistered = property_get(walked, "unregistered");
  let stale = property_get(walked, "stale");
  let contradicted = property_get(walked, "contradicted");
  let some = greater_than(named, 0);
  assert_json(some, {
    hint: "no function in this repo was found whose name ends in the two words every gate ends in, which cannot be true while the run has hundreds of them - so the reading that finds gates has stopped reaching any, and this gate is now answering clean about nothing",
    named,
  });
  let f_name = fn_name("qa_gates");
  let f_name2 = fn_name("qa_gates_unregistered_known");
  list_empty_is_assert_json(unregistered, {
    hint: text_combine_multiple([
      "a gate exists that nothing asks, so it has been answering clean since the day it was written - if it can be answered from the source alone, add it to ",
      f_name,
      "; if it needs a browser, a server, a bucket or this machine, name it in ",
      f_name2,
      " with the reason it cannot be asked there",
    ]),
    unregistered,
  });
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "a name said to be deliberately outside the run is not a gate any more - it was renamed, or it is gone - so take it out of ",
      f_name2,
      ", and check that the gate it used to name has not walked back in unlisted",
    ]),
    stale,
  });
  list_empty_is_assert_json(contradicted, {
    hint: text_combine_multiple([
      "a gate is named as deliberately outside the run and the run asks it anyway - it is one or the other, so take it out of ",
      f_name2,
      " if it belongs in the run, or out of ",
      f_name,
      " if its reason for being outside still holds",
    ]),
    contradicted,
  });
  let r = {
    named,
    asked,
    unregistered,
  };
  return r;
}
