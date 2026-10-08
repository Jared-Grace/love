import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_element_fake } from "./html_element_fake.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { app_code } from "./app_code.mjs";
import { app_code_above_draw } from "./app_code_above_draw.mjs";
export function app_code_lesson_above_fake_draw(fn) {
  arguments_assert(arguments, 1);
  ("Draws one lesson's telling - the part above the examples - into a stand-in element, through the same step the app draws it through, and hands back the element. Run it inside ",
    fn_name("app_code_lessons_fake_page_lambda"),
    ".");
  ("The telling is handed the real app as its surroundings, because a Remember card asks the app where the reader is.");
  let lesson = fn();
  let above = property_get(lesson, "above");
  let element = html_element_fake();
  let root = html_component_wrap(element);
  let context = {
    app_fn: app_code,
  };
  app_code_above_draw(root, above, context);
  return element;
}
