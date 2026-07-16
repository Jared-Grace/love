import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first_last_slice } from "./list_first_last_slice.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function app_shared_bible_copy(
  verse_numbers_chosen,
  languages_verses,
  chapter_code,
) {
  list_sort_number_mapper(verse_numbers_chosen, integer_to_try);
  let show_names = list_multiple_is(languages_verses);
  let primary = list_last(languages_verses);
  let primary_books = property_get(primary, "books");
  let primary_verses = property_get(primary, "verses");
  let primary_verse_numbers = list_map_property(primary_verses, "verse_number");
  let m = list_multiple_is(verse_numbers_chosen);
  let normalized = verse_numbers_chosen;
  if (not(m)) {
    let f = list_first(verse_numbers_chosen);
    normalized = [f, f];
  }
  let slice = list_first_last_slice(normalized, primary_verse_numbers);
  let first = property_get(slice, "first");
  let last = property_get(slice, "last");
  let sliced = property_get(slice, "sliced");
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    primary_books,
    [first, last],
  );
  let lines = [];
  list_add(lines, reference);
  function per_verse(verse_number) {
    function per_language(entry) {
      let verses_l = property_get(entry, "verses");
      let verse_l = list_find_property_or_null(
        verses_l,
        "verse_number",
        verse_number,
      );
      let nn = null_not_is(verse_l);
      if (nn) {
        let text_l = property_get(verse_l, "text");
        let line = text_l;
        if (show_names) {
          let language = property_get(entry, "language");
          let name = property_get(language, "name");
          line = text_combine_multiple([name, ": ", text_l]);
        }
        list_add(lines, line);
      }
    }
    each(languages_verses, per_language);
  }
  each(sliced, per_verse);
  let joined = await list_join_newline_2_copy(lines);
}
