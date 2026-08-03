import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_granted_silent } from "./functions_granted_silent.mjs";
import { functions_granted_silent_baseline_path } from "./functions_granted_silent_baseline_path.mjs";
export async function functions_granted_silent_gate_run() {
  "QA gate: a command Claude may run unasked says what it is for.";
  "A grant is a promise that this one is safe to reach for, and reaching for it means finding it first. The only way to find a command whose name you do not already know is to search by meaning, and a command that says nothing is not in that index at all - so the grant points at something no one can arrive at.";
  "Measured against the baseline rather than against zero, because ninety were already silent when this was written and a sentence guessed from a name would be worse than none. What it holds is the thing worth holding: the command granted today is not allowed to be the ninety-first.";
  "Writing an account is now one command, so the repair costs a line rather than an edit - which is what makes holding this line reasonable to ask of whoever adds the next grant.";
  let silent = await functions_granted_silent();
  let path = functions_granted_silent_baseline_path();
  let name_write = fn_name("functions_granted_silent_baseline_write");
  let r = await baseline_names_gate_generic(
    silent,
    path,
    text_combine_multiple([
      "these granted commands say nothing about what they do - write one line for each with ",
      fn_name("function_prose_add"),
      ", or take the grant back",
    ]),
    name_write,
  );
  return r;
}
