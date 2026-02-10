import { null_is } from "../../../love/public/src/null_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
export async function app_reply_verses_add(
  en,
  reference,
  english_choices,
  reference_current,
  bible_texts,
  languages_chosen,
) {
  let copy = list_copy_reverse(languages_chosen);
  let mapped2 = list_map_property(copy, "bible_folder");
  let verses = await ebible_references_parse_lines(mapped2, [reference]);
  function lambda(v) {
    if (null_is(v)) {
      return;
    }
    if (equal_not(reference, reference_current)) {
      list_add(bible_texts, reference);
      reference_current = reference;
    }
    log({
      v,
      reference,
      languages_chosen,
    });
    let text = property_get(v, "text");
    list_add(bible_texts, text);
  }
  each(verses, lambda);
  return reference_current;
}
