import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { or } from "./or.mjs";
import { text_punctuation_edges_removed } from "./text_punctuation_edges_removed.mjs";
import { equal } from "./equal.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_root_named_cebuano_shaped_is } from "./gloss_root_named_cebuano_shaped_is.mjs";
import { not } from "./not.mjs";
import { gloss_root_named_word_spelled_in_is } from "./gloss_root_named_word_spelled_in_is.mjs";
export function gloss_root_named_reversed_is(word, root) {
  "Whether the first thing an explanation quotes is that explanation naming a root before it names anything else, rather than opening on the word it is about, on an affix, or on half of a two word phrase.";
  "★ FOUR OF THE FIVE MARKS HERE ARE REFUSALS AND ONLY ONE OF THEM WAS IN THE FIRST READING, WHICH IS WHY THE FIRST READING WAS WRONG BY 155 SIGHTINGS. The count it produced was 6715 and the count that survives all five is 6560, over the same 803 roots. That is under three in a hundred, so the finding stands, but it stands measured rather than assumed - and every one of the three classes cut here was found by reading the least common answers rather than the most common ones, after the forty most common had come back clean.";
  "The headword refusal has to take the marks off both ends before it compares, and that single missing step is the largest of the three classes at 44 of the 869 roots. A word is filed in this store exactly as the person copying the verse saw it, so dios. and “ang and yahweh?” are stored spellings, and an explanation of dios. that opens by quoting dios is repeating the word rather than naming a root. Compared as typed the two are different text and the repetition reads as a discovery.";
  "The affix refusal is 18 roots more. An explanation may open by quoting the piece that was added rather than the thing it was added to - Taga- means from, Pag- makes it the doing of - and a piece is spelled inside the word for the same reason a root is, so containment cannot separate them. A dash on either end is the notation this repo already writes affixes in, so the refusal costs nothing to make and no root is written that way.";
  "The last refusal is the smallest at 4 roots and the least certain. Where the word is two words - nating baka, labing halangdon - an opening quotation of the first of them is naming a part of the phrase, and a part of a phrase is not a root. It is refused because this reader answers about roots, not because the sentence is wrong.";
  "The three classes are counted in roots and the correction is counted in sightings, and the two deliberately do not add up. 44 and 18 and 4 roots were cut, which is 66, while 155 sightings went with them - and a root can be cut for one of its sightings and kept for another, because dios is a repeated headword under dios. and a named root under something else. Only a reading that asks the question once per entry can separate those, which is the whole reason this is a function taking a word rather than a list of roots to refuse.";
  "$plain word";
  "the word an explanation is about, as the store spells it, marks and all.";
  "$plain root";
  "the text quoted first in that explanation.";
  arguments_assert(arguments, 2);
  let root_lower = text_lower_to(root);
  let word_lower = text_lower_to(word);
  let front_dashed = text_starts_with(root_lower, "-");
  let back_dashed = text_ends_with(root_lower, "-");
  let affix = or(front_dashed, back_dashed);
  if (affix) {
    return false;
  }
  let root_bare = text_punctuation_edges_removed(root_lower);
  let word_bare = text_punctuation_edges_removed(word_lower);
  let headword = equal(root_bare, word_bare);
  if (headword) {
    return false;
  }
  let phrase = text_includes(word_bare, " ");
  if (phrase) {
    return false;
  }
  let shaped = gloss_root_named_cebuano_shaped_is(root_bare);
  if (not(shaped)) {
    return false;
  }
  let spelled = gloss_root_named_word_spelled_in_is(word_bare, root_bare);
  return spelled;
}
