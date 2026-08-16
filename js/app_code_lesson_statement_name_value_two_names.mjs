import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_value_two_names(
  other,
  value,
  held_of,
  name_a,
  name_b,
  log_of,
) {
  arguments_assert(arguments, 6);
  ("two names given values, and only the second of them written out - the first is there to be read past");
  let v = held_of(name_a, other);
  let v4 = held_of(name_b, value);
  let v5 = log_of(name_b);
  let lines = [v, v4, v5];
  let code = list_join_newline(lines);
  return code;
}
