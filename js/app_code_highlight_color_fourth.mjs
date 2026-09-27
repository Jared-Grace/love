import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_purple_pointer } from "./app_shared_color_purple_pointer.mjs";
export function app_code_highlight_color_fourth() {
  arguments_assert(arguments, 0);
  ("the fourth pointing colour, for a screen pointing at four different things at once, such as a grid's earlier rows, its marked chair, its row numbers and its column numbers");
  ("Added 2026-09-27 when the human asked for row numbers and column numbers each in a colour of their own beside the blue and green the grid already wore; the third pointer took the rows and this one the columns.");
  let color = app_shared_color_purple_pointer();
  return color;
}
