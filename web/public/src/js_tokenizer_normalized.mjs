import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_tokenizer } from "../../../love/public/src/js_tokenizer.mjs";
export function js_tokenizer_normalized(code) {
  let tokens = js_tokenizer(code);
  let property_name = "value";
  let r = function property_get_curried_right_result(object) {
    let value = property_get(object, property_name);
    return value;
  };
  let mapped = list_map(tokens, r);
  let normalized = list_map(mapped, text_to);
  return normalized;
}
