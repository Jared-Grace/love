import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_book_hash_key } from "./app_shared_bible_book_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_book_hash_get(hash) {
  arguments_assert(arguments, 1);
  ("The book a link asks for on its own, or nothing at all when the link names no book by itself.");
  ("A link spells the book on its own only while the chapter is still unchosen. Once a chapter is picked the chapter says which book it belongs to, and the book is dropped from the link rather than written twice - so a link almost never carries both, and reading this one and finding nothing usually means the chapter is there instead.");
  let property_name = app_shared_bible_book_hash_key();
  let book_code = property_get_or(hash, property_name, "");
  return book_code;
}
