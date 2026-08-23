import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function bible_speech_spans_unclosed_is(spans) {
  "$plain spans";
  "Whether a chapter's spans end while a quotation is still open - which is to say, whether somebody is still speaking when the chapter runs out.";
  "★ THIS IS THE FACT THAT PROVES A SPEECH CROSSES A CHAPTER BOUNDARY, AND IT IS A FACT RATHER THAN A GUESS. Job 4 ends at depth one: Eliphaz is announced in its first verse and the translators never close his quotation, because he is still talking in Job 5. So Job 5 opens inside a quotation with no narration in front of it at all, and everything in it is unattributable from within the chapter. Reading the previous chapter's last depth answers it exactly.";
  "★ FORTY-SIX OF THE HUNDRED AND TWENTY-NINE UNATTRIBUTED QUOTATIONS ARE THIS ONE SHAPE, ACROSS THIRTEEN BOOKS. All fourteen of Job's are, which is the whole of what looked like the largest block of hand work in the Bible. Exodus has eight, Ezekiel five, Isaiah three. It was mistaken for a Job problem because Job is where a single speech most often runs for chapters, but the cause is a chapter boundary rather than a book.";
  "★ THE DEPTH OF THE LAST SPAN IS ASKED RATHER THAN THE MARKS BEING COUNTED, BECAUSE THE PARSER HAS ALREADY DONE THAT WORK. A span carries the depth it was gathered at, so the last one carries the depth the chapter ended at, and a second count over the same characters could only disagree with it.";
  arguments_assert(arguments, 1);
  let empty = equal(spans.length, 0);
  if (empty) {
    return false;
  }
  let last = spans[spans.length - 1];
  let is = less_than(0, last.depth);
  return is;
}
