import { each } from "./each.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { bible_dream_hand_nearness } from "./bible_dream_hand_nearness.mjs";
import { bible_dream_stroke_stray_squared } from "./bible_dream_stroke_stray_squared.mjs";
import { bible_dream_guide_dim_far } from "./bible_dream_guide_dim_far.mjs";
import { bible_dream_guide_dim_floor } from "./bible_dream_guide_dim_floor.mjs";
export function bible_dream_scene_guides_dim(states, at) {
  "Set every faint guiding line in a dream to how near the pointer is to that stroke, so the one being approached stands out from the rest.";
  "★ IT ANSWERS THE ONE THING A DREAM LAID OUT ALL AT ONCE COULD NOT SAY: WHICH STROKE YOU ARE ON. Presenting every stroke at the same moment is what gives the player the order to draw them in, and that freedom cost something - a dozen identical faint lines say where the shapes are and nothing whatever about where the hand is, so putting the hand down was a guess that only got answered after the drawing had started. Brightening by nearness turns the whole picture into the answer, continuously, before any button is pressed.";
  "★ IT RUNS WHETHER OR NOT ANYTHING IS BEING TRACED, AND THAT IS WHERE MOST OF ITS USE IS. Once a hand is down the player already knows which stroke they took. The moment the guidance is worth anything is the moment before, while the pointer is still crossing the picture deciding, and a highlight that only appeared after the press would arrive exactly one decision too late.";
  "Nothing here treats a finished stroke differently. Its guide is underneath the bright ink that was earned by tracing it, so the ink is what shows and the fading beneath it changes nothing anyone can see; and a special case for done-ness would be a rule about scoring living in a file about looking.";
  "The nearness is the same reckoning the hand's own mark fades by, given a much wider distance to spend itself over. It is a ratio, so it never quite reaches nothing however far away the pointer is, and the floor underneath it is what keeps a far stroke plainly visible rather than merely present.";
  let far = bible_dream_guide_dim_far();
  let dim_floor = bible_dream_guide_dim_floor();
  let above_floor = subtract(1, dim_floor);
  function each_state(state) {
    let near = {
      x: subtract(at.x, state.x),
      y: subtract(at.y, state.y),
    };
    let stray_squared = bible_dream_stroke_stray_squared(state, near);
    let nearness = bible_dream_hand_nearness(stray_squared, far);
    let lifted = multiply(nearness, above_floor);
    let showing = dim_floor + lifted;
    let value = String(showing);
    html_attribute_set(state.guide, "opacity", value);
  }
  each(states, each_state);
}
