import { ebible_verses } from "./ebible_verses.mjs";
import { marker } from "./marker.mjs";
export async function ebible_verse(bible_folder, chapter_code, verse_number) {
  marker("1");
  let v = await ebible_verses(bible_folder, chapter_code);
  return v;
}
