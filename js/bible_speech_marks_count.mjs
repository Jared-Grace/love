import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
export async function bible_speech_marks_count(bible_folder, book_code) {
  "$plain bible_folder";
  "$plain book_code";
  "How many of each kind of quotation mark one book of one translation is written with - the doubles, the singles, and the straight one - which is what says whether that translation's speech can be found at all.";
  "★ THIS EXISTS BECAUSE A TRANSLATION THAT MARKS SPEECH SOME OTHER WAY COMES BACK FROM THE PARSER AS A BOOK WITH NO SPEECH IN IT, AND NOTHING ANYWHERE SAYS SO. Young's Literal Translation writes every quotation in SINGLE marks and uses no double mark anywhere; asked for the speech in Mark it answers nothing, confidently, and that answer looks exactly like a correct one. An empty result is not an error, so the emptiness has to be measured on purpose or it is never noticed.";
  "★ IT ALSO ANSWERS A QUESTION ABOUT SCRIPTURE RATHER THAN ABOUT CODE. The quotation marks are not in the manuscripts - Greek and Hebrew have none - so every one of them is a translator saying where he judges the speech to begin and end. Counting them across translations is counting editorial decisions, and where the counts differ the translations have genuinely disagreed about who said what.";
  arguments_assert(arguments, 2);
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let double_open = text_from_code_number(8220);
  let double_close = text_from_code_number(8221);
  let single_open = text_from_code_number(8216);
  let single_close = text_from_code_number(8217);
  let straight = text_from_code_number(34);
  let counts = {
    double_open: 0,
    double_close: 0,
    single_open: 0,
    single_close: 0,
    straight: 0,
  };
  function mark_count(text, mark) {
    let pieces = text.split(mark);
    let n = add(pieces.length, -1);
    return n;
  }
  async function chapter_each(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    function verse_each(verse) {
      let right = mark_count(verse.text, double_open);
      counts.double_open = add(counts.double_open, right);
      let right2 = mark_count(verse.text, double_close);
      counts.double_close = add(counts.double_close, right2);
      let right3 = mark_count(verse.text, single_open);
      counts.single_open = add(counts.single_open, right3);
      let right4 = mark_count(verse.text, single_close);
      counts.single_close = add(counts.single_close, right4);
      let right5 = mark_count(verse.text, straight);
      counts.straight = add(counts.straight, right5);
    }
    each(verses, verse_each);
    return chapter_code;
  }
  await list_map_async(chapter_codes, chapter_each);
  let report = {
    bible_folder,
    book_code,
    chapters: chapter_codes.length,
    counts,
  };
  return report;
}
