import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_bible_chapters_found_generic(
  bible_folder,
  chapter_find,
) {
  "$plain bible_folder";
  "Every chapter of one bible that the given finder has something to say about, each named beside what the finder found in it.";
  "The walking is here rather than in each finder because it is the same walking every time and none of it is about what is being looked for: name the chapters, ask the finder, keep the chapters whose answer is not empty, and count what was walked so that finding nothing is not confused with looking at nothing.";
  "A chapter the finder cannot open at all is passed over rather than allowed to end the walk, because a corpus this size always holds a file somebody's download left half-written, and one of those must not cost the other twelve hundred chapters their answer.";
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let found_each = [];
  async function lambda(chapter_code) {
    async function lambda2() {
      let answer = await chapter_find(bible_folder, chapter_code);
      return answer;
    }
    let found = await catch_null_async(lambda2);
    let unreadable = null_is(found);
    if (unreadable) {
      return;
    }
    let none = list_empty_is(found);
    if (none) {
      return;
    }
    let row = {
      chapter_code,
      found,
    };
    list_add(found_each, row);
  }
  await each_async(chapter_codes, lambda);
  let r = {
    bible_folder,
    chapters: list_size(chapter_codes),
    found: found_each,
  };
  return r;
}
