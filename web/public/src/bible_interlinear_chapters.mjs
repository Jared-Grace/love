import { each_object } from "../../../love/public/src/each_object.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_initialize_list } from "../../../love/public/src/object_property_initialize_list.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { ebible_reference_parts } from "../../../love/public/src/ebible_reference_parts.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { ebible_references_names } from "../../../love/public/src/ebible_references_names.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { bible_interlinear_json_path } from "../../../love/public/src/bible_interlinear_json_path.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
export async function bible_interlinear_chapters() {
  let bible_folder = bible_interlinear_verses_upload_folder();
  let books = await ebible_version_books("engbsb");
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  const vid_property = "Verse";
  let verses = list_to_lookup(words, vid_property);
  let sorts = ["Heb Sort", "Greek Sort"];
  let chapters = {};
  async function lambda(verse_words, v_number) {
    let function_copy_replace_first = list_first(verse_words);
    let vid = object_property_get(function_copy_replace_first, "VerseId");
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
    let v = ebible_references_names(books, [vid]);
    let chapter_verses_list = object_property_get(v, "chapter_verses_list");
    let book_names = object_property_get(v, "book_names");
    let bn = list_single(book_names);
    let cv = list_single(chapter_verses_list);
    let v2 = ebible_reference_parts(books, bn, cv);
    let verse_end = object_property_get(v2, "verse_end");
    let verse_start = object_property_get(v2, "verse_start");
    let chapter_code = object_property_get(v2, "chapter_code");
    let index = object_property_get(v2, "index");
    equal_assert(verse_start, verse_end);
    let verse = {
      verse_number: verse_start,
      text,
    };
    let chapter_verses = object_property_initialize_list(
      chapters,
      chapter_code,
    );
    list_add(chapter_verses, verse);
  }
  each_object(verses, lambda);
  return chapters;
}
