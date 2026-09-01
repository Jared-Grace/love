import { arguments_assert } from "./arguments_assert.mjs";
import { functions_parameters_oversize_walked } from "./functions_parameters_oversize_walked.mjs";
import { property_get } from "./property_get.mjs";
import { functions_parameters_baseline_path } from "./functions_parameters_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function functions_parameters_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no function may ask a caller to line up more things than the ceiling allows. Throws so the dispatcher seam exits nonzero.");
  ("The size gate beside this asks what one reader pays to read a body. This asks what every caller pays to write a call, which is a different bill and is charged again at each site. A function of four lines with eleven parameters is easy to read and easy to call wrongly.");
  ("IT IS THE ONE GATE HERE WHOSE OFFENCE IS INVISIBLE WHEN IT LANDS. A row grows one element at a time, and no single addition ever looks like the one that made the call unreadable - so nobody is ever at the point of deciding it, and the only moment the question gets asked is when somebody counts.");
  ("Measured against what was already here. The record grows only when somebody says so in a commit, and never as a side effect of a collapse.");
  ("★ HOW MANY FUNCTIONS WERE MEASURED TRAVELS OUT WITH THE VERDICT, and the ratchet this stands on is the one that does that - written once for the several gates that had each grown the same ending by hand. Why the count has to come from the sweep rather than be worked out afterwards is written there.");
  let measured = await functions_parameters_oversize_walked();
  let walked = property_get(measured, "walked");
  let named = property_get(measured, "over");
  let path = functions_parameters_baseline_path();
  let name_write = fn_name("functions_parameters_baseline_write");
  let name_add = fn_name("functions_parameters_baseline_add");
  let name_record = fn_name("function_parameters_record");
  let name_named = fn_name("function_parameters_record_named");
  let hint = text_combine_multiple([
    "these functions now ask a caller to line up more things than one may - gather the whole row into a single record with ",
    name_record,
    ", which rewrites every caller with it, or gather only the ones that belong together with ",
    name_named,
    " and leave the rest as they are. If the row is really the shape of what the function does, record it by name with ",
    name_add,
    " - which grows the record by exactly the names given, so they stand in the commit for somebody to disagree with, and leaves every other name here still failing. ",
    name_write,
    " is the one to run after a collapse - it shrinks the record and refuses to grow it",
  ]);
  let r = await baseline_names_gate_walked_generic(
    walked,
    named,
    path,
    hint,
    name_write,
  );
  return r;
}
