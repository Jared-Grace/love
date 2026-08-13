import { app_next_home } from "./app_next_home.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_bible_verses } from "./app_shared_bible_verses.mjs";
export function app_next_screens() {
  "The screens this page can be on: the passage it was opened for, and the reader's own way of choosing a different one.";
  "The three picker screens are not copies of the reader's - they are the reader's, imported. They were already written to ask the page they are on where home is rather than assuming it, so borrowing them costs one list; a book list of this page's own would have been a second thing to keep correct every time a book name or a chapter count changed.";
  "The reader's other screens - languages, settings, the offline download - are left out rather than taken with them. They are ways of setting up a place to read, and this page is not a place to read: somebody here is choosing a passage to send, and then leaving.";
  let screens = [
    app_next_home,
    app_shared_bible_books,
    app_shared_bible_chapters,
    app_shared_bible_verses,
  ];
  return screens;
}
