import { ceil } from "./ceil.mjs";
import { divide } from "./divide.mjs";
import { g_sermon_chapter_lines } from "./g_sermon_chapter_lines.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
export async function g_sermon_chapter_days(chapter) {
  "How many days of preaching one chapter holds - its sermon lines divided by the lines a day gets through.";
  "This is a DERIVED day count, and it is the honest one: a plant lasts as long as the preaching that fills it, so the chapter decides the length rather than a number somebody picked. A chosen plant length has to be checked against this, and where the two disagree the chapter is the fact and the setting is the guess.";
  "Rounded UP, because a part-day of sermon still needs a day to be preached in.";
  let lines = await g_sermon_chapter_lines(chapter);
  let per_day = g_day_lines();
  let exact = divide(lines, per_day);
  let r = ceil(exact);
  return r;
}
