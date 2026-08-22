import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_drawing_point } from "./bible_dream_drawing_point.mjs";
import { bible_dream_stroke_begin_near } from "./bible_dream_stroke_begin_near.mjs";
import { bible_dream_stroke_hand_lift } from "./bible_dream_stroke_hand_lift.mjs";
import { bible_dream_trace_hand_let_go } from "./bible_dream_trace_hand_let_go.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bible_dream_trace_hand_press(hand, states, drawing, event) {
  "A button pressed down on a dream being traced - which either ends a stroke that was being drawn without holding, or takes up whichever stroke the hand came down nearest to.";
  "A PRESS WHILE DRAWING UNHELD IS A REQUEST TO STOP, not the start of something new. The player asked to carry on without holding the button, so the plainest way to say they are finished is to press it again.";
  "THE STROKE IS CHOSEN BY NEARNESS AND NOT BY BEING HIT. A hand comes down beside a faint line as often as on it, and a press that found nothing would make the picture feel unwilling; the reach is a fixed one, so a press in open ground still finds nothing.";
  "THE LINE IS BROKEN AS THE STROKE IS TAKEN UP, because the hand has just arrived from wherever it last was and that journey is not part of the drawing.";
  arguments_assert(arguments, 4);
  let at = bible_dream_drawing_point(drawing, event);
  let latched = property_get(hand, "latched");
  if (latched) {
    bible_dream_trace_hand_let_go(hand);
    return;
  }
  property_set(hand, "pressed_at", at);
  property_set(hand, "travelled", 0);
  let began = bible_dream_stroke_begin_near(states, at, 169);
  property_set(hand, "active", began);
  if (began) {
    bible_dream_stroke_hand_lift(began);
  }
}
