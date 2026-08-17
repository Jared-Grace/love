import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_reply_lambda2(c, update, card) {
  arguments_assert(arguments, 3);
  async function lambda3() {
    await update(c);
  }
  app_shared_button(card, c, lambda3);
}
