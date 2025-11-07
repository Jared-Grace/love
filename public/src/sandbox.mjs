import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
export async function sandbox() {
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  let verses = {};
  function lambda(word) {
    let n = object_property_exists_not(verses, vid);
    if (n) {
      return;
    }
    let vid = object_property_get(word, "VerseId");
    let verse_words = object_property_initialize_list(verses, vid);
    list_add(verse_words, word);
  }
  each(words, lambda);
  return verses;
}
