import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
export function app_learn_js_success_message(parent) {
  arguments_assert(arguments, 1);
  ("the message after a right answer, as wide as the dark blue card above it and the buttons below it");
  ("Asked for by the human 2026-11-12. The shared message keeps a margin on every side, the same as a tile keeps from its neighbours, so set into a space already capped to the card's width it came out narrower than the card by that margin on each side. The margin above and below stays, so it still stands apart from the card and the buttons.");
  let p = app_shared_success_message(parent);
  html_style_margin_x(p, "0");
  return p;
}
