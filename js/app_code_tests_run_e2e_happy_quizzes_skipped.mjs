import { app_code_happy_trail_quizzes_skipped } from "./app_code_happy_trail_quizzes_skipped.mjs";
import { app_code_tests_run_e2e_happy } from "./app_code_tests_run_e2e_happy.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_tests_run_e2e_happy_quizzes_skipped() {
  "walk the whole course the way somebody does who gets everything right, and then say which of its questions the walk went past without answering";
  "It is the same walk rather than a second one, because a walk is a quarter of an hour long and the trail it leaves already holds the whole of the answer.";
  "The measurement comes before the rule. Whether a right answer always stands earlier in the page than the way on is a claim about every quiz in the course, and it is a claim nobody has counted - so this counts it, and only an empty answer earns the right to turn it into something that fails a build.";
  arguments_assert(arguments, 0);
  let walked = await app_code_tests_run_e2e_happy();
  let trail = property_get(walked, "trail");
  let skipped = app_code_happy_trail_quizzes_skipped(trail);
  return skipped;
}
