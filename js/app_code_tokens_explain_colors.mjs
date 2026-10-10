import { app_code_highlight_color_seventh } from "./app_code_highlight_color_seventh.mjs";
import { list_skip } from "./list_skip.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_colors } from "./app_code_highlight_colors.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_tokens_explain_colors() {
  arguments_assert(arguments, 0);
  ("one colour for each token of the small example a token is explained with: the pointing colours other than the blue, because blue is the colour of the token to choose next and a blue here would read as an instruction, and the olive seventh pointing colour for the sixth token, since there are only five besides the blue; a dark grey stood there first and the human asked for a colour");
  let colors = app_code_highlight_colors();
  let rest = list_skip(colors, 1);
  let seventh = app_code_highlight_color_seventh();
  list_add(rest, seventh);
  return rest;
}
