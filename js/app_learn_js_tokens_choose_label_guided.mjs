import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_tokens_choose_say } from "./app_learn_js_tokens_choose_say.mjs";
export function app_learn_js_tokens_choose_label_guided(div) {
  arguments_assert(arguments, 1);
  ("the label over code whose tokens are chosen in order with the next one shown in blue");
  app_learn_js_tokens_choose_say(div, "", "Choose", true);
}
