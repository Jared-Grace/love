import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
export async function ebible_chapters_each_verses_check(bible_folder) {
  await ebible_chapters_each_verses(bible_folder, each_chapter2);
  async function each_chapter2(chapter_code, verses) {}
}
