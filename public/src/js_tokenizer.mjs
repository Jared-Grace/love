import { js_tokenizer_label_property_path } from "../../../love/public/src/js_tokenizer_label_property_path.mjs";
import { list_filter_property_path_not } from "../../../love/public/src/list_filter_property_path_not.mjs";
import { js_tokenizer_with_eof } from "../../../love/public/src/js_tokenizer_with_eof.mjs";
export function js_tokenizer(code) {
  let tokens = js_tokenizer_with_eof(code);
  let property_names = js_tokenizer_label_property_path();
  let filtered = list_filter_property_path_not(tokens, property_names, "eof");
  return filtered;
}
