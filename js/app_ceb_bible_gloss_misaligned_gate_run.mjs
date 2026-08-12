import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
export async function app_ceb_bible_gloss_misaligned_gate_run() {
  "Gate: no authored Cebuano gloss chapter explains words the passage does not carry, in the order the page paints them. Throws so the dispatcher seam exits nonzero.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_words_misaligned_gate_generic(fn, "ceb bible");
  return r;
}
