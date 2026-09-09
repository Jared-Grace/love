import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { app_en_learn_bible_gloss_urdu_capital_claim_wordings } from "./app_en_learn_bible_gloss_urdu_capital_claim_wordings.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_capital_claims } from "./app_en_learn_bible_gloss_urdu_explain_capital_claims.mjs";
import { text_urdu_sentence_end } from "./text_urdu_sentence_end.mjs";
import { gloss_explain_claim_sentences_stripped } from "./gloss_explain_claim_sentences_stripped.mjs";
export function app_en_learn_bible_gloss_urdu_capital_claim_explain_repaired(
  entry,
) {
  "What should stand in place of an Urdu explanation that claims a capital the word does not carry: the hand-written wording if one was authored for that word, and otherwise the same explanation with the false sentence taken out.";
  "The hand-written wording is asked for first because it is the narrower answer. Where somebody has looked at the word and written a fresh explanation for it, that judgement should not be overruled by a rule that only knows how to delete.";
  let key = gloss_entry_explain_key();
  let explain = property_get_or_null(entry, key);
  let word = gloss_entry_word_read(entry);
  let folded = text_lower_to(word);
  let wordings = app_en_learn_bible_gloss_urdu_capital_claim_wordings();
  let authored = property_get_or_null(wordings, folded);
  let held = null_not_is(authored);
  if (held) {
    return authored;
  }
  let claims = app_en_learn_bible_gloss_urdu_explain_capital_claims();
  let end = text_urdu_sentence_end();
  let stripped = gloss_explain_claim_sentences_stripped(explain, claims, end);
  return stripped;
}
