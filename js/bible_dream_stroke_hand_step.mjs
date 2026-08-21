import { bible_dream_corridor_tolerance_squared } from "./bible_dream_corridor_tolerance_squared.mjs";
import { bible_dream_stroke_advance } from "./bible_dream_stroke_advance.mjs";
import { bible_dream_hand_nearness } from "./bible_dream_hand_nearness.mjs";
import { bible_dream_hand_mark_add } from "./bible_dream_hand_mark_add.mjs";
import { bible_dream_stroke_ink_show } from "./bible_dream_stroke_ink_show.mjs";
import { subtract } from "./subtract.mjs";
export function bible_dream_stroke_hand_step(state, at) {
  "Answer one movement of the hand on a stroke being traced: carry the trace as far along the shape as the hand has gone, lay down the hand's own mark for the piece it just crossed, and show the ink that has been earned.";
  "★ THE POINT IS TURNED INTO THE STROKE'S OWN RECKONING FIRST, AND EVERYTHING AFTER IT SPEAKS THAT. A stroke is drawn once and then moved to where it belongs, so the shape never knows where on the page it ended up; a pointer knows nothing else. Subtracting the one from the other, here and once, is what lets the shape be compared against at all.";
  "The tolerance is asked for rather than passed in because the two things that want it - how far the trace may stray and how faint the mark goes - are the same distance said twice, and handing it in from outside would let a caller give them different answers.";
  let near = {
    x: subtract(at.x, state.x),
    y: subtract(at.y, state.y),
  };
  let tolerance_squared = bible_dream_corridor_tolerance_squared();
  bible_dream_stroke_advance(state, near, tolerance_squared);
  let nearness = bible_dream_hand_nearness(state.gap, tolerance_squared);
  bible_dream_hand_mark_add(state, near, nearness);
  bible_dream_stroke_ink_show(state);
}
