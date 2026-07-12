import { retry_standard } from "./retry_standard.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { ebible_firebase_upload_verse } from "./ebible_firebase_upload_verse.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
import { ebible_version_download } from "./ebible_version_download.mjs";
export async function ebible_verses_upload(bible_folder) {
  await ebible_version_download(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
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
