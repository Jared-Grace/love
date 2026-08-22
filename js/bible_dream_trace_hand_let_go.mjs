import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_stroke_hand_lift } from "./bible_dream_stroke_hand_lift.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bible_dream_trace_hand_let_go(hand) {
  "The hand taken off whatever it was tracing - the line broken where it stopped, the stroke let go of, and the drawing-without-holding put out.";
  "THE LINE IS BROKEN FIRST so that wherever the hand turns up next is not joined to where it left. A stroke let go of quietly would have its two visits drawn as one journey, across ground the hand never crossed.";
  "THE LATCH GOES OUT WITH THE STROKE, always, because drawing without holding a button down is a thing done to a particular stroke. Left standing, it would mean the next bare movement of the pointer began drawing something nobody had chosen.";
  arguments_assert(arguments, 1);
  let active = property_get(hand, "active");
  bible_dream_stroke_hand_lift(active);
  property_set(hand, "active", null);
  property_set(hand, "latched", false);
}
