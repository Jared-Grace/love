import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function list_sort_size_reverse(rows) {
  arguments_assert(arguments, 1);
  ("Rows carrying a size, biggest first.");
  ("Ranking a reading by how big each row is turns out to be what almost every report about the shape of this code ends with, and the two lines it takes are the same two lines every time - reach for the size, then sort downward by it.");
  ("Written as its own name because those two lines standing at the end of a long body are exactly what a fold mistakes for the whole of that body. A helper holding them is the thing a fold should collapse a repeated tail into; the sweep whose tail happens to spell them is not.");
  let sizer = property_get_curried_right("size");
  let ranked = list_sort_number_mapper_reverse(rows, sizer);
  return ranked;
}
