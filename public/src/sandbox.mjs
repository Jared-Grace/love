import { list_first } from "../../../love/public/src/list_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
export async function sandbox() {
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  const vid_property = "Verse";
  let verses = list_to_lookup(vid_property, words);
  let sorts = ["Heb Sort", "Greek Sort"];
  function lambda(verse_words, vid) {
    let first = list_first(verse_words);
    let value2 = object_property_get(object, property_name);
    function lambda3(sort) {
      function lambda2(item) {
        let value = object_property_get(item, sort);
        return value;
      }
      list_sort_number_mapper(verse_words, lambda2);
    }
    each(sorts, lambda3);
  }
  each_object(verses, lambda);
  let v = verses[1];
  return v;
}
