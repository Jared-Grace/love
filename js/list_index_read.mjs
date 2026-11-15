import { arguments_assert } from "./arguments_assert.mjs";
export function list_index_read(list, index) {
  arguments_assert(arguments, 2);
  ("the item at index, read exactly as JavaScript reads a[i]: an index past either end gives undefined rather than throwing, so a lesson can step through a[3] on a three-item array and land where JavaScript does");
  let item = list[index];
  return item;
}
