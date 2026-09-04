import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_affix_kinds_wrong_words_generic } from "./gloss_affix_kinds_wrong_words_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_words() {
  "Every distinct Cebuano word whose explanation names a piece the dictionary gives no piece of, with the chapters it is wrong in, commonest first.";
  "This is the list to write from. The chapter counts say which words pay for themselves first: one sentence written for a word met in forty psalms puts forty explanations right.";
  let known = await binisaya_words_known();
  let r = await gloss_affix_kinds_wrong_words_generic(
    app_ceb_bible_gloss_generate,
    known,
  );
  return r;
}
