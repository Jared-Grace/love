import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_version_book_path_or_null } from "./bible_usfm_version_book_path_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function bible_usfm_version_books(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("The books one usfm bible carries, in the order and under the names a picker offers them by.");
  ("THE NAMES COME FROM ENGLISH AND THE LIST COMES FROM THE DISK, and those are two questions rather than one. What a button says is a way of finding a place, so it is written in the language the rest of the page is written in; what is on offer is whatever this bible was actually published with, which only the shelf it sits on knows. Answering both from one list is what offers a New Testament reader all sixty six books, every one of the first thirty nine opening on a refusal.");
  ("It is the reading the bible readers already make of their own index, asked of a usfm shelf instead. A picker in front of a usfm bible had no such answer at all until now, which is why the one screen wanting one asked a person to type a three letter book code from memory.");
  let books_all = ebible_books_engbsb();
  async function book_held_or_null(book) {
    let book_code = property_get(book, "book_code");
    let found = await bible_usfm_version_book_path_or_null(version, book_code);
    let unfound = null_is(found);
    if (unfound) {
      return null;
    }
    return book;
  }
  let books = await list_map_async_filter_null_not_is(
    books_all,
    book_held_or_null,
  );
  return books;
}
