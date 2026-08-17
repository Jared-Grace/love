import { app_code_review_present } from "./app_code_review_present.mjs";
import { app_code_review_home_button } from "./app_code_review_home_button.mjs";
import { app_code_review_go_home } from "./app_code_review_go_home.mjs";
import { app_code_review_home_text } from "./app_code_review_home_text.mjs";
import { app_code_review_restart_button } from "./app_code_review_restart_button.mjs";
import { app_code_review_progress } from "./app_code_review_progress.mjs";
import { app_code_review_g } from "./app_code_review_g.mjs";
import { app_code_review_key } from "./app_code_review_key.mjs";
import { app_code_review_passed } from "./app_code_review_passed.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review(context) {
  let root = html_clear_context(context);
  let r = app_code_review_passed(context, root);
  let r4 = app_code_review_key(r);
  let r5 = app_code_review_g(r4);
  let g = property_get(r5, "g");
  let r3 = app_code_review_progress(r5);
  let r6 = app_code_review_restart_button(r3, g);
  let r7 = app_code_review_home_text(r6);
  let r8 = app_code_review_go_home(r7, context);
  let go_home = property_get(r8, "go_home");
  let r9 = app_code_review_home_button(r8, g, go_home);
  let home_button = property_get(r9, "home_button");
  let present = app_code_review_present(r9, home_button, context);
  present();
}
