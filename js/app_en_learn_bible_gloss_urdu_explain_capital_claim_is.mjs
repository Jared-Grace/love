import { app_en_learn_bible_gloss_urdu_explain_capital_claims } from "./app_en_learn_bible_gloss_urdu_explain_capital_claims.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_capital_claim_is(
  explain,
) {
  "Whether one Urdu explanation asserts that the word in front of the reader is written with a capital letter.";
  "The whole explanation is looked at rather than its opening, because this is a remark added to a sentence that has already explained the word. That is the opposite of a pointer, which is only ever a pointer when it opens the explanation.";
  let claims = app_en_learn_bible_gloss_urdu_explain_capital_claims();
  let claimed = text_includes_any(explain, claims);
  return claimed;
}
