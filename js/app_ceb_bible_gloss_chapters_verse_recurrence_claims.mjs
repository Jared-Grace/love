import { app_ceb_bible_gloss_chapters_claims_generic } from "./app_ceb_bible_gloss_chapters_claims_generic.mjs";
import { gloss_passages_verse_recurrence_claims } from "./gloss_passages_verse_recurrence_claims.mjs";
export async function app_ceb_bible_gloss_chapters_verse_recurrence_claims() {
  "Every authored Cebuano chapter holding a word explanation that says how often its word stands there, each laid beside the verses the word actually stands in.";
  "Nothing here is called wrong. A claim naming no verse cannot be settled by a machine, so the true verses are printed beside the sentence and a reader settles each in a second.";
  "This is the larger half. Of eleven false sentences found by hand in one chapter, nine named no verse and only two did.";
  let r = await app_ceb_bible_gloss_chapters_claims_generic(
    gloss_passages_verse_recurrence_claims,
  );
  return r;
}
