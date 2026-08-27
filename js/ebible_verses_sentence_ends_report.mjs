import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
export async function ebible_verses_sentence_ends_report(bible_folder) {
  "$plain bible_folder";
  "How often a verse of one bible finishes the sentence it is in, counted over every verse of it, with the longest run of verses that finish no sentence at all.";
  "★ IT MEASURES A THING EVERYTHING DOWNSTREAM QUIETLY ASSUMES. A screen that shows one verse, a recording cut one verse to a file, a song that stops at the end of a line - each is fine only where a verse is a whole sentence, and the verse numbers were put in centuries after the words and were never asked to respect one. Assuming it is safe and measuring whether it is safe cost the same, and only one of them can be wrong.";
  "★ THE LONGEST RUN IS THE NUMBER THAT DECIDES, NOT THE SHARE. A share of nine in ten sounds like a rounding error until the one in ten turn out to be consecutive: a reader shown five verses in a row that each stop on a comma has been shown a broken page five times, and a share cannot say whether that happened.";
  "★ A SEMICOLON AND A COLON ARE COUNTED APART FROM BOTH ANSWERS. A verse ending on one has not finished its sentence, but a reader may stop there without hearing a fragment, so folding it into either answer would overstate that answer. Kept separate, the two numbers bracket the truth instead of picking a side.";
  arguments_assert(arguments, 1);
  let chapters = await ebible_version_chapters(bible_folder);
  let closers = text_split_empty(".?!");
  let pausers = text_split_empty(";:");
  let verses = 0;
  let closes = 0;
  let pauses = 0;
  let continues = 0;
  let runs_long = [];
  let longest = {
    chapter_code: "",
    length: 0,
    first_verse: 0,
  };
  function chapter_each(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let list = property_get(chapter, "verses");
    let run = 0;
    let run_first = 0;
    function verse_each(verse) {
      let text = property_get(verse, "text");
      let number = property_get(verse, "verse_number");
      verses = add(verses, 1);
      let trimmed = bible_verse_trim_right(text);
      let ends = text_ends_with_any(trimmed, closers);
      if (ends) {
        closes = add(closes, 1);
        if (greater_than(run, longest.length)) {
          longest = {
            chapter_code,
            length: run,
            first_verse: run_first,
          };
        }
        if (greater_than(run, 2)) {
          list_add(runs_long, {
            chapter_code,
            first_verse: run_first,
            length: run,
          });
        }
        run = 0;
        return;
      }
      let paused = text_ends_with_any(trimmed, pausers);
      if (paused) {
        pauses = add(pauses, 1);
      }
      if (not(paused)) {
        continues = add(continues, 1);
      }
      if (equal(run, 0)) {
        run_first = number;
      }
      run = add(run, 1);
    }
    each(list, verse_each);
    if (greater_than(run, longest.length)) {
      longest = {
        chapter_code,
        length: run,
        first_verse: run_first,
      };
    }
    if (greater_than(run, 2)) {
      list_add(runs_long, {
        chapter_code,
        first_verse: run_first,
        length: run,
      });
    }
  }
  each(chapters, chapter_each);
  let left = divide(closes, verses);
  let n = multiply(left, 1000);
  let top = round(n);
  let report = {
    bible_folder,
    verses,
    closes,
    pauses,
    continues,
    closes_share: divide(top, 10),
    runs_over_two: runs_long.length,
    longest,
    runs: runs_long,
  };
  return report;
}
