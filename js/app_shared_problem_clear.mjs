import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_problem_words_set } from "./app_shared_problem_words_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_problem_clear(field, status, button) {
  arguments_assert(arguments, 3);
  ("Undoes ",
    fn_name("app_shared_problem_show"),
    ": takes the ring off the field and the button, and empties the status line.");
  app_shared_problem_mark(field, false);
  app_shared_problem_words_set(status, "");
  html_style_assign(button, {
    border: "",
  });
}
