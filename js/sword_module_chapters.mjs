import { sword_testament_entries } from "./sword_testament_entries.mjs";
import { regex_sword_book_open } from "./regex_sword_book_open.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { regex_sword_chapter_open } from "./regex_sword_chapter_open.mjs";
import { sword_markup_removed } from "./sword_markup_removed.mjs";
export async function sword_module_chapters(module_folder) {
  "$plain module_folder";
  "Every book of a Sword module, each with its chapters, each chapter with its verses as plain words.";
  "The module says where it is as it goes rather than being told. A book opens with a mark carrying its name and a chapter with a mark carrying its name and number, so walking the entries in order and watching for those marks is the whole of finding out what is where - and nothing here needs a written-down table of how many verses each chapter has.";
  "THAT IS WHY NO SUCH TABLE IS KEPT. A table would be eleven hundred and eighty nine numbers copied from somewhere else, and a module that disagreed with it by one would be read wrongly and silently. Asked this way the module cannot disagree with itself.";
  "WHERE WE ARE IS FORGOTTEN AT EACH TESTAMENT. The two testaments are separate files and each begins with a couple of entries belonging to the module rather than to any book; carrying the last chapter of the old testament into the new one filed those two entries as verses of Malachi four, and the only sign of it was a count two too high.";
  "The verses of a chapter come back in a plain list, so a verse's number is where it stands in that list. The module has a place for every verse the King James numbering holds, so the standing is the numbering and nothing has to carry a number of its own.";
  let books = [];
  let book = null;
  let chapter = null;
  let testaments = ["ot", "nt"];
  for (let testament of testaments) {
    book = null;
    chapter = null;
    let entries = await sword_testament_entries(module_folder, testament);
    for (let text of entries) {
      let r = regex_sword_book_open();
      let opened = text.match(r);
      let b = null_is(opened);
      if (not(b)) {
        book = {
          name: opened[1],
          chapters: [],
        };
        list_add(books, book);
        chapter = null;
        continue;
      }
      let r2 = regex_sword_chapter_open();
      let started = text.match(r2);
      let b2 = null_is(started);
      if (not(b2)) {
        chapter = {
          number: Number(started[2]),
          verses: [],
        };
        list_add(book.chapters, chapter);
        continue;
      }
      if (null_is(chapter)) {
        continue;
      }
      let item = sword_markup_removed(text);
      list_add(chapter.verses, item);
    }
  }
  return books;
}
