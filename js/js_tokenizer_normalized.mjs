import { property_path_get } from "./property_path_get.mjs";
import { js_tokenizer_label_property_path } from "./js_tokenizer_label_property_path.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
import { list_map } from "./list_map.mjs";
import { js_tokenizer } from "./js_tokenizer.mjs";
export function js_tokenizer_normalized(code) {
  let tokens = js_tokenizer(code);
  let property_name = "value";
  let r = function lambda(item) {
    let value = property_get(item, property_name);
    let u = undefined_is(value);
    if (u) {
      let type_label = js_tokenizer_label_property_path();
      value = property_path_get(item, type_label);
    }
    return value;
  };
  let mapped = list_map(tokens, r);
  let normalized = list_map(mapped, text_to);
  return normalized;
}
