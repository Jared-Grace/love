import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_code_lesson_title_strip_arrow(
  parent,
  context,
  index,
  button_get,
) {
  "$plain index";
  "one of the two arrows at the head of a lesson: it moves to the lesson sitting at index in the course, and where the course has no lesson at that place it is drawn switched off instead of being left out";
  "DRAWN EITHER WAY ON PURPOSE. Left out, the first lesson and the last one would carry one arrow where every other lesson carries two, and everything beside them would slide across as the reader moved through the course. A faded arrow says there is nothing further that way, in the place the reader is already looking.";
  "It opens the lesson exactly the way the home list opens it - straight to that lesson's examples - so arriving by arrow and arriving by pressing that lesson's row land the reader in the same place.";
  "Which arrow to draw is handed in rather than chosen here, because the two directions differ only in the arrow they wear and one of them turns its arrow round for a reader whose language runs the other way. Choosing here would put that reversal in two places.";
  arguments_assert(arguments, 4);
  let lessons = app_code_lessons();
  let lesson = list_get_or_null(lessons, index);
  let missing = null_is(lesson);
  async function go() {
    if (missing) {
      return;
    }
    let id = property_get(lesson, "id");
    await app_shared_screen_go_tab(context, "lesson_id", id, app_code_examples);
  }
  let button = button_get(parent, go);
  app_shared_button_disabled_set(button, missing);
  return button;
}
