import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { gloss_root_word_own_is } from "./gloss_root_word_own_is.mjs";
import { gloss_explain_root_quoted_only_is } from "./gloss_explain_root_quoted_only_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_quoted_only(entries, known) {
  "The explanations in one passage that say nothing about where their word came from, and only appear to because the dictionary's root reaches the page inside the quoted word itself.";
  "★ THIS IS THE READING'S OWN BLIND SPOT MEASURED RATHER THAN ARGUED. Where a word says nothing about a root outright, it is asked the weaker question of whether the root stands anywhere in its wording - and that question cannot be failed by any word carrying its own root's letters, because every explanation quotes the word it is explaining. So a bare meaning gloss saying nothing whatever about origin passes, and is counted as agreeing. What comes back here is every sighting that passes for that reason alone.";
  "What counts as passing only by quotation is not decided here. The repair that replaces these sentences has to ask exactly the same question, and two copies of it would drift apart at the first correction - silently, because a sweep naming sentences the repair passes over just looks like a list that never empties.";
  "A word the dictionary says nothing about, or gives its own spelling back for, is dropped before the explanation is read out of the entry at all. There is no root to have been quoted, so there is nothing this reading could be right or wrong about.";
  "$plain entries";
  "$plain known";
  "the first names explanations to read, the second a gathered dictionary to read them against. Neither names anything that runs.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let found = [];
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
    let affixes = property_get(held, "affixes");
    let explain = property_get(entry, explain_key);
    let quoted_only = gloss_explain_root_quoted_only_is(
      word,
      root,
      affixes,
      explain,
    );
    if (not(quoted_only)) {
      return;
    }
    let finding = {
      word,
      root,
      kind: "quoted",
      affixes,
      explain,
    };
    list_add(found, finding);
  }
  each(entries, entry_read);
  return found;
}
