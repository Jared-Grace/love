import { property_get_or } from "./property_get_or.mjs";
export function app_code_lesson_examples_complete_is(lesson) {
  "whether the examples on the screen are every example this lesson has, rather than a sample drawn from a larger supply";
  "A lesson says so by carrying examples_complete. Most lessons never mention it, so the answer defaults to no, and a lesson only opts in when its refill provably hands back the same list every time";
  "Asked here rather than at the screen so that everything written from the answer stays in agreement: today it decides whether the see-more button is offered at all, and offering a button that cannot change the screen would be a promise the lesson cannot keep";
  let complete = property_get_or(lesson, "examples_complete", false);
  return complete;
}
