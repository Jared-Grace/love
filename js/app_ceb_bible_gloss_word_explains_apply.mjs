import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_word_explains } from "./app_ceb_bible_gloss_word_explains.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
export async function app_ceb_bible_gloss_word_explains_apply() {
  "Write the settled wording for each named Cebuano word over every explanation of that word in the store, and answer with the chapters it rewrote.";
  "It takes no list from the caller and finds none of its own by reading: the words and their wordings are written down together in one place, so running it again after that place is added to covers the new words and asks nothing twice.";
  let explains = app_ceb_bible_gloss_word_explains();
  let r = await gloss_chapters_word_explains_set(
    app_ceb_bible_gloss_generate,
    explains,
  );
  return r;
}
