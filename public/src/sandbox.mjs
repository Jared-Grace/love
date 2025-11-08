import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { ebible_firebase_upload_verse } from "../../../love/public/src/ebible_firebase_upload_verse.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { ebible_references_names } from "../../../love/public/src/ebible_references_names.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { ebible_reference_parts } from "../../../love/public/src/ebible_reference_parts.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function sandbox() {
  marker("1");
  let bible_folder = "original";
  let books = await ebible_version_books("engbsb");
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  const vid_property = "Verse";
  let verses = list_to_lookup(vid_property, words);
  let sorts = ["Heb Sort", "Greek Sort"];
  let chapters = {};
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
    let text = list_join_space(mapped);
    let { book_names, chapter_verses_list } = ebible_references_names(books, [
      vid,
    ]);
    let bn = list_single(book_names);
    let cv = list_single(chapter_verses_list);
    let { index, chapter_code, verse_start, verse_end } =
      ebible_reference_parts(books, bn, cv);
    equal_assert(verse_start, verse_end);
    let verse = {
      verse_number: verse_start,
      text,
    };
    let value2 = object_property_initialize_list(chapters, chapter_code);
    list_add(list, item3);
    log({
      verse,
      chapter_code,
    });
    await ebible_firebase_upload_verse(verse, chapter_code, bible_folder);
  }
  await each_object_async(verses, lambda);
}
