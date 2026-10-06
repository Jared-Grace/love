import { object_property_names } from "./object_property_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_initialize_empty } from "./property_initialize_empty.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
export function bible_search_words_lookup_forms_add(lookup, forms_get) {
  "$plain lookup";
  "Files every verse of a word in a search index under the other words it is also known by, as forms_get names them, so a search for any of those finds it. A form the index already holds keeps its own verses and gains these.";
  arguments_assert(arguments, 2);
  let words = object_property_names(lookup);
  function word_add(word) {
    let chapters = lookup[word];
    let forms = forms_get(word);
    function form_add(form) {
      let form_chapters = property_initialize_empty(lookup, form);
      function chapter_add(chapter_code) {
        let verses = chapters[chapter_code];
        let form_chapter = property_initialize_empty(
          form_chapters,
          chapter_code,
        );
        function verse_add(verse_number) {
          let versions = property_initialize_list(form_chapter, verse_number);
          function version_add(bible_folder) {
            list_add_if_not_includes(versions, bible_folder);
          }
          each(verses[verse_number], version_add);
        }
        let list = object_property_names(verses);
        each(list, verse_add);
      }
      let list2 = object_property_names(chapters);
      each(list2, chapter_add);
    }
    each(forms, form_add);
  }
  each(words, word_add);
}
