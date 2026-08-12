import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_book_hash_get } from "./app_shared_bible_book_hash_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_shared_bible_hash_book_code(hash) {
  arguments_assert(arguments, 1);
  ("Which book of the bible a link is on, however that link happens to say it.");
  ("A link says the book in one of two ways and never in both. Once a chapter is chosen the chapter carries the book inside its own name, so the book is not written a second time. Before a chapter is chosen there is no chapter to carry it, so the book stands there on its own.");
  ("Every page that wants to know the book was reading only the first of those and taking the book out of the chapter's name. That answers correctly right up until the moment somebody has chosen a book and not yet a chapter, which is exactly the moment a book picker and a chapter picker are on the screen - so the one state they exist to serve was the one state they could not read.");
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let none = text_empty_is(chapter_code);
  if (none) {
    let chosen = app_shared_bible_book_hash_get(hash);
    return chosen;
  }
  let book_code = ebible_chapter_code_to_book(chapter_code);
  return book_code;
}
