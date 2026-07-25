import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_dot_or_empty } from "./text_split_comma_dot_or_empty.mjs";
import { function_select_multiple_apply_generic } from "./function_select_multiple_apply_generic.mjs";
export async function function_select_multiple_apply_args(
  f_name,
  select_fn_name,
  select_args_multiple_comma,
  apply_fn_name,
  apply_args_comma,
) {
  arguments_assert(arguments, 5);
  ("The command line spelling. One selector runs once per word in the selection");
  ("list, so two words choose two nodes: the first statement of the span and the");
  ("last. Both ends being named the same way is what the range case wants; ends");
  ("found by two different kinds of selector can wait until something asks.");
  let select_args_multiple = text_split_comma_dot_or_empty(
    select_args_multiple_comma,
  );
  let apply_args = text_split_comma_dot_or_empty(apply_args_comma);
  let output = await function_select_multiple_apply_generic(
    f_name,
    select_fn_name,
    select_args_multiple,
    apply_fn_name,
    apply_args,
  );
  return output;
}
