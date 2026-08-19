import { html_parse_find_text } from "./html_parse_find_text.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_parse_classes_preview(main, d, classes) {
  function lambda(c) {
    let text = html_parse_find_text(main, d, text_combine(".", c));
    return text;
  }
  let dictionary = list_to_dictionary_value(classes, lambda);
  return dictionary;
}
