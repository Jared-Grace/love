import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { g_day_matches } from "./g_day_matches.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
export function g_passage_match_count(lines) {
  "how many npc matches (objections, questions, and the like) a passage needs: scaled by its SERMON LINES not by passage count, at the day rate matches per line, so a book's whole match set is used once with no repeats";
  let top = g_day_matches();
  let bottom = g_day_lines();
  let rate = divide(top, bottom);
  let r = multiply_round(lines, rate);
  return r;
}
