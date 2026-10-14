import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function list_sort_number_property(list, property_name) {
  arguments_assert(arguments, 2);
  ("A list of objects put in order by one of their fields, read as a quantity.");
  ("★ THE NEIGHBOURING ONE OVER THE SAME FIELD READ AS WRITING ANSWERS DIFFERENTLY, WHICH IS THE WHOLE REASON BOTH EXIST. Sorted as writing, chapter 10 comes before chapter 9, because the comparison stops at the first letter. Sorted as a quantity it does not. Neither is wrong and nothing in a field says which it is - a chapter is a quantity, a verse end written 13a is not - so the caller says, and says it by which of the two it asks for.");
  ("The list handed in is sorted where it stands and handed back, the same as its neighbour over writing, so a caller that needed the original order has to copy before asking.");
  let f = property_get_curried_right(property_name);
  list_sort_number_mapper(list, f);
  return list;
}
