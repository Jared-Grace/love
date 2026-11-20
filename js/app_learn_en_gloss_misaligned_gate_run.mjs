import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_words_misaligned_gate_generic } from "./gloss_words_misaligned_gate_generic.mjs";
import { app_learn_en_gloss_authored } from "./app_learn_en_gloss_authored.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function app_learn_en_gloss_misaligned_gate_run() {
  "Gate: no authored chapter of English words explained in a reader's language explains a word the passage does not carry, in the order the page paints them - for every authored language. Throws so the dispatcher seam exits nonzero.";
  "The words checked against are the first text's, because English is the first of the two bibles the passage carries and it is the English that is being explained.";
  let words_read = gloss_passage_words_text_first;
  let mend =
    "the words being explained are the English ones, written in a Latin alphabet, so one word spelled two ways cannot be the cause here - either a word was left with no explanation under it or an explanation was left over after the words ran out, and the chapter's explanations have to be authored to cover the passage's words in the order it writes them";
  async function store_check(store) {
    let fn = property_get(store, "generate");
    let r2 = await gloss_words_misaligned_gate_generic(
      fn,
      "learn_en",
      words_read,
      mend,
    );
    return r2;
  }
  let authored = app_learn_en_gloss_authored();
  let r = await list_map_async(authored, store_check);
  return r;
}
