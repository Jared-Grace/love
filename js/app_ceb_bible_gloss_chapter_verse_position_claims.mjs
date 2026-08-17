import { app_ceb_bible_gloss_chapter_claims_generic } from "./app_ceb_bible_gloss_chapter_claims_generic.mjs";
import { gloss_passages_verse_position_claims } from "./gloss_passages_verse_position_claims.mjs";
export async function app_ceb_bible_gloss_chapter_verse_position_claims(
  chapter_code,
) {
  "Every Cebuano word explanation in one chapter that says where its word stands among the words beside it, laid beside the words that actually stand there.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA019, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This is the reading the other two could not do. One chapter authored with both of them run before publishing still went out with a sentence calling a word the one just before another, when a third word stood between; both readings came back with nothing, because both ask only which verses a word is in.";
  "Nothing here is called wrong. The place and the two words beside it are printed, and a reader settles each in a second.";
  let r = await app_ceb_bible_gloss_chapter_claims_generic(
    chapter_code,
    gloss_passages_verse_position_claims,
  );
  return r;
}
