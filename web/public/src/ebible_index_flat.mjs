import { list_adder_async } from "./list_adder_async.mjs";
import { marker } from "./marker.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
export async function ebible_index_flat(bible_folder) {
  marker("1");
  let books = {};
  let index = [];
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      function lambda2(verse_number) {
        la({
          chapter_code,
          verse_number,
        });
      }
    }
  }
  let list = await list_adder_async(lambda);
  return index;
}
