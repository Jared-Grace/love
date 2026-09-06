import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { gloss_explain_root_judged } from "./gloss_explain_root_judged.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { gloss_explain_affix_named_is } from "./gloss_explain_affix_named_is.mjs";
export function gloss_explain_root_quoted_only_is(
  word,
  root,
  affixes,
  explain,
) {
  "Whether one explanation says nothing at all about where its word came from, and passes the root test only because the root's letters arrive inside the quoted word itself.";
  "★ THIS IS THE ONE PLACE THE QUESTION IS ASKED, BECAUSE IT IS ASKED FROM BOTH SIDES OF THE SAME FAULT. A sweep reports these sentences so a person can see how many there are, and a repair replaces them so the person does not have to. Two readings of the same four tests would agree on the day they were written and drift apart at the first correction, and the drift would be silent: the sweep would name sentences the repair passes over, and the list would never empty.";
  "Four things have to hold at once. The root must be a piece of the word's own spelling, or the quotation could not have supplied it. The sentence must be passing today, or it is a disagreement somebody is already looking at. It must be passing without naming a root outright, because a sentence that names one is judged on the root it names. And it must stop naming the root once the word is struck out of it - that is the test the other three are there to make meaningful.";
  "A sentence naming the word's affix is let through, because the pieces are the other half of where a word came from and a sentence giving that half is not silent. That is asked last, since it costs a walk over the construction shorthand and the tests before it throw most sentences out for nothing.";
  "$plain word";
  "$plain root";
  "$plain affixes";
  "$plain explain";
  "all four are text: a word, the root a dictionary gives it, the shorthand for how it was built, and the sentence written about it. None names anything that runs.";
  let word_lower = text_lower_to(word);
  let inside = text_includes(word_lower, root);
  if (not(inside)) {
    return false;
  }
  let judged = gloss_explain_root_judged(word, root, explain);
  let agreed = property_get(judged, "agreed");
  if (not(agreed)) {
    return false;
  }
  let kind = property_get(judged, "kind");
  let says_nothing = equal(kind, "silent");
  if (not(says_nothing)) {
    return false;
  }
  let explain_lower = text_lower_to(explain);
  let apart = text_replace_to_space(explain_lower, word_lower);
  let standing = text_includes(apart, root);
  if (standing) {
    return false;
  }
  let named_affix = gloss_explain_affix_named_is(explain_lower, affixes);
  let r = not(named_affix);
  return r;
}
