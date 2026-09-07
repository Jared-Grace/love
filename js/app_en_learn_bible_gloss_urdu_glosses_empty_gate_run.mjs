import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_glosses_empty_gate_generic } from "./gloss_glosses_empty_gate_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_glosses_empty_gate_run() {
  "Gate: no authored chapter of English words explained in Urdu carries a word explanation whose Urdu meaning is blank. Throws so the dispatcher seam exits nonzero.";
  "The reader here is learning English and cannot read the English word yet, so the Urdu meaning is the one piece of the row they can already understand. Four published chapters reached readers with 579 of those meanings missing while every gate stayed green, which is what this closes.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_glosses_empty_gate_generic(fn, "en_learn_bible");
  return r;
}
