import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_sans_serif_value } from "./html_font_sans_serif_value.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_lesson_quiz_token_select_count_badge_style(
  badge,
  tile,
) {
  arguments_assert(arguments, 2);
  ("dress the little number on a piece as a badge sitting over the piece's top right corner, the way a count of unread messages sits over the thing it is counting.");
  ("IT IS LIFTED OFF THE PIECE ALTOGETHER rather than written on it. The piece is a black tile carrying one symbol of a line of code, and everything inside that black is read as part of the line - which is why setting the number smaller and raised was still wrong. It was smaller and raised and inside, and a small raised two inside a code tile after a seven is how mathematics writes seven squared. Standing the number outside the tile's edge is what settles it, because no symbol of a line of code has ever hung off the corner of another one.");
  ("A COUNT OVER A CORNER IS A SHAPE THE READER ALREADY KNOWS. It is how a phone says how many messages are waiting, so it arrives already meaning a number of things rather than a thing itself, and none of that has to be taught here.");
  ("THE TILE IS MADE THE THING THE BADGE IS PLACED AGAINST. A badge placed against nothing is placed against the page, and the whole row's badges would then pile up in one corner of the screen. So the tile is given a position of its own here, beside the badge that needs it, rather than in the dressing every button in the app wears - only the piece actually carrying a badge needs it, and a rule written where it is needed cannot be dropped by someone tidying the rule it was hiding behind.");
  ("IT IS FILLED PALE BLUE WITH BLACK LETTERING, which is the tile's own colours turned around. The tile is black with white on it and the page around is light, so a pale fill stands out against both the tile and the page, and no other mark in this quiz is that colour.");
  ("TAPS PASS THROUGH IT. The badge covers a corner of a button a learner is meant to be able to press, and a press that lands on the badge is a press meant for the piece underneath it, so the badge is told not to catch presses at all.");
  html_style_set(tile, "position", "relative");
  html_style_set(badge, "position", "absolute");
  html_style_set(badge, "top", "-0.45em");
  html_style_set(badge, "right", "-0.45em");
  let font = html_font_sans_serif_value();
  html_style_set(badge, "font-family", font);
  html_style_font_size(badge, "0.62em");
  html_style_set(badge, "font-weight", "bold");
  html_style_line_height(badge, "1");
  html_style_padding_x(badge, "0.36em");
  html_style_padding_y(badge, "0.2em");
  html_border_radius(badge, "999px");
  let color_fill = app_shared_color_blue_pale();
  html_style_background_color_set(badge, color_fill);
  let color_lettering = app_shared_color_code_background();
  html_font_color_set(badge, color_lettering);
  html_style_set(badge, "white-space", "nowrap");
  html_style_set(badge, "pointer-events", "none");
}
