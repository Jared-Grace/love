import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
export function app_code_chair_line_pointed(
  parts,
  row_numbers,
  column_numbers,
) {
  arguments_assert(arguments, 3);
  ("a line about chair 7 in rows of 3 wearing the chair grid's colours: the blue chairs blue, chair 7 green, the row and column numbers it names in the headings' colours, and the 3 chairs in a row in the fifth colour - shared by the row lesson and the column lesson so the two cannot come to colour one thing two ways");
  let color = app_code_highlight_color();
  let color2 = app_code_highlight_color_second();
  let color3 = app_code_highlight_color_third();
  let color4 = app_code_highlight_color_fourth();
  let color5 = app_code_highlight_color_fifth();
  let draw = app_code_line_pointed_draw(parts, [
    [["blue chairs"], color],
    [["7"], color2],
    [row_numbers, color3],
    [column_numbers, color4],
    [["3"], color5],
  ]);
  return draw;
}
