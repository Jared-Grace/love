import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
import { each_async } from "./each_async.mjs";
export async function app_shared_bible_reference_entries(
  reference,
  languages_chosen,
) {
  "one entry per language named and left in the order the reader chose so the colours run the same way the chapter reader runs them - the language chosen first leads in the strong blue";
  let multiple = list_multiple_is(languages_chosen);
  let entries = [];
  async function language_each(language) {
    let bible_folder = property_get(language, "bible_folder");
    let verses = await ebible_references_parse_lines_browser(
      [bible_folder],
      [reference],
    );
    let present_verses = list_filter_null_not_is(verses);
    let none = list_empty_is(present_verses);
    if (none) {
      return;
    }
    ("a reference covering several verses reads as one flowing line so the whole passage carries the one language colour");
    let text = list_map_property_join_space(present_verses, "text");
    ("a lone language needs no label since there is nothing to tell it apart from");
    let name = "";
    if (multiple) {
      name = property_get(language, "name");
    }
    let entry = {
      name,
      text,
    };
    list_add(entries, entry);
  }
  await each_async(languages_chosen, language_each);
  return entries;
}
