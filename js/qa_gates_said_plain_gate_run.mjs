import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { qa_gates_said_plain } from "./qa_gates_said_plain.mjs";
import { qa_gates_said_plain_baseline_path } from "./qa_gates_said_plain_baseline_path.mjs";
export async function qa_gates_said_plain_gate_run() {
  "QA gate: a gate that fails must say who is at fault in a form something other than a person can read.";
  "What is at stake is not tidiness. A red gate's words are read back for the function names in them, and an app whose bundle carries one of those names is held out of its deployment. So a name mentioned rather than accused stops a deployment that has nothing wrong with it - and the names most likely to be mentioned are the repair command and the small atom the offender copied, both of which everything ships.";
  "Measured against the baseline rather than against zero, because ten gates already spoke this way when this was written and rewriting all ten at once is a worse trade than stopping the eleventh. What it holds is the thing worth holding: the gate written today may not be the eleventh.";
  "This same bug was found three times in one day, each time only because it had already stopped a deployment. That is the shape a gate is for - the cost of finding it that way is paid by whoever was shipping, and it is paid again every time.";
  let plain = await qa_gates_said_plain();
  let path = qa_gates_said_plain_baseline_path();
  let name_write = fn_name("qa_gates_said_plain_baseline_write");
  let f_name = fn_name("list_empty_is_assert_json");
  let hint = text_combine_multiple([
    "these gates can only complain in a sentence, so everything they mention is read as an accusation - throw the offenders with ",
    f_name,
    " and put the advice and any bystanders under its hint, which is dropped before the names are read",
  ]);
  let r = await baseline_names_gate_generic(plain, path, hint, name_write);
  return r;
}
