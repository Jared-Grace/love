import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_root_named_word_spelled_in_is(word, root) {
  "Whether a root an explanation names is spelled inside the word it was given for, with both folded first so the letters Cebuano writes two ways do not count as a difference.";
  "★ THIS IS ONLY EVIDENCE ABOUT ONE WORDING AND IT IS WRONG ABOUT THE OTHERS, WHICH IS THE WHOLE REASON IT IS A FUNCTION RATHER THAN A LINE. Asked over every wording that names a root it flags 2547 sightings and the ones read were all sound - katawhan from tawo, gipamatud-an from matuod - because those sentences say built on, and built on is the one place a sound shift is expected and announced. Asked over the wording that opens by quoting the word and says it is another quoted word, the same mark scores 764 English meanings against 35 real roots, because that sentence claims the two are the same word and so makes a claim about spelling by construction. The mark did not change between those two readings. What changed is what the sentence was asserting.";
  "So a false answer here means something only when the caller can say which wording it read. Handing this any root read out of any sentence gives an answer that looks the same and means nothing.";
  "The folding is what makes it usable at all. Cebuano writes one sound as o or u by position and treats d, l and r as one another, so ako sits inside akong unfolded but hangtud does not sit inside hangtod, and a third of the real roots would be refused on spelling alone without it.";
  "$plain word";
  "it names the word being explained, never anything that runs.";
  "$plain root";
  "it names the text read out of an explanation as a root, never anything that runs.";
  arguments_assert(arguments, 2);
  let word_lower = text_lower_to(word);
  let root_lower = text_lower_to(root);
  let word_folded = gloss_word_folded(word_lower);
  let root_folded = gloss_word_folded(root_lower);
  let r = text_includes(word_folded, root_folded);
  return r;
}
