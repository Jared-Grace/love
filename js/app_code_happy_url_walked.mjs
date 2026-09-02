import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_tests_run_e2e_happy_steps_max } from "./app_code_tests_run_e2e_happy_steps_max.mjs";
import { playwright_happy_walk } from "./playwright_happy_walk.mjs";
import { playwright_test_url } from "./playwright_test_url.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_happy_trail_quizzes_skipped } from "./app_code_happy_trail_quizzes_skipped.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_code_happy_url_walked(url) {
  "$plain url";
  "click all the way through the code course at a given address, as somebody who gets every question right, from an empty browser to the note that says there are no more lessons";
  "What it proves is the one thing no other check here proves: that the course can be COMPLETED. Every screen is reached the way a learner reaches it rather than by an address, so a right answer that cannot be pressed, a Next that never appears, a lesson that throws on its way in, and a review that will not let go all fail here and are invisible everywhere else.";
  "The browser is a fresh one with nothing remembered, which is what puts the walk at the first lesson rather than wherever a previous run left off. That also means it is the FIRST-TIME path being walked, which is the one path every learner takes and the only one nobody can practise.";
  "WHERE the course is served is asked for rather than looked up, because there are two answers and they are answers to different questions. The dev server on this machine says what the folder holds right now, which is what somebody editing wants to know. A server put up over a frozen copy says what one commit holds, which is what a judgement of that commit has to be about, and there is no other way to be sure the two agree.";
  arguments_assert(arguments, 1);
  let steps_max = app_code_tests_run_e2e_happy_steps_max();
  let walked = null;
  async function on_page(page) {
    walked = await playwright_happy_walk(page, steps_max);
  }
  await playwright_test_url(url, on_page);
  ("REACHING THE END IS NOT THE WHOLE OF PASSING. The walk presses whatever the screen marks as the way on, and a quiz marks both its answer and its Next - so it only answers the question first because the answer stands earlier in the page, which nothing anywhere enforces. Drawn the other way round, the walk would press straight on past every question, reach the end just the same, report the same thousands of steps, and have stopped asking anything at all.");
  ("So the trail is read back for questions that were passed in fewer than two presses, and there must be none. Measured over the whole course before this was written, there were none - so this is a rule that holds today being kept, rather than a hope.");
  let trail = property_get(walked, "trail");
  let skipped = app_code_happy_trail_quizzes_skipped(trail);
  list_empty_is_assert_json(skipped, {
    hint: "the walk reached the end of the course without answering these questions - it pressed the way on while the question was still standing, so whatever these screens mark as the way on is being found before the answer they also mark. the walk is no longer testing them",
  });
  return walked;
}
