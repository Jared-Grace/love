import { arguments_assert } from "./arguments_assert.mjs";
import { red_proof_claim_phrases } from "./red_proof_claim_phrases.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
import { list_add } from "./list_add.mjs";
export function red_proof_cases_claims_unmatched(idle, redundant) {
  arguments_assert(arguments, 2);
  ("The cases saying in their own words that they are the only one catching something, out of the cases that are the only one catching nothing.");
  ("This is the one thing here a machine can check that a person kept getting wrong. Whether a case earns its place is a judgement; whether the sentence beside it is true is not, because the record of which case refused which wrong version is already worked out one step earlier. So the claim and its answer sit side by side and were still read past twice.");
  ("It is handed the two lists rather than working them out again, and they are exactly the cases that are the sole refuser of nothing. A case making this claim has to appear in neither. Anything found here is a sentence that was true when it was written, or was never true, and either way it now says the opposite of what the corpus does.");
  ("The cost of getting this wrong falls the safe way round. A sentence wrongly caught is reworded and nothing is lost; a sentence wrongly let through is what has already happened three times.");
  let phrases = red_proof_claim_phrases();
  let unmatched = [];
  for (let row of idle) {
    let described = property_get(row, "described");
    let said = text_lower_to(described);
    let claims = text_includes_any(said, phrases);
    if (claims) {
      list_add(unmatched, row);
    }
  }
  for (let row of redundant) {
    let described = property_get(row, "described");
    let said = text_lower_to(described);
    let claims = text_includes_any(said, phrases);
    if (claims) {
      list_add(unmatched, row);
    }
  }
  return unmatched;
}
