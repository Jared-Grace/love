import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { property_get } from "./property_get.mjs";
export function js_code_fn_names_pieces(segments, fn_names) {
  let pieces = [];
  let buffer = "";
  function buffer_flush() {
    let empty = buffer === "";
    if (not(empty)) {
      let code = js_code_string(buffer);
      list_add(pieces, code);
      buffer = "";
    }
  }
  function lambda(segment) {
    let identifier = property_get(segment, "identifier");
    let text = property_get(segment, "text");
    let match = identifier && list_includes(fn_names, text);
    if (match) {
      buffer_flush();
      let right = "name";
      let code = js_code_dot(text, right);
      list_add(pieces, code);
    } else {
      buffer = text_combine(buffer, text);
    }
  }
  each(segments, lambda);
  buffer_flush();
  return pieces;
}
