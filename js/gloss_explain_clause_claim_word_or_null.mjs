import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { or } from "./or.mjs";
export function gloss_explain_clause_claim_word_or_null(quoted) {
  "Which word one thought inside an explanation is making its claim about: the empty text when it is the word being explained, the quoted word when it is some other word, and nothing at all when it cannot be told.";
  "A VERSE NUMBER ON ITS OWN SAYS WHERE, AND NEVER WHAT. The check downstream asks whether the named verse holds the word being explained, and that question is only the right one when the thought naming the verse was about that word. It is the same word that came in verse five is about it; in verse one came 'no' is about a different word entirely, and the sentence quotes which. Measured on 2026-09-25 over the Urdu store, a hundred and thirty-three of the seven hundred and two standing rows named a verse in order to point at a quoted word, and every one of those was being checked against the wrong word.";
  "QUOTING NOTHING IS THE CLAIM ABOUT THE WORD ITSELF, and that is why the answer for it is the empty text rather than nothing. Nothing means the reading could not tell and the number is dropped unchecked; the empty text means the reading could tell, and the answer is the word the caller already has. Two different silences would have read the same, and the one that drops a claim is the dearer of the two to get wrong.";
  "A QUOTED PIECE OF A WORD IS NOT A WORD, SO NO VERSE CAN BE ASKED WHETHER IT HOLDS ONE. The start 'under-' is the same word that stood alone in verse nineteen is a true sentence about a prefix, and the check downstream matches whole words only, so it would answer that verse nineteen does not hold it and be wrong about a sentence that was right. A dash at either end is what marks a piece, because that is how these explanations write one - 'under-' at the front, '-ing' and '-est' at the back. Four rows of the Urdu store on 2026-09-25, and the reason this reading was asked for.";
  "SEVERAL QUOTED WORDS IN ONE THOUGHT ARE NOT NARROWED DOWN BY GUESSING WHICH IS NEARER THE NUMBER. Verses one, two and three's 'with' and verse seven's 'out' joined together says two things about two verses in one breath, and the word nearest the number is the right answer in one of them and the wrong answer in the other. Seventy-two rows were of that shape, and a rule that picked would have been right about roughly half of them without ever saying which half. So the number is dropped instead, and a claim dropped is a claim nobody is accused over.";
  "$plain quoted";
  "it is the runs of text the thought put inside apostrophes, and none of them names anything that runs.";
  arguments_assert(arguments, 1);
  let count = list_size(quoted);
  let silent = equal(count, 0);
  if (silent) {
    let own = "";
    return own;
  }
  let one = equal(count, 1);
  if (not(one)) {
    return null;
  }
  let only = list_first(quoted);
  let opens = text_starts_with(only, "-");
  let closes = text_ends_with(only, "-");
  let piece = or(opens, closes);
  if (piece) {
    return null;
  }
  return only;
}
