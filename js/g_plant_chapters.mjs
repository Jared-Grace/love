import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_sermon_chapter_days } from "./g_sermon_chapter_days.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_plant_chapters() {
  "Groups the grouped chapters into plants - a plant being however many chapters IN A ROW it takes to reach the fewest days a plant may run.";
  "A plant has to be one size and a chapter is four different sizes, so one of the two has to give. The chapter cannot: its sermon is written as a whole and half a chapter is not a sermon. So the plant absorbs chapters until it is big enough, and the count of chapters varies instead of the plant.";
  "That is also why the maximum is REPORTED rather than enforced. Chapters cannot be split, so a plant one chapter short of the minimum has no choice but to take a whole chapter and may overshoot. A plant that runs long is a plant; a plant that runs short cannot hold a cell or form a leader.";
  "Plants do not cross BOOKS. A book is one letter written to one church, and a plant that ran out of James and into Romans mid-sermon would be preaching two arguments as one. The leftover chapters at a book's end make a short plant, which is reported as not meeting the floor rather than quietly padded from the next book.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  let settings = g_generation_settings();
  let least = settings.plant_days_minimum;
  let most = settings.plant_days_maximum;
  async function chapter_day_count(chapter) {
    let days = await g_sermon_chapter_days(chapter);
    let counted = { chapter, days };
    return counted;
  }
  let counteds = await list_map_async(chapters, chapter_day_count);
  let plants = [];
  let taken = [];
  let days_so_far = 0;
  let book_so_far = "";
  function plant_close() {
    if (taken.length === 0) {
      return;
    }
    let long_is = days_so_far > most;
    let short_is = days_so_far < least;
    let plant = {
      book: book_so_far,
      chapters: taken,
      days: days_so_far,
      floor_met: !short_is,
      over_maximum: long_is,
    };
    list_add(plants, plant);
    taken = [];
    days_so_far = 0;
  }
  for (let counted of counteds) {
    let chapter = property_get(counted, "chapter");
    let days = property_get(counted, "days");
    let book = ebible_chapter_code_to_book(chapter);
    let book_changed = book !== book_so_far;
    if (book_changed) {
      plant_close();
      book_so_far = book;
    }
    list_add(taken, chapter);
    days_so_far = days_so_far + days;
    let enough = days_so_far >= least;
    if (enough) {
      plant_close();
    }
  }
  plant_close();
  return plants;
}
