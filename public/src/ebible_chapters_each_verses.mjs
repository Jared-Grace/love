import { list_skip } from "./list_skip.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
export async function ebible_chapters_each_verses(bible_folder, each_chapter) {
  let list = await ebible_chapter_codes(bible_folder);
  await each_async(list, lambda);
  async function lambda(chapter_code) {
    let skipped = list_skip(list2, skip_count);
    let verses = await ebible_verses(bible_folder, chapter_code);
    await each_chapter(chapter_code, verses);
  }
}
