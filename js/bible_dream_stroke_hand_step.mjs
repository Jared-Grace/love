import { bible_dream_hand_taper } from "./bible_dream_hand_taper.mjs";
import { bible_dream_stroke_stray_squared } from "./bible_dream_stroke_stray_squared.mjs";
import { bible_dream_hand_fade_far } from "./bible_dream_hand_fade_far.mjs";
import { bible_dream_corridor_tolerance_squared } from "./bible_dream_corridor_tolerance_squared.mjs";
import { bible_dream_stroke_advance } from "./bible_dream_stroke_advance.mjs";
import { bible_dream_hand_nearness } from "./bible_dream_hand_nearness.mjs";
import { bible_dream_hand_mark_add } from "./bible_dream_hand_mark_add.mjs";
import { bible_dream_stroke_ink_show } from "./bible_dream_stroke_ink_show.mjs";
import { subtract } from "./subtract.mjs";
export function bible_dream_stroke_hand_step(state, at) {
  "Answer one movement of the hand on a stroke being traced: carry the trace as far along the shape as the hand has gone, lay down the hand's own mark for the piece it just crossed, and show the ink that has been earned.";
  "★ THE POINT IS TURNED INTO THE STROKE'S OWN RECKONING FIRST, AND EVERYTHING AFTER IT SPEAKS THAT. A stroke is drawn once and then moved to where it belongs, so the shape never knows where on the page it ended up; a pointer knows nothing else. Subtracting the one from the other, here and once, is what lets the shape be compared against at all.";
  "★ THE TRACE AND THE MARK ARE TOLD TWO DIFFERENT DISTANCES, AND THEY USED TO BE TOLD ONE. The trace is judged against the corridor, tightly, by a search of the few samples around where it stands; the mark is faded against how far the hand is from the shape at all, over a much wider distance and by a search of the whole stroke. Sharing one number read as thrift and was a fault: the moment a hand left the corridor the trace stopped moving, so its number froze at the place of departure, and the fading afterwards described a distance from that place rather than from the shape. A hand that wandered wide and came back down onto another part of the ink went on drawing at the faintest it goes.";
  let near = {
    x: subtract(at.x, state.x),
    y: subtract(at.y, state.y),
  };
  let tolerance_squared = bible_dream_corridor_tolerance_squared();
  bible_dream_stroke_advance(state, near, tolerance_squared);
  let stray_squared = bible_dream_stroke_stray_squared(state, near);
  let far = bible_dream_hand_fade_far();
  let nearness = bible_dream_hand_nearness(stray_squared, far);
  let taper = bible_dream_hand_taper(stray_squared);
  bible_dream_hand_mark_add(state, near, nearness, taper);
  bible_dream_stroke_ink_show(state);
}
