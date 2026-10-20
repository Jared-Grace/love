import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_rule_mixed } from "./app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_rule_mixed.mjs";
import { gloss_chapters_claims_wrong_names_generic } from "./gloss_chapters_claims_wrong_names_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_occurrence_claims_rule_mixed_names() {
  "The chapter, verses, word and entry number of every place in the Urdu-explained English store where one word's occurrence numbers stop following any single rule.";
  "A row names where the chapter changed its mind, not where it first went wrong. The slip is behind it: some earlier sentence about the same word already closed off the other rule, and this is the sentence that closed the last one. So the way to read a row is to list that word's numbers through the whole chapter and see which rule the chapter kept to, then mend the few that left it.";
  "The ordinal word itself is deliberately not in the row, so that rewording a sentence cannot rename a fault.";
  arguments_assert(arguments, 0);
  let part = "at";
  let chapters =
    await app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_rule_mixed();
  let names = gloss_chapters_claims_wrong_names_generic(chapters, part);
  return names;
}
