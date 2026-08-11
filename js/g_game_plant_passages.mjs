import { fn_name } from "./fn_name.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
import { g_sermon_passages_all } from "./g_sermon_passages_all.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { g_plant_chapters_lines_of } from "./g_plant_chapters_lines_of.mjs";
import { g_plant_count } from "./g_plant_count.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
import { g_plant_passages_chapters } from "./g_plant_passages_chapters.mjs";
import { g_plant_passage_key } from "./g_plant_passage_key.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
export async function g_game_plant_passages(chapters) {
  "Divides one game's chosen chapters into plants - each a run of consecutive PASSAGES, sized so the plants come out as near the wanted length as the supply allows.";
  "This runs when a GAME begins and not before, because the chapters are the player's own choice and arrive in the player's own order. Nothing here can be worked out in advance and nothing here is authored: two players who pick differently get different plants out of the same written sermons. What IS authored is the arcs, which is why they are drawn as a pool with no plant anywhere in them and picked up by a plant afterwards.";
  "A plant has to be one size and the written units are not, so one of the two has to give - and it is the unit that gives, at the smallest unit there is. That unit is the PASSAGE, not the chapter. A passage is a written sermon and cannot be halved; a chapter is only a numbering added to the letter centuries after it was sent, so letting it decide where a plant ends was letting an editorial mark set the game's pacing. Passages run two to nineteen lines and average five, so a boundary can land within a few lines of wherever it should.";
  "So a plant no longer takes whole chapters and a chapter is no longer glued to its neighbour to fill one. A plant may start and end mid-chapter, and two plants may share a chapter between them - which is why a plant is identified by the passage it starts at and the one it ends at rather than by a list of chapters. The chapters it touches are still reported, because that is how a person finds the text, but they no longer define it.";
  ("How many plants the run makes is chosen by searching the counts rather than by dividing its length by the wanted one - see ",
    fn_name("g_plant_count"),
    " for why those differ, and for the case that rounding got wrong.");
  ("Each plant closes when stopping lands nearer its share than carrying on would, so the shortfall is spread across the run rather than piled onto its last plant.");
  ("The count is chosen ONCE for the whole run, not per book, and a plant may cross from one book into the next. Books used to bound a plant, on the ground that a letter is one argument - and the price of that was permanent: the chapters of a single book divide into a fixed set of lengths, so a book like 1 Peter had only twenty-three days or eleven to offer and could not land in range at any count. Cut across the whole run instead, every plant lands inside the wanted length. The ORDER is the only thing a plant must respect, and the order is the player's, so a plant crossing a book boundary is crossing a boundary the player already chose to put there.");
  ("Days are worked out ONCE per plant, from its lines, when it closes. They are never added up from the chapters, because a chapter's day count is its own lines rounded UP and a plant is not one chapter - summing them charges a fresh part-day at every chapter break, as though the preaching stopped for the night whenever a chapter ended.");
  let settings = g_generation_settings();
  let least = settings.plant_days_minimum;
  let most = settings.plant_days_maximum;
  let per_day = g_day_lines();
  let passages = await g_sermon_passages_all(chapters);
  let run_lines = list_map_sum(passages, g_plant_chapters_lines_of);
  let count = g_plant_count(run_lines);
  let share = divide(run_lines, count);
  let plants = [];
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
      chapters: g_plant_passages_chapters(taken),
      start: g_plant_passage_key(taken[0]),
      end: g_plant_passage_key(taken[subtract(taken.length, 1)]),
      passages: taken,
      lines: lines_so_far,
      days,
      floor_met: not(short_is),
      over_maximum: long_is,
    };
    list_add(plants, plant);
    taken = [];
    lines_so_far = 0;
  }
  for (let passage of passages) {
    let lines = g_plant_chapters_lines_of(passage);
    let plants_left = subtract(count, plants.length);
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
  return plants;
}
