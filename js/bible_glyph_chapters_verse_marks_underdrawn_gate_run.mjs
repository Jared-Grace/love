import { bible_glyph_chapters_verse_marks_underdrawn_names_walked } from "./bible_glyph_chapters_verse_marks_underdrawn_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn_baseline_path } from "./bible_glyph_chapters_verse_marks_underdrawn_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_gate_run() {
  "QA gate: no verse of a picture Bible chapter draws a mark and then spells another word seated on that same mark out in English letters beside it.";
  "IT IS THE INVERSE OF THE UNSEATED GATE AND NOTHING WAS WATCHING THIS DIRECTION. That one catches a picture invented for a word the table never seated it on. This catches a picture withheld from a word the table did seat - and the day it was written, five verses had been sitting committed for a full day with the covenant name spelled out in letters beside the very mark that draws it, with every gate in the repo green.";
  "IT IS SCOPED TO ONE VERSE BECAUSE ACROSS A CHAPTER DRAWING FEWER IS ALLOWED. An author may decide a word reads better in English and leave it so all the way down, and the psalter did exactly that on purpose with the reason written into its prose. Inside a single verse that reading is not available: the author drew the mark right there, so they did not judge it wrong for that word.";
  "A ROW WITH NO ENGLISH WORD OF ITS OWN IS NOT COUNTED, and that exclusion is a third of everything this used to say. Hebrew doubles a verb for emphasis - he shall surely die is muth muth - and the interlinear glosses the second half with an ellipsis, because English has no separate word for it. Counting it would demand a second picture for a word the English sentence never got, so the seated side skips any row the tables have marked as a placeholder. It first asked whether the gloss held a letter or a digit, which took a hundred and one findings down to thirty-eight and then stopped one short: vvv, the notation for a word whose English was pulled into a neighbouring row, is letters by that test and a placeholder by the repo shared reading this now asks instead. Four recorded faults were that one word and were never faults, and three of the four sat in John ten, where the Greek doubles its negative and the second half has no English of its own.";
  "Measured against the record rather than against nought, because thirty-eight stood when this was written and MOST OF THEM ARE PERMANENT. That was not understood on the day this was built and the reader should not repeat the mistake: the record is a floor, not a queue.";
  "THE TWO SIDES COUNT DIFFERENT THINGS AND NEVER HAD TO AGREE. The seated side counts words of the original; the drawn side counts senses an English sentence actually got, and the interlinear seats a root on every occurrence whatever sense was taken. Ezekiel 33 says it in one verse: the wicked man stands four times in Hebrew and the third of them is glossed him, because English pronominalised it - drawing the mark there would put a picture where the sentence has a pronoun. The same verse seats son on your people, sprout on by wild animals, plus on and yet, and no entry on or. None of those is a word left behind.";
  "So the number is not expected to reach nought and a run that leaves it where it is has not failed. What the ratchet buys is the thirty-ninth: on the day it was built three verses really had dropped a mark the author had drawn elsewhere in the same verse, and those three left the list as soon as they were repaired.";
  "The number handed back is how many marks were compared, not how many were wrong. On a good day nothing is wrong, which is also what a run that opened no chapter would say, and the count is the one part of the answer that falls when the sweep stops reaching the chapters.";
  let told = await bible_glyph_chapters_verse_marks_underdrawn_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_verse_marks_underdrawn_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_verse_marks_underdrawn_baseline_write",
  );
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these verses draw a mark and leave another word the root table seats on that same mark standing in plain English letters - draw that word too, or say in the chapter's prose why it stays in letters",
    name_write,
  );
  return r;
}
