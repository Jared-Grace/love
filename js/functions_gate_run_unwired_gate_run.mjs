import { functions_gate_run_unwired_exempt_dead } from "./functions_gate_run_unwired_exempt_dead.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_gate_run_unwired } from "./functions_gate_run_unwired.mjs";
export async function functions_gate_run_unwired_gate_run() {
  "QA gate: every gate this repo has written is a member of one of the two lists the whole-repo gate runs, and every written excuse for standing outside them still excuses something.";
  "A gate in neither list never runs, and there is nothing about it to notice. It is a named function, it is green when called by hand, and the folder it sits in is full of its neighbours that do run. The repo has no other way to reach one, so the lists are the only place the absence shows.";
  "It ratchets against nothing rather than against a written-down set, because the answer today is nothing and a set to compare against would only be a place for the next one to be added quietly.";
  "The excuses are asked about first and the unrun gates second, because the reading underneath counts every excused name as run before it subtracts. An excuse that has stopped covering anything therefore widens the side that counts as run, and an empty answer about unrun gates could be empty because of it. So the instrument is checked before its reading is believed, rather than after.";
  let dead = await functions_gate_run_unwired_exempt_dead();
  let f_name = fn_name("functions_gate_run_unwired_exempt");
  list_empty_is_assert_json(dead.stale, {
    stale: dead.stale,
    hint: text_combine_multiple([
      "these names are excused from the gate lists and no longer name a gate at all - take each one out of ",
      f_name,
      ", since an excuse covering nothing hides the next gate that would need one",
    ]),
  });
  let f_name2 = fn_name("functions_gate_run_unwired_exempt");
  list_empty_is_assert_json(dead.contradicted, {
    contradicted: dead.contradicted,
    hint: text_combine_multiple([
      "these names are excused from the gate lists and are also in one of them, so the gate does run and the excuse is the half that is wrong - take each one out of ",
      f_name2,
    ]),
  });
  let missing = await functions_gate_run_unwired();
  let f_name3 = fn_name("qa_gates");
  let f_name4 = fn_name("qa_gates_machine");
  let f_name5 = fn_name("functions_gate_run_unwired_exempt");
  list_empty_is_assert_json(missing, {
    missing,
    hint: text_combine_multiple([
      "these gates are written and never run - add each one to ",
      f_name3,
      ", or to ",
      f_name4,
      " if it may only be asked of this machine, or name it in ",
      f_name5,
      " with the reason it stands outside both lists",
    ]),
  });
  let r = {
    missing: 0,
    excused: dead.excused,
    listed: dead.listed,
  };
  return r;
}
