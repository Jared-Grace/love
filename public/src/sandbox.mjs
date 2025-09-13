import { ebible_verses } from "./ebible_verses.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  const bible_folder = "urdgvu";
  let list = await ebible_chapter_codes(bible_folder);
  async function lambda(chapter_code) {
    let contents = await ebible_verses(bible_folder, chapter_code);
  }
  await each_async(list, lambda);
}
