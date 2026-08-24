import { app_code } from "./app_code.mjs";
import { app_code_tests_run_e2e_happy_steps_max } from "./app_code_tests_run_e2e_happy_steps_max.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_happy_walk } from "./playwright_happy_walk.mjs";
import { playwright_test_app_dev } from "./playwright_test_app_dev.mjs";
export async function app_code_tests_run_e2e_happy() {
  ("click all the way through the code course as somebody who gets every question right, from an empty browser to the note that says there are no more lessons");
  ("What it proves is the one thing no other check here proves: that the course can be COMPLETED. Every screen is reached the way a learner reaches it rather than by an address, so a right answer that cannot be pressed, a Next that never appears, a lesson that throws on its way in, and a review that will not let go all fail here and are invisible everywhere else.");
  ("The browser is a fresh one with nothing remembered, which is what puts the walk at the first lesson rather than wherever a previous run left off. That also means it is the FIRST-TIME path being walked, which is the one path every learner takes and the only one nobody can practise.");
  ("It is pointed at the dev build on purpose. Walking what is deployed would be a check on a copy made days ago; walking dev is a check on what is about to become that copy.");
  arguments_assert(arguments, 0);
  let steps_max = app_code_tests_run_e2e_happy_steps_max();
  let walked = null;
  async function on_page(page) {
    walked = await playwright_happy_walk(page, steps_max);
  }
  await playwright_test_app_dev(app_code, on_page);
  return walked;
}
