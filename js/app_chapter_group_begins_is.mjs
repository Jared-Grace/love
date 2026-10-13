import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_chapter_group_begins_is(numbers, splits, index) {
  "$plain numbers";
  "$plain splits";
  "$plain index";
  "Whether the verse at this place in the chapter begins a group: the first verse always does, and any other does when the division names it.";
  arguments_assert(arguments, 3);
  if (equal(index, 0)) {
    return true;
  }
  let number = list_get(numbers, index);
  let begins = list_includes(splits, number);
  return begins;
}
