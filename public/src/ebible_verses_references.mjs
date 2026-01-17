import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_verses_references(bible_folder, chapter_code) {
  marker("1");
  let v = await ebible_verses(bible_folder, chapter_code);
  return v;
}
