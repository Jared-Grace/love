import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function bible_interlinear_parsing_parts(parsing) {
  arguments_assert(arguments, 1);
  ("$plain parsing");
  ("the parsing is the interlinear's own grammar code for one written word, like Conj-w | Prep-b, Art | N-ms. It is data to read and nothing that runs.");
  ("The parts one written word is made of, in the order they are written.");
  ("TWO SEPARATORS, ONE MEANING. A bar splits a word into its pieces and a comma splits a piece that is itself several joined letters, so Prep-b, Art is in plus the. Both are a boundary between two small words, so both split here, and the written order survives because neither split reorders anything.");
  let parts = [];
  for (let piece of text_split(parsing, "|")) {
    for (let atom of text_split(piece, ",")) {
      let part = text_trim(atom);
      if (text_empty_not_is(part)) {
        parts.push(part);
      }
    }
  }
  return parts;
}
