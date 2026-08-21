import { ebible_bible_chapters_found_generic } from "./ebible_bible_chapters_found_generic.mjs";
import { ebible_chapter_verse_marks_displaced } from "./ebible_chapter_verse_marks_displaced.mjs";
export async function ebible_verse_marks_displaced_bible(bible_folder) {
  "$plain bible_folder";
  "Every chapter of one bible carrying a verse mark whose id names a different verse from the one it prints, each named with the marks that disagree.";
  "Asked of a whole bible at once because the fault comes from the publishing rather than from the text, so it runs through a translation wherever the shape that triggers it appears, and which chapters is the answer worth having rather than how many.";
  let r = await ebible_bible_chapters_found_generic(
    bible_folder,
    ebible_chapter_verse_marks_displaced,
  );
  return r;
}
