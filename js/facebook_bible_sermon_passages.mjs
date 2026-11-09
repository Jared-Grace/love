import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_sermons_download } from "./app_bible_sermons_download.mjs";
export async function facebook_bible_sermon_passages(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("One approved chapter's sermon passages in the order the verses run, each with its verse numbers and its lines - the same ones the sermons app shows.");
  ("★ SORTED HERE BECAUSE STORAGE DOES NOT KEEP THE ORDER. A sermon written verse by verse in the loop is saved in the order it was written, and 1 John's chapters come back with their passages out of verse order - posted as stored, a reader would get verse 2 before verse 1.");
  let downloaded = await app_bible_sermons_download(chapter_code);
  let passages = downloaded.passages;
  function first(passage) {
    let n = Number(passage.verse_numbers[0]);
    return n;
  }
  function by_first(a, b) {
    let left = first(a);
    let right = first(b);
    let d = subtract(left, right);
    return d;
  }
  let sorted = [...passages].sort(by_first);
  return sorted;
}
