import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passages_verse_claims_all } from "./gloss_passages_verse_claims_all.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_passages_verse_claims_wrong(
  passages,
  text_index,
  word_key_read,
) {
  "Every word explanation in a chapter that names a verse holding nothing the word is related to.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "An explanation saying a word also stands in verse fifteen is the one kind of claim a machine can settle, because the chapter holds the answer and nothing outside it is needed. Everything else an explanation says is a matter of judgment; this is a matter of fact, and a wrong fact costs a reader more than a clumsy sentence does.";
  "How loosely two words count as the same is the caller's, and it is handed straight through, so the word being explained and the words of the verse are reduced the same way. Reduced differently, every claim would come back wrong.";
  "What comes back is a report and not a verdict. An explanation may name a verse to say what happens there rather than to say the word stands there, and such a sentence is right while being caught here. So each finding carries the wording that made it, and a reader decides.";
  "Every claim the chapter makes is gathered by the reading beside this one and the ones that held are dropped here. Deciding whether a verse holds a related word was written out twice before, once for the wrong claims and once for all of them, and two spellings of one test do not break when they part company - they simply start answering about different sets while both stay green.";
  "The flag saying the claim did not hold is taken off again on the way out, because every row that reaches a caller here failed by construction and a field that is false in every row tells a reader nothing.";
  arguments_assert(arguments, 3);
  let all = gloss_passages_verse_claims_all(
    passages,
    text_index,
    word_key_read,
  );
  function held_not_is(claim) {
    let held = property_get(claim, "held");
    let wrong = not(held);
    return wrong;
  }
  let kept = list_filter(all, held_not_is);
  function finding_of(claim) {
    let verses_key = property_get(claim, "verses_key");
    let word = property_get(claim, "word");
    let verse_named = property_get(claim, "verse_named");
    let explain = property_get(claim, "explain");
    let finding = {
      verses_key,
      word,
      verse_named,
      explain,
    };
    return finding;
  }
  let found = list_map(kept, finding_of);
  return found;
}
