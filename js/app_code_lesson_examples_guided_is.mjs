import { property_get_or } from "./property_get_or.mjs";
export function app_code_lesson_examples_guided_is(lesson) {
  "whether this lesson's example tells the learner what to do at every step, rather than leaving the choosing to them";
  "A lesson says so by carrying examples_guided. Most lessons never mention it, so the answer defaults to no. Asked for by the human 2026-10-14, so the label over such an example can say it guides step by step, as the order lesson's does.";
  let guided = property_get_or(lesson, "examples_guided", false);
  return guided;
}
