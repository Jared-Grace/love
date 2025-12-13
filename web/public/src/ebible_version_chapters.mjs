import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_version_chapters(bible_folder) {
  marker("1");
  await ebible_version_download(bible_folder);
  let list = await list_adder_async(async function lambda(la) {});
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {}
}
