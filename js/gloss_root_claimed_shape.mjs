import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_vowel_dropped_once_is } from "./text_vowel_dropped_once_is.mjs";
import { text_letters_swapped_once_is } from "./text_letters_swapped_once_is.mjs";
export function gloss_root_claimed_shape(root, claimed) {
  "Which ordinary shape of Cebuano writing accounts for the difference between the root a dictionary gives and the root an explanation names: an accent mark, a vowel dropped, two letters exchanged, or none of them.";
  "This is asked after the reading of the pair comes back apart, and it exists because that answer is mostly wrong. Reading all eighty-one classes standing apart on 2026-09-07 - two hundred and four sightings - about a hundred and fifty of them were one Cebuano word written two ways rather than two words: luoy against luy and kaluy, sabot against sabtan, tamay against the same word carrying an accent, dala against the shorthand a dictionary prints it under. Roughly thirty-six were a root somebody made up. A reader handed the two piles as one cannot act on either.";
  "The folding for o against u and for d, l and r is already done by the fold these words go through, so what is left for this to name is the three shapes that fold does not reach. Accent marks are taken off first and the fold asked again, because a word carrying one differs from itself in a way no test below would see.";
  "An accent is only the answer where taking the marks off settles it on its own. Where a word both carries a mark and has lost a vowel, the vowel is the answer worth reporting, because that is the shape a reader has to know about and the mark is nothing.";
  "Nothing is returned where none of the three holds, rather than a guess at a fourth. An empty answer here is what leaves a finding standing as a fault, and the whole worth of this is that the pile it leaves is small enough to read.";
  "$plain root";
  "$plain claimed";
  "both name words to compare - one a dictionary's, one an explanation's. Neither names anything that runs.";
  let root_folded = gloss_word_folded(root);
  let claimed_folded = gloss_word_folded(claimed);
  let root_plain = gloss_word_folded(text_accent_marks_removed(root));
  let claimed_plain = gloss_word_folded(text_accent_marks_removed(claimed));
  let plain_same = root_plain === claimed_plain;
  let folded_same = root_folded === claimed_folded;
  if (plain_same) {
    if (!folded_same) {
      return "accent";
    }
    return "";
  }
  let longer = root_plain;
  let shorter = claimed_plain;
  let claimed_longer = claimed_plain.length > root_plain.length;
  if (claimed_longer) {
    longer = claimed_plain;
    shorter = root_plain;
  }
  let vowel_lost = text_vowel_dropped_once_is(longer, shorter);
  if (vowel_lost) {
    return "vowel_lost";
  }
  let letters_swapped = text_letters_swapped_once_is(root_plain, claimed_plain);
  if (letters_swapped) {
    return "letters_swapped";
  }
  return "";
}
