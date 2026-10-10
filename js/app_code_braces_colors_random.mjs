import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_colors } from "./app_code_highlight_colors.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export function app_code_braces_colors_random() {
  arguments_assert(arguments, 0);
  ("the pointing colours in a random order, for colouring pairs of braces, so the first pair to open is not always the same blue and the next not always the same green; asked for by the human 2026-10-10");
  let colors = app_code_highlight_colors();
  list_shuffle(colors);
  return colors;
}
