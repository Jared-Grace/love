import { gloss_chapters_capital_claim_wrong } from "./gloss_chapters_capital_claim_wrong.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_explain_capital_claim_is } from "./app_en_learn_bible_gloss_urdu_explain_capital_claim_is.mjs";
export async function app_en_learn_bible_gloss_urdu_capital_claim_wrong() {
  "How many Urdu explanations in the English-to-Urdu gloss store say the word wears a capital because a verse begins where it stands, and how many of those sit on a word carrying no capital at all.";
  "The store and the reading of what counts as such a clause are named here rather than asked for, because there is one of each and a caller that had to supply them could supply a pair that do not belong together.";
  let found = await gloss_chapters_capital_claim_wrong(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_capital_claim_is,
  );
  return found;
}
