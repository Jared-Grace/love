import { binisaya_affixes_word_rebuilt } from "./binisaya_affixes_word_rebuilt.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function binisaya_analysis_word_contradicted_is(word, root, affixes) {
  "Whether binisaya.com's breakdown of a word disagrees with the word itself: put its pieces back onto the root it names, and a different word comes out.";
  "A breakdown it cannot read is not a disagreement. Where any piece is written in the notation nobody has decoded there is no rebuilt word to compare, and this answers no - the same silence the rest of this reader keeps wherever the shorthand runs out, so an unread mark can never manufacture an accusation.";
  "The two are compared folded, because o against u, and d against l against r, are one sound written two ways in Cebuano; a rebuild differing only there has not disagreed with anything.";
  "This is one half of a test, never a verdict on its own. It agrees with plenty of ordinary Cebuano words - the site's shorthand is lossy, and a rebuild is only ever as good as the pieces it was handed.";
  let built = binisaya_affixes_word_rebuilt(root, affixes);
  let unread = null_is(built);
  if (unread) {
    return false;
  }
  let made = gloss_word_folded(built);
  let spelled = gloss_word_folded(word);
  let same = equal(made, spelled);
  let differs = not(same);
  return differs;
}
