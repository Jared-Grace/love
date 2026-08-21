import { abs } from "./abs.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function bible_dream_hand_path_keep_is(state, strength) {
  "Say whether the stroke of the hand's own line that is being grown can carry a piece drawn at a given setting, or whether the setting has moved far enough that a new stroke has to be started.";
  "★ ONE SETTING OF DIFFERENCE IS KEPT AND TWO ARE NOT, AND THE SLACK IS THERE FOR THE HAND THAT WOBBLES. Demanding the very same setting sounds exact and draws worse: a hand hovering on the boundary between two of them flips back and forth every few reports, and every flip ends the stroke and starts another, so the one case that most needs a continuous line - an unsteady one - gets the most broken one. Allowing a neighbouring setting means the flipping costs nothing and only a real drift ends the stroke.";
  "Nothing is hidden by the slack, because the settings are finer than the eye. A piece drawn one setting away from its own is a twentieth of the range out, which is not a difference anyone can see; a hand that truly strays crosses two and gets its new stroke.";
  "A stroke that does not exist yet can carry nothing, and that is asked first, because everything after it reads a setting off a stroke that would not be there.";
  if (not(state.hand_path)) {
    return false;
  }
  let apart = subtract(strength, state.hand_level);
  let far = abs(apart);
  let keep = less_than(far, 2);
  return keep;
}
