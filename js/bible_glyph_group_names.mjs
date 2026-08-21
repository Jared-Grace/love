import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_group_names(glyph) {
  "One glyph field split into the glyph NAMES it is made of, so that a field naming one picture and a field naming a group are read the same way.";
  "$plain glyph";
  "A GROUP IS SEVERAL PICTURES STANDING FOR ONE WORD, written with a plus between the names. The word is one mark to a reader - the pictures are drawn touching, and the gap that separates words is what tells them apart from two words in a row - so everything upstream of the drawing treats the whole field as one glyph and only this splits it.";
  "IT IS THE SAME SPLIT THE KEYBOARD SHORTHAND MAKES, deliberately, and it is here rather than in two places so it cannot become two rules. A person typing a verse writes the plus between two names; a person seating a root writes the same plus in the table; the parser and the table now ask the same function what that means.";
  "A BLANK NAME IS DROPPED RATHER THAN KEPT, which is what makes a stray plus or a trailing one harmless. A name is trimmed for the same reason: a table is read and edited by a person, and a space after a plus is a typing artifact rather than a decision.";
  "A FIELD WITH NO PLUS IN IT COMES BACK AS ONE NAME, so a caller written before groups existed keeps working unchanged. That is the whole reason this returns a list even for the common case - the caller loops, and the loop runs once.";
  let names = [];
  for (let part of glyph.split("+")) {
    let trimmed = part.trim();
    let blank = equal(trimmed, "");
    if (not(blank)) {
      list_add(names, trimmed);
    }
  }
  return names;
}
