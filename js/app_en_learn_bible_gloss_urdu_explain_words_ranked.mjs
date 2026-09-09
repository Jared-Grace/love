import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_words_ranked } from "./gloss_explain_words_ranked.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_explain_words_ranked(
  explain,
) {
  "Every English word the store explaining English to an Urdu reader has handed one exact sentence, the commonest first.";
  "$plain explain";
  "the wording is the sentence itself, copied out of the ranking of repeated wordings, and it is compared word for word. It names nothing that runs.";
  "Named for the store rather than taking it as a parameter, for the same reason the ranking beside it is: the person asking has just read a wording off that ranking and wants the words under it, and being asked which store would be one more thing to get right at the moment they only want the answer.";
  arguments_assert(arguments, 1);
  let r = await gloss_explain_words_ranked(
    app_en_learn_bible_gloss_urdu_generate,
    explain,
  );
  return r;
}
