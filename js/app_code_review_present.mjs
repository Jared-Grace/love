import { app_code_review_present_present } from "./app_code_review_present_present.mjs";
import { app_code_review_present_restart_button } from "./app_code_review_present_restart_button.mjs";
import { app_code_review_present_passed } from "./app_code_review_present_passed.mjs";
import { app_code_review_present_has_next } from "./app_code_review_present_has_next.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present(r, home_button, context) {
  arguments_assert(arguments, 3);
  let r2 = app_code_review_present_has_next(r);
  let has_next = property_get(r2, "has_next");
  let back_button = property_get(r2, "back_button");
  let r3 = app_code_review_present_passed(r2, r);
  let r4 = app_code_review_present_restart_button(r3, r);
  let restart_button = property_get(r4, "restart_button");
  let success_container = property_get(r4, "success_container");
  let present = app_code_review_present_present(
    r4,
    home_button,
    success_container,
    back_button,
    restart_button,
    has_next,
    context,
  );
  return present;
}
