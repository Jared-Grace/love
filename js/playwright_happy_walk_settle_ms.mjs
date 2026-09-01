import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
export function playwright_happy_walk_settle_ms() {
  arguments_assert(arguments, 0);
  ("how long the happy walk leaves a screen after pressing the way on, before looking for the next one, in thousandths of a second");
  ("A walk waits for a different thing from a capture, and the two were one number until this was written. A capture waits for the screen to be DRAWN; the walk has to wait for the press it just made to be ANSWERED, and being answered is the longer of the two, because an app answers a press by moving something and only then puts up whatever comes next.");
  ("So it is the app's own while for a movement, ",
    fn_name("app_shared_animation_duration"),
    ", rather than a number picked here - the walk must outlast the longest thing an app does between a press and the control that follows it, and that while is where every one of those is measured from.");
  ("Measured 2026-09-01, on the run that found this. The code course's line of operators takes its marks off the moment one is pressed and puts the next question up only after the chips have settled, which is two short whiles - 370 - and the walk was waiting 180. So it looked at the line mid-answer, found nothing marked but the Next button, and pressed on out of the lesson with the question still open. Every one of the 28 lessons that ask a line in order was left unfinished that way, and the app then sent the walk round the course again to finish them, for ever.");
  let ms = app_shared_animation_duration();
  return ms;
}
