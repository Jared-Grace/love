import { fn_name } from "./fn_name.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { equal } from "./equal.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
export function matthew_henry_chapter_file(chapter_code) {
  "The page of Matthew Henry's Complete Commentary on biblestudytools.com that comments on a chapter, like genesis/1.html for GEN01.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN01; it is looked up, and nothing in it runs.";
  ("THE FOLDER IS THE BOOK'S NAME IN SMALL LETTERS WITH DASHES, and the page is the chapter's number. Checked on 2026-11-12 against every chapter link on the site's own indexes (",
    fn_name("matthew_henry_chapter_files_all"),
    "): all 1189 chapters are there, and only Song of Solomon breaks the pattern, both in its folder and in its pages, song-of-solomon/song-of-solomon-1.html.");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter = ebible_chapter_code_to_number(chapter_code);
  if (equal(book_code, "SNG")) {
    let song = "song-of-solomon/song-of-solomon-" + chapter + ".html";
    return song;
  }
  let books = ebible_books_engbsb();
  let name = ebible_book_code_to_name(books, book_code);
  let folder = name.toLowerCase().replaceAll(" ", "-");
  let file = folder + "/" + chapter + ".html";
  return file;
}
