import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { gloss_words_misaligned } from "./gloss_words_misaligned.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { list_size } from "./list_size.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
export function gloss_passage_words_misaligned(passage, words_read) {
  "Where a passage's word explanations stop lining up with the passage itself, or nothing when they line up all the way through.";
  "The page paints the passage and then the explanations straight under it, one after another in order, so a reader takes the third explanation to be about the third word. Nothing on the page repeats a word's place to check that against - the alignment is the whole of the promise, and a single skipped word silently shifts every explanation after it onto the wrong word.";
  "Which of a passage's texts is the one being explained is asked for rather than assumed, because a store glossing the original language and a store glossing a translation both live in this shape, and reading the wrong one of the two reports every passage as broken.";
  "Both sides are cut into words at their punctuation before they are compared, because an explanation names the word and not the sentence it was standing in - and because a dash standing between two words with no space either side is a word boundary the spaces alone do not show. What is left is compared exactly, accents and vowel points and all, since those are part of the word.";
  "An explanation may name several words at once, and it may take one written word apart into a root and the ending joined onto it, so what is compared is the words themselves rather than the count of explanations. A passage nobody has authored yet lines up trivially and is reported as fine; asking which passages are still waiting is a different question.";
  let entries = gloss_passage_entries(passage);
  if (list_empty_is(entries)) {
    let none = null;
    return none;
  }
  let written = gloss_passage_words_bare(passage, words_read);
  let explained = gloss_entries_words_bare(entries);
  let difference = gloss_words_misaligned(written, explained);
  let matched = null_is(difference);
  if (matched) {
    let aligned = null;
    return aligned;
  }
  let r = {
    verses: g_sermon_passage_verses_key(passage),
    words: list_size(written),
    explained: list_size(explained),
    difference,
  };
  return r;
}
