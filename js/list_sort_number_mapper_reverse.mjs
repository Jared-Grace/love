import { arguments_assert } from "./arguments_assert.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function list_sort_number_mapper_reverse(list, lambda$item) {
  arguments_assert(arguments, 2);
  ("Sort by the number each item is worth, then turn it around - biggest first.");
  ("The third of its family, beside the one that sorts by text and the one that");
  ("sorts by size, and the one every ranking wanted: a list is ranked to be read,");
  ("and a reader looks at the top.");
  ("In place, like the sort it is built on, and it hands the same list back.");
  list_sort_number_mapper(list, lambda$item);
  list_reverse(list);
  return list;
}
