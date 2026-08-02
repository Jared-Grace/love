import { property_text_includes } from "./property_text_includes.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
export function function_entries_names_code_includes(entries, text) {
  "The names among these functions whose source contains a given piece of text.";
  "Kept apart from where the functions came from, because that is the part that differs and this part does not. One caller hands it every repo, another hands it a single one, and the choice matters: the transforms all resolve a name to a file inside this repo, so a sweep that means to rewrite must be given one repo or it will collect names it cannot write to.";
  function includes_is(entry) {
    let includes = property_text_includes(entry, "code", text);
    return includes;
  }
  let names = list_filter_map_property(entries, includes_is, "name");
  return names;
}
