import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_verse_claims_wrong_read } from "./app_en_learn_bible_gloss_urdu_verse_claims_wrong_read.mjs";
import { gloss_chapter_read } from "./gloss_chapter_read.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_verse_claims_spanned() {
  "Every recorded Urdu verse claim sorted by whether the verse it names heads a passage that does hold the word, because a passage may cover several verses and is named by the first of them.";
  "★ THE RECORD ASKS WHETHER ONE VERSE HOLDS THE WORD, AND A WRITER LOOKING AT THE SCREEN SEES A WHOLE PASSAGE UNDER ONE NUMBER. Where a passage runs from five to six, the words of verse six stand under the heading five, so a sentence saying the word came in verse five is true of what the reader can see and false of verse five alone. This counts how much of the record is that disagreement rather than a mistake.";
  "Nothing is written. It only reads the record and the store, so it may be run at any time to price the question before anybody mends a sentence.";
  arguments_assert(arguments, 0);
  let rows = await app_en_learn_bible_gloss_urdu_verse_claims_wrong_read();
  let chapters = {};
  let spanned = [];
  let alone = [];
  for (let row of rows) {
    let words = row.name.split(" ");
    let chapter_code = words[0];
    let named = Number(words[subtract(words.length, 1)]);
    let held = row.verses_held;
    let chapter = chapters[chapter_code];
    if (equal(chapter, undefined)) {
      chapter = await gloss_chapter_read(
        chapter_code,
        app_en_learn_bible_gloss_urdu_generate,
      );
      chapters[chapter_code] = chapter;
    }
    let spans = [];
    for (let passage of chapter.passages) {
      let numbers = passage.verse_numbers.map(Number);
      if (numbers.includes(named)) {
        spans = numbers;
      }
    }
    function lambda(v) {
      let r2 = held.includes(v);
      return r2;
    }
    let shared = spans.filter(lambda);
    let line =
      row.name + "  held " + held.join("/") + "  passage " + spans.join("/");
    if (equal(shared.length, 0)) {
      alone.push(line);
      continue;
    }
    spanned.push(line);
  }
  let r = {
    rows: rows.length,
    spanned,
    alone,
  };
  return r;
}
