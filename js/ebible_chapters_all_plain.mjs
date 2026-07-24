import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_chapters_all_plain(bible_folder) {
  ("build the whole-bible bundle straight from the local text with the plain verse reader, not the audio-aligned one; a chapter the text cannot yield is skipped, so a missing audio recording or a versification gap never fails the build");
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  let chapters = [];
  async function lambda(chapter_code) {
    async function get() {
      let verses = await ebible_verses(bible_folder, chapter_code);
      let entry = {
        chapter_code,
        verses,
      };
      return entry;
    }
    let entry = await catch_null_async(get);
    if (null_not_is(entry)) {
      list_add(chapters, entry);
    }
  }
  await each_async(chapter_codes, lambda);
  return chapters;
}
