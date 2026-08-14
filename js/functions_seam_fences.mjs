import { fn_name } from "./fn_name.mjs";
export function functions_seam_fences() {
  "The functions that stand in front of a name handed in from outside and refuse it on Claude's seam. A dispatcher reaching one of these has already asked whether the name it was given is allowed to run; a dispatcher reaching none of them runs whatever it was handed.";
  "Every one of them lets the human's own terminal through, because there the name was typed by the person who will see the result. So this list answers a question only about Claude's seam, which is the only seam where a standing approval means nobody is watching.";
  "Reaching a fence is not proof that the fence covers the name in question - it is one function's import graph, not an argument's path through it. So an empty answer is the conclusive one and a non-empty answer is a reason to read the function, which is the same asymmetry the command-seam walk already has.";
  let f_name = fn_name("function_callee_seam_assert");
  let f_name2 = fn_name("function_callee_read_only_assert");
  let f_name3 = fn_name("function_name_new_plugin_seam_assert");
  let names = [f_name, f_name2, f_name3];
  return names;
}
