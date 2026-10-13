import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { app_chapter_group_begins_is } from "./app_chapter_group_begins_is.mjs";
import { list_add } from "./list_add.mjs";
export function app_chapter_group_group_numbers(numbers, splits, index) {
  "$plain numbers";
  "$plain splits";
  "$plain index";
  "The verse numbers of the group that begins at this place in the chapter: that verse, and every verse after it up to the one that begins the next group.";
  arguments_assert(arguments, 3);
  let count = list_size(numbers);
  let item = list_get(numbers, index);
  let group = [item];
  let next = index + 1;
  while (
    less_than(next, count) &&
    not(app_chapter_group_begins_is(numbers, splits, next))
  ) {
    let item2 = list_get(numbers, next);
    list_add(group, item2);
    next = next + 1;
  }
  return group;
}
