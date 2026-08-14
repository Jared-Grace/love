import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folders_chapter_ends } from "./bible_folders_chapter_ends.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function bible_folders_chapters_ends(
  bible_folders,
  chapter_codes,
  count,
) {
  "Reads several chapters in several bibles and answers, for each chapter, whether each bible finished a sentence at each verse - keeping the bibles apart rather than folding them together.";
  "Keeping them apart is the whole point of this being its own step. The fetching is the entire cost and the folding is free, so one reading of everything can answer every question about who is read together: this bible with that one, any three of them, all of them at once. Folding first would throw away exactly what those questions are asked of, and each new question would cost another reading of the whole sample.";
  arguments_assert(arguments, 3);
  async function lambda(chapter_code) {
    let ends_each = await bible_folders_chapter_ends(
      bible_folders,
      chapter_code,
      count,
    );
    return ends_each;
  }
  let chapters_ends = await list_map_unordered_async(chapter_codes, lambda);
  return chapters_ends;
}
