import { log } from "./log.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
export async function sandbox() {
  await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    log(verses);
  }
}
