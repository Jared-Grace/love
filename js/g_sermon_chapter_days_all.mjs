import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_sermon_chapter_days } from "./g_sermon_chapter_days.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_sermon_chapter_days_all() {
  "Every grouped chapter in order with the book it belongs to and the days of preaching it holds.";
  "The preaching supply as one run rather than as a set of books, because a plant no longer stops where a book does - it is as long as its cast is worth, and it takes whatever chapters that reaches into. Which book a plant is in is then read back off this rather than decided in advance.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  async function chapter_counted(chapter) {
    let days = await g_sermon_chapter_days(chapter);
    let book = ebible_chapter_code_to_book(chapter);
    let counted = {
      chapter,
      book,
      days,
    };
    return counted;
  }
  let r = await list_map_async(chapters, chapter_counted);
  return r;
}
