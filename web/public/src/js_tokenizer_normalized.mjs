import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_tokenizer } from "../../../love/public/src/js_tokenizer.mjs";
export function js_tokenizer_normalized(code) {
  let tokens = js_tokenizer(code);
  let property_name = "value";
  let r = property_get_curried_right(property_name);
  let mapped = list_map(tokens, r);
  let normalized = list_map(mapped, text_to);
  return normalized;
}
