import { list_join_space } from "./list_join_space.mjs";
import { log } from "./log.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_chapters_each_verses_list } from "./ebible_chapters_each_verses_list.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_testament_apocrypha } from "./ebible_version_books_testament_apocrypha.mjs";
import { ebible_chapters_each_verses_check } from "./ebible_chapters_each_verses_check.mjs";
import { command_line } from "./command_line.mjs";
export async function sandbox_2() {
  const bible_folder = "engwebu";
  let stdout = await command_line("command");
  await ebible_chapters_each_verses_check(bible_folder);
  let books = await ebible_version_books_testament_apocrypha(bible_folder);
  let list = await ebible_books_to_chapter_codes(books, bible_folder);
  await ebible_chapters_each_verses_list(list, bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let mapped = list_map_property(verses, "text");
    let joined = list_join_space(args);
    log(mapped);
  }
}
