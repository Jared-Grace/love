import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { string_get } from "../../../love/public/src/string_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_index_last } from "../../../love/public/src/string_index_last.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_sandbox() {
  let bible_folder = "engbsb";
  marker("1");
  await ebible_version_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  let list = await list_adder_async(async function lambda2(la) {});
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let mapped = list_map_property(verses, "text");
    function lambda(v) {
      let index_last = string_index_last(v);
      let item = string_get(v, index_last);
      return item;
    }
    let mapped2 = list_map(mapped, lambda);
    log(mapped2);
  }
}
