import { ebible_version_books_testament_apocrypha } from "./ebible_version_books_testament_apocrypha.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_chapters_each_verses_list } from "./ebible_chapters_each_verses_list.mjs";
import { ebible_chapters_each_verses_check } from "./ebible_chapters_each_verses_check.mjs";
import { log } from "./log.mjs";
export async function sandbox() {
  const bible_folder = "engwebu";
  await ebible_chapters_each_verses_check(bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  let v = await ebible_version_books_testament_apocrypha(bible_folder2);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  async function each_chapter(chapter_code, verses) {
    log(chapter_code);
  }
}
