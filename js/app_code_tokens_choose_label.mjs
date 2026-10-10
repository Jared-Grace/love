import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_tokens_choose_say } from "./app_code_tokens_choose_say.mjs";
export function app_code_tokens_choose_label(div) {
  arguments_assert(arguments, 1);
  ("the label over code whose tokens are chosen in order with nothing shown to follow");
  app_code_tokens_choose_say(div, "", "Choose", false);
}
