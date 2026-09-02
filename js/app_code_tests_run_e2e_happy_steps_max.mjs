import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_tests_run_e2e_happy_steps_max() {
  "the most presses a walk of the whole code course may take before it is called a loop rather than a long course";
  "It has to stand well above the real number, because the real number grows every time a lesson is written and a limit that had to be raised with each lesson would be raised without being thought about. It has to stand below forever, because the failure it is here to catch is a screen that leads back to itself, and that walk never ends on its own.";
  "So it is counted from the course rather than written down. The number of lessons is the one thing the walk's length actually follows, and asking the course how long it is means writing a lesson never touches this - which is what the paragraph above asked for and a written number could not keep.";
  "A fixed ten thousand was here until 2026-08-28, and it was reached: the walk visited 131 of the 133 lessons and stopped two short, still moving forward - the last three screens were the examples, the quiz and the review of one lesson, in that order, with nothing repeating. So the course had simply grown past the number, exactly the way the paragraph above said it would.";
  "Eighty presses per lesson is the allowance, and eighty is three times what a lesson costs. Measured on 2026-09-02 over a walk that reached the end: 3571 presses for 133 lessons, twenty-seven each.";
  "It was two hundred until then, three times an average of seventy-six, and the average fell by three quarters without the course changing at all. What changed is the walk: answering a question and leaving its screen became two different presses, so it now stops asking once a screen has said two answers were right, where before it pressed on until the screen let go of it. The rule is the one that was here before - three times what a lesson costs - and only the measurement under it is new.";
  "The AVERAGE is what it is set against and not the dearest lesson, because what is being allowed is a whole walk and not one screen of it. The dearest lesson measured 224 presses, more than the allowance for one lesson on its own, and it is paid for out of the hundred and thirty-two that came in under theirs - which is what a total budget is for. Set against the dearest instead, the limit would stand at thirty thousand and catch a screen leading back to itself some hours after it started leading back to itself.";
  arguments_assert(arguments, 0);
  let fns = app_code_lessons_fns();
  let lessons = list_size(fns);
  let v = multiply(lessons, 80);
  return v;
}
