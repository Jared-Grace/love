import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_claims_generic } from "./app_en_learn_bible_gloss_urdu_chapters_claims_generic.mjs";
import { gloss_passages_occurrence_claims_wrong_urdu } from "./gloss_passages_occurrence_claims_wrong_urdu.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_wrong() {
  "Every authored chapter of the Urdu-explained English store holding a sentence that says which time over an English word has come and names a number the chapter's own words do not give.";
  "This is a reading that settles a claim outright rather than one worth a second look. The chapter holds its words in order, so the number can be counted again, and a row here disagrees with that count however the words are counted.";
  "A chapter nobody has authored yet costs nothing to ask about, because the sweep reads what is stored and answers with nothing where nothing is stored.";
  arguments_assert(arguments, 0);
  let r = await app_en_learn_bible_gloss_urdu_chapters_claims_generic(
    gloss_passages_occurrence_claims_wrong_urdu,
  );
  return r;
}
