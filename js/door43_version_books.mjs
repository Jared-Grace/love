import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_book_path_or_null } from "./door43_version_book_path_or_null.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { file_read } from "./file_read.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { usfm_mark_text_or_null } from "./usfm_mark_text_or_null.mjs";
export async function door43_version_books(door43_folder) {
  arguments_assert(arguments, 1);
  ("$plain door43_folder");
  ("Every book a Door43 bible carries, each under the name that bible itself gives it, in the shape the rest of this repo already reads a book list in.");
  ("The name is taken from the running header the book opens with, which is the book naming itself in its own language. A reader choosing a book should see the word their own bible uses for it rather than the English one this repo happens to know.");
  ("A book that names itself nowhere is given the English name instead, because a name a reader cannot read is still better than none.");
  ("Where a book's first chapter is written is spelt the way eBible spells it, so whatever links to a book cannot tell the two sources apart.");
  let known = ebible_books_engbsb();
  async function lambda(la) {
    await each_async(known, book);
    async function book(entry) {
      let book_code = property_get(entry, "book_code");
      let file_path = await door43_version_book_path_or_null(
        door43_folder,
        book_code,
      );
      let uncarried = null_is(file_path);
      if (uncarried) {
        return;
      }
      let usfm = await file_read(file_path);
      let said = usfm_mark_text_or_null(usfm, "h");
      let english = property_get(entry, "text");
      let nameless = null_is(said);
      let text = ternary(nameless, english, said);
      let href = property_get(entry, "href");
      let v = {
        book_code,
        text,
        href,
      };
      la(v);
    }
  }
  let books = await list_adder_async(lambda);
  return books;
}
