import { app_ceb_bible_gloss_repairs_priced } from "./app_ceb_bible_gloss_repairs_priced.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_words_lossless_rooted } from "./gloss_words_lossless_rooted.mjs";
export async function app_ceb_bible_gloss_repairs_lossless() {
  "The Cebuano words a repair cannot damage, with whatever roots the dictionary claims for them: the end of the gloss queue that is safe to overwrite.";
  "Every other row in that queue asks an author to replace standing explanations that are already right - measured at about twenty-two of them for each faulty sighting mended. These rows ask that of nobody, because every sighting of the word is at fault already.";
  "Safe to overwrite is not the same as cheap to write, and here the two run opposite. Read what comes back before trusting a root: most of them are manufactured, for the reason set out where the rows are built.";
  "The whole queue is priced first and the safe rows taken from the answer, so the two readings can never disagree about which rows those are.";
  "Nothing is written. Read the rows, settle each sentence against a source that can be checked, and hand it over with the repair by name.";
  let priced = await app_ceb_bible_gloss_repairs_priced();
  let known = await binisaya_words_known();
  let r = gloss_words_lossless_rooted(known, priced);
  return r;
}
