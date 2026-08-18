import { bible_glyph_gate_run_character } from "./bible_glyph_gate_run_character.mjs";
import { bible_glyph_gate_run_orthodox } from "./bible_glyph_gate_run_orthodox.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
export function bible_glyph_gate_run() {
  "QA gate: prove the picture Bible's glyph tables agree with each other, so a root, a referent rule or a tradition naming a glyph that does not exist fails the build instead of rendering as a blank where a picture should be.";
  "The tables are three separate files on purpose - the vocabulary of glyphs, the roots that use them, and the traditions that swap one - and separating them is what lets a tradition be added without touching a single verse. The cost of that separation is that nothing but this gate holds the names together. A misspelled glyph name is invisible everywhere else: the survey happily reports it as missing, the renderer happily draws nothing, and the reader is the first to notice.";
  "A word may belong to only ONE root, and that is checked too. A Strong's number appearing under two roots would give the same word two glyphs with nothing to say which wins, and the winner would then depend on the order the table happens to be written in - a bug that looks like an opinion.";
  "EVERY GLYPH AN AUTHORED CHAPTER NAMES is checked the same way, and that check earned itself the day it was written: the first chapter authored by hand spelled God followed by a full stop as one run, so five of its six verses stored a glyph named fire with a full stop welded on. Nothing failed. The verse simply drew the name in angle brackets where the picture should have been, and the only reader who could ever have caught it is a person looking at the page.";
  "A tradition may only REPLACE, never invent. An Orthodox cross is the same word drawn differently, so its name has to be a name the base vocabulary already carries; a tradition naming a new one would be a glyph no verse could ever reference, since verses are written against the base names.";
  "How many chapters and how many tradition glyphs were walked comes back with the verdict. Every check here passes by finding nothing wrong, and so does a run whose tables have been emptied or whose chapters have moved - the two counts are the only part of this answer that falls in the second case.";
  let characters = bible_glyph_characters();
  let checked = bible_glyph_gate_run_orthodox(characters);
  let walked = property_get(checked, "walked");
  let traditions = bible_glyph_gate_run_character(checked);
  let r = {
    chapters: walked,
    traditions,
  };
  return r;
}
