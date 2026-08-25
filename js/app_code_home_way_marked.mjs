import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_progress_read } from "./app_code_progress_read.mjs";
export function app_code_home_way_marked(context) {
  arguments_assert(arguments, 1);
  let just_left = null;
  ("each row says whether that lesson is finished - every quiz in it answered right at least once - so a learner coming back can see where they got to instead of remembering it. The same row is what the replace app's list is made of, so the check, the pointing hand and the colours mean one thing across the apps");
  let progress = app_code_progress_read(context);
  let complete_previous = true;
  ("the list marks ONE of its rows as the way on for a walk of the whole course: the first lesson that is open and not yet finished. That is the row a learner arriving at this list presses, and it is the only row that moves the course along - a finished one goes back over what is done, and a locked one does nothing at all.");
  let way_marked = false;
  let r = {
    just_left,
    progress,
    complete_previous,
    way_marked,
  };
  return r;
}
