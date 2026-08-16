import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_functionize_generic } from "./function_functionize_generic.mjs";
export async function function_functionize_holder(
  f_name,
  name_from,
  name_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of lines between two named ends out of the named function, into a function of its own - the two ends taken at the top level of whichever function they are written inside, which is the closest one rather than the outermost.");
  ("The third of the three cutting commands, and the one the other two leave a hole between. Both ends of a span want to be whole lines standing side by side, and a branch or a loop written inside a nested step is a whole line neither of the others can point at: the nearest reader goes past it into its contents, and the outermost reader climbs out of the nested step and comes back holding all of it.");
  ("That is the shape a screen comes in here - one function holding a paint step written inside it, with nearly all of the size in the step. So the cuts this reaches are the ordinary ones: the banner that is painted only when something is running, the row of buttons built in a loop, the branch that paints an empty screen instead.");
  ("All of the cutting is held one name down, and the only thing said here is which reader finds the two ends. That is the single word the three of these ever disagree about.");
  let select_fn_name = fn_name("js_statement_find_name_holder");
  let apply_fn_name = fn_name("js_selects_functionize");
  let output = await function_functionize_generic(
    f_name,
    name_from,
    name_to,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
