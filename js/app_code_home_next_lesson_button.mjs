import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_home_next_lesson_text } from "./app_code_home_next_lesson_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_code_home_next_lesson_button(parent, context) {
  "the one button on the lesson list's bar that opens the next lesson this learner has not finished - a blue row rather than a green one - wherever in the list it happens to sit.";
  "IT RIDES THE BAR RATHER THAN SITTING IN THE LIST. The list is ninety-odd rows long and this screen comes back scrolled to the lesson the learner just left, measured five and a half thousand pixels down. The list does point a hand at the row to do next, but a hand five thousand pixels away is a hand nobody is looking at, so the way on has to be somewhere that is in view at every scroll position.";
  "NOTHING AT ALL IS DRAWN where every lesson is finished. A button offering somewhere to go when there is nowhere left to go says something untrue, and the row that would have been pointed at does not exist either.";
  "IT IS NOT MARKED AS THE WAY FORWARD, though it is one. The pointed-at row in the list below wears that mark already, and a screen carrying two of them tells a test that either one is where to go next.";
  arguments_assert(arguments, 2);
  let index_start = 0;
  let id_none = null;
  ("the learner is standing on the list rather than inside a lesson, so no lesson is being left behind: the search starts at the very top and skips nothing");
  let lesson = app_code_lesson_incomplete_next(context, index_start, id_none);
  let none = null_is(lesson);
  if (none) {
    return null;
  }
  let id = property_get(lesson, "id");
  async function on_click() {
    await app_shared_screen_go_tab(context, "lesson_id", id, app_code_examples);
  }
  ("the same way in as the row itself uses, so the lesson opens remembering which lesson this tab picked");
  let text = app_code_home_next_lesson_text();
  let button = app_shared_button(parent, text, on_click);
  return button;
}
