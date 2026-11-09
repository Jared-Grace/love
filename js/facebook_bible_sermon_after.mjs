import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_sermons_chapters } from "./app_bible_sermons_chapters.mjs";
import { facebook_bible_sermon_passages } from "./facebook_bible_sermon_passages.mjs";
export async function facebook_bible_sermon_after(chapter_code, verses_key) {
  arguments_assert(arguments, 2);
  ("$plain chapter_code");
  ("$plain verses_key");
  ("The sermon passage a facebook run posts after the one named by chapter_code and verses_key - its verse numbers joined by commas - answered as the chapter and the passage, or null when there is none left.");
  ("★ THE ORDER IS THE SERMONS APP'S OWN: its approved chapters as it offers them, Romans first, and each chapter's passages in verse order. A book approved there is posted here too, after the ones before it.");
  ("★ NOTHING POSTED YET IS chapter_code null, and starts at the first passage of the first chapter.");
  ("★ THE END IS NULL, NOT A WRAP. The chapter read-through goes round the bible again; a sermon posted twice would be noticed, and a book approved later is the more likely next thing - so the run stops and says so.");
  ("★ A PASSAGE NOT FOUND THROWS rather than starting over, because starting over would repost sermons and say nothing.");
  let chapters = await app_bible_sermons_chapters();
  if (equal(chapter_code, null)) {
    let first_chapter = chapters[0];
    let passages_first = await facebook_bible_sermon_passages(first_chapter);
    let r = {
      chapter_code: first_chapter,
      passage: passages_first[0],
    };
    return r;
  }
  let passages = await facebook_bible_sermon_passages(chapter_code);
  function key_of(passage) {
    let k = passage.verse_numbers.join(",");
    return k;
  }
  let keys = passages.map(key_of);
  let index = keys.indexOf(verses_key);
  if (less_than(index, 0)) {
    throw new Error(
      "no sermon passage " +
        chapter_code +
        " " +
        verses_key +
        " among " +
        keys.join(" "),
    );
  }
  let index_next = index + 1;
  if (less_than(index_next, passages.length)) {
    let r2 = {
      chapter_code,
      passage: passages[index_next],
    };
    return r2;
  }
  let chapter_index = chapters.indexOf(chapter_code);
  if (less_than(chapter_index, 0)) {
    throw new Error("not an approved sermon chapter: " + chapter_code);
  }
  let chapter_index_next = chapter_index + 1;
  if (greater_than_equal(chapter_index_next, chapters.length)) {
    return null;
  }
  let chapter_next = chapters[chapter_index_next];
  let passages_next = await facebook_bible_sermon_passages(chapter_next);
  let r3 = {
    chapter_code: chapter_next,
    passage: passages_next[0],
  };
  return r3;
}
