import { list_index_of_add } from "./list_index_of_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_array_element_insert_beside(elements, found, entry, delta) {
  arguments_assert(arguments, 4);
  ("Puts an entry already built next to an entry already in the list, on whichever");
  ("side the step says. The placing knows nothing about what an entry is made of,");
  ("so a register of written words and a register of names share it whole.");
  ("The two kinds only ever disagreed about how to build what goes in, and each");
  ("side had its own copy of the placing carried along with that one difference.");
  ("Which is why one side could place an entry and the other could only append: a");
  ("thing copied to be extended stops where the copy stopped.");
  let index_at = list_index_of_add(elements, found, delta);
  list_insert(elements, index_at, entry);
}
