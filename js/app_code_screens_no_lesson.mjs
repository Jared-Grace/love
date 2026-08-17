import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_quiz } from "./app_code_quiz.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_code_screens } from "./app_code_screens.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function app_code_screens_no_lesson() {
  "every screen the code app opens straight from its address with no lesson chosen: the lesson list itself, the settings, and the two screens that ask before changing what a learner has finished";
  "taken as the whole list minus the three that need a lesson, rather than written out as a list of its own, so a screen added to the app later is crawled without anybody remembering to add it in a second place - which is how the two settings screens came to be walked past unseen";
  arguments_assert(arguments, 0);
  let lesson_screens = [app_code_examples, app_code_quiz, app_code_review];
  function keep(screen) {
    let wanted = list_includes_not(lesson_screens, screen);
    return wanted;
  }
  let screens = app_code_screens();
  let kept = list_filter(screens, keep);
  return kept;
}
