import { g_day_lines } from "./g_day_lines.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
import { multiply } from "./multiply.mjs";
import { g_plant_chapters_lines_of } from "./g_plant_chapters_lines_of.mjs";
import { g_sermon_chapter_lines } from "./g_sermon_chapter_lines.mjs";
import { divide_round } from "./divide_round.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { math_max } from "./math_max.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function g_plant_chapters() {
  "Groups the grouped chapters into plants - a plant being however many chapters IN A ROW it takes to fill one, so the chapter count varies and the plant stays one size.";
  "A plant has to be one size and a chapter is four different sizes, so one of the two has to give. The chapter cannot: its sermon is written as a whole, and half a chapter is not a sermon. So the plant absorbs whole chapters until it is full.";
  "A book is divided into EQUAL plants rather than filled one plant at a time. Filling greedily closes each plant the moment it clears the floor, which spends the big chapters early and leaves the book's last few as a plant far too small to hold a cell - measured over the grouped chapters, that left six plants of five to eleven days. Deciding how many plants the book makes FIRST, then aiming each at its share, spreads the shortfall instead of piling all of it on the end.";
  "Each plant closes when stopping lands nearer its share than carrying on would. That is what keeps a chapter from being taken merely because the plant is still one day short - overshooting by six is worse than stopping one under.";
  "Plants do not cross BOOKS. A book is one letter written to one church, and a plant that ran out of James and into Romans mid-sermon would be preaching two arguments as one. A book too short to make even one full plant makes one short plant, reported as not meeting the floor rather than quietly padded from the next book.";
  let groups_todo = await g_sermon_groups_todo();
  let chapters = property_get(groups_todo, "done");
  let settings = g_generation_settings();
  let least = settings.plant_days_minimum;
  let most = settings.plant_days_maximum;
  let per_day = g_day_lines();
  let wanted = multiply(settings.plant_days, per_day);
  ("The grouping is done in LINES and the days are worked out ONCE, when the plant closes. A chapter's own day count cannot be used for this, because it is that chapter's lines rounded UP - and a plant is not one chapter. Adding four rounded-up chapters together spends the part-day rounding four times, as though the preaching stopped for the night at every chapter break. It does not: a plant is consecutive chapters of one letter, and a day reads on across the join.");
  ("Measured over the supply that error was eight days - nothing on a one-chapter plant, one to two on a plant of three or four - and days are what the leader's discipling is paid out of, so those were days of formation nobody preached for.");
  async function chapter_line_count(chapter) {
    let lines = await g_sermon_chapter_lines(chapter);
    let counted = {
      chapter,
      lines,
    };
    return counted;
  }
  let counteds = await list_map_async(chapters, chapter_line_count);
  let books = [];
  let book_last = "";
  for (let counted of counteds) {
    let chapter = property_get(counted, "chapter");
    let book = ebible_chapter_code_to_book(chapter);
    let book_changed = not_equal(book, book_last);
    if (book_changed) {
      let started = {
        book,
        counteds: [],
      };
      list_add(books, started);
      book_last = book;
    }
    let current = books[subtract(books.length, 1)];
    let held = property_get(current, "counteds");
    list_add(held, counted);
  }
  function book_plants(held_book) {
    let book = property_get(held_book, "book");
    let held = property_get(held_book, "counteds");
    let book_lines = list_map_sum(held, g_plant_chapters_lines_of);
    let rounded = divide_round(book_lines, wanted);
    let count = math_max(1, rounded);
    let share = divide(book_lines, count);
    let book_plant_list = [];
    let taken = [];
    let lines_so_far = 0;
    function plant_close() {
      let empty_is = equal(taken.length, 0);
      if (empty_is) {
        return;
      }
      let days_so_far = divide_ceil(lines_so_far, per_day);
      let short_is = less_than(days_so_far, least);
      let long_is = greater_than(days_so_far, most);
      let plant = {
        book,
        chapters: taken,
        lines: lines_so_far,
        days: days_so_far,
        floor_met: not(short_is),
        over_maximum: long_is,
      };
      list_add(book_plant_list, plant);
      taken = [];
      lines_so_far = 0;
    }
    for (let counted of held) {
      let chapter = property_get(counted, "chapter");
      let lines = g_plant_chapters_lines_of(counted);
      let plants_left = subtract(count, book_plant_list.length);
      let last_plant_is = less_than_equal(plants_left, 1);
      let with_it = lines_so_far + lines;
      let gap_stopping = numbers_apart(lines_so_far, share);
      let gap_carrying = numbers_apart(with_it, share);
      let nearer_stopping = less_than(gap_stopping, gap_carrying);
      let started_is = greater_than(taken.length, 0);
      let close_first = nearer_stopping && started_is && not(last_plant_is);
      if (close_first) {
        plant_close();
      }
      list_add(taken, chapter);
      lines_so_far = lines_so_far + lines;
    }
    plant_close();
    return book_plant_list;
  }
  let per_book = list_map(books, book_plants);
  let plants = [];
  for (let book_list of per_book) {
    for (let plant of book_list) {
      list_add(plants, plant);
    }
  }
  return plants;
}
