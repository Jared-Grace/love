import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
export function function_entries_names_code_includes_multiple(entries, texts) {
  "The names among these functions whose source contains any one of several pieces of text.";
  "The single-piece twin asked once per piece would name the same function again for each piece it carries, and a caller that meant to parse each file once would parse some of them three times. Asked together, a function appears once whichever pieces put it there.";
  function includes_is(entry) {
    let code = property_get(entry, "code");
    let includes = text_includes_multiple_is(code, texts);
    return includes;
  }
  let names = list_filter_map_property(entries, includes_is, "name");
  return names;
}
