import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_lesson_complete_show(context) {
  arguments_assert(arguments, 1);
  ("dresses the screen in the finished green the moment the lesson it shows is finished, through the redraw the screen left on context; a screen that left none has nothing to dress");
  let show = property_get_or_null(context, "lesson_complete_show");
  let missing = null_is(show);
  if (missing) {
    return;
  }
  show();
}
