import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
import { app_shared_button_border_width } from "./app_shared_button_border_width.mjs";
import { html_border } from "./html_border.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
export function app_code_remember_from_lesson(
  parent,
  context,
  lesson_fn,
  parts,
) {
  arguments_assert(arguments, 4);
  ("a reminder of something an earlier lesson taught, opening with which lesson that was: Remember, from lesson N, and then the parts, which alternate plain writing and code the same way every other line on a lesson screen does");
  ("The number is asked of the lesson order rather than written into the sentence, so a lesson moved or put in ahead of the one pointed at changes every reminder with it, and no reminder can go on naming a lesson that is now somewhere else.");
  ("The number is itself the button, so a learner who does not remember can go and look without hunting through the list for it.");
  let fns = app_code_lessons_fns();
  let index = list_index_of(fns, lesson_fn);
  let number = add_1(index);
  let ids = app_code_lesson_ids_short();
  let lesson_id = property_get(ids, lesson_fn.name);
  async function on_click() {
    await app_shared_screen_go_tab(
      context,
      "lesson_id",
      lesson_id,
      app_code_examples,
    );
  }
  let div = html_div(parent);
  html_span_text_content(div, "Remember, from lesson ");
  let button = app_shared_button_inline(div, number, on_click);
  ("the same thin edge the app draws round every other pale button, so a number standing in a sentence still reads as one of them");
  let border_color = app_shared_color_gray_medium();
  let border_width = app_shared_button_border_width();
  html_border(button, border_width, border_color);
  ("the comma that follows the number sits against it, the way it would against a number written as plain writing, so the gap the button keeps on its right is taken away");
  html_style_assign(button, {
    "margin-right": "0",
  });
  let first = list_first(parts);
  let rest = list_skip(parts, 1);
  let opening = text_combine_multiple([", ", first]);
  html_cycle_code(div, [opening, ...rest]);
  return div;
}
