import { gloss_same_as_verdict } from "./gloss_same_as_verdict.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { gloss_met_pointer } from "./gloss_met_pointer.mjs";
export function gloss_same_as_addressed(passages, met) {
  "The address to write for a word a reader has already met, or nothing where meeting it settles nothing.";
  "$plain passages";
  "the passages are the whole chapter, because the address has to be tried against everything it could catch, not only against what came before it.";
  "$plain met";
  "what is met is the note kept while reading down the chapter: the word as it was spelled, the verse it last stood in, and the last thing said about it there.";
  "The address names the nearest earlier explanation, because that is the one a reader going downward has just read and so the one a sentence sending them back is talking about.";
  "Whether it may be written is not decided here. It is asked of the one place that judges it, which answers with why not, and an answer of nothing at all is what lets the address through.";
  let verdict = gloss_same_as_verdict(passages, met);
  let b = equal(verdict, "");
  let refused = not(b);
  if (refused) {
    return null;
  }
  let pointer = gloss_met_pointer(met);
  return pointer;
}
