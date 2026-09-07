import { equal } from "./equal.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_vowel_dropped_inside_is } from "./text_vowel_dropped_inside_is.mjs";
import { text_letters_swapped_once_is } from "./text_letters_swapped_once_is.mjs";
export function gloss_root_claimed_shape(root, claimed) {
  "Which ordinary shape of Cebuano writing accounts for the difference between the root a dictionary gives and the root an explanation names: an accent mark, a vowel dropped where the word was built on, two letters exchanged, or none of them.";
  "This is asked after the reading of the pair comes back apart, and it exists because that answer is mostly wrong. Reading all eighty-one classes standing apart on 2026-09-07 - two hundred and four sightings - a large part of them were one Cebuano word written two ways rather than two words: luoy against kaloy and luloy and kaluy, sabot against sabtan, kupot against kuptan, tamay against the same word carrying an accent. About thirty-six were a root somebody made up. A reader handed the two piles as one cannot act on either.";
  "The folding for o against u and for d, l and r is already done by the fold these words go through, so what is left for this to name is the shapes that fold does not reach. Accent marks are taken off first and the fold asked again, because a word carrying one differs from itself in a way no test below would see.";
  "The dropped vowel is looked for in both directions, because which of the two words is the shortened one is not known in advance. The dictionary sometimes prints the full spelling and the explanation the shortened one, and sometimes the other way about.";
  "An accent is only the answer where taking the marks off settles it on its own. Where a word both carries a mark and has lost a vowel, the vowel is the answer worth reporting, because that is the shape a reader has to know about and the mark is nothing.";
  "Nothing is returned where none of them holds, rather than a guess at one more. An empty answer here is what leaves a finding standing as a fault, and the whole worth of this is that the pile it leaves is small enough to read.";
  "$plain root";
  "$plain claimed";
  "both name words to compare - one a dictionary's, one an explanation's. Neither names anything that runs.";
  let root_folded = gloss_word_folded(root);
  let claimed_folded = gloss_word_folded(claimed);
  let word = text_accent_marks_removed(root);
  let root_plain = gloss_word_folded(word);
  let word2 = text_accent_marks_removed(claimed);
  let claimed_plain = gloss_word_folded(word2);
  let plain_same = equal(root_plain, claimed_plain);
  if (plain_same) {
    let folded_same = equal(root_folded, claimed_folded);
    if (folded_same) {
      let r = "";
      return r;
    }
    let r2 = "accent";
    return r2;
  }
  let root_inside = text_vowel_dropped_inside_is(root_plain, claimed_plain);
  if (root_inside) {
    let r3 = "vowel_lost";
    return r3;
  }
  let claimed_inside = text_vowel_dropped_inside_is(claimed_plain, root_plain);
  if (claimed_inside) {
    let r4 = "vowel_lost";
    return r4;
  }
  let letters_swapped = text_letters_swapped_once_is(root_plain, claimed_plain);
  if (letters_swapped) {
    let r5 = "letters_swapped";
    return r5;
  }
  let r6 = "";
  return r6;
}
