import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_dev_overlay } from "./app_shared_dev_overlay.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_bless_dev_crowd_counts } from "./app_g_bless_dev_crowd_counts.mjs";

export function app_g_bless_dev_crowd(world) {
  arguments_assert(arguments, 1);
  ("The dev screen that reports how crowded this world came out - a page of four numbers");
  ("and nothing to press.");
  ("It exists because the one question this game keeps having to answer cannot be answered");
  ("by looking. A street either reads as busy or reads as still, and both of those are the");
  ("same picture until somebody counts; the crowd was tuned three times off a player saying");
  ("hardly anybody is walking, and each time the count said something the picture did not.");
  ("Every world is a fresh one, so this is a reading of THIS world rather than a fact about");
  ("the game. Two loads will not agree exactly. That is the honest shape of it - the numbers");
  ("that built the world are fixed, where people ended up standing is not - and a screen");
  ("that hid the spread by averaging several worlds would be answering a question nobody");
  ("playing has: they are looking at one street.");
  ("Held is the number to read first. Occupied says how full the pavement looks; held says");
  ("how many people were told to take a step and could not, which is the thing a player");
  ("actually complains about. They move together but they are not the same, and it is the");
  ("second that decides whether the street is alive.");
  let counts = app_g_bless_dev_crowd_counts(world);
  let people = property_get(counts, "people");
  let room = property_get(counts, "room");
  let stuck = property_get(counts, "stuck");
  let occupied = property_get(counts, "occupied");
  let held = property_get(counts, "held");
  let column = app_shared_dev_overlay("Crowd");
  let line_people = text_combine_multiple(["People out: ", people]);
  html_p_text(column, line_people);
  let line_room = text_combine_multiple(["Tiles to stand on: ", room]);
  html_p_text(column, line_room);
  let line_occupied = text_combine_multiple(["Occupied: ", occupied, "%"]);
  html_p_text(column, line_occupied);
  let line_held = text_combine_multiple([
    "Nowhere to step: ",
    stuck,
    " of ",
    people,
    " (",
    held,
    "%)",
  ]);
  html_p_text(column, line_held);
}
