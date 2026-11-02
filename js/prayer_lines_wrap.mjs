import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { prayer_wrap } from "./prayer_wrap.mjs";
export function prayer_lines_wrap(lines) {
  arguments_assert(arguments, 1);
  let prayer = list_join_newline(lines);
  let wrapped = prayer_wrap(prayer);
  return wrapped;
}
