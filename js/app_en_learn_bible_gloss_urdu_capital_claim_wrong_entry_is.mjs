import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_capital_claim_is } from "./app_en_learn_bible_gloss_urdu_explain_capital_claim_is.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
export function app_en_learn_bible_gloss_urdu_capital_claim_wrong_entry_is(
  entry,
) {
  "Whether one entry of the English-to-Urdu gloss store wears an explanation asserting the word is written with a capital letter while the word itself carries no capital at all.";
  "The word settles it without anyone reading the verse. The sentence says the first letter is a capital; the word in front of it has none; so the sentence is false where it stands, whoever wrote it and whatever they meant by it.";
  let key = gloss_entry_explain_key();
  let explain = property_get_or_null(entry, key);
  let written = null_not_is(explain);
  if (written) {
    let claimed =
      app_en_learn_bible_gloss_urdu_explain_capital_claim_is(explain);
    if (claimed) {
      let word = gloss_entry_word_read(entry);
      let folded = text_lower_to(word);
      let plain = equal(word, folded);
      return plain;
    }
  }
  return false;
}
