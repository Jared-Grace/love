import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_nested_lift_generic } from "./function_nested_lift_generic.mjs";
export async function function_nested_lift_wrapper(
  f_name,
  nested_name,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Move the body of a function written inside the named one out to stand under a name of its own, leaving the name behind holding one line that calls it. What it reached out for becomes its parameters, and the line left behind hands it those same things.");
  ("The one to reach for when the plain lift refuses. That one takes the name away as well as the body, so it needs every use of the name to be a call it can add arguments to; this leaves the name exactly where it was, so a function handed on as a value - a callback given to a visitor, a renderer given to a page - comes out just as easily as one that is only ever called.");
  ("The price of leaving the name behind is that the siblings beside it still reach out for it, so each of them still has to be handed it when its own turn comes. That is why this is the second choice rather than the general one: reach for the plain lift wherever it will go, and for this where it will not.");
  ("The function inside is addressed by its own name, the same as the plain lift. That is the one address that does not move while the lines around it are edited.");
  let select_fn_name = fn_name("js_function_nested_find_named_any");
  let apply_fn_name = fn_name("js_selects_function_lift_wrapper");
  let output = await function_nested_lift_generic(
    f_name,
    nested_name,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
