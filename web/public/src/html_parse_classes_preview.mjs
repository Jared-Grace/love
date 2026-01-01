import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { html_parse_text } from "../../../love/public/src/html_parse_text.mjs";
import { html_parse_find } from "../../../love/public/src/html_parse_find.mjs";
export function html_parse_classes_preview(main, d, classes) {
  function lambda(c) {
    let e = html_parse_find(main, "." + c);
    let text = html_parse_text(d, e);
    return text;
  }
  let dictionary = list_to_dictionary_value(classes, lambda);
  return dictionary;
}
