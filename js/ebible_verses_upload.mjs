import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { each_async } from "./each_async.mjs";
import { property_get } from "./property_get.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { ebible_firebase_upload_verse } from "./ebible_firebase_upload_verse.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
export async function ebible_verses_upload(bible_folder) {
  "Every verse of one bible published one at a time, whichever of the two places the bible came from.";
  "A bible from the Door43 catalogue is walked from the chapters already read out of its own marks, rather than downloaded twice and checked against itself. The checking below exists because eBible says where a verse begins in two places that can disagree; usfm says it in one, so there is nothing there to check.";
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    let chapters = await ebible_version_chapters_cache(bible_folder);
    await each_async(chapters, marked);
    return;
  }
  await ebible_version_download(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
  async function marked(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    await each_chapter(chapter_code, verses);
  }
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      async function lambda3() {
        await ebible_firebase_upload_verse(v, chapter_code, bible_folder);
      }
      await retry_standard(lambda3);
    }
    await each_unordered_async(verses, lambda);
  }
}
