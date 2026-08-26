import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_collision_marks_walked } from "./bible_glyph_chapters_collision_marks_walked.mjs";
import { bible_glyph_chapters_marks_entries_lines } from "./bible_glyph_chapters_marks_entries_lines.mjs";
export async function bible_glyph_chapters_collision_marks_ambiguous_lines() {
  "The marks the interlinear could NOT decide, each one laid out with everything a person needs to decide it by hand.";
  "IT IS THE SHORT LIST AT THE END OF A LONG READING and it only means anything because that reading came first. Deciding which of two roots a drawn mark stood for is hundreds of verses if it is done by hand from the start; almost all of them name only one of the pair and settle themselves, and most of the rest draw as many marks as the original has words and pair off. What is left here is the residue, and the residue is small enough to read in one sitting.";
  "The laying out is done next door, because the reading that finds verses with a word left behind in English hands a person exactly the same thing and used to spell out the same page of code to do it.";
  arguments_assert(arguments, 0);
  let walk = await bible_glyph_chapters_collision_marks_walked();
  let text = await bible_glyph_chapters_marks_entries_lines(walk.ambiguous);
  return text;
}
