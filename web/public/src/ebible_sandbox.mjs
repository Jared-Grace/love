import { bible_verse_trim_right } from "../../../love/public/src/bible_verse_trim_right.mjs";
import { text_last } from "../../../love/public/src/text_last.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_adder_multiple_unique_async } from "../../../love/public/src/list_adder_multiple_unique_async.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
import { ebible_version_download } from "../../../love/public/src/ebible_version_download.mjs";
export async function ebible_sandbox() {
  ".”,:?;d—k)m’!frluetysgDnhpazb";
  let bible_folder = "engbsb";
  await ebible_version_download(bible_folder);
  ("loop through to ensure parse correct before begin upload");
  async function lambda2(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      let mapped = list_map_property(verses, "text");
      function lambda(v) {
        let trimmed = bible_verse_trim_right(v);
        let item = text_last(trimmed);
        return item;
      }
      let mapped2 = list_map(mapped, lambda);
      la(mapped2);
    }
  }
  let list = await list_adder_multiple_unique_async(lambda2);
  let joined = list_join_empty(list);
  return joined;
}
