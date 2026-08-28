import { text_ends_with_not } from "./text_ends_with_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_source_code_pieces(source) {
  arguments_assert(arguments, 1);
  ("the quoted pieces of a lesson file that are short enough to be code it PUTS ON A CARD, rather than a sentence it says about itself. Splitting the source at every quote mark leaves the quoted pieces at the odd places, which is the whole of the parsing this needs.");
  ("A quoted piece longer than a line of code is one of this repo's prose paragraphs rather than a card, and prose is full of code written as an example of what the card must NOT be. Length is what tells the two apart without parsing anything, and twenty-eight characters is longer than every code line these lessons show.");
  ("A piece naming a module is dropped by name: an import line spells a path with a slash in it, and a slash read off an import would hand every file in the repo a divide it never shows.");
  ("The finding is written apart from what is then read off it, because more than one reading wants the same pieces - what operators a card spells, and whether the line it spells is bracketed - and a second copy of this split would be a second place for the length to drift.");
  let pieces = text_split(source, '"');
  let found = [];
  let index = 0;
  for (let piece of pieces) {
    let left = modulo(index, 2);
    let quoted = equal(left, 1);
    let a = text_size(piece);
    let short = less_than(a, 29);
    let right = text_ends_with_not(piece, ".mjs");
    let right2 = and(short, right);
    let take = and(quoted, right2);
    if (take) {
      list_add(found, piece);
    }
    index = add(index, 1);
  }
  return found;
}
