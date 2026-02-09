import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function sandbox_5() {
  let verses = await ebible_verses(bible_folder, chapter_code);
}
