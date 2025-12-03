import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { ebible_chapter_code_to_book } from "../../../love/public/src/ebible_chapter_code_to_book.mjs";
import { ebible_chapters_each_verses } from "../../../love/public/src/ebible_chapters_each_verses.mjs";
export async function ebible_index(bible_folder) {
  let books = {};
  let index = [];
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let chapter_name = ebible_chapter_code_to_name(chapter_code);
    let book = object_property_initialize(books, book_code, {
      book_code,
      chapters: [],
    });
    list_add_if_not_includes(index, book);
    let verse_numbers = list_map_property(verses, "verse_number");
    const chapter = {
      chapter_name,
      verse_numbers,
    };
    let { chapters } = book;
    list_add(chapters, chapter);
  }
  return index;
}
