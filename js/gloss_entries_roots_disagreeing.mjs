import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { each } from "./each.mjs";
export function gloss_entries_roots_disagreeing(entries, known) {
  "The explanations in one passage that say nothing about the root an outside dictionary takes their word back to.";
  "This reports a disagreement and never a verdict. The dictionary it reads is one community's work with no source named on it, and it carries a breakdown on some entries and not on others - so a word it says nothing about proves nothing, and only a word it does take apart is worth asking about at all. What comes back is a list of places for a reader to look, in the order they were written.";
  "A word that opens its sentence is asked for under both spellings, and set beside its root in small letters. The dictionary is keyed by the spelling each word wore where it was gathered, so asking under one spelling only passed over a word it knows; and a root is always written in small letters, so a capitalised word matched none of them and every simple word at the head of a sentence was reported as disagreeing with a root that is its own spelling.";
  "A claim is compared with the dash taken out of both sides, because a dictionary writes a doubled root with one where an explanation writes it without - balhin-balhin against balhinbalhin. Compared as they stand, six explanations naming exactly the right root were reported as disagreeing with it.";
  "An explanation that names a root in so many words is judged on the root it names. Asking only whether the dictionary's root appears anywhere in the prose was blind wherever that root is a piece of the word itself: an explanation of 'luboa' claiming the root 'luba' passed, because the quoted word carries the letters of the true root 'lubo' along with it. So a claim is read out first and compared, and only an explanation claiming no root at all falls back to the weaker test - where the prose may name the root in any number of shapes, and asking for more than the word being present would reject sentences that are perfectly right.";
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
    let word_lower = text_lower_to(word);
    let same = equal(root, word_lower);
    if (same) {
      return;
    }
    let explain = property_get(entry, explain_key);
    let explain_lower = text_lower_to(explain);
    let root_lower = text_lower_to(root);
    let claimed = gloss_explain_roots_claimed(explain_lower);
    let claimed_any = list_empty_not_is(claimed);
    let claimed_bare = list_map(claimed, gloss_word_bare);
    let item = gloss_word_bare(root);
    let agreed = claimed_any
      ? list_includes(claimed_bare, item)
      : text_includes(explain_lower, root_lower);
    if (agreed) {
      return;
    }
    let kind = claimed_any ? "claimed" : "silent";
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
