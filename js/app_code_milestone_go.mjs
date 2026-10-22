import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_milestone_begun_key } from "./app_code_milestone_begun_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_code_milestone_key } from "./app_code_milestone_key.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_review } from "./app_code_review.mjs";
export async function app_code_milestone_go(context, id) {
  "Open one milestone on the review's own screen, remembering in this tab which milestone it is.";
  "The review screen tells the two apart by which key this tab wrote last, so opening a milestone this way is all it takes for that screen to ask the milestone's lessons rather than a review's.";
  arguments_assert(arguments, 2);
  ("opened from home it starts on its own first screen again, so whatever Begin this tab pressed before is forgotten");
  let key_begun = app_code_milestone_begun_key();
  storage_session_set_context(context, key_begun, "");
  let key = app_code_milestone_key();
  await app_shared_screen_go_tab(context, key, id, app_code_review);
}
