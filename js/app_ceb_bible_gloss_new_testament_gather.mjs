import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_book_gather } from "./app_ceb_bible_gloss_book_gather.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { ebible_version_books_testament_new } from "./ebible_version_books_testament_new.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_first } from "./list_first.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_new_testament_gather() {
  "Ask the dictionary about every Cebuano word the New Testament is written with and does not yet hold, a book at a time, in the order the books stand.";
  "It finds its own books rather than being handed a list, so a book cannot be left out by being forgotten and the run cannot drift from what the bible actually holds. Running one book at a time by hand did the same work and left nothing behind that could say whether every book had been reached.";
  "This takes days, because each asking waits the time the site asks to be waited. Nothing is asked twice: a book whose words are all held already passes through at once, so a run stopped after two days and started again begins where it left off without being told where that was.";
  "It answers with a line for each book rather than one total, because a book that reached nothing and a book that had nothing left to reach come to the same total and are not the same thing at all.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let books = await ebible_version_books_testament_new(bible_folder);
  async function adder(la) {
    async function book_gather(book) {
      let book_code = property_get(book, "book_code");
      let gathered = await app_ceb_bible_gloss_book_gather(book_code);
      la({
        book_code,
        gathered,
      });
    }
    await each_async(books, book_gather);
  }
  let r = await list_adder_async(adder);
  return r;
}
