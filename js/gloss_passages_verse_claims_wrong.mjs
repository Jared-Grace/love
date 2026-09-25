import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passages_verse_claims_all } from "./gloss_passages_verse_claims_all.mjs";
import { property_not } from "./property_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function gloss_passages_verse_claims_wrong(
  passages,
  text_index,
  word_key_read,
) {
  "Every word explanation in a chapter that names a verse holding nothing the word is related to, each one carrying the verses of that chapter where the word does stand.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "An explanation saying a word also stands in verse fifteen is the one kind of claim a machine can settle, because the chapter holds the answer and nothing outside it is needed. Everything else an explanation says is a matter of judgment; this is a matter of fact, and a wrong fact costs a reader more than a clumsy sentence does.";
  "How loosely two words count as the same is the caller's, and it is handed straight through, so the word being explained and the words of the verse are reduced the same way. Reduced differently, every claim would come back wrong.";
  "What comes back is a report and not a verdict. An explanation may name a verse to say what happens there rather than to say the word stands there, and such a sentence is right while being caught here. So each finding carries the wording that made it, and a reader decides.";
  "Every claim the chapter makes is gathered by the reading beside this one and the ones that held are dropped here. Deciding whether a verse holds a related word was written out twice before, once for the wrong claims and once for all of them, and two spellings of one test do not break when they part company - they simply start answering about different sets while both stay green.";
  "The flag saying the claim did not hold is taken off again on the way out, because every row that reaches a caller here failed by construction and a field that is false in every row tells a reader nothing.";
  "★ WHERE THE WORD DOES STAND IS KEPT FOR THE OPPOSITE REASON, BECAUSE IT DIFFERS ON EVERY ROW AND IT IS THE HALF THAT SAYS WHAT TO WRITE INSTEAD. One verse beside the row and the mend is settled; several and a person picks between them; none at all and the sentence is wrong about more than a number, since the chapter never uses that word anywhere.";
  "★ THE WORD THE CLAIM WAS ABOUT IS KEPT TOO, BECAUSE IT IS OFTEN NOT THE WORD THE ENTRY IS EXPLAINING AND A READER CANNOT TELL FROM ANYTHING ELSE ON THE ROW. The entry explains Jesus and the sentence claims Christ stood in verse two; both words are on the row, and without the second one the verses beside it look like an answer to a question nobody asked. Where the claim is about the entry's own word the two are the same word, said twice, which is the cheap half of telling a reader something they might otherwise have to go and find.";
  arguments_assert(arguments, 3);
  let all = gloss_passages_verse_claims_all(
    passages,
    text_index,
    word_key_read,
  );
  function held_not_is(claim) {
    let wrong = property_not(claim, "held");
    return wrong;
  }
  let kept = list_filter(all, held_not_is);
  function finding_of(claim) {
    let verses_key = property_get(claim, "verses_key");
    let word = property_get(claim, "word");
    let claimed_word = property_get(claim, "claimed_word");
    let verse_named = property_get(claim, "verse_named");
    let verses_held = property_get(claim, "verses_held");
    let explain = property_get(claim, "explain");
    let finding = {
      verses_key,
      word,
      claimed_word,
      verse_named,
      verses_held,
      explain,
    };
    return finding;
  }
  let found = list_map(kept, finding_of);
  return found;
}
