import { app_en_learn_bible_gloss_urdu_explain_place_clauses } from "./app_en_learn_bible_gloss_urdu_explain_place_clauses.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
export function app_en_learn_bible_gloss_urdu_explain_capital_claim_is(
  explain,
) {
  "Whether one Urdu explanation says the word wears a capital only because a verse or a sentence begins where it stands.";
  "The whole explanation is looked at rather than its opening, because this clause is a remark added at the end of a sentence that has already explained the word. That is the opposite of a pointer, which is only ever a pointer when it opens the explanation.";
  let clauses = app_en_learn_bible_gloss_urdu_explain_place_clauses();
  let bound = text_includes_any(explain, clauses);
  return bound;
}
