import { list_first_property } from "./list_first_property.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { each_object } from "./each_object.mjs";
import { list_add } from "./list_add.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { ebible_reference_parts } from "./ebible_reference_parts.mjs";
import { list_single } from "./list_single.mjs";
import { ebible_references_names } from "./ebible_references_names.mjs";
import { each } from "./each.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { property_get } from "./property_get.mjs";
import { list_to_lookup } from "./list_to_lookup.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
("Walk the Berean interlinear tables once and group every word under its chapter code.");
("The caller decides what a verse keeps: verse_parts receives that verse's rows, already");
("sorted into reading order, and returns the object merged onto { verse_number }.");
("Two callers want two different things from the same walk - the joined original text, and");
("the per-word records - and the walk is the expensive half, so it lives here once.");
export async function bible_interlinear_chapters_generic(verse_parts) {
  let books = await ebible_version_books(ebible_folder_english());
  let path_output = bible_interlinear_json_path();
  let words = await file_read_json(path_output);
  let vid_property = "Verse";
  let verses = list_to_lookup(words, vid_property);
  let sorts = ["Heb Sort", "Greek Sort"];
  let chapters = {};
  function verse_add(verse_words) {
    let vid = list_first_property(verse_words, "VerseId");
    function sort_apply(sort) {
      function sort_value(item) {
        let value = property_get(item, sort);
        return value;
      }
      list_sort_number_mapper(verse_words, sort_value);
    }
    each(sorts, sort_apply);
    let v = ebible_references_names(books, [vid]);
    let chapter_verses_list = property_get(v, "chapter_verses_list");
    let book_names = property_get(v, "book_names");
    let bn = list_single(book_names);
    let cv = list_single(chapter_verses_list);
    let v2 = ebible_reference_parts(books, bn, cv);
    let verse_end = property_get(v2, "verse_end");
    let verse_start = property_get(v2, "verse_start");
    let chapter_code = property_get(v2, "chapter_code");
    equal_assert_json(verse_start, verse_end, {
      hint: "a single-verse reference should have an equal start and end verse — did a multi-verse range slip in?",
      vid,
    });
    let verse = {
      verse_number: verse_start,
    };
    let parts = verse_parts(verse_words);
    object_merge_set(verse, parts);
    let chapter_verses = property_initialize_list(chapters, chapter_code);
    list_add(chapter_verses, verse);
  }
  each_object(verses, verse_add);
  return chapters;
}
