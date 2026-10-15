import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { app_shared_page_stage_prod_is } from "./app_shared_page_stage_prod_is.mjs";
import { app_shared_page_stage_latest_is } from "./app_shared_page_stage_latest_is.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_code_course_hash_key } from "./app_code_course_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_code_course_known_is } from "./app_code_course_known_is.mjs";
export function app_code_course_step_is() {
  "Whether the page being read is showing only the lessons that step through a program: its link says course=step, and it is the working copy.";
  "Only the working copy, for now: the word in a link is frozen the moment a link holding it leaves this repo, so it is tried where nobody else is handed it first. Not picked: honouring it on latest as well, which would hand the word out before it has been tried.";
  "Asked where there is no page - a gate, a sweep - the answer is no, so everything asking what lessons exist goes on seeing all of them.";
  arguments_assert(arguments, 0);
  let b = browser_is();
  if (not(b)) {
    return false;
  }
  let prod = app_shared_page_stage_prod_is();
  let latest = app_shared_page_stage_latest_is();
  if (prod || latest) {
    return false;
  }
  let hash = html_hash_object_get();
  let key = app_code_course_hash_key();
  let said = property_get_or_null(hash, key);
  let step = app_code_course_known_is(said);
  return step;
}
