import { text_to } from "../../../love/public/src/text_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_tokenizer } from "../../../love/public/src/js_tokenizer.mjs";
export function js_tokenizer_normalized(code) {
  let tokens = js_tokenizer(code);
  let mapped = list_map_property(tokens, "value");
  let mapped2 = list_map(mapped, text_to);
  return mapped2;
}
