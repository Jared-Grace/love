import { app_shared_bible_verse_block_lines } from "./app_shared_bible_verse_block_lines.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first_last_slice } from "./list_first_last_slice.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function app_shared_bible_copy(
  verse_numbers_chosen,
  languages_verses,
  chapter_code,
) {
  list_sort_number_mapper(verse_numbers_chosen, integer_to_try);
  let primary = list_last(languages_verses);
  let primary_books = property_get(primary, "books");
  let item_property_name = verse_number_key();
  let primary_verse_numbers = property_list_map_property(
    primary,
    "verses",
    item_property_name,
  );
  let m = list_multiple_is(verse_numbers_chosen);
  let normalized = verse_numbers_chosen;
  if (not(m)) {
    let f = list_first(verse_numbers_chosen);
    normalized = [f, f];
  }
  let slice = list_first_last_slice(normalized, primary_verse_numbers);
  let sliced = property_get(slice, "sliced");
  let lines = [];
  function per_verse(verse_number) {
    let texts = [];
    function per_language(entry) {
      let verses_l = property_get(entry, "verses");
      let property_name = verse_number_key();
      let verse_l = list_find_property_or_null(
        verses_l,
        property_name,
        verse_number,
      );
      let nn = null_not_is(verse_l);
      if (nn) {
        ("copied text is only scripture — no language-name labels, unlike the on-screen parallel view");
        let text_l = property_get(verse_l, "text");
        list_add(texts, text_l);
      }
    }
    each(languages_verses, per_language);
    let block = app_shared_bible_verse_block_lines(
      chapter_code,
      primary_books,
      verse_number,
      texts,
    );
    list_add_multiple(lines, block);
  }
  each(sliced, per_verse);
  await list_join_newline_2_copy(lines);
}
