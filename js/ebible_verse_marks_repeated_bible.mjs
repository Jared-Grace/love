import { ebible_bible_chapters_found_generic } from "./ebible_bible_chapters_found_generic.mjs";
import { ebible_chapter_verse_marks_repeated } from "./ebible_chapter_verse_marks_repeated.mjs";
export async function ebible_verse_marks_repeated_bible(bible_folder) {
  "$plain bible_folder";
  "Every chapter of one bible whose page marks a verse number more than once, each named with the numbers it repeats.";
  "Expect this one to be empty far more often than the finder for gaps, and to mean more when it is not. A gap is usually somebody's tradition numbering a chapter its own way; a repeat cannot be anybody's tradition, because no edition means two verses to share one address.";
  let r = await ebible_bible_chapters_found_generic(
    bible_folder,
    ebible_chapter_verse_marks_repeated,
  );
  return r;
}
