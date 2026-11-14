import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_step_hash_key } from "./app_learn_js_step_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_happy_answers_press } from "./html_happy_answers_press.mjs";
export async function app_learn_js_hash_step_restore(context, hash) {
  arguments_assert(arguments, 2);
  ("Take how many right answers the address asks to have pressed, and start pressing them. It is not waited on: the page has not been drawn yet, and the presser waits for each answer to be up by itself.");
  ("The example is drawn afresh with random names each time, so step=15 reaches the same place in the walk, not the same letters.");
  let word = app_learn_js_step_hash_key();
  let said = property_get_or_null(hash, word);
  let present = null_not_is(said);
  if (present) {
    let counted = Number(said);
    await html_happy_answers_press(counted);
  }
}
