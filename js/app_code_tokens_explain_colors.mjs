import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_colors } from "./app_code_highlight_colors.mjs";
import { list_slice_from } from "./list_slice_from.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_tokens_explain_colors() {
  arguments_assert(arguments, 0);
  ("one colour for each token of the small example a token is explained with: the pointing colours other than the blue, because blue is the colour of the token to choose next and a blue here would read as an instruction, and a dark grey for the sixth token, since there are five pointing colours besides the blue");
  let colors = app_code_highlight_colors();
  let rest = list_slice_from(colors, 1);
  let gray = app_shared_color_gray_dark();
  list_add(rest, gray);
  return rest;
}
