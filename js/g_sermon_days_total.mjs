import { g_game_plant_passages } from "./g_game_plant_passages.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_days_total() {
  "How many days of preaching every written sermon comes to, counted as ONE run and rounded once at the end.";
  "This is the one hard limit on how much game there is. It is what the pool of arcs is sized against, because a day without preaching in it is not a day.";
  "No plant appears in this, and that is the whole point. Plants are cut when a GAME begins, out of the chapters that player chose and in that player's order, so at the time the arcs are written there is no plant to add up - asking one to help size the pool would be authoring against a grouping that does not exist yet and will differ for the next player.";
  "Counted from the LINES rather than by adding day counts together, and the difference is not rounding noise. Rounding up says a part-day of sermon still needs a day of its own, which is true once, at the end of the run; done at every chapter break it charges a fresh part-day for each - as though the preaching stopped for the night whenever a chapter ended. Measured over the supply as it stands, chapter-by-chapter came to three hundred and nineteen days where the run comes to three hundred and four.";
  let chapters = await g_sermon_chapters_written();
  let passages = await g_sermon_passages_all(chapters);
  let lines = list_map_sum(passages, g_plant_chapters_lines_of);
  let per_day = g_day_lines();
  let r = divide_ceil(lines, per_day);
  return r;
}
