import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_explain } from "./app_code_review_explain.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_code_review_state_key } from "./app_code_review_state_key.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { storage_local_remove_context } from "./storage_local_remove_context.mjs";
import { app_code_review_cursor_key } from "./app_code_review_cursor_key.mjs";
import { app_code_milestone_begun_key } from "./app_code_milestone_begun_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_milestone_intro(root, context, checkpoint) {
  arguments_assert(arguments, 3);
  ("the first screen of a milestone: its words by themselves, and a Begin button that writes down it was pressed and draws the questions - asked for by the human 2026-10-23");
  ("the words and the button share the card a question is drawn in, so the screen is as wide, and as centered, as the questions that follow it");
  let c = app_code_container_light_blue(root);
  let explain = property_get(checkpoint, "explain");
  app_code_review_explain(c, explain);
  let arrow = emoji_arrow_right();
  let text = text_combine_middle_space_nb(arrow, "Begin");
  let key = property_get(checkpoint, "key");
  function begin() {
    "Begin asks for questions, so a save already finished is cleared first, as the restart button clears it - measured 2026-10-23: a milestone finished before was resumed as finished, and Begin went straight to the celebration with no question asked";
    let state_key = app_code_review_state_key(key);
    let stored = storage_local_get_context(context, state_key);
    if (null_not_is(stored)) {
      let seeds = property_get(stored, "seeds");
      if (list_empty_is(seeds)) {
        storage_local_remove_context(context, state_key);
        let cursor_key = app_code_review_cursor_key(state_key);
        storage_local_remove_context(context, cursor_key);
      }
    }
    let key_begun = app_code_milestone_begun_key();
    storage_session_set_context(context, key_begun, key);
    app_code_review(context);
  }
  let button = app_shared_button_wide(c, text, begin);
  html_data_set_test_happy(button);
}
