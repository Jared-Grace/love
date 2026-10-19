import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_tagalog_generate } from "./app_en_learn_bible_gloss_tagalog_generate.mjs";
import { gloss_glosses_empty_gate_generic } from "./gloss_glosses_empty_gate_generic.mjs";
export async function app_en_learn_bible_gloss_tagalog_glosses_empty_gate_run() {
  "Gate: no authored chapter of English words explained in Tagalog carries a word explanation whose Tagalog meaning is blank. Throws so the dispatcher seam exits nonzero.";
  "The reader here is learning English, so the Tagalog meaning is the one piece of the row they can already understand, and the alignment gate never looks at it.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_tagalog_generate;
  let r = await gloss_glosses_empty_gate_generic(fn, "en_learn_bible");
  return r;
}
