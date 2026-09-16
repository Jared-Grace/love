import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_met_pointer } from "./gloss_met_pointer.mjs";
import { gloss_passages_same_as_explains } from "./gloss_passages_same_as_explains.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
export function gloss_same_as_verdict(passages, met) {
  "Why no address can be written for a word the reader has already met, said in plain words - or nothing at all where one can be written.";
  "$plain passages";
  "the passages are the whole chapter, because the address has to be tried against everything it could catch, not only against what came before it.";
  "$plain met";
  "what is met is the note kept while reading down the chapter: the word as it was spelled, the verse it last stood in, and the last thing said about it there.";
  "This is the one place that judges an address, so what refuses to write one and what counts how often writing is refused are asking the very same question, and cannot drift apart into two different answers.";
  "Saying why in words rather than yes or no is what makes the refusals countable. A count of nos says how much is left; a count of reasons says whether any of it can still be won by a machine.";
  if (null_is(met)) {
    let r = "the word was never explained earlier in the chapter";
    return r;
  }
  let explains = property_get(met, "explains");
  let pointer = gloss_met_pointer(met);
  let found = gloss_passages_same_as_explains(passages, pointer);
  let left = list_size(found);
  let empty = equal(left, 0);
  if (empty) {
    let r2 = "the address catches nothing";
    return r2;
  }
  let settled = equal(left, 1);
  if (not(settled)) {
    let r3 = "the address catches several explanations at once";
    return r3;
  }
  let left2 = list_first(found);
  let right = list_first(explains);
  let same = equal(left2, right);
  if (not(same)) {
    let r4 = "the address catches an explanation other than the one met";
    return r4;
  }
  let r5 = "";
  return r5;
}
