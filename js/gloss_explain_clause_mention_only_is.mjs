import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_urdu } from "./gloss_explain_verse_numbers_urdu.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { gloss_explain_clause_claim_verbs_urdu } from "./gloss_explain_clause_claim_verbs_urdu.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
import { not } from "./not.mjs";
export function gloss_explain_clause_mention_only_is(clause, verse_numbers) {
  "Whether one thought out of a word explanation names a verse in order to say what happens in it, rather than to say that a word stands in it - and so whether a check reading this thought as a claim would be accusing a true sentence.";
  "A SENTENCE MAY NAME A VERSE FOR EITHER REASON AND ONLY ONE OF THEM IS CHECKABLE. In verse fifteen the same joining word came says where a word stands, and a reader can go to verse fifteen and see. In verse seven the angels were called wind says what verse seven does, and the word being explained was never claimed to be there at all. Both are the same address shape, so a check that reads every address as a claim reports the second as a fault forever.";
  "★ THE ANSWER IS YES ONLY WHERE THE LANGUAGE OF THE THOUGHT IS ONE WHOSE CLAIMING VERBS ARE WRITTEN DOWN, WHICH IS WHAT MAKES ADDING A LANGUAGE SAFE AND LEAVING ONE OUT HARMLESS. This reading subtracts, and the reading next door that finds the numbers adds: asking every language there costs nothing, because a language nobody has read yet simply finds nothing and the union is unchanged. Here the same shape would be a disaster - an unread language has no verbs listed, every one of its thoughts would read as a mention, and every claim that store has ever made would vanish in silence. So the verse is looked for in the one language whose verbs are known, and a thought whose verse was named any other way is answered no.";
  "★ THE POLARITY IS WRITTEN THIS WAY ROUND ON PURPOSE: THE QUESTION ASKED IS IS THIS ONLY A MENTION, SO NOT KNOWING ANSWERS NO AND NOTHING IS TAKEN AWAY. The other way round - is this a real claim - reads better in the caller and fails the wrong way, because every uncertainty would then drop a row. A check losing a fault it had is dearer than a check keeping a row somebody has to read, which is the same trade the shutters and the words of unstated count were chosen by.";
  "The thought is handed in already cut, because the reading that cuts an explanation into thoughts is the caller's and the cut is what makes the verb belong to this verse rather than to the next one.";
  "$plain clause";
  "$plain verse_numbers";
  "the first is one thought out of a sentence somebody wrote about a word, the second is the numbers that chapter's verses actually carry, and neither names anything that runs.";
  arguments_assert(arguments, 2);
  let urdu = gloss_explain_verse_numbers_urdu(clause, verse_numbers);
  let unnamed = list_empty_is(urdu);
  if (unnamed) {
    return false;
  }
  let verbs = gloss_explain_clause_claim_verbs_urdu();
  let claiming = text_includes_any(clause, verbs);
  let r = not(claiming);
  return r;
}
