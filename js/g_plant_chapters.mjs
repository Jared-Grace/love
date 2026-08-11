import { fn_name } from "./fn_name.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
import { g_sermon_passages_all } from "./g_sermon_passages_all.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { g_plant_chapters_lines_of } from "./g_plant_chapters_lines_of.mjs";
import { g_plant_book_count } from "./g_plant_book_count.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
import { g_plant_passages_chapters } from "./g_plant_passages_chapters.mjs";
import { g_plant_passage_key } from "./g_plant_passage_key.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
export async function g_plant_chapters() {
  "Divides the whole selected sermon into plants - each a run of consecutive PASSAGES, sized so the plants come out as near the wanted length as the supply allows.";
  "A plant has to be one size and the written units are not, so one of the two has to give - and it is the unit that gives, at the smallest unit there is. That unit is the PASSAGE, not the chapter. A passage is a written sermon and cannot be halved; a chapter is only a numbering added to the letter centuries after it was sent, so letting it decide where a plant ends was letting an editorial mark set the game's pacing. Passages run two to nineteen lines and average five, so a boundary can land within a few lines of wherever it should.";
  "So a plant no longer takes whole chapters and a chapter is no longer glued to its neighbour to fill one. A plant may start and end mid-chapter, and two plants may share a chapter between them - which is why a plant is identified by the passage it starts at and the one it ends at rather than by a list of chapters. The chapters it touches are still reported, because that is how a person finds the text, but they no longer define it.";
  ("How many plants a book makes is chosen by searching the counts rather than by dividing its length by the wanted one - see ",
    fn_name("g_plant_book_count"),
    " for why those differ, and for the book that rounding got wrong.");
  ("Each plant closes when stopping lands nearer its share than carrying on would, so the shortfall is spread rather than piled onto the book's last plant.");
  ("Plants do not cross BOOKS. A book is one letter written to one church, and a plant that ran out of James and into Romans mid-sermon would be preaching two arguments as one. This is the one constraint left that a plant cannot size its way around, and it has a price: a book whose length divides into nothing near the wanted one makes a plant that is reported short or long, because there is no third choice inside that book.");
  ("Days are worked out ONCE per plant, from its lines, when it closes. They are never added up from the chapters, because a chapter's day count is its own lines rounded UP and a plant is not one chapter - summing them charges a fresh part-day at every chapter break, as though the preaching stopped for the night whenever a chapter ended.");
  let settings = g_generation_settings();
  let least = settings.plant_days_minimum;
  let most = settings.plant_days_maximum;
  let per_day = g_day_lines();
  let passages = await g_sermon_passages_all();
  let books = [];
  let book_last = "";
  for (let passage of passages) {
    let book = property_get(passage, "book");
    let book_changed = not_equal(book, book_last);
    if (book_changed) {
      let started = {
        book,
        passages: [],
      };
      list_add(books, started);
      book_last = book;
    }
    let current = books[subtract(books.length, 1)];
    let held = property_get(current, "passages");
    list_add(held, passage);
  }
  function book_plants(held_book) {
    let book = property_get(held_book, "book");
    let held = property_get(held_book, "passages");
    let book_lines = list_map_sum(held, g_plant_chapters_lines_of);
    let count = g_plant_book_count(book_lines);
    let share = divide(book_lines, count);
    let book_plant_list = [];
    let taken = [];
    let lines_so_far = 0;
    function plant_close() {
      let empty_is = equal(taken.length, 0);
      if (empty_is) {
        return;
      }
      let days = divide_ceil(lines_so_far, per_day);
      let short_is = less_than(days, least);
      let long_is = greater_than(days, most);
      let plant = {
        book,
        chapters: g_plant_passages_chapters(taken),
        start: g_plant_passage_key(taken[0]),
        end: g_plant_passage_key(taken[subtract(taken.length, 1)]),
        passages: taken,
        lines: lines_so_far,
        days,
        floor_met: not(short_is),
        over_maximum: long_is,
      };
      list_add(book_plant_list, plant);
      taken = [];
      lines_so_far = 0;
    }
    for (let passage of held) {
      let lines = g_plant_chapters_lines_of(passage);
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
      list_add(taken, passage);
      lines_so_far = lines_so_far + lines;
    }
    plant_close();
    return book_plant_list;
  }
  let per_book = list_map(books, book_plants);
  let plants = list_concat_multiple(per_book);
  return plants;
}
