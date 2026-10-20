import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passages_occurrence_claims_urdu } from "./gloss_passages_occurrence_claims_urdu.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_passages_occurrence_claims_wrong_urdu(
  passages,
  text_index,
  word_keys_read,
) {
  "Every sentence in an Urdu chapter that says which time over one of its English words has come and names a number the chapter's own words do not give, however the words are counted.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "A ROW HERE IS WRONG UNDER EVERY RULE THERE IS, WHICH IS WHAT MAKES IT SAFE TO FAIL A BUILD ON. Whether two spellings of one word count as the same word is an open question about what the store teaches, so the reading beside this counts both ways and a claim agreeing with either is left alone. What is left is a number that no way of counting reaches, and nobody has to decide anything to call it wrong.";
  "A claim whose number could not be read at all is left alone here rather than counted wrong, because not knowing what a sentence said is not the same as knowing it said something false. Those are gathered by their own reading, so they can be counted and looked at rather than vanishing between two tests.";
  "Every field the reading gathered is kept, the wording included. The number claimed and the two counts side by side are the whole of the mend: where both counts agree, there is one number to write instead, and where they differ, a reader can see which rule the sentence was following.";
  arguments_assert(arguments, 3);
  let all = gloss_passages_occurrence_claims_urdu(
    passages,
    text_index,
    word_keys_read,
  );
  function disagreeing_is(claim) {
    let claimed = property_get(claim, "claimed");
    let unread = null_is(claimed);
    if (unread) {
      return false;
    }
    let exact = property_get(claim, "expected_exact");
    let folded = property_get(claim, "expected_folded");
    let exact_is = equal(claimed, exact);
    let folded_is = equal(claimed, folded);
    let right = or(exact_is, folded_is);
    let wrong = not(right);
    return wrong;
  }
  let kept = list_filter(all, disagreeing_is);
  return kept;
}
