import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_explain } from "./app_code_review_explain.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_code_milestone_begun_key } from "./app_code_milestone_begun_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_milestone_intro(root, context, checkpoint) {
  arguments_assert(arguments, 3);
  ("the first screen of a milestone: its words by themselves, and a Begin button that writes down it was pressed and draws the questions - asked for by the human 2026-10-23");
  let explain = property_get(checkpoint, "explain");
  app_code_review_explain(root, explain);
  let c = app_code_container_padded_x(root);
  let arrow = emoji_arrow_right();
  let text = text_combine_middle_space_nb(arrow, "Begin");
  let key = property_get(checkpoint, "key");
  function begin() {
    let key_begun = app_code_milestone_begun_key();
    storage_session_set_context(context, key_begun, key);
    app_code_review(context);
  }
  let button = app_shared_button_wide(c, text, begin);
  html_data_set_test_happy(button);
}
