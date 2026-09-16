import { gloss_passages_pointers_mets } from "./gloss_passages_pointers_mets.mjs";
import { gloss_same_as_verdict } from "./gloss_same_as_verdict.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_passages_pointers_verdicts(passages, lambda$pointer_is) {
  "One plain sentence for every explanation in a chapter that sends the reader back to a word they have met - saying why it could not be given an address, or that it was addressed.";
  "$plain passages";
  "the passages are the whole chapter in reading order.";
  "The walk down the chapter is not repeated here. It is asked for once, and each note it gives back is put to the one judge that decides whether an address may be written, so this count is a count of what the writing of addresses does and not of something near it.";
  let mets = gloss_passages_pointers_mets(passages, lambda$pointer_is);
  function met_verdict(met) {
    let verdict = gloss_same_as_verdict(passages, met);
    let allowed = equal(verdict, "");
    if (allowed) {
      let r = "addressed";
      return r;
    }
    return verdict;
  }
  let verdicts = list_map(mets, met_verdict);
  return verdicts;
}
