import { list_first } from "./list_first.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first_last_slice } from "./list_first_last_slice.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map_find_property } from "./list_map_find_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function app_chapter_copy(
  verse_numbers_chosen,
  languages_verses,
  chapter_code,
) {
  list_sort_number_mapper(verse_numbers_chosen, integer_to_try);
  function lambda3(bv) {
    let m = list_multiple_is(verse_numbers_chosen);
    let verse_numbers_chosen_normalized = null;
    if (m) {
      verse_numbers_chosen_normalized = verse_numbers_chosen;
    } else {
      let f = list_first(verse_numbers_chosen);
      verse_numbers_chosen_normalized = [f, f];
    }
    let books = property_get(bv, "books");
    let verses = property_get(bv, "verses");
    let verse_numbers = list_map_property(verses, "verse_number");
    let v = list_first_last_slice(verse_numbers_chosen_normalized, verse_numbers);
    let last = property_get(v, "last");
    let first = property_get(v, "first");
    let sliced = property_get(v, "sliced");
    let verse_numbers_mapped = list_map_find_property(
      sliced,
      verses,
      "verse_number",
    );
    let mapped = list_map_property(verse_numbers_mapped, "text");
    let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
      first,
      last,
    ]);
    let concated = list_concat([reference], mapped);
    return concated;
  }
  let m = list_map(languages_verses, lambda3);
  let squashed = list_squash(m);
  let joined = await list_join_newline_2_copy(squashed);
}
