import { app_code_chair_parts_words_split } from "./app_code_chair_parts_words_split.mjs";
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
  ("THE WORDS row AND column WEAR THEIR HEADINGS' COLOURS TOO, in writing and in code chips alike, rows red and columns purple, so a word and the numbers it names are seen to be one thing, asked by the human 2026-09-27. A word is drawn as a tile, as blue chairs is. Not picked: colouring the letters only, which is a second way to point beside the tile the lessons already use; and the code cards, whose painter points at numbers only");
  let split = app_code_chair_parts_words_split(parts);
  let draw = app_code_line_pointed_draw(split, [
    [["blue chairs"], color],
    [["7", "green chair"], color2],
    [["row", "rows", "Row", "Rows"], color3],
    [["column", "columns", "Column", "Columns"], color4],
    [row_numbers, color3],
    [column_numbers, color4],
    [["3"], color5],
  ]);
  return draw;
}
