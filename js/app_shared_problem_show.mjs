import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_problem_words_set } from "./app_shared_problem_words_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_shared_problem_show(field, words, status, button) {
  arguments_assert(arguments, 4);
  ("A form refused at its button: rings the field that needs something, says what on the status line, rings the button that was pressed, and brings the field into view. app_shared_problem_clear undoes the same three.");
  app_shared_problem_mark(field, true);
  app_shared_problem_words_set(status, words);
  html_style_assign(button, {
    border: "4px solid " + app_shared_color_red(),
  });
  html_component_element_get(field).scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
