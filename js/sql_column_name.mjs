import { arguments_assert } from "./arguments_assert.mjs";
export function sql_column_name(column_line) {
  arguments_assert(arguments, 1);
  ("The name a column line declares - its first word, as SQL reads a column definition.");
  let r = column_line.trim().split(/\s+/)[0];
  return r;
}
