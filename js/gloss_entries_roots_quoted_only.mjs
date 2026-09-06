import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { gloss_root_word_own_is } from "./gloss_root_word_own_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_explain_root_judged } from "./gloss_explain_root_judged.mjs";
import { equal } from "./equal.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_quoted_only(entries, known) {
  "The explanations in one passage that only appear to name the root an outside dictionary takes their word back to, because the root's letters reach the page inside the quoted word itself and nowhere else.";
  "★ THIS IS THE READING'S OWN BLIND SPOT MEASURED RATHER THAN ARGUED. Where a word says nothing about a root outright, it is asked the weaker question of whether the root stands anywhere in its wording - and that question cannot be failed by any word carrying its own root's letters, because every explanation quotes the word it is explaining. So a bare meaning gloss saying nothing whatever about origin passes, and is counted as agreeing. What comes back here is every sighting that passes for that reason alone.";
  "The test is the passing test run twice: once as written, and once over the wording with the word struck out. A sentence that still names the root when its own subject is gone was saying something; one that stops naming it was only quoting.";
  "The word is struck out in small letters over small letters, because a word at the head of a sentence wears a capital and its root never does, and matching the capitalised spelling alone would leave the quotation standing and report the sentence as sound.";
  "Only a word whose root is a piece of its own spelling can be caught this way, and that is tested before the explanation is read at all. Where the root is not inside the word, the quotation cannot supply the root's letters, so a pass there is a real pass and there is nothing to report.";
  "An explanation that names a root in so many words is left alone even where the naming is wrong, because a wrong root is a disagreement the other reading already reports, and reporting it twice under a second name would send two people to the same sentence.";
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
    let word_lower = text_lower_to(word);
    let inside = text_includes(word_lower, root);
    if (not(inside)) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let judged = gloss_explain_root_judged(word, root, explain);
    let agreed = property_get(judged, "agreed");
    if (not(agreed)) {
      return;
    }
    let kind = property_get(judged, "kind");
    let says_nothing = equal(kind, "silent");
    if (not(says_nothing)) {
      return;
    }
    let explain_lower = text_lower_to(explain);
    let apart = text_replace_to_space(explain_lower, word_lower);
    let standing = text_includes(apart, root);
    if (standing) {
      return;
    }
    let affixes = property_get(held, "affixes");
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
