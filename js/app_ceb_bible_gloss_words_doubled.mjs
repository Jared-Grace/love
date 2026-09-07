import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_words_bare_doubled } from "./gloss_words_bare_doubled.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_words_doubled() {
  "Every Cebuano word the gloss store explains under two spellings at once, and how many of those pairs say different things.";
  "The store this reads is the one the Cebuano bible app paints from, so a word counted here as disagreeing is a word a reader is shown one sentence about in one chapter and a different sentence about in another. Naming the store here rather than asking the caller for it is what makes that sentence sayable at all.";
  arguments_assert(arguments, 0);
  let doubled = await gloss_words_bare_doubled(app_ceb_bible_gloss_generate);
  return doubled;
}
