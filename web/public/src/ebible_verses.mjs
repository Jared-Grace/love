import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  marker("1");
  let v = await ebible_chapter_text(bible_folder, chapter_code);
  return v;
}
