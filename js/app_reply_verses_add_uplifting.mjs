import { list_add } from "./list_add.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each_async } from "./each_async.mjs";
import { each } from "./each.mjs";
import { uplifting_package_get } from "./uplifting_package_get.mjs";
import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function app_reply_verses_add_uplifting(
  reference,
  languages_chosen,
  bible_texts,
) {
  list_add(bible_texts, reference);
  let ordered = list_copy_reverse(languages_chosen);
  async function language_each(language) {
    let bible_folder = property_get(language, "bible_folder");
    let package_map = await uplifting_package_get(bible_folder);
    if (null_not_is(package_map)) {
      let text = property_get_or_null(package_map, reference);
      if (null_not_is(text)) {
        list_add(bible_texts, text);
      }
      return;
    }
    let verses = await ebible_references_parse_lines_browser(
      [bible_folder],
      [reference],
    );
    let present_verses = list_filter_null_not_is(verses);
    let texts = list_map_property(present_verses, "text");
    function text_each(text) {
      if (null_not_is(text)) {
        list_add(bible_texts, text);
      }
    }
    each(texts, text_each);
  }
  await each_async(ordered, language_each);
}
