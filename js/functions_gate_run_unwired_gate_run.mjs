import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_gate_run_unwired } from "./functions_gate_run_unwired.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_gate_run_unwired_gate_run() {
  "QA gate: every gate this repo has written is a member of the list the whole-repo gate runs.";
  "A gate that is not in that list never runs, and there is nothing about it to notice. It is a named function, it is green when called by hand, and the folder it sits in is full of its neighbours that do run. The repo has no other way to reach one, so the list is the only place the absence shows.";
  "It ratchets against nothing rather than against a written-down set, because the answer today is nothing and a set to compare against would only be a place for the next one to be added quietly.";
  let missing = await functions_gate_run_unwired();
  list_empty_is_assert_json(missing, {
    missing,
    hint: text_combine_multiple([
      "these gates are written and never run - add each one to ",
      fn_name("qa_gates"),
      ", or name it in ",
      fn_name("functions_gate_run_unwired_exempt"),
      " with the reason it stands outside the list",
    ]),
  });
  let r = {
    missing: 0,
  };
  return r;
}
