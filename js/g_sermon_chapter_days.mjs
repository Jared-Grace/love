import { divide_ceil } from "./divide_ceil.mjs";
import { g_sermon_chapter_lines } from "./g_sermon_chapter_lines.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
export async function g_sermon_chapter_days(chapter) {
  "How many days of preaching one chapter holds - its sermon lines divided by the lines a day gets through.";
  "This is a DERIVED day count, and it is the honest one: a plant lasts as long as the preaching that fills it, so the chapter decides the length rather than a number somebody picked. A chosen plant length has to be checked against this, and where the two disagree the chapter is the fact and the setting is the guess.";
  "Rounded UP, because a part-day of sermon still needs a day to be preached in - which is true of a chapter standing ALONE, and is the whole reason these must not be added together.";
  "Do NOT sum these to size anything. A plant is several chapters in a row, and adding their day counts charges the part-day rounding once per chapter, as though the preaching stopped for the night at every chapter break; it does not, because a plant is one letter read straight through. Sum the LINES and round once at the end. This was a real over-count of nine days across the supply, and days are what the leader's discipling is paid out of, so it bought formation nobody preached for.";
  let lines = await g_sermon_chapter_lines(chapter);
  let per_day = g_day_lines();
  let r = divide_ceil(lines, per_day);
  return r;
}
