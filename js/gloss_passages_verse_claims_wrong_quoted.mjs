import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passages_verse_claims_wrong } from "./gloss_passages_verse_claims_wrong.mjs";
import { property_not } from "./property_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_passages_verse_claims_wrong_quoted(
  passages,
  text_index,
  word_key_read,
) {
  "The wrong verse claims of a chapter, kept only where the sentence quoted the word it was claiming about, for a store whose explanations name a verse far more often than they name a word.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "★ A SENTENCE THAT NAMES A VERSE AND QUOTES NO WORD HAS NOT SAID WHAT IT IS CLAIMING, AND THE READING NEXT DOOR THEN SUPPLIES THE WORD THE ENTRY IS ABOUT. That fallback is a guess, and whether it is a good one is decided by a whole store's writing habits rather than by anything in the sentence. Where the explanations are short and about one word it is usually right. Where they are essays about a whole verse it is almost never right, and every literary cross-reference becomes an accusation.";
  "★ MEASURED 2026-09-28, THE TWO STORES ARE OPPOSITE ON THIS AND NEITHER ANSWER WOULD DO FOR BOTH. Deuteronomy and Joshua put two hundred and twenty-nine rows into the original-language store; two hundred and twenty-seven quoted nothing, and reading every one of them by hand found no fault at all - only look back at verse thirteen, and it is the same root as verse twenty-eight, and this word was not in verse one, which is an absence reported as a presence. Over eleven Urdu chapters, seventy-one of seventy-three wrong rows also quoted nothing - but all three faults confirmed by hand in first John two were among them. So this filter must never be put in the shared reading: there it would delete the whole of what the check has ever found.";
  "Why the stores differ is the writers and not the languages. An Urdu explanation quotes the English word constantly, because its reader does not read English and has nothing else to hold on to. English prose explaining Hebrew says the same root and quotes nothing, because its reader can see the word in front of him.";
  "The price is a fault this can no longer see: an explanation of a Hebrew word that does say the word stands in verse nine, without quoting anything, and is wrong. Two hundred and twenty-seven unreadable rows buy nothing, and a queue nobody reads catches nothing either, so the trade is the same one the shared reading already makes twice.";
  arguments_assert(arguments, 3);
  let wrong = gloss_passages_verse_claims_wrong(
    passages,
    text_index,
    word_key_read,
  );
  function quoted_is(claim) {
    let quoted = property_not(claim, "own");
    return quoted;
  }
  let kept = list_filter(wrong, quoted_is);
  return kept;
}
