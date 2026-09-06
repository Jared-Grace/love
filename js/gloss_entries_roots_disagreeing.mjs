import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { gloss_root_word_own_is } from "./gloss_root_word_own_is.mjs";
import { gloss_explain_root_judged } from "./gloss_explain_root_judged.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_disagreeing(entries, known) {
  "The explanations in one passage that say nothing about the root an outside dictionary takes their word back to.";
  "This reports a disagreement and never a verdict. The dictionary it reads is one community's work with no source named on it, and it carries a breakdown on some entries and not on others - so a word it says nothing about proves nothing, and only a word it does take apart is worth asking about at all. What comes back is a list of places for a reader to look, in the order they were written.";
  "A word that opens its sentence is asked for under both spellings, and set beside its root in small letters. The dictionary is keyed by the spelling each word wore where it was gathered, so asking under one spelling only passed over a word it knows; and a root is always written in small letters, so a capitalised word matched none of them and every simple word at the head of a sentence was reported as disagreeing with a root that is its own spelling.";
  "What counts as agreeing with a root is not spelled out here. It is one judgment asked in two places now - here, and over the words wearing a mark from their sentence that this reading cannot reach at all - so it is written down once beside itself.";
  "A word the dictionary gives its own spelling back for is dropped before the explanation is even read out of the entry, which is where it was dropped before the judgment moved. The reading is deliberately no hungrier than it was.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let disagreeing = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let held = binisaya_words_known_get(known, word);
    if (null_is(held)) {
      return;
    }
    let analysed = property_get(held, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get(held, "root");
    let self_rooted = gloss_root_word_own_is(word, root);
    if (self_rooted) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let judged = gloss_explain_root_judged(word, root, explain);
    let agreed = property_get(judged, "agreed");
    if (agreed) {
      return;
    }
    let claimed = property_get(judged, "claimed");
    let kind = property_get(judged, "kind");
    let affixes = property_get(held, "affixes");
    let finding = {
      word,
      root,
      claimed,
      kind,
      affixes,
      explain,
    };
    list_add(disagreeing, finding);
  }
  each(entries, entry_read);
  return disagreeing;
}
