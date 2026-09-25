import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_claims_generic } from "./app_en_learn_bible_gloss_urdu_chapters_claims_generic.mjs";
import { gloss_passages_verse_claims_wrong } from "./gloss_passages_verse_claims_wrong.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong() {
  "Every authored chapter of the Urdu-explained English store holding a word explanation that names a verse where no word built on the same root stands.";
  "This is the reading that settles a claim outright. A sentence naming a verse can be checked against that verse, so what comes back here is wrong rather than merely worth reading.";
  "A claim that comes back here is still a report and not a verdict: an explanation may name a verse to say what happens in it rather than to say the word stands in it. The wording that made the row travels with it so a reader can tell the two apart.";
  arguments_assert(arguments, 0);
  let r = await app_en_learn_bible_gloss_urdu_chapters_claims_generic(
    gloss_passages_verse_claims_wrong,
  );
  return r;
}
