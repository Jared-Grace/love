import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_word_typo_is } from "./gloss_word_typo_is.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each_index } from "./each_index.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { range } from "./range.mjs";
export function gloss_passage_typos_repair(passage, words_read) {
  "Puts the passage's own spelling back under every explanation of one passage that was misspelling the word it explains, and answers with what it changed.";
  "Only a spelling is ever touched. What the explanation says is left exactly as it was, because a slip in typing the word does not make the sentence about it wrong - and rewriting that sentence would be authoring, which is the half of this fault no rule can do.";
  "A passage whose explanations do not number the same as its words is left entirely alone. A count that disagrees means one is missing or one too many, so every explanation after that point is standing under a word that is not its own, and what looks like a misspelling there is the shift rather than the fault. Repairing a shift by rewriting spellings would bury it.";
  "It stops at the first difference that is not a slip. Past that point a reader has to decide which word each explanation belongs to, and anything this did afterwards would be work done on an arrangement nobody has agreed yet.";
  "An explanation naming several words at once is not repaired either, because putting the passage's word back would have to choose which of them it replaces, and choosing is the thing being avoided.";
  let entries = gloss_passage_entries(passage);
  let nothing = list_empty_is(entries);
  if (nothing) {
    let none = [];
    return none;
  }
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let words_written = words_read(passage);
  let line = list_join_space(words_written);
  let written = text_punctuation_split(line);
  let explained = [];
  let owners = [];
  function entry_read(entry, entry_index) {
    let word = property_get(entry, word_key);
    let bares = text_punctuation_split(word);
    let parts = list_size(bares);
    function part_read() {
      let owner = {
        entry_index,
        parts,
      };
      list_add(owners, owner);
    }
    each_index(bares, part_read);
    list_add_multiple(explained, bares);
  }
  each_index(entries, entry_read);
  let count = list_size(written);
  let counted_same = list_size_equal(explained, count);
  if (not(counted_same)) {
    let shifted = [];
    return shifted;
  }
  let fixes = [];
  for (let index of range(count)) {
    let word = list_get(written, index);
    let other = list_get(explained, index);
    let same = equal(word, other);
    if (same) {
      continue;
    }
    let typo = gloss_word_typo_is(word, other);
    if (not(typo)) {
      break;
    }
    let owner = list_get(owners, index);
    let parts = property_get(owner, "parts");
    let alone = equal(parts, 1);
    if (not(alone)) {
      break;
    }
    let entry_index = property_get(owner, "entry_index");
    let entry = list_get(entries, entry_index);
    property_set(entry, word_key, word);
    let fix = {
      index,
      before: other,
      after: word,
    };
    list_add(fixes, fix);
  }
  let any = list_empty_not_is(fixes);
  if (any) {
    let generated = json_format_to(entries);
    property_set(passage, "generated", generated);
  }
  return fixes;
}
