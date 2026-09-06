import { arguments_assert } from "./arguments_assert.mjs";
import { html_font_sans_serif_value } from "./html_font_sans_serif_value.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_lesson_quiz_token_select_count_badge_style(badge) {
  arguments_assert(arguments, 1);
  ("dress the little number on a piece so it reads as a note about the piece and not as part of the code written on it.");
  ("EVERYTHING HERE SAYS THE SAME THING FOUR WAYS: this is not code. The piece is a tile of a line the learner is building, and anything printed on it in the tile's own face and colour is read as another symbol of that line. So the number is lifted off the baseline, set smaller, given the page's ordinary lettering instead of the code lettering, and painted a pale blue against the white the code is written in. Any one of those alone leaves it arguable; together there is nothing to argue about.");
  ("IT IS RAISED RATHER THAN SET BESIDE, because a note beside a symbol is where code puts its next symbol. Above the line is a place a line of code never uses, so nothing the learner is being taught competes for it.");
  let font = html_font_sans_serif_value();
  html_style_set(badge, "font-family", font);
  html_style_font_size(badge, "0.6em");
  html_style_set(badge, "vertical-align", "super");
  html_style_set(badge, "margin-left", "0.12em");
  let color = app_shared_color_blue_pale();
  html_font_color_set(badge, color);
}
