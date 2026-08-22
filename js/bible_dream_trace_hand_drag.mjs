import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_drawing_point } from "./bible_dream_drawing_point.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { bible_dream_scene_guides_dim } from "./bible_dream_scene_guides_dim.mjs";
import { bible_dream_stroke_finish_told } from "./bible_dream_stroke_finish_told.mjs";
import { bible_dream_stroke_hand_step } from "./bible_dream_stroke_hand_step.mjs";
import { bible_dream_trace_hand_let_go } from "./bible_dream_trace_hand_let_go.mjs";
import { bible_dream_trace_readout_write } from "./bible_dream_trace_readout_write.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bible_dream_trace_hand_drag(
  hand,
  states,
  told,
  readout,
  drawing,
  event,
) {
  "The pointer moved over a dream being traced - the strokes near it brightened, and, if one of them is being drawn, that much more of it drawn.";
  "IT ANSWERS EVEN WHEN NOTHING IS BEING TRACED, and it used to answer only after a press. The strokes brighten as the pointer nears them, and that is guidance for choosing which one to take - so it has to be working while the choosing is going on, before anything has been pressed at all.";
  "A REPORT WITH NO BUTTON HELD ENDS THE PRESS, whichever way the release went missing - out of the picture, cancelled by the browser, the window losing the mouse. Every movement says whether a button is down, so the truth is here on every report and does not have to be remembered. While the hand is drawing unheld this is ignored on purpose, because there the whole point is that nothing is being held.";
  "THE FURTHEST THE HAND HAS BEEN IS KEPT RATHER THAN WHERE IT IS NOW, and it is kept here rather than at the release, because a round journey ends where it began and only the middle of it says the hand went anywhere.";
  "A FINISHED STROKE IS LET GO OF WITHOUT WAITING FOR THE BUTTON, so the next thing the hand does is a fresh choice rather than more of a shape that is already whole.";
  arguments_assert(arguments, 6);
  let at = bible_dream_drawing_point(drawing, event);
  bible_dream_scene_guides_dim(states, at);
  let active = property_get(hand, "active");
  if (not(active)) {
    return;
  }
  let latched = property_get(hand, "latched");
  let held_still_asked = not(latched);
  if (held_still_asked) {
    let buttons_none = equal(event.buttons, 0);
    if (buttons_none) {
      bible_dream_trace_hand_let_go(hand);
      return;
    }
    let pressed_at = property_get(hand, "pressed_at");
    let gone = bible_dream_point_gap_squared(at, pressed_at);
    let travelled = property_get(hand, "travelled");
    let further = greater_than(gone, travelled);
    if (further) {
      property_set(hand, "travelled", gone);
    }
  }
  bible_dream_stroke_hand_step(active, at);
  if (active.done) {
    bible_dream_stroke_finish_told(active, told);
    bible_dream_trace_hand_let_go(hand);
  }
  bible_dream_trace_readout_write(readout, states, told);
}
