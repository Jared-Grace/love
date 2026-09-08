import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_repairs_words_named } from "./gloss_repairs_words_named.mjs";
import { binisaya_word_read_cache } from "./binisaya_word_read_cache.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { each_async } from "./each_async.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { gloss_explains_repair_decided_generic } from "./gloss_explains_repair_decided_generic.mjs";
export async function app_ceb_bible_gloss_explains_repair_silent() {
  "The Cebuano word explanations named in the repairs file put right only where the sentence already standing says nothing about the dictionary's root - leaving every sighting that already names it exactly as its author wrote it.";
  "★ THIS IS THE NARROW TWIN OF THE PLAIN REPAIR, AND THE DIFFERENCE IS THE WHOLE OF WHETHER THE QUEUE CAN BE DRAINED AT ALL. The plain one replaces every sighting of a word because the handover file is keyed on words; measured 2026-09-06 that meant about twenty-one sound explanations overwritten for each faulty one put right, and only sixty-four of the two hundred and seventy-five words left were safe to write for. Asked this way the same handover file touches the faulty sightings and nothing else, so every word on the list becomes safe and the trade disappears.";
  "The test is the same one the reading uses to call a sighting silent: does the sentence spell the root binisaya.com takes the word back to. So a word cleared here is a word the reading will stop listing, and the two cannot drift apart, because there is one idea of silence and this is it.";
  "A word the dictionary never analysed has no root to look for, and its sentence is replaced rather than passed over. There is nothing to be silent about, so silence cannot be the reason to leave it - and a word reaching the handover file at all was put there by somebody who read it.";
  "The roots are all looked up before the walk begins, because the decision is asked once per entry inside a walk that cannot wait on a read. The lookup is per word rather than per sighting for the same reason it is worth doing: a word met a thousand times asks the dictionary once.";
  "The words to look up come from the handover file asked for by name rather than gathered here, which is the same list the other repair over the same file works from. Two repairs disagreeing about which words were handed in would be a fault neither of them could report, and there is now one answer to that.";
  "Beware the spellings. The test is a plain search for the root's letters, and it folds nothing - a sentence spelling the text's own form where the dictionary spells it otherwise reads as silent here and will be replaced. That is the same blindness the reading has, so this repairs exactly what that reading complains of, no more.";
  let fn = app_ceb_bible_gloss_generate;
  let words = await gloss_repairs_words_named(fn);
  let roots = {};
  async function word_root_read(word) {
    let held = await binisaya_word_read_cache(word);
    let root = property_get(held, "root");
    let lower = text_lower_to(root);
    property_set(roots, word, lower);
  }
  await each_async(words, word_root_read);
  function entry_wanted_is(word, standing) {
    let root = property_get_or_null(roots, word);
    let none = null_is(root);
    if (none) {
      return true;
    }
    let bare = equal(root, "");
    if (bare) {
      return true;
    }
    let lower = text_lower_to(standing);
    let silent = text_includes_not(lower, root);
    return silent;
  }
  let r = await gloss_explains_repair_decided_generic(fn, entry_wanted_is);
  return r;
}
