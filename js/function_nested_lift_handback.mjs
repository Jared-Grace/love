import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_nested_lift_generic } from "./function_nested_lift_generic.mjs";
export async function function_nested_lift_handback(
  f_name,
  nested_name,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Move the body of a function written inside the named one out to stand under a name of its own, have it hand back everything it wrote to that belonged where it used to sit, and leave the name behind on a few lines that call it and put those writes back.");
  ("The one to reach for when both the other moves refuse for the same reason: the piece writes to a name it reached out for. Neither of those can take it, because a name handed in as a parameter is a copy and the write would land on the copy while the line outside waiting to read it goes on reading the old value. Handing the writes back is that write, made in the open a moment later.");
  ("Measured across the oversize functions on 2026-08-18, that one refusal was fifty-nine of sixty-seven, and thirty-one pieces have it as their only one. So this is not a corner: it is most of what a walk of the long functions stops at.");
  ("The function inside is addressed by its own name, the same as both the other moves. That is the one address that does not move while the lines around it are edited.");
  let select_fn_name = fn_name("js_function_nested_find_named_any");
  let apply_fn_name = fn_name("js_selects_function_lift_handback");
  let output = await function_nested_lift_generic(
    f_name,
    nested_name,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
