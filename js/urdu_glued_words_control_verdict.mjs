import { arguments_assert } from "./arguments_assert.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
export function urdu_glued_words_control_verdict(supporting, contradicting) {
  "$plain supporting";
  "how many times the second translation writes the spelling the ruling says is right: a number, and nothing that runs.";
  "$plain contradicting";
  "how many times the second translation writes the spelling the ruling says is wrong: a number, and nothing that runs.";
  "What a second translation says about a ruling, given how often it writes the spelling the ruling wants and how often it writes the one the ruling turned down.";
  "It agrees when it writes the wanted spelling and never the other, and it disagrees when it writes the other and never the wanted one. Those are the two answers that settle anything.";
  "Writing it both ways settles nothing on its own and is said so rather than counted as agreement, because a translation that does both is a translation where both are Urdu and the question is which one this sentence wants.";
  "Saying nothing is not agreeing. A word the control never uses at all is a word it has no opinion about, and reading its silence as a yes would turn the absence of evidence into evidence - which is exactly the mistake a control exists to prevent.";
  "Which count is which is the caller's to say, and it is the whole difference between the two kinds of ruling. A ruling to put a space in is supported by the spaced spelling and contradicted by the welded one; a ruling to leave the word alone is supported and contradicted by exactly the opposite pair. Written the other way round - one reader for each kind of ruling - the keeping one came out unable to disagree at all, and a whole class of contradiction was reported as silence.";
  arguments_assert(arguments, 2);
  let wanted = positive_is(supporting);
  let refused = positive_is(contradicting);
  let only_wanted = not(refused);
  let agrees = and(wanted, only_wanted);
  if (agrees) {
    let r = "agrees";
    return r;
  }
  let only_refused = not(wanted);
  let disagrees = and(refused, only_refused);
  if (disagrees) {
    let r2 = "disagrees";
    return r2;
  }
  let both = and(wanted, refused);
  if (both) {
    let r3 = "both";
    return r3;
  }
  let r4 = "silent";
  return r4;
}
