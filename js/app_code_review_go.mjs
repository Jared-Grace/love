import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_review } from "./app_code_review.mjs";
export async function app_code_review_go(context, number) {
  "$plain number";
  "Open the review standing under one lesson, remembering in this tab which review it is - the one way in shared by the review's row on the home list, the end of a lesson that is a checkpoint, and a button offering unfinished work.";
  arguments_assert(arguments, 2);
  let key = app_code_review_number_key();
  await app_shared_screen_go_tab(context, key, number, app_code_review);
}
