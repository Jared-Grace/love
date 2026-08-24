import { html_data_set_test_happy_end } from "./html_data_set_test_happy_end.mjs";
import { app_code_container_light_blue_text } from "./app_code_container_light_blue_text.mjs";
export function app_code_no_more_lessons(parent) {
  "the shared 'no more lessons' message, shown by the last quiz of the last lesson and by a completed review that has no next lesson";
  "it is also where the course ENDS, and the only place it does, so this is what a walk of the whole thing is walking towards. marked as the end here rather than recognised by its words, because the words are a person's to reword and a test that watched them would go red on a rewording that broke nothing";
  let c = app_code_container_light_blue_text(
    parent,
    "Next: There are no more lessons available at this time",
  );
  html_data_set_test_happy_end(c);
}
