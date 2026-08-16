import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function binisaya_words_roots_prompt(words, known) {
  "What a Cebuano dictionary says the words of one passage are built from, written out for a machine that is about to explain those words.";
  "This exists because the machine was being asked for a word's origin while being shown nothing, and an instruction to give an origin for every word can only be obeyed on a word it does not know by making one up. Measured over a hundred and eighty-five chapters, eleven hundred and forty-three explanations named an origin that disagreed with this same dictionary, and reading a spread sample put roughly five in six of them wrong. Handing the answer over is the only fix that reaches the words it does not know, because every instruction about care still leaves it guessing.";
  "Only a word the dictionary took apart is written out, and only where the root it gives differs from the word itself. A word it says nothing about is left out rather than written out as unknown: the dictionary carries a breakdown on some entries and not on others, so its silence is a missing answer and not an answer that the word is simple, and printing that silence as a fact would trade one invented claim for another.";
  "The note about what absence means goes in the text beside the list, because a reader given a list of some of the words will otherwise read the rest as denied.";
  "The coded shorthand the dictionary keeps beside each root is deliberately left out. It says which letters were added and where in a notation nobody here can state the meaning of, and an unexplained code in front of a machine asked to explain things is the very thing that gets a confident reading invented for it.";
  let lines = [];
  function word_read(word) {
    let key = text_lower_to(word);
    let held = property_get_or_null(known, key);
    if (null_is(held)) {
      return;
    }
    let analysed = property_get(held, "analysed");
    if (not(analysed)) {
      return;
    }
    let root = property_get(held, "root");
    let same = equal(root, key);
    if (same) {
      return;
    }
    let line = text_combine_multiple([key, " is built from the root ", root]);
    list_add(lines, line);
  }
  each(words, word_read);
  let none = list_empty_is(lines);
  if (none) {
    let empty = text_empty();
    return empty;
  }
  let listed = list_join_newline(lines);
  let r = text_combine_multiple([
    "\n\nA Cebuano dictionary gives these roots for words in this passage. Where a word is listed here, use the root given and do not use any other origin you may recall:\n",
    listed,
    "\nA word of this passage that is not listed is one the dictionary says nothing about. That is a missing answer and not a statement that the word is simple, so say nothing about that word's origin unless you are certain of it.",
  ]);
  return r;
}
