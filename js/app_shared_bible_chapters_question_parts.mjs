import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapters_question_text } from "./app_shared_bible_chapters_question_text.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_take } from "./text_take.mjs";
export function app_shared_bible_chapters_question_parts(book_name) {
  arguments_assert(arguments, 1);
  ("The chapter picker's question cut into what stands before the book's name, the name itself, and what stands after, so the name can be drawn emphasized while the words around it stay plain.");
  ("The question is asked whole and then cut, rather than its halves being asked for, so the sentence each language writes stays written in one place and the reader-language gate keeps reading it there.");
  ("The question is the before half, the name, then the after half, so the first place the name stands is where it was put - unless a language's before half held the name itself, which none of these words do.");
  let text = app_shared_bible_chapters_question_text(book_name);
  let index = text_index_of_try(text, book_name);
  let before = text_take(text, index);
  let after = text.slice(index + book_name.length);
  let r = [before, book_name, after];
  return r;
}
