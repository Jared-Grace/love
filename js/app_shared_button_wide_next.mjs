import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_shared_button_wide_next(parent, on_next) {
  "every Next in the repo is made here, so marking it here is what lets a walk go forward through any app without being told anything about that app's screens";
  "On a screen where Next is the only marked control it is the way on, which is what Next means. On a screen that also has a question, the answer is marked too and stands earlier in the page, so the walk answers first and only then presses on - which is the order a person takes them in.";
  let nt = app_shared_button_next_text();
  let bn = app_shared_button_wide(parent, nt, on_next);
  html_data_set_test_happy(bn);
  return bn;
}
