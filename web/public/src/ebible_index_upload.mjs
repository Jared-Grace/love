import { object_property_initialize } from "./object_property_initialize.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
export async function ebible_index_upload(bible_folder) {
  let result = {};
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let value2 = object_property_initialize(object, book_code, []);
  }
}
