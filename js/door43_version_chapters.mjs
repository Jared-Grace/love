import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_book_chapters_verses } from "./door43_version_book_chapters_verses.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function door43_version_chapters(door43_folder) {
  arguments_assert(arguments, 1);
  ("$plain door43_folder");
  ("Every chapter of a Door43 bible with its verses, in the shape the rest of this repo already reads chapters in.");
  ("The books are asked for by the sixty-six the repo already names, in the order it already names them, rather than by whatever files happen to sit in the folder. That keeps one bible's chapters in the same order as every other bible's, and it means a file this repo has no book for is passed over instead of arriving as a chapter nothing can link to.");
  ("A book the bible does not carry is passed over rather than refused, because a translation that is the New Testament alone is a gift and not a fault.");
  ("Nothing here reads a page or counts lines twice. The marks in the text say where every chapter and every verse begins, so there is one reading and no two readings to disagree.");
  let book_codes = ebible_book_codes();
  async function lambda(la) {
    await each_async(book_codes, book);
    async function book(book_code) {
      let chapters = await door43_version_book_chapters_verses(
        door43_folder,
        book_code,
      );
      let uncarried = null_is(chapters);
      if (uncarried) {
        return;
      }
      function coded(chapter) {
        let chapter_number = property_get(chapter, "chapter_number");
        let verses = property_get(chapter, "verses");
        let chapter_code = ebible_chapter_code_pad(book_code, chapter_number);
        let v = {
          chapter_code,
          verses,
        };
        return v;
      }
      let mapped = list_map(chapters, coded);
      la(mapped);
    }
  }
  let list = await list_adder_multiple_async(lambda);
  return list;
}
