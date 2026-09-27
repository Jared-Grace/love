import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
export function app_code_line_ends_middle_draw(parts, ends, middles) {
  arguments_assert(arguments, 3);
  ("a line of writing whose ends wear the first pointing colour and whose middles wear the second - the same two the number line draws them in");
  ("ends and middles are lists of the texts to colour on this line; a line that points at nothing passes two empty lists.");
  let color_end = app_code_highlight_color();
  let color_middle = app_code_highlight_color_second();
  let draw = app_code_line_pointed_draw(parts, [
    [ends, color_end],
    [middles, color_middle],
  ]);
  return draw;
}
