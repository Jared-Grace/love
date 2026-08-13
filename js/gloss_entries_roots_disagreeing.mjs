import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_disagreeing(entries, known) {
  "The explanations in one passage that say nothing about the root an outside dictionary takes their word back to.";
  "This reports a disagreement and never a verdict. The dictionary it reads is one community's work with no source named on it, and it carries a breakdown on some entries and not on others - so a word it says nothing about proves nothing, and only a word it does take apart is worth asking about at all. What comes back is a list of places for a reader to look, in the order they were written.";
  "An explanation is counted as agreeing when the root appears anywhere in its prose, because the prose is written for a reader rather than to a form - it may name the root in any number of shapes, and asking for more than the word being present would reject sentences that are perfectly right.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let disagreeing = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let held = property_get_or_null(known, word);
    if (null_is(held)) {
      return;
    }
    let analysed = property_get(held, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get(held, "root");
    let same = equal(root, word);
    if (same) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let explain_lower = text_lower_to(explain);
    let root_lower = text_lower_to(root);
    let mentioned = text_includes(explain_lower, root_lower);
    if (mentioned) {
      return;
    }
    let affixes = property_get(held, "affixes");
    let finding = {
      word,
      root,
      affixes,
      explain,
    };
    list_add(disagreeing, finding);
  }
  each(entries, entry_read);
  return disagreeing;
}
