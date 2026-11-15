import { arguments_assert } from "./arguments_assert.mjs";
import { text_is } from "./text_is.mjs";
import { json_to } from "./json_to.mjs";
import { object_is } from "./object_is.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_map } from "./list_map.mjs";
import { list_is } from "./list_is.mjs";
export function js_value_console_text(value) {
  arguments_assert(arguments, 1);
  ('a value as the learn_js lessons show it written out: text alone as itself, an array as its items in brackets, a text item in double quotes - console.log(["love", 4]) shows ["love", 4]');
  ("2026-11-15, for the lesson writing out a whole array: String writes an array as love,joy, which no console shows. Picked: the form a learner would type to make the same array, so what is written out reads back as the code that made it. Not picked: Chrome's (2) ['love', 'joy'] (a count and single quotes the lessons never use) and Node's [ 'love', 'joy' ] (single quotes, padded brackets).");
  ("2026-11-15, for the lesson writing out a whole object (human's idea: console.log(counts), not only counts.joy): an object is written as a learner types one, { joy: 3 }, property names bare, and an empty one as {} - both as Node writes them, save its single quotes. String wrote [object Object].");
  ("Everything else is String, as before, so nothing but an array or an object changes.");
  function item_text(item) {
    let t = text_is(item) ? json_to(item) : js_value_console_text(item);
    return t;
  }
  if (object_is(value)) {
    let keys = properties_get(value);
    if (list_empty_is(keys)) {
      let r3 = "{}";
      return r3;
    }
    function written(key) {
      let value2 = property_get(value, key);
      let line = key + ": " + item_text(value2);
      return line;
    }
    let list2 = list_map(keys, written);
    let inside_object = list_join_comma_space(list2);
    let r_object = "{ " + inside_object + " }";
    return r_object;
  }
  if (list_is(value)) {
    let list = list_map(value, item_text);
    let inside = list_join_comma_space(list);
    let r = "[" + inside + "]";
    return r;
  }
  let r2 = String(value);
  return r2;
}
