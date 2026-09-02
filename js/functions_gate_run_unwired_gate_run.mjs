import { functions_gate_run_unwired_exempt_dead } from "./functions_gate_run_unwired_exempt_dead.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_gate_run_unwired } from "./functions_gate_run_unwired.mjs";
export async function functions_gate_run_unwired_gate_run() {
  "QA gate: every gate this repo has written is a member of one of the two lists the whole-repo gate runs, and every written excuse for standing outside them still excuses something and says why.";
  "A gate in neither list never runs, and there is nothing about it to notice. It is a named function, it is green when called by hand, and the folder it sits in is full of its neighbours that do run. The repo has no other way to reach one, so the lists are the only place the absence shows.";
  "It ratchets against nothing rather than against a written-down set, because the answer today is nothing and a set to compare against would only be a place for the next one to be added quietly.";
  "The excuses are asked about first only because they are about the instrument rather than the code, and not because the answer underneath depends on them. It does not: an excused name is added to the run side before the subtraction, so a name no gate answers to takes nothing off the answer. What a dead excuse costs is later, and it is worth more than an arithmetic slip. A let-off is attached to a name, so a gate written under that name afterwards is excused from the moment it exists, and nobody is asked to argue for it.";
  let dead = await functions_gate_run_unwired_exempt_dead();
  list_empty_is_assert_json(dead.stale, {
    stale: dead.stale,
    hint: text_combine_multiple([
      "these names are excused from the gate lists and no longer name a gate at all - take each one out of ",
      fn_name("functions_gate_run_unwired_exempt"),
      ", since a let-off left on a free name excuses whatever is written under that name next",
    ]),
  });
  list_empty_is_assert_json(dead.contradicted, {
    contradicted: dead.contradicted,
    hint: text_combine_multiple([
      "these names are excused from the gate lists and are also in one of them, so the gate does run and the excuse is the half that is wrong - take each one out of ",
      fn_name("functions_gate_run_unwired_exempt"),
    ]),
  });
  list_empty_is_assert_json(dead.unreasoned, {
    unreasoned: dead.unreasoned,
    hint: text_combine_multiple([
      "these gates are excused with no reason written beside them, and being made to argue for the let-off out loud is the whole of what the list costs - give each one a reason in ",
      fn_name("functions_gate_run_unwired_exempt"),
      " or take it out",
    ]),
  });
  let missing = await functions_gate_run_unwired();
  list_empty_is_assert_json(missing, {
    missing,
    hint: text_combine_multiple([
      "these gates are written and never run - add each one to ",
      fn_name("qa_gates"),
      ", or to ",
      fn_name("qa_gates_machine"),
      " if it may only be asked of this machine, or name it in ",
      fn_name("functions_gate_run_unwired_exempt"),
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
