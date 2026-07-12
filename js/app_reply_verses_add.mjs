import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { equal_not } from "./equal_not.mjs";
import { property_get } from "./property_get.mjs";
export async function app_reply_verses_add(
  en,
  reference,
  english_choices,
  reference_current,
  bible_texts,
  languages_chosen,
) {
  let copy = list_copy_reverse(languages_chosen);
  let mapped = list_map_property(copy, "bible_folder");
  let verses = await ebible_references_parse_lines_browser(mapped, [reference]);
  function lambda(v) {
    if (null_is(v)) {
      return;
    }
    if (equal_not(reference, reference_current)) {
      list_add(bible_texts, reference);
      reference_current = reference;
    }
    let text = property_get(v, "text");
    list_add(bible_texts, text);
  }
  each(verses, lambda);
  return reference_current;
}
