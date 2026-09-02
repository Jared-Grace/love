import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { html_data_set_test_happy_onward } from "./html_data_set_test_happy_onward.mjs";
export function app_shared_button_wide_next(parent, on_next) {
  "every Next in the repo is made here, so marking it here is what lets a walk go forward through any app without being told anything about that app's screens";
  "It is marked twice and the second mark is what a screen with a question on it turns on. The first says only that this carries a person forward, which is true of the right answer as well; the second says that this is the way OUT of the screen rather than a way through what it is asking. Without that second word a walk cannot tell the two apart, so on a screen whose question goes momentarily unmarked - which is what a question half answered looks like - it presses on and leaves the rest of the question unanswered behind it.";
  let nt = app_shared_button_next_text();
  let bn = app_shared_button_wide(parent, nt, on_next);
  html_data_set_test_happy(bn);
  html_data_set_test_happy_onward(bn);
  return bn;
}
