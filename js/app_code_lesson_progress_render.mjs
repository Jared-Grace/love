import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_lesson_progress_render(context) {
  arguments_assert(arguments, 1);
  ("draws again what shows the learner's progress in the lesson, through the render the screen left on context, so the screen turns green the moment the lesson is finished; a screen that left none has nothing to draw");
  let render = property_get_or_null(context, "lesson_progress_render");
  let missing = null_is(render);
  if (missing) {
    return;
  }
  render();
}
