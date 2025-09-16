import { ebible_chapters_each_verses_list } from "./ebible_chapters_each_verses_list.mjs";
import { ebible_chapters_each_verses_check } from "./ebible_chapters_each_verses_check.mjs";
import { log } from "./log.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
export async function sandbox() {
  await ebible_chapters_each_verses_check(bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  await ebible_chapters_each_verses_check_with("engwebu", each_chapter);
  async function each_chapter(chapter_code, verses) {
    log(verses);
  }
}
