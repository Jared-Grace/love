import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_glow_look_here } from "./app_shared_glow_look_here.mjs";
export function app_code_expression_choose_line_press_elsewhere(waiting) {
  "$plain waiting";
  "What a press of the line comes to once the line has already been answered and the asking has moved somewhere else.";
  "THE PRESS IS SPENT SAYING WHERE THE ASKING WENT: the question that is open glows rather than the press being swallowed.";
  "Swallowed, the press teaches a learner that the screen is broken - which is what a control that answers nothing means everywhere else they have ever pressed one. Answered by the real question lighting up, the same press teaches them where to look, and it costs them one glance.";
  "NOTHING AT ALL HAPPENS IF NOBODY SAID WHAT IS WAITING. A page that answers its own presses some other way is not made to invent a glow it never asked for.";
  arguments_assert(arguments, 1);
  let waiting_is = null_is(waiting);
  if (waiting_is) {
    return;
  }
  app_shared_glow_look_here(waiting);
}
