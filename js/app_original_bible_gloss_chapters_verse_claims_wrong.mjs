import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_claims_generic } from "./app_original_bible_gloss_chapters_claims_generic.mjs";
import { gloss_passages_verse_claims_wrong } from "./gloss_passages_verse_claims_wrong.mjs";
export async function app_original_bible_gloss_chapters_verse_claims_wrong() {
  "Every authored chapter of the original-language store holding a word explanation that names a verse where the word is not spelled.";
  "This is the reading that settles a claim outright. A sentence naming a verse can be checked against that verse, so what comes back here is worth opening rather than merely worth counting.";
  "A claim that comes back here is a report and not a verdict, and in this store less of one than in the others: Hebrew and Greek words change their ending with almost every use, the words are met here by their spelling alone, and an explanation pointing at another form of its own word will be counted wrong while being right. The wording that made the row travels with it so a reader can tell the two apart.";
  arguments_assert(arguments, 0);
  let r = await app_original_bible_gloss_chapters_claims_generic(
    gloss_passages_verse_claims_wrong,
  );
  return r;
}
