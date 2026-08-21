import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_chapter_verse_marks_gaps } from "./ebible_chapter_verse_marks_gaps.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_verse_marks_gaps_bible(bible_folder) {
  "$plain bible_folder";
  "Every chapter of one bible whose page skips a verse number between its first mark and its last, each named with the numbers it skips.";
  "Asked of a whole bible at once because a chapter skipping nothing proves nothing about the rest of them, and because the answer worth having is which chapters rather than how many.";
  "This reads pages and nothing else, which is what makes it reach where the measuring beside it cannot. That one finds a chapter short by laying its marks against the lines its read-aloud edition speaks, so a bible with no read-aloud edition at all - and there are whole bibles like that - is invisible to it. Every page is here on this machine either way.";
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let gapped = [];
  async function lambda(chapter_code) {
    async function lambda2() {
      let gaps = await ebible_chapter_verse_marks_gaps(
        bible_folder,
        chapter_code,
      );
      return gaps;
    }
    let gaps = await catch_null_async(lambda2);
    let unreadable = null_is(gaps);
    if (unreadable) {
      return;
    }
    let none = list_empty_is(gaps);
    if (none) {
      return;
    }
    let found = {
      chapter_code,
      gaps,
    };
    list_add(gapped, found);
  }
  await each_async(chapter_codes, lambda);
  let r = {
    bible_folder,
    chapters: list_size(chapter_codes),
    gapped,
  };
  return r;
}
