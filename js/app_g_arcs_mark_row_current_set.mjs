import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_arcs_mark_row_current_set(row, current) {
  "The dressing that says whether a moved row is the one the reader was just carried to: a ring around the whole row and a stronger wash behind it when it is, and the ordinary faint wash every moved row carries when it is not.";
  "A TOUR NEEDS A HERE AS WELL AS A NEXT. The press says which change it has gone to by number, but a number is on the press and the reader is looking at the page - and where two moved rows are near each other on the same screen, nothing on the page itself said which of them had been arrived at.";
  "THE RING IS A SHADOW AND NOT A BORDER, because a border takes up room. A row that grew by three pixels when it became current would push everything under it down the page at the moment the reader is trying to read it, and the arrival would end with the words drifting.";
  "IT IS TOLD WHICH STATE TO BE IN RATHER THAN TOLD TO SWAP. Asked to swap it would have to read the row back to find out what it is now, and two presses arriving out of order would leave a row ringed with nothing pointing at it.";
  "THE ORDINARY WASH LIVES HERE TOO, so the two states are written next to each other and cannot drift apart. Held at the place a row is first drawn, clearing the ring would have restored a colour spelled somewhere else, and the row would come back a shade that no longer matched its neighbours.";
  arguments_assert(arguments, 2);
  let mark_color = app_g_arcs_moved_color();
  let ring = "none";
  let wash = "rgba(180,83,10,0.05)";
  if (current) {
    ring = text_combine_multiple(["0 0 0 3px ", mark_color]);
    wash = "rgba(180,83,10,0.22)";
  }
  html_style_assign(row, {
    "box-shadow": ring,
    "background-color": wash,
  });
}
