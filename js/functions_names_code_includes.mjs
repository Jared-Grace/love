import { functions_code } from "./functions_code.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export async function functions_names_code_includes(text) {
  "The functions whose source contains a given piece of text - the question every one of those hand-written folder walks was really asking.";
  "It hands back a list of names, not a string with the names joined by commas. Joining is the caller's business, and doing it here is how the same mistake kept happening: a joined list ends in a separator, the empty piece after it reads as a name, and a sweep of sixty functions is thrown away over a name that was never there. Three sweeps were lost that way in one afternoon.";
  let entries = await functions_code();
  function includes_is(entry) {
    let code = property_get(entry, "code");
    let includes = text_includes(code, text);
    return includes;
  }
  let matching = list_filter(entries, includes_is);
  let names = list_map_property(matching, "name");
  return names;
}
