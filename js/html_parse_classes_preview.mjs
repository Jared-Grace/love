import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_find } from "./html_parse_find.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_parse_classes_preview(main, d, classes) {
  function lambda(c) {
    let e = html_parse_find(main, text_combine(".", c));
    let text = html_parse_text(d, e);
    return text;
  }
  let dictionary = list_to_dictionary_value(classes, lambda);
  return dictionary;
}
