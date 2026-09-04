import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_affix_kinds_words_spread_generic } from "./gloss_affix_kinds_words_spread_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_affix_kinds_words_spread() {
  "The corrected Cebuano explanations written one per word turned into repairs for every chapter each word is wrong in.";
  "Run the repair step afterwards. This only fills in the file that step reads, so until it runs the store still says what it said.";
  let known = await binisaya_words_known();
  let r = await gloss_affix_kinds_words_spread_generic(
    app_ceb_bible_gloss_generate,
    known,
  );
  return r;
}
