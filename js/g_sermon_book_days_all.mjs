import { g_sermon_chapter_days_all } from "./g_sermon_chapter_days_all.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
export async function g_sermon_book_days_all() {
  "Every book that has a sermon written, in reading order, with how many chapters it holds and how many days of preaching that comes to.";
  "DAYS rather than chapters, because a plant is a run of days and one chapter is five to nine of them - so a chapter count says nothing about whether a book can hold a plant. Asked when deciding whether a book stands on its own or wants joining to its neighbours.";
  "Order is the chapter list's own, which is canonical, so the books come out in reading order without being sorted here.";
  let chapter_rows = await g_sermon_chapter_days_all();
  let books = [];
  let by_book = {};
  for (let chapter_row of chapter_rows) {
    let book = property_get(chapter_row, "book");
    let days = property_get(chapter_row, "days");
    let entry = by_book[book];
    let fresh = not(entry);
    if (fresh) {
      entry = {
        book,
        chapters: 0,
        days: 0,
      };
      by_book[book] = entry;
      list_add(books, entry);
    }
    entry.chapters = add(entry.chapters, 1);
    entry.days = add(entry.days, days);
  }
  return books;
}
