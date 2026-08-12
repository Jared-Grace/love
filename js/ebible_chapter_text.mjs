import { ebible_chapter_text_prepared } from "./ebible_chapter_text_prepared.mjs";
import { identity } from "./identity.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function ebible_chapter_text(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  ("One chapter as a single run of words, beside the mark the page puts at the start of each verse.");
  ("The words of the verses and the words that stand for their numbers arrive mixed together in one run, because flattening a page forgets where its elements were. What to do about that is the caller's to decide.");
  let result = await ebible_chapter_text_prepared(
    bible_folder,
    chapter_code,
    identity,
  );
  return result;
}
