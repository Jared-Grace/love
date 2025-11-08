import { ebible_references_names } from "../../../love/public/src/ebible_references_names.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { ebible_reference_parts } from "../../../love/public/src/ebible_reference_parts.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function sandbox() {
  let books = await ebible_version_books("engbsb");
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  const vid_property = "Verse";
  let verses = list_to_lookup(vid_property, words);
  let sorts = ["Heb Sort", "Greek Sort"];
  let verses2 = {};
  async function lambda(verse_words, v_number) {
    let first = list_first(verse_words);
    let vid = object_property_get(first, "VerseId");
    function lambda3(sort) {
      function lambda2(item) {
        let value = object_property_get(item, sort);
        return value;
      }
      list_sort_number_mapper(verse_words, lambda2);
    }
    each(sorts, lambda3);
    let original_property = "WLC / Nestle Base TR RP WH NE NA SBL";
    function lambda4(item2) {
      let exists = object_property_exists(item2, original_property);
      return exists;
    }
    let filtered = list_filter(verse_words, lambda4);
    let mapped = list_map_property(filtered, original_property);
    object_property_set(verses2, vid, mapped);
    await ebible_references_names(books, lines);
    let { index, chapter_code, verse_start, verse_end } =
      ebible_reference_parts(books, book_name, chapter_verses);
    equal_assert(verse_start, verse_end);
    log({
      chapter_code,
      verse_start,
    });
  }
  each_object(verses, lambda);
}
