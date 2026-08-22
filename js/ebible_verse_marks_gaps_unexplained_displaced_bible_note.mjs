import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function ebible_verse_marks_gaps_unexplained_displaced_bible_note(
  bible,
  displaced_chapters,
) {
  arguments_assert(arguments, 2);
  let bible_folder = property_get(bible, "bible_folder");
  let chapters = property_get(bible, "found");
  function displaced_chapter_note(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let address = list_join_space([bible_folder, chapter_code]);
    list_add(displaced_chapters, address);
  }
  each(chapters, displaced_chapter_note);
}
