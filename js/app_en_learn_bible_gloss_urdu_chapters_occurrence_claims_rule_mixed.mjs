import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_claims_generic } from "./app_en_learn_bible_gloss_urdu_chapters_claims_generic.mjs";
import { gloss_passages_occurrence_claims_rule_mixed_urdu } from "./gloss_passages_occurrence_claims_rule_mixed_urdu.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_rule_mixed() {
  "Every authored chapter of the Urdu-explained English store where one English word's occurrence numbers stop following any single rule part way through.";
  "The reading beside this one asks whether each number on its own can be got to by some rule. This one asks the harder question: whether one rule reaches all of a word's numbers in the chapter. A chapter that counted some of a word's comings with the spellings apart and the rest with them folded together answers the first question everywhere and this one nowhere, and a student following along has no way to predict the next number.";
  "A chapter nobody has authored yet costs nothing to ask about, because the sweep reads what is stored and answers with nothing where nothing is stored.";
  arguments_assert(arguments, 0);
  let r = await app_en_learn_bible_gloss_urdu_chapters_claims_generic(
    gloss_passages_occurrence_claims_rule_mixed_urdu,
  );
  return r;
}
