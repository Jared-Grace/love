import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_includes } from "./list_includes.mjs";
import { ebible_letter_accounted_is } from "./ebible_letter_accounted_is.mjs";
import { ebible_verse_gap_name } from "./ebible_verse_gap_name.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function ebible_verse_marks_gaps_unexplained_gaps_bible_read(
  bible,
  displaced_chapters,
  accounted,
  omitted,
  rows,
) {
  "One Bible's missing verse marks read through, adding to the list of faults every gap that nobody has yet explained.";
  "THREE KINDS OF EXPLANATION ARE ACCEPTED AND EACH IS CHECKED BEFORE A GAP IS REPORTED: a chapter whose marks are known to sit in the wrong places, a chapter already accounted for as a whole, and a single verse this translation leaves out on purpose. What is left over is the answer, and it is deliberately the smallest thing that could not be argued away.";
  arguments_assert(arguments, 5);
  let bible_folder = property_get(bible, "bible_folder");
  let gapped = property_get(bible, "found");
  function gaps_chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let address = list_join_space([bible_folder, chapter_code]);
    let already = list_includes(displaced_chapters, address);
    if (already) {
      return;
    }
    let judged = ebible_letter_accounted_is(accounted, address);
    if (judged) {
      return;
    }
    let gaps = property_get(chapter, "found");
    function gap_read(number) {
      let name = ebible_verse_gap_name(chapter_code, number);
      let deliberate = list_includes(omitted, name);
      if (deliberate) {
        return;
      }
      let row = {
        bible_folder,
        chapter_code,
        name,
      };
      list_add(rows, row);
    }
    each(gaps, gap_read);
  }
  each(gapped, gaps_chapter_read);
}
