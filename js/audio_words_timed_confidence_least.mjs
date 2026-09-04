import { arguments_assert } from "./arguments_assert.mjs";
export function audio_words_timed_confidence_least() {
  "How well a recording's words must match its sound before the times worked out for them may be used.";
  "★ THE NUMBER SITS IN A GAP THAT WAS MEASURED RATHER THAN AT A ROUND FIGURE THAT LOOKED SAFE. Every piece of a recorded chapter was aligned twice, once against its own words and once against the next piece's words, and the two runs never met: right readings came out between eighty eight and ninety eight hundredths, wrong ones between fifteen and seventy three. Eighty is the middle of the empty ground between them, so it is above every wrong reading measured and below every right one.";
  "★ IT EXISTS BECAUSE THE ALIGNER CANNOT REFUSE. Handed letters that were never spoken it still finds the best path it can and reports times, so nothing about the answer's shape says whether it is worth anything. Without a number to compare against, a chapter whose text and sound had drifted apart would come out looking finished and read as nonsense.";
  arguments_assert(arguments, 0);
  let confidence_least = 0.8;
  return confidence_least;
}
