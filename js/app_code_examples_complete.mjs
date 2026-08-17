import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_examples_example_another } from "./app_code_examples_example_another.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { property_equals_not } from "./property_equals_not.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_examples_complete_is } from "./app_code_lesson_examples_complete_is.mjs";
export function app_code_examples_complete(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_examples_example_another(context, root);
  let example_another = property_get(r2, "example_another");
  let refresh = property_get(r2, "refresh");
  let another = property_get(r2, "another");
  let c = property_get(r2, "c");
  let lesson = property_get(r2, "lesson");
  let value_initial = app_code_lesson_first_id();
  let lesson_first_not = property_equals_not(lesson, "id", value_initial);
  let on_back = null;
  let back_text = null;
  let more_text = text_combine("See ", another);
  let complete = app_code_lesson_examples_complete_is(lesson);
  let r = {
    example_another,
    refresh,
    c,
    lesson_first_not,
    on_back,
    back_text,
    more_text,
    complete,
  };
  return r;
}
