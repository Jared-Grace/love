import { list_copy } from "./list_copy.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { uplifting_package_get } from "./uplifting_package_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property_join_space } from "./list_map_property_join_space.mjs";
import { each_async } from "./each_async.mjs";
export async function app_reply_verses_uplifting_entries(
  reference,
  languages_chosen,
) {
  "one entry per language, named and ordered so the reader can tell the languages apart by colour the way the supper app does";
  "the reader's own order is kept, so the language they chose first leads in the strong blue - the same way round as the chapter reader";
  let ordered = list_copy(languages_chosen);
  let multiple = list_multiple_is(ordered);
  let entries = [];
  function entry_add(language, text) {
    "a lone language needs no label, since there is nothing to tell it apart from";
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
  async function language_each(language) {
    let bible_folder = property_get(language, "bible_folder");
    let package_map = await uplifting_package_get(bible_folder);
    if (null_not_is(package_map)) {
      let words = property_get_or_null(package_map, reference);
      if (null_not_is(words)) {
        entry_add(language, words);
      }
      return;
    }
    let verses = await ebible_references_parse_lines_browser(
      [bible_folder],
      [reference],
    );
    let present_verses = list_filter_null_not_is(verses);
    let none = list_empty_is(present_verses);
    if (none) {
      return;
    }
    ("a reference covering several verses reads as one flowing line, so the whole passage carries the one language colour");
    let text = list_map_property_join_space(present_verses, "text");
    entry_add(language, text);
  }
  await each_async(ordered, language_each);
  return entries;
}
