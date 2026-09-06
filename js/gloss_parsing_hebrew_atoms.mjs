import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function gloss_parsing_hebrew_atoms(segment) {
  "One segment of a Hebrew parsing cut into the whole facts it is made of.";
  "$plain segment";
  "the piece of the interlinear's spelled-out parsing that stands between two bars, or the whole of it where there are none. It is words to read and nothing that runs.";
  "A Hebrew parsing is punctuated at three levels and each one means something different, so the cutting has to happen at two of them rather than at spaces. Bars separate what is glued onto the front of the word from the word itself and from what is glued onto its end. A dash and spaces separate one fact about the word from the next. A comma separates two of those small front words stacked on each other. Below that the spaces are inside a single fact - third person masculine singular is one thing known about the word, and cutting it into four would leave four pieces none of which is true on its own.";
  let facts = text_split(segment, " - ");
  let atoms = [];
  for (let fact of facts) {
    let stacked = text_split(fact, ",");
    let trimmed = [];
    for (let one of stacked) {
      let clean = text_trim(one);
      list_add(trimmed, clean);
    }
    list_add_multiple(atoms, trimmed);
  }
  return atoms;
}
