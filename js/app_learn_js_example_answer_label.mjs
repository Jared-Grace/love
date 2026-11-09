import { app_learn_js_label_text } from "./app_learn_js_label_text.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_learn_js_example_answer_label(a_container, quiz_label) {
  "the label over the answers, handed back so a quiz that works its question out in steps can say something new in it as the steps go";
  let d = app_learn_js_label_text(a_container, quiz_label);
  ("2026-11-09, at the human's asking for good room above it: the label stands under the question, one stacked item below another, so it takes the gap stacked items leave between each other - the edge gap it took before is smaller on purpose, since an edge borrows from the reading width");
  let value = app_shared_spaced_gap();
  html_style_margin_top(d, value);
  return d;
}
