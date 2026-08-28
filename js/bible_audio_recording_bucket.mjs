import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { property_equals } from "./property_equals.mjs";
export function bible_audio_recording_bucket(row) {
  "$plain row";
  "Which one of the five things a recording can be, read off the note written about it: could not be asked, nothing recorded, cut another way, words changed, or clean.";
  "★ THE ORDER OF THE QUESTIONS IS THE WHOLE OF THE RULE, WHICH IS WHY IT IS A FUNCTION AND NOT FOUR LINES INSIDE A SWEEP. Every test after the first would pass for a row the first one already caught, so moving any of them changes what hundreds of recordings are called while every count still adds up to the total. Written out here it can be held against written-down cases; written inside the sweep it could only be checked by running the sweep, which reads a disk and so cannot be a gate.";
  "★ COULD NOT BE ASKED IS ASKED FIRST, BECAUSE A ROW NOBODY COULD JUDGE CARRIES ZEROS THAT LOOK EXACTLY LIKE ANSWERS. The row made when the question throws says no pieces and no verses, which is the same thing an empty folder says. Asking whether it was judged before asking anything about its numbers is what keeps the two apart.";
  "★ NOTHING RECORDED IS ASKED BEFORE ANYTHING ABOUT THE CUTTING, BECAUSE NOTHING AND CORRECT ARE THE SAME NUMBER. No pieces against no verses is no differences, so a folder with no sound in it lines up and matches and lands in the clean count. Sixteen folders did, and that count was being read as evidence that recordings were right.";
  "★ CUT ANOTHER WAY COMES BEFORE THE WORDS, BECAUSE THE WORDS CANNOT BE COMPARED AT ALL WHEN THE PIECES DO NOT CORRESPOND. Piece three of a recording cut somewhere else holds no particular piece of the chapter, so a count of pieces whose words differ would be a count of nothing.";
  arguments_assert(arguments, 1);
  let judged = property_get(row, "judged");
  if (not(judged)) {
    let r = "unjudged";
    return r;
  }
  let silent = property_equals(row, "chunks", 0);
  if (silent) {
    let r2 = "empty";
    return r2;
  }
  let lines_up = property_get(row, "aligned");
  if (not(lines_up)) {
    let r3 = "recut";
    return r3;
  }
  let matches = property_equals(row, "unmatched", 0);
  if (matches) {
    let r4 = "clean";
    return r4;
  }
  let r5 = "stale";
  return r5;
}
