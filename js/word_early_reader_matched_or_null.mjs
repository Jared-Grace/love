import { list_includes } from "./list_includes.mjs";
import { words_irregular_base } from "./words_irregular_base.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
import { text_size } from "./text_size.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add } from "./list_add.mjs";
import { text_last } from "./text_last.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function word_early_reader_matched_or_null(word, known_words) {
  "Which word of a given list one word reaches - itself, or the base an ordinary English ending was taken off to get to - answering null when it reaches none.";
  "IT IS THE SAME WALK AS THE YES-OR-NO READER BESIDE IT and that one is now written on top of this. Two copies of a four-way stem guess would drift the moment somebody added a fifth ending to one of them, and the drift would be silent, because both would still answer plausibly.";
  "IT ANSWERS THE WORD RATHER THAN A YES because a tap needs the entry and not the verdict. A player touching SINNED is owed what SIN means, and a boolean has already thrown away the only thing that could find it - so the reader that said whether a word was reachable could never have been the reader that fetched what it reached.";
  "THE LIST IS A PARAMETER AND NOT A CHOICE MADE HERE, so the same walk serves the child's words, the words the game teaches, and the keys of the gloss table. What the caller passes decides what question is being asked.";
  "THE STEMS ARE GUESSED FOUR WAYS because English spells the same join four ways. Hope loses an e before d, stop doubles its p before ed, try turns its y to an i before es, and want does nothing at all. Rather than decide which happened, every shape is tried and the first hit is the answer.";
  "A stem shorter than three letters is refused, or the s comes off small words and lands on a letter the list keeps for its own sake - his becomes hi, as becomes a - and the reader starts agreeing with words on the strength of a single letter.";
  "BUT THE FLOOR IS THE ENDING'S, NOT THE WORD'S. A three-letter ending cannot leave a one-letter accident behind, because there was three letters' worth of evidence that an ending was taken at all: going leaves go and doing leaves do, and both were being refused for the crime of being two letters long.";
  "THE SHAPES WITH NO ENDING TO TAKE ARE LOOKED UP INSTEAD. Given, taken, caught, worn and rose are the commonest words in English and every one of them defeats a stripper, because English spelt them by changing the word rather than by adding to it. The table is a fact about the language rather than about the reader, so it is consulted whichever list is being read.";
  let there = list_includes(known_words, word);
  if (there) {
    return word;
  }
  let irregulars = words_irregular_base();
  let base = property_or_null(irregulars, word);
  let changed = not_equal(base, null);
  if (changed) {
    let base_known = list_includes(known_words, base);
    if (base_known) {
      return base;
    }
  }
  let endings = ["ing", "est", "ed", "es", "er", "ly", "s", "d"];
  for (let ending of endings) {
    let shorter = text_suffix_without_try(word, ending);
    let cut = not_equal(shorter, word);
    if (cut) {
      let ending_size = text_size(ending);
      let long_ending = greater_than(ending_size, 2);
      let smallest = 2;
      if (long_ending) {
        smallest = 1;
      }
      let a = text_size(shorter);
      let long_enough = greater_than(a, smallest);
      if (long_enough) {
        let stems = [shorter];
        let with_e = text_combine(shorter, "e");
        list_add(stems, with_e);
        let suffix = text_last(shorter);
        let shorter_still = text_suffix_without_try(shorter, suffix);
        list_add(stems, shorter_still);
        let without_i = text_suffix_without_try(shorter, "i");
        let with_y = text_combine(without_i, "y");
        list_add(stems, with_y);
        for (let stem of stems) {
          let known = list_includes(known_words, stem);
          if (known) {
            return stem;
          }
        }
      }
    }
  }
  return null;
}
