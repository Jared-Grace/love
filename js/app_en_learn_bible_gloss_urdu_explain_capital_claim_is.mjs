import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { app_en_learn_bible_gloss_urdu_explain_capital_claims } from "./app_en_learn_bible_gloss_urdu_explain_capital_claims.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_capital_claim_is(
  explain,
) {
  "Whether one Urdu explanation asserts that the word in front of the reader is written with a capital letter.";
  "The whole explanation is looked at rather than its opening, because this is a remark added to a sentence that has already explained the word. That is the opposite of a pointer, which is only ever a pointer when it opens the explanation.";
  "The short vowel marks are taken off first. Measured 2026-09-17 - reading the explanation as written with only the first two wordings passed over 348 claims in the store - 278 of them only for a vowel mark such as the zer in لِکھا - so a false one written that way would have gone through.";
  let claims = app_en_learn_bible_gloss_urdu_explain_capital_claims();
  let s = text_accent_marks_removed(explain);
  let claimed = text_includes_any(s, claims);
  return claimed;
}
