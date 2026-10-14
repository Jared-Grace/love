import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_group_pieces(names, meanings) {
  arguments_assert(arguments, 2);
  ("$plain names");
  ("$plain meanings");
  ("the names are the pictures of one drawn group, in order, and the meanings map a sequence to what it says. Both are data and neither runs.");
  ("One drawn group cut into the pieces that each mean something: a root's whole sequence, and the joined small words around it.");
  ("THE LONGEST SEQUENCE THAT MEANS SOMETHING IS TAKEN FIRST, and what is left either side is cut the same way. A Hebrew word joins and, the and his onto its root inside one group, and the root's own sequence is longer than any of those, so it is found whole rather than read as its pictures one at a time.");
  ("A picture nothing explains is a piece of its own with no meaning, so every picture of the group appears in exactly one piece and none is dropped.");
  let size = names.length;
  if (equal(size, 0)) {
    let r = [];
    return r;
  }
  for (let length = size; greater_than_equal(length, 1); length--) {
    for (let start = 0; less_than_equal(start + length, size); start++) {
      let slice = names.slice(start, start + length);
      let key = slice.join("+");
      let found = property_exists(meanings, key);
      if (not(found) && greater_than(length, 1)) {
        continue;
      }
      let meaning = found ? property_get(meanings, key) : null;
      let names2 = names.slice(0, start);
      let before = bible_glyph_group_pieces(names2, meanings);
      let names3 = names.slice(start + length);
      let after = bible_glyph_group_pieces(names3, meanings);
      let piece = {
        names: slice,
        meaning,
      };
      let r2 = [...before, piece, ...after];
      return r2;
    }
  }
}
