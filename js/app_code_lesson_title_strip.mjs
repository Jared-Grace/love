import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
import { app_code_lesson_complete_is } from "./app_code_lesson_complete_is.mjs";
import { app_code_lesson_index_by_id } from "./app_code_lesson_index_by_id.mjs";
import { add_1_period } from "./add_1_period.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_title_strip } from "./app_code_title_strip.mjs";
export function app_code_lesson_title_strip(root, context, lesson) {
  ("a quiet top bar on every lesson screen - a small home button (just the house) sitting right beside the lesson title, the pair centered together, so home is one tap away without scrolling to the bottom and reads as part of the header rather than floating alone in a corner; the title reuses the lesson's own home title (",
    app_code_lesson_title_render.name,
    ") and is muted so it anchors 'where am I' without competing with the teaching or the quiz below, while the home button stays full-strength so it is clearly tappable");
  ("An arrow back and an arrow on sit at the two ends of the same bar, stepping one lesson at a time through the course. A reader who wants the lesson before this one had to go home, find it in a list of over a hundred rows and scroll to it, and the one thing they knew - that it is the row above - was the one thing the list would not use.");
  let lesson_id = property_get(lesson, "id");
  let progress = app_code_progress_read(context);
  let complete = app_code_lesson_complete_is(progress, lesson_id);
  ("where the reader is in the course is worked out before anything is drawn, because both arrows and the number in front of the title are all reading the same one answer");
  let lesson_index = app_code_lesson_index_by_id(lesson_id);
  function title_paint(title) {
    "the lesson's own number leads the title, the same 1-based number and same trailing period the home list shows in its gutter, so a learner reading a lesson can say which one they are on without going back - and so can anyone they are asking about it. It sits INSIDE the muted title rather than beside the home button, because it is part of naming where you are rather than a second control";
    let number_text = add_1_period(lesson_index);
    html_span_text(title, number_text);
    html_span_space(title);
    ("a finished lesson wears the check the home list gives its row, in the same place - after the number, before the title - so a learner who opens a lesson can see they already finished it without going back to the list, at the human's request");
    if (complete) {
      let check = emoji_check();
      html_span_text(title, check);
      html_span_space(title);
    }
    app_code_lesson_title_render(title, lesson);
  }
  let index_previous = subtract_1(lesson_index);
  let index_next = add_1(lesson_index);
  let strip = app_code_title_strip(
    root,
    context,
    complete,
    index_previous,
    index_next,
    title_paint,
  );
  return strip;
}
