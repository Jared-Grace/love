import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_work_size_gate_run() {
  "QA gate: no function may grow past the ceiling on lines of work. Throws so the dispatcher seam exits nonzero.";
  "The three gates over shared runs ask whether one idea has been written twice. This asks the question those cannot: a function can hold no run that any other function holds and still be too big to read, because size is what a single reader pays and duplication is what the repo pays.";
  "The two answer each other, and that is the reason this comes last of the four. A function over the ceiling is where a shared run is most likely to be hiding, because a long body is the only place a run can sit touching neither end - so the way down is nearly always to name what is inside it, and the duplication gates are what say which part to name.";
  "Measured against what was already here. A long function is sometimes a list of names or a screen laid out once, and that is a judgment written into the record rather than argued again every run. The record grows only when somebody says so in a commit, and never as a side effect of a cut.";
  let named = await functions_work_oversize_names();
  let path = functions_work_size_baseline_path();
  let name_write = fn_name("functions_work_size_baseline_write");
  let name_reseed = fn_name("functions_work_size_baseline_reseed");
  ("The cut is offered first because it is nearly always the answer, and the escape is named second and by its own name. Naming only the shrinking writer here was a promise the writer could not keep - it refuses to grow the record, so a reader following the hint got a second refusal and no way forward. A hint that names no reachable next step is worse than none, because it costs a run to learn that.");
  let f_name = fn_name("function_functionize");
  let hint = text_combine_multiple([
    "these functions now hold more lines of work than one may - cut them down by giving the runs inside them their own names with ",
    f_name,
    ", or, if the size is really the shape of what they hold rather than how they were written, record them with ",
    name_reseed,
    " (which grows the record, so the added names stand in the commit for somebody to disagree with). ",
    name_write,
    " is the one to run after a cut - it shrinks the record and refuses to grow it",
  ]);
  let r = await baseline_names_gate_generic(named, path, hint, name_write);
  return r;
}
