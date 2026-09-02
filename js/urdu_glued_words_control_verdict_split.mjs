import { arguments_assert } from "./arguments_assert.mjs";
import { positive_is } from "./positive_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
export function urdu_glued_words_control_verdict_split(glued, apart) {
  "$plain glued";
  "$plain apart";
  "What the second translation says about a ruling that one run of letters is two words with the space missing, given how many times that translation writes the letters run together and how many times it writes them with the space.";
  "It agrees when it writes the words apart and never runs them together, and it disagrees when it runs them together and never writes them apart. Those are the two answers that settle anything.";
  "Writing it both ways settles nothing on its own and is said so rather than counted as agreement, because a translation that does both is a translation where both are Urdu and the question is which one this sentence wants.";
  "Saying nothing is not agreeing. A word the control never uses at all is a word it has no opinion about, and reading its silence as a yes would turn the absence of evidence into evidence - which is exactly the mistake a control exists to prevent.";
  arguments_assert(arguments, 2);
  let together = positive_is(glued);
  let separated = positive_is(apart);
  let right = not(together);
  let agrees = and(separated, right);
  if (agrees) {
    let r = "agrees";
    return r;
  }
  let right2 = not(separated);
  let disagrees = and(together, right2);
  if (disagrees) {
    let r2 = "disagrees";
    return r2;
  }
  let both = and(together, separated);
  if (both) {
    let r3 = "both";
    return r3;
  }
  let r4 = "silent";
  return r4;
}
