import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_glosses_empty_gate_generic } from "./gloss_glosses_empty_gate_generic.mjs";
import { app_learn_en_gloss_authored } from "./app_learn_en_gloss_authored.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function app_learn_en_gloss_glosses_empty_gate_run() {
  "Gate: no authored chapter of English words explained in a reader's language carries a word explanation whose meaning in that language is blank - for every authored language. Throws so the dispatcher seam exits nonzero.";
  "The reader here is learning English, so the meaning in their own language is the one piece of the row they can already understand, and the alignment gate never looks at it.";
  arguments_assert(arguments, 0);
  async function store_check(store) {
    let fn = property_get(store, "generate");
    let r2 = await gloss_glosses_empty_gate_generic(fn, "learn_en");
    return r2;
  }
  let authored = app_learn_en_gloss_authored();
  let r = await list_map_async(authored, store_check);
  return r;
}
