import { app_learn_js_settings_clear_confirm } from "./app_learn_js_settings_clear_confirm.mjs";
import { app_learn_js_settings_complete_confirm } from "./app_learn_js_settings_complete_confirm.mjs";
import { app_code_settings } from "./app_code_settings.mjs";
import { app_learn_js_examples } from "./app_learn_js_examples.mjs";
import { app_learn_js_quiz } from "./app_learn_js_quiz.mjs";
import { app_learn_js_home } from "./app_learn_js_home.mjs";
import { app_learn_js_review } from "./app_learn_js_review.mjs";
export function app_learn_js_screens() {
  "Every screen the code app has, in the order they are offered.";
  let s = [
    app_learn_js_home,
    app_learn_js_quiz,
    app_learn_js_examples,
    app_learn_js_review,
    app_code_settings,
    app_learn_js_settings_complete_confirm,
    app_learn_js_settings_clear_confirm,
  ];
  return s;
}
