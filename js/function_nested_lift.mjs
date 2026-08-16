import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_nested_lift_generic } from "./function_nested_lift_generic.mjs";
export async function function_nested_lift(f_name, nested_name, f_name_new) {
  arguments_assert(arguments, 3);
  ("Move a function written inside the named one out to stand under a name of its own. What it closed over becomes its parameters, and every call to it is handed those same things.");
  ("The twin of the span cut, for the shape the span cut cannot reach. Both pay down the same debt: a function is long either because it holds a straight run of work, which a span takes, or because it wraps a closure, which this takes. Measured over the 130 entries in the size record, the second shape is the majority.");
  ("The function inside is addressed by its own name. That is the one address that does not move: a closure keeps its name while the lines around it are edited, and the thing worth lifting is nearly always already named.");
  ("The narrower of the two moves, and the one to reach for first. It takes the name away as well as the body, so nothing is left behind at all - which also takes that name off every sibling's list of what it reaches out for, so each cut made after it is a cheaper cut. It needs every use of the name to be a call it can add arguments to; where the name is handed on as a value the wider move next door is the one that goes.");
  let select_fn_name = fn_name("js_function_nested_find_named");
  let apply_fn_name = fn_name("js_selects_function_lift");
  let output = await function_nested_lift_generic(
    f_name,
    nested_name,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
