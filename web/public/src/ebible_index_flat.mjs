import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
export async function ebible_index_flat(bible_folder) {
  let b = browser_is();
  if (b) {
  }
  marker("1");
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      let verse_numbers = list_map_property(verses, "verse_number");
      function lambda2(verse_number) {
        la({
          chapter_code,
          verse_number,
        });
      }
      each(verse_numbers, lambda2);
    }
  }
  let list = await list_adder_async(lambda);
  return list;
}
