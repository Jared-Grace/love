import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_dot_or_empty } from "./text_split_comma_dot_or_empty.mjs";
import { function_select_apply_generic } from "./function_select_apply_generic.mjs";
export async function function_select_apply_args(
  f_name,
  select_fn_name,
  select_args_comma,
  apply_fn_name,
  apply_args_comma,
) {
  arguments_assert(arguments, 5);
  ("The command line spelling: each half's arguments arrive as one comma-joined");
  ("word, because a command line has no way to say where one list ends and the next");
  ("begins.");
  let select_args = text_split_comma_dot_or_empty(select_args_comma);
  let apply_args = text_split_comma_dot_or_empty(apply_args_comma);
  let output = await function_select_apply_generic(
    f_name,
    select_fn_name,
    select_args,
    apply_fn_name,
    apply_args,
  );
  return output;
}
