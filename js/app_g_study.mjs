import { app_g_study_lambda } from "./app_g_study_lambda.mjs";
import { app_g_button_uncolored } from "./app_g_button_uncolored.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_study(player, overlay, close) {
  let review = property_get(player, "review");
  let has_review = list_empty_not_is(review);
  if (has_review) {
    let left = emoji_book_open();
    let text = text_combine(left, " Study");
    async function lambda() {
      let r = await app_g_study_lambda(overlay, player, review, close);
      return r;
    }
    app_g_button_uncolored(overlay, text, lambda);
  }
}
