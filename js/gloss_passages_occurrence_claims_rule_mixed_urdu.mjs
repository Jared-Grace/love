import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passages_occurrence_claims_urdu } from "./gloss_passages_occurrence_claims_urdu.mjs";
import { gloss_occurrence_claim_counted_is } from "./gloss_occurrence_claim_counted_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_passages_occurrence_claims_rule_mixed_urdu(
  passages,
  text_index,
  word_keys_read,
) {
  arguments_assert(arguments, 3);
  ("Where one word's numbers in one chapter stop following any single rule.");
  ("A word can be counted two ways: every spelling apart, so that And and and are");
  ("two words, or all spellings folded together, so that they are one. Either rule");
  ("is defensible and this does not pick one. What is not defensible is changing");
  ("rule part way through a chapter, because then no reader can tell what the next");
  ("number will be. So each word is carried along under both rules at once, and a");
  ("rule dies for that word the moment a sentence disagrees with it. When both rules");
  ("are dead the chapter has contradicted itself, and the sentence that killed the");
  ("second one is named: it is where the counting changed, and the place to open.");
  ("Only the first such sentence per word is named, because everything after it is");
  ("the same single fault said again.");
  let all = gloss_passages_occurrence_claims_urdu(
    passages,
    text_index,
    word_keys_read,
  );
  let exact_dead = {};
  let folded_dead = {};
  let told = {};
  let found = [];
  function claim_read(claim) {
    let counted = gloss_occurrence_claim_counted_is(claim);
    if (not(counted)) {
      return;
    }
    let word = property_get(claim, "word");
    let folded = text_lower_to(word);
    let claimed = property_get(claim, "claimed");
    let expected_exact = property_get(claim, "expected_exact");
    let expected_folded = property_get(claim, "expected_folded");
    let exact_is = equal(claimed, expected_exact);
    let folded_is = equal(claimed, expected_folded);
    if (not(exact_is)) {
      property_set(exact_dead, folded, 1);
    }
    if (not(folded_is)) {
      property_set(folded_dead, folded, 1);
    }
    let value = property_or_null(exact_dead, folded);
    let exact_gone = null_not_is(value);
    let value2 = property_or_null(folded_dead, folded);
    let folded_gone = null_not_is(value2);
    let ruleless = and(exact_gone, folded_gone);
    if (not(ruleless)) {
      return;
    }
    let value3 = property_or_null(told, folded);
    let named = null_not_is(value3);
    if (named) {
      return;
    }
    property_set(told, folded, 1);
    let verses_key = property_get(claim, "verses_key");
    let at = property_get(claim, "at");
    let spelled = property_get(claim, "spelled");
    let explain = property_get(claim, "explain");
    let finding = {
      verses_key,
      word,
      folded,
      at,
      spelled,
      claimed,
      expected_exact,
      expected_folded,
      explain,
    };
    list_add(found, finding);
  }
  each(all, claim_read);
  return found;
}
