import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_same_which } from "./app_code_lesson_same_which.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_same_draw(
  parent,
  context,
  fn_reading,
  fn_repeated,
  right,
) {
  arguments_assert(arguments, 5);
  ("the sentence that tells a learner the screen they are reading is one they have already read, and what is being asked of them instead of what was asked last time - with the lesson it names pressable, so the way back is the words that say where");
  ("It exists because a lesson that reuses an earlier lesson's telling word for word is read as a mistake. A learner who meets the same paragraph twice stops to hunt for the difference, and the difference is not in the paragraph at all - it is in what the card below asks them for. The sentence says that outright so the hunt never starts.");
  ("NAMING A LESSON AND NOT OPENING IT IS HALF AN ANSWER. The sentence sends the reader somewhere, so the words saying where are the words to press. Told they have read this before and left to find it on the home list, a learner is handed work rather than a way back - and the number in the sentence is the number of the row they would be hunting for, which is exactly the hunt worth removing.");
  ("Which lesson is named is worked out from where the two of them sit rather than typed, so putting a lesson in between changes the sentence instead of falsifying it.");
  ("The lesson it opens is always one this reader can reach. A lesson being repeated sits earlier than the lesson repeating it, and the built site shows a run cut off the tail - so a reader looking at this screen has the other one behind them, and there is no missing case to draw switched off.");
  let c = app_code_container_light_blue(parent);
  let div = html_div(c);
  html_span_text(div, "This lesson is the same as ");
  let which = app_code_lesson_same_which(fn_reading, fn_repeated);
  async function go() {
    let lesson = app_code_lesson_fn_id_set(fn_repeated);
    await app_code_lesson_go(lesson, context);
  }
  app_shared_button_inline(div, which, go);
  let tail = text_combine(", except ", right);
  html_span_text(div, tail);
  return c;
}
