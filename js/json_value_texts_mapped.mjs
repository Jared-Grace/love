import { arguments_assert } from "./arguments_assert.mjs";
import { text_is } from "./text_is.mjs";
import { list_is } from "./list_is.mjs";
import { list_map } from "./list_map.mjs";
import { object_is } from "./object_is.mjs";
import { object_values_map } from "./object_values_map.mjs";
export function json_value_texts_mapped(value, lambda_text) {
  "One value with every piece of text anywhere inside it - in a list, in an object, however deep - replaced by whatever a given reading makes of that text, and everything that is not text handed back exactly as it stood.";
  "Nothing is parsed on the way through. A piece of text that happens to hold writing of its own inside it is one piece of text here and is handed over whole, which is what lets a repair that only ever replaces whole words reach inside such a piece without the shape around it having to be taken apart and put back together.";
  "A new value is built rather than the one handed in being written into, so the caller still holds what it gave and can tell whether anything changed by comparing the two.";
  arguments_assert(arguments, 2);
  let text = text_is(value);
  if (text) {
    let mapped = lambda_text(value);
    return mapped;
  }
  let listed = list_is(value);
  if (listed) {
    function item_read(item) {
      let m = json_value_texts_mapped(item, lambda_text);
      return m;
    }
    let items = list_map(value, item_read);
    return items;
  }
  let object = object_is(value);
  if (object) {
    function inner_read(inner) {
      let m = json_value_texts_mapped(inner, lambda_text);
      return m;
    }
    let mapped_object = object_values_map(value, inner_read);
    return mapped_object;
  }
  return value;
}
