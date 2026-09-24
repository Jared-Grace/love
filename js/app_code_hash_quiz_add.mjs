import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
import { app_shared_hash_add_on_screen } from "./app_shared_hash_add_on_screen.mjs";
export function app_code_hash_quiz_add(context, hash) {
  arguments_assert(arguments, 2);
  ("put the question the quiz is on into the address, while the quiz is on screen. Left on the lesson's examples, the back button coming back to them read it again and set the quiz back to that question, so a learner who had answered on started over; the app's own buttons never did");
  let screen_name = fn_name("app_code_quiz");
  let hash_key = app_code_quiz_hash_key();
  app_shared_hash_add_on_screen(
    context,
    hash,
    screen_name,
    "quiz_index",
    hash_key,
  );
}
