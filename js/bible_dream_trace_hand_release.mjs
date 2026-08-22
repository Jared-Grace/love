import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_click_still_far } from "./bible_dream_click_still_far.mjs";
import { bible_dream_trace_hand_let_go } from "./bible_dream_trace_hand_let_go.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bible_dream_trace_hand_release(hand) {
  "A button let up over a dream being traced - which either ends the stroke, or, if the hand never went anywhere between the press and here, asks for that stroke to go on being drawn without the button held.";
  "A PRESS AND A RELEASE WITH NO JOURNEY BETWEEN THEM IS A CLICK, and a click asks to carry on unheld. Tracing a long shape means holding a button through the whole of it, and a hand that is holding something is worse at going where it is aimed - it drifts on the press, it drifts on the release, and on a trackpad it can barely turn a corner without letting go by accident.";
  "THE TWO GESTURES ARE TOLD APART BY DISTANCE AND NOT BY TIME. A slow careful click is still a click and a fast flick is still a drag, so what separates them is whether the hand went anywhere - which is the thing the player actually did.";
  "NOTHING IS TAKEN AWAY BY THIS. A press, a drag and a release behave exactly as they always did, because that release did have a journey between its ends.";
  arguments_assert(arguments, 1);
  let active = property_get(hand, "active");
  if (not(active)) {
    return;
  }
  let still = bible_dream_click_still_far();
  let still_squared = multiply(still, still);
  let travelled = property_get(hand, "travelled");
  let went_nowhere = less_than(travelled, still_squared);
  if (went_nowhere) {
    property_set(hand, "latched", true);
    return;
  }
  bible_dream_trace_hand_let_go(hand);
}
