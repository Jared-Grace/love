import { list_adder_async } from "./list_adder_async.mjs";
import { marker } from "./marker.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_skip } from "./string_skip.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
export async function ebible_index_flat(bible_folder) {
  marker("1");
  let books = {};
  let index = [];
  async function lambda(la) {
    await ebible_chapters_each_verses(bible_folder, each_chapter);
    async function each_chapter(chapter_code, verses) {
      let book_code = ebible_chapter_code_to_book(chapter_code);
      let book = object_property_initialize(books, book_code, {
        book_code,
        chapters: [],
      });
      list_add_if_not_includes(index, book);
      let count = ebible_book_code_size();
      let chapter_name = string_skip(chapter_code, count);
      let verse_numbers = list_map_property(verses, "verse_number");
      const chapter = {
        chapter_name,
        verse_numbers,
      };
      let { chapters } = book;
      list_add(chapters, chapter);
    }
  }
  let list = await list_adder_async(lambda);
  return index;
}
