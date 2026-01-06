import { log } from "../../../love/public/src/log.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { app_reply_verse } from "../../../love/public/src/app_reply_verse.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
export async function app_reply_verses_add(
  en,
  reference,
  english_choices,
  reference_current,
  bible_texts,
  languages_chosen,
) {
  let verse_range = await ebible_references_parse_lines([en], [reference]);
  async function lambda5(l) {
    async function lambda8(verse) {
      let bible_folder = object_property_get(l, "bible_folder");
      let chapter_code = object_property_get(verse, "chapter_code");
      let verse_number = object_property_get(verse, "verse_number");
      let r = null;
      r = await app_reply_verse(
        bible_folder,
        english_choices,
        chapter_code,
        verse_number,
      );
      return r;
    }
    let verses = await list_map_unordered_async(verse_range, lambda8);
    function lambda7(v) {
      if (equal_not(reference, reference_current)) {
        list_add(bible_texts, reference);
        reference_current = reference;
      }
      let text = object_property_get(v, "text");
      list_add(bible_texts, text);
    }
    each(verses, lambda7);
  }
  let copy = list_copy_reverse(languages_chosen);
  let mapped = await list_map_async(copy, lambda5);
  log({
    mapped,
  });
  return reference_current;
}
