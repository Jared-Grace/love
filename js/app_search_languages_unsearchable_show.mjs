import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
export function app_search_languages_unsearchable_show(div_results, matching) {
  "$plain div_results";
  "$plain matching";
  "Name the chosen languages the search could not look in, and say whether any were named.";
  "Said before anything else on the page, because without it a reader who chose French and typed French is told their words are nowhere in the Bible - a claim about the Bible, when the truth is about this search.";
  arguments_assert(arguments, 2);
  let languages = property_get(matching, "languages_unsearchable");
  let none = list_empty_is(languages);
  if (none) {
    return false;
  }
  let names = list_map_property(languages, "name");
  let joined = list_join_comma_space(names);
  let text = text_combine_multiple(["Search can't look in ", joined, " yet"]);
  app_shared_text_body(div_results, text);
  return true;
}
