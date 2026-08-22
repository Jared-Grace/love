import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verse_marks_gaps_unexplained_displaced_bible_note } from "./ebible_verse_marks_gaps_unexplained_displaced_bible_note.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { ebible_verse_gaps_critical_text_omitted } from "./ebible_verse_gaps_critical_text_omitted.mjs";
import { ebible_letter_accounted } from "./ebible_letter_accounted.mjs";
import { ebible_verse_marks_gaps_unexplained_gaps_bible_read } from "./ebible_verse_marks_gaps_unexplained_gaps_bible_read.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
export async function ebible_verse_marks_gaps_unexplained_grouped(
  displaced_chapters,
  displaced_measured,
  gaps_measured,
) {
  arguments_assert(arguments, 3);
  function displaced_bible_note(bible) {
    let r3 = ebible_verse_marks_gaps_unexplained_displaced_bible_note(
      bible,
      displaced_chapters,
    );
    return r3;
  }
  let list = property_get(displaced_measured, "bibles");
  each(list, displaced_bible_note);
  let omitted = ebible_verse_gaps_critical_text_omitted();
  let accounted = await ebible_letter_accounted();
  let rows = [];
  function gaps_bible_read(bible) {
    let r = ebible_verse_marks_gaps_unexplained_gaps_bible_read(
      bible,
      displaced_chapters,
      accounted,
      omitted,
      rows,
    );
    return r;
  }
  let list2 = property_get(gaps_measured, "bibles");
  each(list2, gaps_bible_read);
  let grouped = list_group_by_property(rows, "bible_folder");
  return grouped;
}
