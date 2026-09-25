import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
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
import { app_code_lesson_index_by_id } from "./app_code_lesson_index_by_id.mjs";
import { html_div } from "./html_div.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { app_code_lesson_title_strip_arrow } from "./app_code_lesson_title_strip_arrow.mjs";
import { app_shared_button_arrow_previous_notext } from "./app_shared_button_arrow_previous_notext.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_text_category_color_variable } from "./app_shared_text_category_color_variable.mjs";
import { app_shared_color_green_dark } from "./app_shared_color_green_dark.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { add_1 } from "./add_1.mjs";
import { app_shared_button_arrow_next_notext } from "./app_shared_button_arrow_next_notext.mjs";
import { app_shared_color_green_tint } from "./app_shared_color_green_tint.mjs";
import { app_shared_button_border_width } from "./app_shared_button_border_width.mjs";
import { html_border } from "./html_border.mjs";
export function app_code_lesson_title_strip(root, context, lesson) {
  ("a quiet top bar on every lesson screen - a small home button (just the house) sitting right beside the lesson title, the pair centered together, so home is one tap away without scrolling to the bottom and reads as part of the header rather than floating alone in a corner; the title reuses the lesson's own home title (",
    app_code_lesson_title_render.name,
    ") and is muted so it anchors 'where am I' without competing with the teaching or the quiz below, while the home button stays full-strength so it is clearly tappable");
  ("An arrow back and an arrow on sit at the two ends of the same bar, stepping one lesson at a time through the course. A reader who wants the lesson before this one had to go home, find it in a list of over a hundred rows and scroll to it, and the one thing they knew - that it is the row above - was the one thing the list would not use.");
  let strip = app_code_container_padded_x(root);
  let lesson_id = property_get(lesson, "id");
  let progress = app_code_progress_read(context);
  let complete = app_code_lesson_complete_is(progress, lesson_id);
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
    "grid-template-columns": "1fr auto 1fr",
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
  ("where the reader is in the course is worked out before anything is drawn, because both arrows and the number in front of the title are all reading the same one answer");
  let lesson_index = app_code_lesson_index_by_id(lesson_id);
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
  let index_previous = subtract_1(lesson_index);
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
  });
  ("the lesson's own number leads the title, the same 1-based number and same trailing period the home list shows in its gutter, so a learner reading a lesson can say which one they are on without going back - and so can anyone they are asking about it. It sits INSIDE the muted title rather than beside the home button, because it is part of naming where you are rather than a second control");
  let number_text = add_1_period(lesson_index);
  html_span_text(title, number_text);
  html_span_space(title);
  ("a finished lesson wears the check the home list gives its row, in the same place - after the number, before the title - so a learner who opens a lesson can see they already finished it without going back to the list, at the human's request");
  if (complete) {
    let check = emoji_check();
    html_span_text(title, check);
    html_span_space(title);
    ("on the green bar the title is not muted: the fade that keeps it quiet on the plain bar washes it into the green, so it is written full strength in a deep green that reads against the light one, at the human's request");
    ("NOT BOLD: the bar and the ink already say 'finished', and weight would be a third mark of the same one fact - one the plain bar lacks, so the same title would change its shape, and bold letters are wider, so a long title could wrap on one bar and not the other. Bolding every title to match was the other choice, and it undoes the quiet the plain bar keeps on purpose");
    html_style_assign(title, {
      opacity: "1",
    });
    let ink = app_shared_color_green_deep();
    html_font_color_set(title, ink);
    ("the category word paints its own colour, dark blue, from a setting it reads when drawn - so it is told here to be the dark green twin of that blue instead, and the whole title reads as one green on the green bar, at the human's request");
    let name_category = app_shared_text_category_color_variable();
    let category = app_shared_color_green_dark();
    html_style_variable_set(title, name_category, category);
  }
  app_code_lesson_title_render(title, lesson);
  ("the arrow on is held in a track of its own pushed to the far end, so it sits against the right edge the way home sits against the left. Placed loose in the track it would hug the title instead, and the two arrows would then sit one on each side of the words with nothing marking where the strip ends");
  let trailing = html_div(strip);
  html_style_assign(trailing, {
    display: "flex",
    "align-items": "center",
    "justify-self": "end",
  });
  let index_next = add_1(lesson_index);
  let next = app_code_lesson_title_strip_arrow(
    trailing,
    context,
    index_next,
    app_shared_button_arrow_next_notext,
  );
  if (complete) {
    ("the three buttons on the green bar are painted in green, so the bar reads as one finished piece rather than a green strip with grey tiles sitting on it - but a PALER green than the bar, edged in the deep green of the title, because painted the bar's own green they sank into it and stopped reading as things to press, at the human's request");
    let fill = app_shared_color_green_tint();
    let edge = app_shared_color_green_deep();
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
