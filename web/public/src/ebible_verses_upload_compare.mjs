import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { ebible_version_readaloud_download } from "../../../love/public/src/ebible_version_readaloud_download.mjs";
import { retry } from "../../../love/public/src/retry.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { ebible_firebase_upload_verse } from "../../../love/public/src/ebible_firebase_upload_verse.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_verses_upload_compare(bible_folder) {
  marker("1");
  await ebible_version_download(bible_folder);
  await ebible_version_readaloud_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses_readaloud) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    return;
    async function lambda(v) {
      async function lambda3() {
        await ebible_firebase_upload_verse(v, chapter_code, bible_folder);
      }
      await retry(5, lambda3);
    }
    await each_unordered_async(verses_readaloud, lambda);
  }
}
