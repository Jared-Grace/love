import { bible_dream_hand_fade_far } from "./bible_dream_hand_fade_far.mjs";
import { bible_dream_hand_gone_far } from "./bible_dream_hand_gone_far.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function bible_dream_hand_taper(gap_squared) {
  "How much of the hand's own mark is left at a point, from how far off the stroke it was: all of it out to the distance the fading is measured over, then dwindling to none at all by the distance a hand is reckoned to have gone somewhere else.";
  "★ IT IS A SECOND FADING AND NOT A SHARPER FIRST ONE. The first says how confident the mark looks and floors well above nothing, because a mark that cannot be seen is not a drawing. This one takes the floor away again, but only where the floor had stopped meaning anything - a hundred units off a cow, where the mark is no longer a record of tracing a cow.";
  "It reaches nothing gradually rather than at a line, because a mark that switched off would leave a cut end hanging in the middle of a sweep, and a cut end is a shape the passage never gave. Running out is what a hand looks like when it leaves.";
  "The two distances are asked for here rather than handed in, because a taper told a start beyond its end would return a negative and quietly turn every far mark into a bright one.";
  let gap = Math.sqrt(gap_squared);
  let far = bible_dream_hand_fade_far();
  if (less_than(gap, far)) {
    let whole = 1;
    return whole;
  }
  let gone = bible_dream_hand_gone_far();
  if (greater_than(gap, gone)) {
    let none = 0;
    return none;
  }
  let beyond = subtract(gap, far);
  let span = subtract(gone, far);
  let spent = divide(beyond, span);
  let left = subtract(1, spent);
  return left;
}
