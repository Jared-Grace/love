import { gloss_chapters_entries_places_generic } from "./gloss_chapters_entries_places_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is } from "./app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is.mjs";
export async function app_en_learn_bible_gloss_urdu_capital_claim_wrong_places() {
  "Every entry in the English-to-Urdu gloss store whose explanation asserts a capital the word does not carry, given back with the verses it stands in.";
  "The store and the reading are named here rather than asked for, because there is one of each and a caller that had to supply them could supply a pair that do not belong together.";
  let places = await gloss_chapters_entries_places_generic(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is,
  );
  return places;
}
