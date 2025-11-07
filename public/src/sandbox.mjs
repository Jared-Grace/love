import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
export async function sandbox() {
  let path_output = bible_interlinear_json_path();
  let data = await file_read_json(path_output);
  let verses = {};
  function lambda(word) {
    let vid = object_property_get(word, "VerseId");
    let n = object_property_exists_not(verses, vid);
    if (n) {
      return;
    }
    let verse_words = object_property_initialize_list(verses, vid);
    let original_property = "WLC / Nestle Base TR RP WH NE NA SBL";
    let original = object_property_get(word, original_property);
    list_add(verse_words, {
      item,
      original,
    });
  }
  each(list, lambda);
  return data;
}
