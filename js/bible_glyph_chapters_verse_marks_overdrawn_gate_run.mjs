import { bible_glyph_chapters_verse_marks_overdrawn_names_walked } from "./bible_glyph_chapters_verse_marks_overdrawn_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapters_verse_marks_overdrawn_baseline_path } from "./bible_glyph_chapters_verse_marks_overdrawn_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_verse_marks_overdrawn_gate_run() {
  "QA gate: no verse of a picture Bible chapter draws a mark more often than its own original words seat it.";
  "IT IS THE MIRROR OF THE WITHHELD GATE AND IT WATCHES THE MORE DANGEROUS DIRECTION. The other one catches a picture kept back from a word that had earned it, which costs the reader one word. This catches a picture put where the original has no such root at all, which teaches the reader something untrue about the alphabet, and the alphabet is the only thing a reader who does not know the language has.";
  "THE THREE ANSWERS THAT ARE NOT FAULTS ARE NAMED IN THE WALK NEXT DOOR AND EACH WAS READ VERSE BY VERSE. A joined word, where the original fuses a small word onto the front of a big one and the table numbers only the big one, so the mark for the small word stands over a row that does not seat it. A table that numbers a word wrong. And two marks built into one drawn word, the way anti and oil spell antichrist. None of the three can be told apart from a real fault by counting, which is why the record still holds them and a reader has to open the verse.";
  "Measured against the record rather than against nought, for that reason. What sat in the record on the day this was built was twenty entries and every one of them had been argued: nine Greek verses where the drawn plus is the kai spelled inside kago or kamoi, three more joined words, one mistagged table row, two compositions, and five that wait on a decision only the human can make about which words a root should seat. The record is a floor, not a queue.";
  "WHAT THE RATCHET BUYS IS THE TWENTY FIRST. Ninety seven entries stood when the walk was first read honestly; seventy seven of them were real and were repaired one verse at a time against the interlinear, and more than half of those were a word the translation supplied in brackets that the author then drew a picture on. Nothing was watching that, and without a ratchet the next one costs the same reading again.";
  "The number handed back is how many marks were compared, not how many were wrong. On a good day nothing is wrong, which is also what a run that opened no chapter would say, and the count is the one part of the answer that falls when the sweep stops reaching the chapters.";
  let told = await bible_glyph_chapters_verse_marks_overdrawn_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_verse_marks_overdrawn_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_verse_marks_overdrawn_baseline_write",
  );
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these verses draw a mark more often than their own original words seat it - open the verse in the interlinear and write the extra word out in plain English letters, or say in the chapter's prose which of the three answers that are not faults this one is",
    name_write,
  );
  return r;
}
