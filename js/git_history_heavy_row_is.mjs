import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_heavy_bytes_least } from "./git_history_heavy_bytes_least.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function git_history_heavy_row_is(row) {
  "Whether one path left behind in the history weighs enough to be worth stopping for.";
  arguments_assert(arguments, 1);
  let least = git_history_heavy_bytes_least();
  let heavy = greater_than_equal(row.bytes, least);
  return heavy;
}
