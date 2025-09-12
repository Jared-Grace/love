import { each_async } from "./each_async.mjs";
import { ebible_chapter_codes } from "./ebible_chapter_codes.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let list = await ebible_chapter_codes("engbsb");
  async function lambda(item) {
    let contents = await ebible_verses("engbsb", item);
  }
  await each_async(list, lambda);
}
