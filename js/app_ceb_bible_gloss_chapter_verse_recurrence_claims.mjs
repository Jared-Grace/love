import { app_ceb_bible_gloss_chapter_claims_generic } from "./app_ceb_bible_gloss_chapter_claims_generic.mjs";
import { gloss_passages_verse_recurrence_claims } from "./gloss_passages_verse_recurrence_claims.mjs";
export async function app_ceb_bible_gloss_chapter_verse_recurrence_claims(
  chapter_code,
) {
  "Every Cebuano word explanation in one chapter that says how often its word stands there, laid beside the verses the word actually stands in.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This is the reading that finds the claims nobody can check by naming a verse: the only one, the third time, six verses, nowhere else. Those are the ones an author writes most freely and gets wrong most easily, because writing one costs nothing and checking one costs a reading of the whole chapter.";
  "Nothing here is called wrong. It is a reading list with the answer printed beside each entry, and a reader settles each in a second.";
  let r = await app_ceb_bible_gloss_chapter_claims_generic(
    chapter_code,
    gloss_passages_verse_recurrence_claims,
  );
  return r;
}
