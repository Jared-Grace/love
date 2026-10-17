import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_course_said } from "./app_code_course_said.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_course_hash_key } from "./app_code_course_hash_key.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_hash_course_add(hash) {
  "Keep the course in the link the code app is about to show, so moving to the next lesson does not drop the reader back into the whole run.";
  "It is read from the address itself rather than from the tab, because the address is the only place the course is ever said; the link is rewritten after every refresh, and this is what writes it back.";
  arguments_assert(arguments, 1);
  let said = app_code_course_said();
  let some = null_not_is(said);
  if (some) {
    let key = app_code_course_hash_key();
    property_set(hash, key, said);
  }
}
