import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
import { emoji_books } from "./emoji_books.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_next_passage_choose_button(parent, context) {
  "The way to start somewhere else: a book, a chapter and a verse, chosen rather than typed.";
  "Where to start was written in the link and nowhere else, so beginning a new book meant editing an address by hand - a book code, a chapter number padded to the right width, and a verse, all spelled correctly in one line on a phone. Somebody who has just finished sending one book and wants to begin the next should not have to know how this page's links are spelled.";
  "What it opens is the reader's own book list, not a copy of it. Choosing there writes the passage into the link and comes back here, which is exactly what those screens already did for the reader - they ask the page they are on where home is, and here home is the passage.";
  arguments_assert(arguments, 2);
  async function lambda() {
    await app_shared_screen_set(context, app_shared_bible_books);
  }
  let left = emoji_books();
  let text = text_combine(left, " Choose passage");
  let component = app_shared_button(parent, text, lambda);
  return component;
}
