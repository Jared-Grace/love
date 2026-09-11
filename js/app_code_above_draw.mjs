import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { noop } from "./noop.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_above_draw(root, above, context) {
  arguments_assert(arguments, 3);
  ("Draw a lesson's telling at the top of its front page, standing above the examples, for every learner.");
  ("THE TELLING IS ALWAYS THERE. For one day it sat behind a button the learner had to press - Show me how this works - remembered per device and off until asked. The user settled it on 2026-09-11: the explanation should simply be on the screen. A learner who is stuck is not in a state to go hunting for the offer of help, and a learner who is not stuck reads past it at no cost. So there is no flag, nothing stored on the device, and nothing to ask.");
  ("A LESSON WITH NOTHING TO TELL DRAWS NOTHING, not an empty row. Such a lesson hands over the do-nothing painter, which is the repo's own way of saying it has nothing above, and the row it would otherwise open pushes the examples down for no reason.");
  ("WHAT THE TELLING WORKED IS HANDED BACK, so the examples underneath can be sure not to ask about the very same line. The two are drawn independently - the telling builds its own line and the card below draws from the bank - so neither can notice the clash on its own, and a learner shown a line solved from top to bottom and then asked to solve that same line has been asked nothing. A painter with no one line to name hands back nothing, and nothing is avoided.");
  let nothing = equal(above, noop);
  if (nothing) {
    return null;
  }
  let slot = html_div(root);
  let line = above(slot, context);
  if (line) {
    return line;
  }
  return null;
}
