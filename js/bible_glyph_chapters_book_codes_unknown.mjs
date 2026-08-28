import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_book_codes_unknown() {
  arguments_assert(arguments, 0);
  ("Every written chapter of the picture Bible whose code names no book of the canon.");
  ("IT IS THE HOLE ",
    fn_name("bible_glyph_chapters_by_book"),
    " LEAVES BEHIND. That grouping walks the sixty six books and gathers the chapters belonging to each, so a chapter belonging to none is gathered by nobody - it does not land in a wrong place, it stops existing. The index draws twenty four rows instead of twenty five and looks exactly as right as before.");
  ("A code is mistyped by the hand that writes a chapter, and one letter is the whole distance between a book and no book. Nothing else in the repo reads that code closely enough to notice: the page finds a chapter by matching the code against itself, so a chapter with a bad code opens perfectly well when its own link is followed and is simply unreachable from the list.");
  ("It finds its own set rather than being handed one, so it cannot be asked about a list that has drifted from the one the app draws.");
  ("It hands back the offending chapters rather than a count, because the repair is to fix a code and the code is the only thing worth printing.");
  let books = ebible_books_engbsb();
  let known = list_map_property(books, "book_code");
  let chapters = bible_glyph_chapters();
  let unknown = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let missing = list_includes_not(known, book_code);
    if (missing) {
      let entry = {
        chapter_code,
        book_code,
      };
      list_add(unknown, entry);
    }
  }
  return unknown;
}
