import { app_ceb_bible_gloss_chapters_claims_generic } from "./app_ceb_bible_gloss_chapters_claims_generic.mjs";
import { gloss_passages_verse_position_claims } from "./gloss_passages_verse_position_claims.mjs";
export async function app_ceb_bible_gloss_chapters_verse_position_claims() {
  "Every authored Cebuano chapter holding a word explanation that says where its word stands among the words beside it, each laid beside the words that actually stand there.";
  "Nothing here is called wrong. A claim about the order of words in a line is settled by reading the line, so the place and the two words beside it are printed and a reader settles each in a second.";
  "The dictionary is opened once for the whole sweep rather than once a chapter, which is what makes asking every chapter affordable.";
  let r = await app_ceb_bible_gloss_chapters_claims_generic(
    gloss_passages_verse_position_claims,
  );
  return r;
}
