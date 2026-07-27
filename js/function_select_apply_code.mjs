import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_dot_or_empty } from "./text_split_comma_dot_or_empty.mjs";
import { function_select_apply_generic } from "./function_select_apply_generic.mjs";
export async function function_select_apply_code(
  f_name,
  select_fn_name,
  select_args_comma,
  apply_fn_name,
  code,
) {
  arguments_assert(arguments, 5);
  ("The same pairing as its sibling, for the verbs whose last argument is a line");
  ("of code rather than a list. That argument is handed over whole and never");
  ("taken apart.");
  ("The sibling splits its arguments on commas and dots, which a list needs and");
  ("code cannot survive: a call with two arguments has a comma in it, and a name");
  ("read off a function has a dot. So writing a body through that command was");
  ("impossible for almost every line worth writing — the shell already separates");
  ("arguments when they are quoted, and this lets it.");
  let select_args = text_split_comma_dot_or_empty(select_args_comma);
  let apply_args = [code];
  let output = await function_select_apply_generic(
    f_name,
    select_fn_name,
    select_args,
    apply_fn_name,
    apply_args,
  );
  return output;
}
