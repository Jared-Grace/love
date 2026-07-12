import { ebible_chapter_code_parse } from "./ebible_chapter_code_parse.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
export async function ebible_index(bible_folder) {
  let books = {};
  let index = [];
  await ebible_chapters_each_verses(bible_folder, each_chapter);
  async function each_chapter(chapter_code, verses) {
    let { book_code, chapter_name } = ebible_chapter_code_parse(chapter_code);
    let book = property_initialize(books, book_code, {
      book_code,
      chapters: [],
    });
    list_add_if_not_includes(index, book);
    let verse_numbers = list_map_property(verses, "verse_number");
    let chapter = {
      chapter_name,
      verse_numbers,
    };
    let { chapters } = book;
    list_add(chapters, chapter);
  }
  return index;
}
