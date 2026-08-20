import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_chapter_verse_numbers_to_pair } from "./ebible_chapter_verse_numbers_to_pair.mjs";
import { ebible_chapter_readaloud_lines } from "./ebible_chapter_readaloud_lines.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_readaloud_lines_differ(bible_folder) {
  "$plain bible_folder";
  "Which chapters of one bible are written for reading aloud in a different number of lines from the number of verses its source page marks.";
  "A chapter read aloud arrives already divided, one line to a verse, and the pages mark where each verse begins - the verses that have words, since a verse marked over nothing but a footnote is read aloud by nobody. If those two counts agree everywhere then the lines are the verses and the only thing the reading aloud lacks is the numbers - which the page has. If they disagree the two cannot simply be laid against each other, and this says where.";
  "Asked of a whole bible at once rather than a chapter at a time, because one chapter agreeing proves nothing about a rule meant to hold for all of them.";
  "Which of the page's marks to count is asked of the same reading the app asks, so that a chapter counted here as agreeing is a chapter the app will read and a chapter counted here as differing is one it will refuse. Counted a second way, this would go on saying a chapter was broken after it had started being shown, or the other way about, and nothing would say which of the two was wrong.";
  "How many marks have words is still what a chapter that cannot be paired is reported with, because that is the number a reader of the record wants: it says how far short the page falls, and a page short by one is a different thing to hunt from a page short by eighteen.";
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let differ = [];
  let same = 0;
  let unread = [];
  async function lambda(chapter_code) {
    async function lambda2() {
      let lines = await ebible_chapter_readaloud_lines(
        bible_folder,
        chapter_code,
      );
      let unread_is = null_is(lines);
      if (unread_is) {
        return null;
      }
      let lines_count = list_size(lines);
      let numbers = await ebible_chapter_verse_numbers_for_lines(
        bible_folder,
        chapter_code,
        lines_count,
      );
      let unpaired = null_is(numbers);
      if (unpaired) {
        let markers = await ebible_chapter_verse_numbers_to_pair(
          bible_folder,
          chapter_code,
        );
        let short = {
          chapter_code,
          markers: list_size(markers),
          lines: lines_count,
        };
        return short;
      }
      let measured = {
        chapter_code,
        markers: lines_count,
        lines: lines_count,
      };
      return measured;
    }
    let counts = await catch_null_async(lambda2);
    let missing = null_is(counts);
    if (missing) {
      list_add(unread, chapter_code);
      return;
    }
    let b = equal(counts.markers, counts.lines);
    if (b) {
      same = same + 1;
      return;
    }
    list_add(differ, counts);
  }
  await each_async(chapter_codes, lambda);
  let r = {
    bible_folder,
    chapters: list_size(chapter_codes),
    same,
    differ,
    unread,
  };
  return r;
}
