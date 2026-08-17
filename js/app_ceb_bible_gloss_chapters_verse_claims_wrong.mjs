export async function app_ceb_bible_gloss_chapters_verse_claims_wrong() {
  "Every authored Cebuano chapter holding a word explanation that names a verse where no word built on the same root stands.";
  "This is the reading that settles a claim outright. A sentence naming a verse can be checked against that verse, so what comes back here is wrong rather than merely worth reading.";
  let r = await app_ceb_bible_gloss_chapters_claims_generic(
    gloss_passages_verse_claims_wrong,
  );
  return r;
}
