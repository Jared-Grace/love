import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_button_face } from "./app_shared_button_face.mjs";
import { app_shared_color_progress_complete } from "./app_shared_color_progress_complete.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_code_column_cap } from "./app_code_column_cap.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { html_div } from "./html_div.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_code_lesson_title_strip_arrow } from "./app_code_lesson_title_strip_arrow.mjs";
import { app_shared_button_arrow_previous_notext } from "./app_shared_button_arrow_previous_notext.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_text_category_complete_set } from "./app_shared_text_category_complete_set.mjs";
import { app_shared_button_arrow_next_notext } from "./app_shared_button_arrow_next_notext.mjs";
import { app_shared_color_green_tint } from "./app_shared_color_green_tint.mjs";
import { app_shared_color_green } from "./app_shared_color_green.mjs";
import { app_shared_button_border_width } from "./app_shared_button_border_width.mjs";
import { html_border } from "./html_border.mjs";
export function app_code_title_strip(
  root,
  context,
  complete,
  index_previous,
  index_next,
  title_paint,
) {
  arguments_assert(arguments, 6);
  ("$plain complete");
  ("$plain index_previous");
  ("$plain index_next");
  ("the quiet top bar of a screen in the course: a small home button and an arrow back at one end, the arrow on at the other, and the title in the middle, painted by title_paint(title) - the lesson screens and the review screens draw the same bar, so a reader moving between them finds home and the arrows in the same places");
  ("the arrows go to the lessons sitting at index_previous and index_next in the course, and are drawn switched off where there is none. complete dresses the whole bar in the finished colour.");
  let strip = app_code_container_padded_x(root);
  ("noted for the page as a whole, which is painted after every screen draws - a finished lesson stands on the same pale green as a finished group on the home list, at the human's request");
  property_set(context, "page_complete_shown", complete);
  if (complete) {
    ("the whole bar is dressed the way the finished lesson's row on the home list is dressed - the button face, painted the finished colour - so the lesson a learner opens looks like the row they pressed to open it, at the human's request");
    ("DRESSED BEFORE IT IS LAID OUT, because the face is made for a tile: it makes the thing inline and gives it a margin all round, which undoes the grid and the auto side margins that centre the bar over the column. Laid out after, the bar's own layout wins and only the look is kept - the other order left the bar hugging the left edge");
    app_shared_button_face(strip);
    let done = app_shared_color_progress_complete();
    html_style_background_color_set(strip, done);
  }
  let column_gap = app_shared_spaced_small_gap();
  ("THREE tracks: home and the arrow back start the first, the title takes the middle, and the arrow on start the third, which is the same width as the first so the middle track sits in the middle of the strip. It reads centered only while the title is short - on a long lesson name the row is wider than the column, so the ends run off the edges, and that is what a reader sees on the longest lessons. The middle track is sized to its content and so shrinks and wraps when it has to, rather than pushing the controls out of the strip");
  html_style_assign(strip, {
    display: "grid",
    "grid-template-columns": "1fr minmax(0, auto) 1fr",
    "justify-items": "start",
    "align-items": "center",
    "column-gap": column_gap,
  });
  ("capped to the same column as everything under it, so the home button starts where the cards start. Without it the strip is as wide as the window and the button sits out in the margin beside the reading column rather than at the head of it");
  app_code_column_cap(strip);
  let value = app_shared_spaced_gap();
  html_style_margin_y(strip, value);
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  ("home and the arrow back share the first track, laid side by side inside it, because a grid gives each thing put into it a track of its own and there are only three - so the two that belong on the left have to arrive as one thing");
  let leading = html_div(strip);
  html_style_assign(leading, {
    display: "flex",
    "align-items": "center",
    "column-gap": column_gap,
  });
  let text = emoji_home();
  let home = app_shared_button(leading, text, go_home);
  ("the two arrows step by one lesson in the list and no further - never to the next UNFINISHED lesson, which is what the skip button at the foot of the lesson already does. These are for reading back over what came before and looking ahead, so they must land where a reader counting lesson numbers expects to land");
  let previous = app_code_lesson_title_strip_arrow(
    leading,
    context,
    index_previous,
    app_shared_button_arrow_previous_notext,
  );
  let title = html_div(strip);
  let font_size = app_shared_font_size_label();
  html_style_assign(title, {
    "text-align": "center",
    "font-size": font_size,
    opacity: "0.6",
    "line-height": "1.5",
    "overflow-wrap": "anywhere",
    "min-width": "0",
    "justify-self": "stretch",
  });
  ("a line of code in the title may break when it is wider than the whole title: code has few spaces, so on a phone with the text size turned up a line like let rest = Math.floor(n / 10); was wider than the screen and ran off the right edge, at the human's request, 2026-09-28. The middle track is floored at nothing (minmax(0, auto)), and so is the title in it (min-width 0 - a grid item otherwise refuses to be narrower than its longest unbroken piece), and the title is stretched to the track (the strip starts its items, which sizes each to its own content and let the title spill over the arrow on). anywhere, not the break-word the home list rows use: the code tile sizes itself to its own content, and only anywhere lets that content get narrower - break-word left the tile running off the edge. Where the title is too narrow for a whole word, anywhere and break-word both split it, so nothing is lost by choosing anywhere");
  ("the lines of the title are spaced the way the home list spaces the same title, because a title that wraps carries its code tile onto the second line, and the tile's dark ground is taller than tightly packed lines - so at the plain spacing it covered the bottom of the line above, at the human's request");
  if (complete) {
    ("on the green bar the title is not muted: the fade that keeps it quiet on the plain bar washes it into the green, so it is written full strength in a deep green that reads against the light one, at the human's request");
    ("NOT BOLD: the bar and the ink already say 'finished', and weight would be a third mark of the same one fact - one the plain bar lacks, so the same title would change its shape, and bold letters are wider, so a long title could wrap on one bar and not the other. Bolding every title to match was the other choice, and it undoes the quiet the plain bar keeps on purpose");
    html_style_assign(title, {
      opacity: "1",
    });
    let ink = app_shared_color_green_deep();
    html_font_color_set(title, ink);
    ("the category word paints its own colour, dark blue, from a setting it reads when drawn - so it is told here to be the dark green twin of that blue instead, and the whole title reads as one green on the green bar, at the human's request");
    app_shared_text_category_complete_set(title);
  }
  title_paint(title);
  ("the arrow on is held in a track of its own pushed to the far end, so it sits against the right edge the way home sits against the left. Placed loose in the track it would hug the title instead, and the two arrows would then sit one on each side of the words with nothing marking where the strip ends");
  let trailing = html_div(strip);
  html_style_assign(trailing, {
    display: "flex",
    "align-items": "center",
    "justify-self": "end",
  });
  let next = app_code_lesson_title_strip_arrow(
    trailing,
    context,
    index_next,
    app_shared_button_arrow_next_notext,
  );
  if (complete) {
    ("the three buttons on the green bar are painted in green, so the bar reads as one finished piece rather than a green strip with grey tiles sitting on it - but a PALER green than the bar, edged in a plain green between the bar's and the title's, because painted the bar's own green they sank into it and stopped reading as things to press, at the human's request. The edge was the title's deep green first, and read as too heavy against the bar, so it was brought closer to the bar's colour, again at the human's request");
    let fill = app_shared_color_green_tint();
    let edge = app_shared_color_green();
    let border_width = app_shared_button_border_width();
    function paint(button) {
      html_style_background_color_set(button, fill);
      html_border(button, border_width, edge);
    }
    paint(home);
    paint(previous);
    paint(next);
  }
  return strip;
}
