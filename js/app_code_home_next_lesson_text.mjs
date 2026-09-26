import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { emoji_rocket } from "./emoji_rocket.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
export function app_code_home_next_lesson_text(started) {
  arguments_assert(arguments, 1);
  ("A learner who has finished nothing yet is starting, so the button says Start! with a rocket; once any lesson is finished it says it goes to the next unfinished one - it may skip rows they have finished further down. Both at the human's request.");
  if (not(started)) {
    let rocket = emoji_rocket();
    let start = text_combine_middle_space_nb(rocket, "Start!");
    return start;
  }
  ("what the button on the lesson list's bar says: the arrow this app uses everywhere for going on, and beside it the thing the button opens.");
  ("IT NAMES THE LESSON rather than saying only the bare word for going on. A button at the foot of a page is read straight after the thing it follows, so there what comes next is plain from where the button is standing; this one rides a bar across the top beside a gear, with a list of ninety rows under it, and a bare word there could mean the next row, the next review or the next screen.");
  let next = app_shared_button_next_text();
  let text = text_combine_middle_space_nb(next, "unfinished lesson");
  return text;
}
