import { html_font_set } from "./html_font_set.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_lesson_quiz_token_select_count_badge_inside_percent } from "./app_code_lesson_quiz_token_select_count_badge_inside_percent.mjs";
import { subtract } from "./subtract.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_font_sans_serif_value } from "./html_font_sans_serif_value.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_blue_medium } from "./app_shared_color_blue_medium.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_border } from "./html_border.mjs";
export function app_code_lesson_quiz_token_select_count_badge_style(
  badge,
  tile,
) {
  arguments_assert(arguments, 2);
  ("dress the little number on a piece as a badge hanging off the piece's right hand side, level with its top, the way a count of waiting messages sits on the thing it is counting.");
  ("IT HANGS OFF THE SIDE AND NOT OFF THE TOP. It was over the top right corner, and the row of pieces has the line being built sitting directly above it, so the badges were drawn over that line. Nothing above the row belongs to the row, and there is nothing to the right of a piece except the next piece - which the row is told to stand clear of. So sideways is the one direction this can go.");
  ("IT IS HUNG FROM THE PIECE'S TOP EDGE rather than centred on it, because a badge reads as a mark on a thing when it sits high on it and as a second thing standing beside it when it sits in the middle. Its top edge is put level with the piece's top edge, which is the highest it can be put, and the highest it can be put without ever reaching above the piece is the same place - so this is as high as was asked for and still cannot touch the line being built. It holds whatever the badge is made to say and however large it is made: growing it can only push it downwards.");
  ("MOST OF IT IS OUTSIDE THE BLACK. A piece is a black tile carrying one symbol of a line of code, and anything drawn inside that black is read as part of the line - a small number inside a code tile after a seven is how mathematics writes seven squared. Only a sliver of the badge lies on the tile, enough to read as fastened to it, and the rest stands off the edge on the page.");
  ("IT IS A BLUE NUMBER ON THE PALEST BLUE. The colours here were walked in from both ends: black on the pale blue was too close together to read at arm's length, black on white was as far apart as two colours go and read harder than a small note beside a piece ought to, and a deep blue on white was still nearer that end than the middle. So the fill is stepped off white to the palest blue the pages already use, and the lettering is stepped down off the deepest blue - each end moved toward the other rather than either one moved twice.");
  ("THE LETTERING AND THE RING ARE THE SAME BLUE. The page behind the badge is very nearly white, so a fill this pale has almost no edge on it and the ring is what draws the badge's outline. Drawing the outline and the number in one colour is what makes the badge read as a single small mark; two colours would make the ring a second thing to look at. Being much darker than the fill, that one blue also draws an edge where the badge crosses onto the black.");
  ("TAPS PASS THROUGH IT. The badge lies over the edge of a button a learner is meant to be able to press, and a press that lands on the badge is a press meant for the piece under it, so the badge is told not to catch presses at all.");
  html_style_set(tile, "position", "relative");
  html_style_set(badge, "position", "absolute");
  html_style_set(badge, "left", "100%");
  html_style_set(badge, "top", "0");
  let inside = app_code_lesson_quiz_token_select_count_badge_inside_percent();
  let back = subtract(0, inside);
  let spelled = text_from_number(back);
  let shift = text_combine_multiple(["translate(", spelled, "%, 0)"]);
  html_style_set(badge, "transform", shift);
  let font = html_font_sans_serif_value();
  html_font_set(badge, font);
  html_style_font_size(badge, "0.8em");
  html_bold(badge);
  html_style_line_height(badge, "1");
  html_style_padding_x(badge, "0.3em");
  html_style_padding_y(badge, "0.16em");
  html_border_radius(badge, "999px");
  let color_fill = app_shared_container_blue_background_color();
  html_style_background_color_set(badge, color_fill);
  let color_blue = app_shared_color_blue_medium();
  html_font_color_set(badge, color_blue);
  html_border(badge, "1.5px", color_blue);
  html_style_white_space(badge, "nowrap");
  html_style_set(badge, "pointer-events", "none");
}
