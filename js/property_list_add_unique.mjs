import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function property_list_add_unique(object, property_name, item) {
  "Puts one thing onto the end of the list held under this name, starting the list if there is none there yet, and does nothing at all if the list already holds it.";
  "This is the shape to reach for whenever a name can honestly answer with more than one thing. Setting the name each time looks like the same code and is not: it keeps the last thing given and throws every earlier one away without a word, so the map is well formed, every question gets an answer, and the answer is a guess nobody made on purpose.";
  "The order is the order things were first met, because the first meeting is the only thing about the order that is a fact. Moving a repeat to the end would be a second claim - that this is where it belongs now - and nothing here knows that.";
  arguments_assert(arguments, 3);
  let list = property_get_or_null(object, property_name);
  if (null_is(list)) {
    let started = [item];
    property_set(object, property_name, started);
    return;
  }
  let already = list_includes(list, item);
  if (already) {
    return;
  }
  list_add(list, item);
}
