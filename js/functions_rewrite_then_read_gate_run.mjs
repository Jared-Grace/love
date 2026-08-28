import { arguments_assert } from "./arguments_assert.mjs";
import { functions_rewrite_then_read_names_walked } from "./functions_rewrite_then_read_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { functions_rewrite_then_read_baseline_path } from "./functions_rewrite_then_read_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function functions_rewrite_then_read_gate_run() {
  "Gate: no command newly rewrites a function by name and then, in the same run, asks something that reads it.";
  "A RUN THAT HAS ALREADY LOADED A FUNCTION GOES ON HOLDING THE VERSION IT LOADED. The file changing underneath it changes nothing about what is in hand, so the second half is answered about the repo as it was before the command's own edit. Nothing throws and nothing goes red: the wrong answer wears the shape of the right one, which is why this had to become a gate rather than a habit.";
  "IT WAS CALLED A CLASS OF ONE AND WAS NOT. A sweep found a single member and the reading was left to be done by hand; a second arrived within days, and was found the way the first was, by an answer looking wrong for some other reason. Two members and a named remedy are what a gate is made of.";
  "Measured against a baseline rather than against zero, on the ordinary ground that a ratchet is what lets a reading be turned on the day it is written. The baseline it was seeded with is empty, so here the two readings say the same thing today and will part company only when somebody adds one.";
  "HOW MANY CANDIDATES WERE OPENED TRAVELS OUT WITH THE VERDICT. The baseline is empty, so a green run here says nothing new offends and nothing has been put right - the very same two noughts a run would report if the first pass had stopped recognising a rewrite at all. That pass is read off imports, so one rename of the writing atoms would empty it silently. The count is what falls on that day.";
  arguments_assert(arguments, 0);
  let told = await functions_rewrite_then_read_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "names");
  let path = functions_rewrite_then_read_baseline_path();
  let name_write = fn_name("functions_rewrite_then_read_baseline_write");
  let f_name = fn_name("functions_rewrite_then_read");
  let f_name2 = fn_name("function_run_fresh");
  let hint = text_combine_multiple([
    "this rewrites a function by name and then asks something that reads it, so it is answered about the repo as it was before its own edit - ask ",
    f_name,
    " for the pairing that says which, and ask the second half in its own run with ",
    f_name2,
  ]);
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    hint,
    name_write,
  );
  return r;
}
