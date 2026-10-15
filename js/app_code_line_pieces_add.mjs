import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { property_get } from "./property_get.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_line_pieces_add(pieces, from, to, written) {
  arguments_assert(arguments, 4);
  ("the pieces solved into a line so far, with the piece from from to to now written as written; a piece solved within it before is swallowed by it, as the 3 and the 10 of 3 + 10 are by the 13 it comes to");
  ("A new list rather than the old one changed, so a caller holding the pieces as they were still has them.");
  ("Pieces are solved left to right and a piece after its own sides, so a new piece either stands after every piece kept or swallows the last of them, and adding it last keeps them in the order they stand in the line, which is the order the text of a line is read back in");
  function outside_is(piece) {
    let a = property_get(piece, "from");
    let inside =
      greater_than_equal(a, from) &&
      less_than_equal(property_get(piece, "to"), to);
    let r = not(inside);
    return r;
  }
  let kept = list_filter(pieces, outside_is);
  list_add(kept, {
    from,
    to,
    written,
  });
  return kept;
}
