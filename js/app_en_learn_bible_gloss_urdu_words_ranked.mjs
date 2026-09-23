import { gloss_chapters_words_ranked } from "./gloss_chapters_words_ranked.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_words_ranked() {
  "Every English word the store explaining English to an Urdu reader has glossed, beside all the different wordings its entries carry, the busiest word first.";
  "Its twin ranks wordings and answers what to write next. This ranks words and answers two questions that one cannot: which words are still being told several different things, and which words carry a wording their settled table no longer spells that way. The second is invisible to a ranking of wordings, because a superseded sentence was never a shared label and so never appears in a list of labels to license.";
  "Named for the store rather than taking it as a parameter, for the same reason its twin is: the name is what a person types when they want the answer, and being asked which store to read is one more thing to get right at the moment somebody just wants it.";
  let r = await gloss_chapters_words_ranked(
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}
