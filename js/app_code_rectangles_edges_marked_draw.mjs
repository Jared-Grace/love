import { app_code_rectangles_edges_colored_draw } from "./app_code_rectangles_edges_colored_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
export function app_code_rectangles_edges_marked_draw(
  parent,
  columns,
  rows,
  first,
  second,
  across,
  down,
  marked,
) {
  arguments_assert(arguments, 8);
  ("a picture of two rectangles of squares, with the lines between squares numbered as a ruler is, so a rectangle's edges can be read off it: the numbers across the top count the lines from the left, the numbers down the left count them from the top. first and second are each [left, right, top, bottom] in those numbers, and the squares both cover are filled with the overlap colour");
  ("across and down are each [start, end] of the shared part, whose numbers wear the start and end colours of the meetings lessons, or null to leave every number plain");
  ("marked is [left, right, top, bottom] of squares filled with the overlap colour whether or not both rectangles cover them, or null for none - asked by the human 2026-10-04 to show the square a wrong answer counts, between two rectangles that share none");
  ("The numbers sit on the lines and not on the squares, unlike the grid lessons' headings, because a meeting from 9 to 11 is two hours: the numbers are the edges, and left < right reads true exactly when a rectangle has a square between them.");
  let overlap_color = app_code_highlight_color_third();
  let grid = app_code_rectangles_edges_colored_draw(
    parent,
    columns,
    rows,
    first,
    second,
    across,
    down,
    marked,
    overlap_color,
  );
  return grid;
}
