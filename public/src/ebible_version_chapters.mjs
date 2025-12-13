import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
import { ebible_firebase_upload_verse } from "../../../love/public/src/ebible_firebase_upload_verse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function ebible_version_chapters(bible_folder) {
  marker("1");
  await ebible_version_download(bible_folder);
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    async function lambda(v) {
      await ebible_firebase_upload_verse(v, chapter_code, bible_folder);
    }
    let mapped = list_map(verses, lambda);
    await list_wait(mapped);
  }
}
