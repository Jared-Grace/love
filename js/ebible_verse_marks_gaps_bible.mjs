import { ebible_bible_chapters_found_generic } from "./ebible_bible_chapters_found_generic.mjs";
import { ebible_chapter_verse_marks_gaps } from "./ebible_chapter_verse_marks_gaps.mjs";
export async function ebible_verse_marks_gaps_bible(bible_folder) {
  "$plain bible_folder";
  "Every chapter of one bible whose page skips a verse number between its first mark and its last, each named with the numbers it skips.";
  "Asked of a whole bible at once because a chapter skipping nothing proves nothing about the rest of them, and because the answer worth having is which chapters rather than how many.";
  "This reads pages and nothing else, which is what makes it reach where the measuring beside it cannot. That one finds a chapter short by laying its marks against the lines its read-aloud edition speaks, so a bible with no read-aloud edition at all - and there are whole bibles like that - is invisible to it. Every page is here on this machine either way.";
  let r = await ebible_bible_chapters_found_generic(
    bible_folder,
    ebible_chapter_verse_marks_gaps,
  );
  return r;
}
