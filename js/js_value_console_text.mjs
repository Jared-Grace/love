import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { text_is } from "./text_is.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_map } from "./list_map.mjs";
export function js_value_console_text(value) {
  arguments_assert(arguments, 1);
  ('a value as the learn_js lessons show it written out: text alone as itself, an array as its items in brackets, a text item in double quotes - console.log(["love", 4]) shows ["love", 4]');
  ("2026-11-15, for the lesson writing out a whole array: String writes an array as love,joy, which no console shows. Picked: the form a learner would type to make the same array, so what is written out reads back as the code that made it. Not picked: Chrome's (2) ['love', 'joy'] (a count and single quotes the lessons never use) and Node's [ 'love', 'joy' ] (single quotes, padded brackets).");
  ("Everything else is String, as before, so nothing but an array changes.");
  if (list_is(value)) {
    function item_text(item) {
      let t = text_is(item) ? json_to(item) : js_value_console_text(item);
      return t;
    }
    let list = list_map(value, item_text);
    let inside = list_join_comma_space(list);
    let r = "[" + inside + "]";
    return r;
  }
  let r2 = String(value);
  return r2;
}
