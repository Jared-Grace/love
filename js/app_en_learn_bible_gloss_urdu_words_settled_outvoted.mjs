import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_words_ranked } from "./app_en_learn_bible_gloss_urdu_words_ranked.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_gloss_urdu_settled_explains } from "./app_en_learn_bible_gloss_urdu_settled_explains.mjs";
import { gloss_words_settled_outvoted } from "./gloss_words_settled_outvoted.mjs";
export async function app_en_learn_bible_gloss_urdu_words_settled_outvoted() {
  "Every word in the store explaining English to an Urdu reader whose settled wording is carried by fewer entries than some other wording the same word is given, the widest disagreement first.";
  "This is the reading that corrects the settled tables rather than the store. The tables were written from English a word at a time; the entries were written in front of two hundred and sixty chapters of verses, and where they have converged on something the table never said, the table is the thing behind. 'there' was found that way by hand and the hand reading does not scale to seven thousand eight hundred words.";
  "Named for the store rather than taking it as a parameter, for the same reason the two rankings it stands beside are: the name is what a person types when they want the answer.";
  arguments_assert(arguments, 0);
  let ranked_all = await app_en_learn_bible_gloss_urdu_words_ranked();
  let ranked = property_get(ranked_all, "ranked");
  let settled = app_en_learn_bible_gloss_urdu_settled_explains();
  let r = gloss_words_settled_outvoted(ranked, settled);
  return r;
}
