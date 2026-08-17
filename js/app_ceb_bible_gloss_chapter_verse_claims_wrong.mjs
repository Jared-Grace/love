import { app_ceb_bible_gloss_chapter_claims_generic } from "./app_ceb_bible_gloss_chapter_claims_generic.mjs";
import { gloss_passages_verse_claims_wrong } from "./gloss_passages_verse_claims_wrong.mjs";
export async function app_ceb_bible_gloss_chapter_verse_claims_wrong(
  chapter_code,
) {
  "Every Cebuano word explanation in one chapter that names a verse holding no word built on the same root.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This asks a different question from the three measures beside it. Those read a word against a dictionary; this reads a sentence against the chapter it was written about, so it finds a claim that is false rather than an explanation that is thin.";
  "The reading of counting claims is its twin. This one settles a claim outright, because a claim naming a verse can be settled; that one only lays the true count beside a sentence, because a claim naming no verse cannot.";
  let r = await app_ceb_bible_gloss_chapter_claims_generic(
    chapter_code,
    gloss_passages_verse_claims_wrong,
  );
  return r;
}
