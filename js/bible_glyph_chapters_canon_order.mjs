import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters_by_book } from "./bible_glyph_chapters_by_book.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_canon_order(chapters) {
  arguments_assert(arguments, 1);
  ("Every written chapter of the picture Bible in one flat list, in the order Scripture puts them rather than the order they were written in.");
  ("IT IS ",
    fn_name("bible_glyph_chapters_by_book"),
    " with the headings taken off, so the order is decided in one place and not two. A page that shows the books and a bar that walks between chapters have to agree about what comes next, and the only way they can be relied on to agree is by asking the same reading.");
  ("THE ENTRIES ARE THE SAME OBJECTS AND NOT COPIES OF THEM, which is what lets a caller find where it is standing by looking for the chapter it already holds.");
  ("A chapter whose code names no book is not here, because the grouping cannot place it. That is a hole rather than a decision, and ",
    fn_name("bible_glyph_chapters_book_codes_unknown_gate_run"),
    " is what keeps it empty.");
  let books = bible_glyph_chapters_by_book(chapters);
  let ordered = [];
  for (let book of books) {
    let held = property_get(book, "chapters");
    for (let chapter of held) {
      list_add(ordered, chapter);
    }
  }
  return ordered;
}
