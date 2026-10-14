import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { not } from "./not.mjs";
import { list_first_last_slice } from "./list_first_last_slice.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_bible_verse_text_shown } from "./app_shared_bible_verse_text_shown.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
export async function app_shared_bible_copy(
  verse_numbers_chosen,
  languages_verses,
  chapter_code,
  lines_extra,
) {
  list_sort_number_mapper(verse_numbers_chosen, integer_to_try);
  let primary = list_last(languages_verses);
  ("Verses are copied to be shared, so the reference names the book in the first bible, the one whose words the paste puts first - the language the audience is assumed to read most easily. It is not the reader's own screen language: they may not read the audience's language at all.");
  let audience = list_first(languages_verses);
  let audience_books = property_get(audience, "books");
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
  ("Several verses copied together carry one reference naming the whole range, the way a person quotes a passage, rather than the reference again before every verse. The verses all come from this one chapter, so a single range can always say where they are from. Each bible then follows as one paragraph of its verses in order, so the bibles stay apart without a reference between every verse. A single verse comes out exactly as it did before: its reference, then the verse once per bible.");
  ("Rejected: a line per verse inside each bible - it keeps verse breaks but reads as a list, not a passage; and a reference on every verse - that was the old shape, and the human asked for it to go.");
  let first = list_first(sliced);
  let last = list_last(sliced);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    audience_books,
    [first, last],
  );
  let lines = [reference];
  function per_language(entry) {
    let verses_l = property_get(entry, "verses");
    let texts = [];
    function per_verse(verse_number) {
      let property_name = verse_number_key();
      let verse_l = list_find_property_or_null(
        verses_l,
        property_name,
        verse_number,
      );
      let nn = null_not_is(verse_l);
      if (nn) {
        ("copied text is only scripture - no language-name labels, unlike the on-screen parallel view");
        let text_l = property_get(verse_l, "text");
        let shown = app_shared_bible_verse_text_shown(text_l);
        list_add(texts, shown);
      }
    }
    each(sliced, per_verse);
    let e = list_empty_not_is(texts);
    if (e) {
      let paragraph = list_join_space(texts);
      list_add(lines, paragraph);
    }
  }
  each(languages_verses, per_language);
  ("Whatever else the screen was showing about this passage follows the scripture, in the order the screen showed it. A reader on a gloss page has the verse in the language they are learning and a line for every word of it explained; copying gave them the english alone, so what landed on the clipboard was the one part of that screen they could already have got anywhere. What is put here is put by the screen that drew it, because only that screen knows what it drew.");
  ("It is added once at the end rather than after each verse, because these readers show a single verse at a time and the whole-chapter reader has nothing extra to add - so there is no verse for the wrong copy of it to attach to.");
  list_add_multiple(lines, lines_extra);
  await list_join_newline_2_copy(lines);
}
