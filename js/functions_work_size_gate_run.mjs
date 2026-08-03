import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_work_size_gate_run() {
  ("QA gate: no function may grow past the ceiling on lines of work. Throws so the dispatcher seam exits nonzero.");
  ("The three gates over shared runs ask whether one idea has been written twice. This asks the question those cannot: a function can hold no run that any other function holds and still be too big to read, because size is what a single reader pays and duplication is what the repo pays.");
  ("The two answer each other, and that is the reason this comes last of the four. A function over the ceiling is where a shared run is most likely to be hiding, because a long body is the only place a run can sit touching neither end - so the way down is nearly always to name what is inside it, and the duplication gates are what say which part to name.");
  ("Measured against what was already here. A long function is sometimes a list of names or a screen laid out once, and that is a judgment written into the record rather than argued again every run - what the record may never do is grow.");
  let named = await functions_work_oversize_names();
  let path = functions_work_size_baseline_path();
  let name_write = fn_name("functions_work_size_baseline_write");
  let hint = text_combine_multiple([
    "these functions now hold more lines of work than one may - cut them down by giving the runs inside them their own names, or record them with ",
    name_write,
    " if the size is really the shape of what they hold",
  ]);
  let r = await baseline_names_gate_generic(named, path, hint, name_write);
  return r;
}
