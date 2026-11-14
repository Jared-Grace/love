import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verses_question_text } from "./app_shared_bible_verses_question_text.mjs";
import { text_cut_around_names } from "./text_cut_around_names.mjs";
export function app_shared_bible_verses_question_parts(
  book_name,
  chapter_name,
) {
  arguments_assert(arguments, 2);
  ("The verse picker's question cut so the book's name and the chapter's name can be drawn stressed while the words around them stay plain.");
  ("The question is asked whole and then cut, so each language's sentence stays written in one place and puts the two names in its own order.");
  ("The book is looked for first, because a chapter's number can also stand inside a book's name - chapter 1 of 1 John - and the book is never inside the chapter.");
  let text = app_shared_bible_verses_question_text(book_name, chapter_name);
  let parts = text_cut_around_names(text, [book_name, chapter_name]);
  return parts;
}
