import { log } from "../../../love/public/src/log.mjs";
import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_sandbox(bible_folder) {
  marker("1");
  await ebible_version_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    log(verses);
  }
}
