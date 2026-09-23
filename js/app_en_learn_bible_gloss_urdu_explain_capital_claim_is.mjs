import { app_en_learn_bible_gloss_urdu_explain_capital_claims_elsewhere } from "./app_en_learn_bible_gloss_urdu_explain_capital_claims_elsewhere.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { app_en_learn_bible_gloss_urdu_explain_capital_claims } from "./app_en_learn_bible_gloss_urdu_explain_capital_claims.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_capital_claim_is(
  explain,
) {
  "Whether one Urdu explanation asserts that the word in front of the reader is written with a capital letter.";
  "The whole explanation is looked at rather than its opening, because this is a remark added to a sentence that has already explained the word. That is the opposite of a pointer, which is only ever a pointer when it opens the explanation.";
  "The short vowel marks are taken off first. Measured 2026-09-17 - reading the explanation as written with only the first two wordings passed over 348 claims in the store - 278 of them only for a vowel mark such as the zer in لِکھا - so a false one written that way would have gone through.";
  "A claim made about some other word is taken out of the text before the looking starts, and it is taken out while the vowel marks are still on. The order is the whole of it. A capital claimed for a title standing after the word is spelled اُس کا, a capital claimed for the word itself is spelled اِس کا, and once the marks come off those two are the same six letters - so the sentence that asserts nothing about this word has to go before the folding that would make it indistinguishable from the twenty that do.";
  "Measured 2026-09-23: reading without this called four explanations false, and one of the four was the sentence in Revelation 22 teaching that 'the' stands in front of a title although the title carries the capital. That sentence is right, and the repair that follows a wrong claim would have deleted it whole.";
  let elsewhere =
    app_en_learn_bible_gloss_urdu_explain_capital_claims_elsewhere();
  let own = text_replace_multiple_to(explain, elsewhere, "");
  let claims = app_en_learn_bible_gloss_urdu_explain_capital_claims();
  let s = text_accent_marks_removed(own);
  let claimed = text_includes_any(s, claims);
  return claimed;
}
