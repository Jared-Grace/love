import { gloss_chapters_entries_explain_rewrite_generic } from "./gloss_chapters_entries_explain_rewrite_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is } from "./app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is.mjs";
import { app_en_learn_bible_gloss_urdu_capital_claim_explain_repaired } from "./app_en_learn_bible_gloss_urdu_capital_claim_explain_repaired.mjs";
export async function app_en_learn_bible_gloss_urdu_capital_claim_wrong_repair() {
  "Takes the false sentence out of every Urdu explanation in the English-to-Urdu gloss store that claims a capital the word does not carry, and gives back how many words moved.";
  "It finds its own set rather than being handed one, so running it twice is safe and running it after new chapters are authored repairs those too. The reading that finds the fault and the reading that repairs it are the same pair the measurement uses, so the count it reports and the count the measurement reports cannot drift apart.";
  let done = await gloss_chapters_entries_explain_rewrite_generic(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is,
    app_en_learn_bible_gloss_urdu_capital_claim_explain_repaired,
  );
  return done;
}
