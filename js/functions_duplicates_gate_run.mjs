import { fn_name } from "./fn_name.mjs";
import { functions_duplicates_baseline_path } from "./functions_duplicates_baseline_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_duplicates_names } from "./functions_duplicates_names.mjs";
export async function functions_duplicates_gate_run() {
  "QA gate for one idea arriving twice. Small units written by many hands at once produce this on their own - two people reach for the same small job, neither can see that the other already wrote it, and it lands under two names. Nothing else in the repo can notice, because each half looks perfectly reasonable alone.";
  "Measured against the baseline file rather than against zero, so the rule binds what is written today instead of waiting on a judgment about every pair already here. A name the baseline does not list fails, and a name it lists that no longer has a twin fails too, so the list can only shrink.";
  "A group is a question, not an instruction. The same steps can be two ideas on purpose - cutting a piece out of a list and cutting a piece out of some words are written alike and must stay apart - so when this goes red the answer is sometimes to collapse the pair and sometimes to make the two genuinely differ. What it must never be is a wider baseline.";
  let offenders = await functions_duplicates_names();
  let path = functions_duplicates_baseline_path();
  let hint = text_combine_multiple([
    "these functions do work another name already does - collapse the pair onto one name with ",
    fn_name("function_replace"),
    ", or make them genuinely differ",
  ]);
  let result = await baseline_names_gate_generic(
    offenders,
    path,
    hint,
    fn_name("functions_duplicates_baseline_write"),
  );
  return result;
}
