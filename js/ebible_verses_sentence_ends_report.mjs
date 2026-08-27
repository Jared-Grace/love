import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
export async function ebible_verses_sentence_ends_report(bible_folder) {
  "$plain bible_folder";
  "How often a verse of one bible finishes the sentence it is in, counted over every verse of it, with the longest run of verses that finish no sentence and the longest run that leaves the reader mid-clause.";
  "★ IT MEASURES A THING EVERYTHING DOWNSTREAM QUIETLY ASSUMES. A screen that shows one verse, a recording cut one verse to a file, a song that stops at the end of a line - each is fine only where a verse is a whole sentence, and the verse numbers were put in centuries after the words and were never asked to respect one. Assuming it is safe and measuring whether it is safe cost the same, and only one of them can be wrong.";
  "★ THE LONGEST RUN IS THE NUMBER THAT DECIDES, NOT THE SHARE. A share of nine in ten sounds like a rounding error until the one in ten turn out to be consecutive: a reader shown five verses in a row that each stop on a comma has been shown a broken page five times, and a share cannot say whether that happened.";
  "★ A SEMICOLON AND A COLON ARE COUNTED APART FROM BOTH ANSWERS. A verse ending on one has not finished its sentence, but a reader may stop there without hearing a fragment, so folding it into either answer would overstate that answer. Kept separate, the two numbers bracket the truth instead of picking a side.";
  "★ TWO RUNS ARE COUNTED, AND THE SHORTER ONE IS THE HONEST ALARM. A run of verses that close no sentence treats a semicolon as a break in the reading, which is why Psalm 136 shows up as twenty-two verses long in that count while every one of its verses is a whole singable line ending on the same refrain. The fragment run stops at a semicolon as well as at a full stop, so it counts only the places a reader really is left in the middle of a clause. Merging verses up to the next full stop would be right for Luke's genealogy and wrong for that psalm, and only the two numbers side by side say which case a chapter is.";
  arguments_assert(arguments, 1);
  let chapters = await ebible_version_chapters(bible_folder);
  let closers = text_split_empty(".?!");
  let pausers = text_split_empty(";:");
  let verses = 0;
  let closes = 0;
  let pauses = 0;
  let continues = 0;
  function tracker_new() {
    let r = {
      run: 0,
      first: 0,
      longest: {
        chapter_code: "",
        length: 0,
        first_verse: 0,
      },
      runs: [],
    };
    return r;
  }
  function tracker_break(tracker, chapter_code) {
    if (greater_than(tracker.run, tracker.longest.length)) {
      tracker.longest = {
        chapter_code,
        length: tracker.run,
        first_verse: tracker.first,
      };
    }
    if (greater_than(tracker.run, 2)) {
      list_add(tracker.runs, {
        chapter_code,
        first_verse: tracker.first,
        length: tracker.run,
      });
    }
    tracker.run = 0;
  }
  function tracker_step(tracker, verse_number) {
    if (equal(tracker.run, 0)) {
      tracker.first = verse_number;
    }
    tracker.run = add(tracker.run, 1);
  }
  let open = tracker_new();
  let fragment = tracker_new();
  function chapter_each(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let list = property_get(chapter, "verses");
    function verse_each(verse) {
      let text = property_get(verse, "text");
      let verse_number = property_get(verse, "verse_number");
      verses = add(verses, 1);
      let trimmed = bible_verse_trim_right(text);
      let ends = text_ends_with_any(trimmed, closers);
      if (ends) {
        closes = add(closes, 1);
        tracker_break(open, chapter_code);
        tracker_break(fragment, chapter_code);
        return;
      }
      let paused = text_ends_with_any(trimmed, pausers);
      if (paused) {
        pauses = add(pauses, 1);
        tracker_break(fragment, chapter_code);
      }
      if (not(paused)) {
        continues = add(continues, 1);
        tracker_step(fragment, verse_number);
      }
      tracker_step(open, verse_number);
    }
    each(list, verse_each);
    tracker_break(open, chapter_code);
    tracker_break(fragment, chapter_code);
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
    runs_over_two: open.runs.length,
    longest: open.longest,
    fragment_runs_over_two: fragment.runs.length,
    fragment_longest: fragment.longest,
    runs: open.runs,
    fragment_runs: fragment.runs,
  };
  return report;
}
