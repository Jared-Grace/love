import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_glyph_letters_offenders } from "./bible_glyph_chapters_verse_glyph_letters_offenders.mjs";
import { bible_glyph_chapters_verse_marks_offenders_word_draw } from "./bible_glyph_chapters_verse_marks_offenders_word_draw.mjs";
export async function bible_glyph_chapters_verse_glyph_letters_draw(glyph) {
  "$plain glyph";
  "the glyph is the NAME of one picture, as the character table spells it. It is handed to a reading that looks it up, and nothing about it runs.";
  "Draws ONE NAMED picture onto the English words still standing in letters for it, wherever the interlinear forces which word that is.";
  "IT IS THE SECOND ASKER OF ONE JUDGMENT (2026-09-18). The judgment - which plain English word a missing mark belongs on - is written once and takes a list of verses. The first asker names the shrink-only underdrawn reading, which only ever looks at a verse that drew the picture at least once. This one names the reading scoped to a single picture, which also sees the verses that drew it none, and those are the ones a just-ended collision stranded.";
  "WHAT IT IS FOR IS RECOVERING A WORD THAT WAS DELIBERATELY WRITTEN OUT. When two words shared one picture an author could not draw either of them, because the same mark twice in a line tells a reader nothing, so the English word went on the page instead. Parting the seats makes those drawable but does not draw them - the redraw command that moves marks from one picture to another only touches marks that are already standing, and these never were.";
  "IT REFUSES FAR MORE THAN IT DRAWS AND THAT IS THE DESIGN. Every refusal is a verse where the original and the English do not pair off by themselves, and the judgment hands each one back with the reason, because choosing between two possible places for the name of God is a person's choice and not a command's.";
  arguments_assert(arguments, 1);
  let read = await bible_glyph_chapters_verse_glyph_letters_offenders(glyph);
  let r = await bible_glyph_chapters_verse_marks_offenders_word_draw(
    read.offenders,
  );
  return r;
}
