import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "urdgvu";
  let list = await ebible_chapter_codes(bible_folder);
  async function lambda(item) {
    let contents = await ebible_verses(bible_folder, item);
  }
  await each_async(list, lambda);
}
