import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_english_lines } from "./bible_glyph_chapter_english_lines.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_is } from "./text_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_includes } from "./list_includes.mjs";
export async function bible_glyph_chapter_english_order(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter of the picture Bible to read. It names a stretch of text and nothing that runs.";
  "Every verse of one picture chapter whose plain English words do not stand in the order the Berean wording puts them in, with how many verses were read to find them.";
  arguments_assert(arguments, 1);
  ("A PICTURE CHAPTER IS THE BEREAN WORDING WITH SOME OF ITS WORDS DRAWN OVER. Whatever English is left standing between the pictures came out of that sentence, so it must still be in that sentence's order. A word that has moved is a word no reader can put back, because nothing on the page says where it came from.");
  ("THE FAULT THIS FINDS IS A WHOLE CHAPTER WRITTEN IN THE ORIGINAL'S ORDER. The interlinear hangs its English on the original words, and an author who reads down that column instead of reading the sentence writes the verse in Hebrew order - Numbers thirty verse one came out as said Then Moses to the heads of the tribes, where the verb stands in front of the man doing it. That is not a choppy reading, it is a sentence in no language at all, and it is invisible to every other gate here because every picture in such a verse is correctly seated.");
  ("A WORD THE BEREAN DOES NOT SAY AT ALL IS PASSED OVER RATHER THAN BLAMED. An author may write a word the translation never used, and that is a choice and not a fault; what cannot be a choice is a word the translation does use standing in front of the word it follows there. So a word absent from the line is skipped, and only a word present but behind the reading is counted.");
  ("IT COUNTS THE VERSES IT READ beside the offenders, so an empty answer can be told from a walk that reached nothing.");
  ("The English is asked of ",
    fn_name("bible_glyph_chapter_english_lines"),
    ", which puts the chunks back into the order the wording was made for; the chapter itself is read by ",
    fn_name("bible_glyph_chapter"),
    ".");
  let lines = await bible_glyph_chapter_english_lines(chapter_code);
  let parsed = bible_glyph_chapter(chapter_code);
  let verses = property_get(parsed, "verses");
  let verses_read = 0;
  let offenders = [];
  for (let verse of verses) {
    let verse_number = property_get(verse, "verse_number");
    let place = subtract(verse_number, 1);
    let b = list_size(lines);
    let past = greater_than_equal(place, b);
    if (past) {
      continue;
    }
    let line = lines[place];
    verses_read = verses_read + 1;
    let said = [];
    for (let piece of text_split_space(line)) {
      let t = text_lower_to(piece);
      let spelled = text_letters_only(t);
      let empty = equal(spelled, "");
      if (not(empty)) {
        list_add(said, spelled);
      }
    }
    let words = property_get(verse, "words");
    let cursor = 0;
    let moved = [];
    for (let word of words) {
      let plain = text_is(word);
      if (not(plain)) {
        continue;
      }
      let drawn = text_starts_with(word, "$");
      if (drawn) {
        continue;
      }
      let t2 = text_lower_to(word);
      let bare = text_letters_only(t2);
      let empty = equal(bare, "");
      if (empty) {
        continue;
      }
      let known = list_includes(said, bare);
      if (not(known)) {
        continue;
      }
      let found = -1;
      for (
        let scan = cursor;
        less_than(scan, list_size(said));
        scan = scan + 1
      ) {
        let same = equal(said[scan], bare);
        if (same) {
          found = scan;
          break;
        }
      }
      let behind = equal(found, -1);
      if (behind) {
        list_add(moved, bare);
        continue;
      }
      cursor = found + 1;
    }
    let a = list_size(moved);
    let any = greater_than(a, 0);
    if (any) {
      list_add(offenders, {
        chapter_code,
        verse_number,
        moved,
        english: line,
      });
    }
  }
  let r = {
    chapter_code,
    verses_read,
    offenders,
  };
  return r;
}
