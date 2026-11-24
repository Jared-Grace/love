import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_verse_numbers_urdu } from "./gloss_explain_verse_numbers_urdu.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { gloss_explain_same_words_urdu } from "./gloss_explain_same_words_urdu.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
import { not } from "./not.mjs";
import { gloss_explain_sentence_marks } from "./gloss_explain_sentence_marks.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
import { gloss_explain_original_words_urdu } from "./gloss_explain_original_words_urdu.mjs";
import { text_includes } from "./text_includes.mjs";
export function gloss_explain_clause_original_word_is_urdu(
  explain,
  clause,
  verse_numbers,
) {
  "Whether one thought out of an Urdu word explanation names a verse to say the original Hebrew or Greek word stands there - the same word, in a sentence that has already said in the original - rather than to say the English word being explained stands there.";
  "★ SUCH A THOUGHT IS TRUE AND UNCHECKABLE HERE, BECAUSE THE CHECK ASKS THE ENGLISH VERSE AND THE CLAIM IS ABOUT THE WORD UNDER IT. The same Hebrew word stands under different English words in different verses, so a sentence pointing at it is accused whenever the English differs.";
  "★ ALL THREE MUST HOLD, WHICH IS WHAT KEEPS REAL FAULTS FAILING. The verse is named the Urdu way; the thought itself says the same word or this very verb; and the sentence it sits in says in the original. A thought that says the same word without turning to the original is still asked, and so is a sentence about the original whose verse thought says nothing about sameness.";
  "The polarity is the one the mention test beside it uses: the question is is this about the original word, so not knowing answers no and nothing is taken away. Only the guessed claims are asked, because a quoted word is an explicit claim.";
  "$plain explain";
  "$plain clause";
  "$plain verse_numbers";
  "the first is the whole sentence somebody wrote about a word, the second is one thought cut out of it, the third is the numbers that chapter's verses carry, and none names anything that runs.";
  arguments_assert(arguments, 3);
  let urdu = gloss_explain_verse_numbers_urdu(clause, verse_numbers);
  let unnamed = list_empty_is(urdu);
  if (unnamed) {
    return false;
  }
  let same_words = gloss_explain_same_words_urdu();
  let same = text_includes_any(clause, same_words);
  if (not(same)) {
    return false;
  }
  let marks = gloss_explain_sentence_marks();
  let sentences = text_split_multiple(explain, marks);
  let original_words = gloss_explain_original_words_urdu();
  for (let sentence of sentences) {
    let holds = text_includes(sentence, clause);
    if (not(holds)) {
      continue;
    }
    let original = text_includes_any(sentence, original_words);
    if (original) {
      return true;
    }
  }
  return false;
}
