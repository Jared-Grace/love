import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_examples_complete } from "./app_code_examples_complete.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_examples_on_more(context, root) {
  arguments_assert(arguments, 2);
  let r2 = app_code_examples_complete(context, root);
  let complete = property_get(r2, "complete");
  let more_text = property_get(r2, "more_text");
  let back_text = property_get(r2, "back_text");
  let on_back = property_get(r2, "on_back");
  let lesson_first_not = property_get(r2, "lesson_first_not");
  let c = property_get(r2, "c");
  let refresh = property_get(r2, "refresh");
  let example_another = property_get(r2, "example_another");
  let on_more = refresh;
  let r = {
    complete,
    more_text,
    back_text,
    on_back,
    lesson_first_not,
    c,
    example_another,
    on_more,
  };
  return r;
}
