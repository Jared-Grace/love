import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_joined_key } from "./bible_glyph_joined_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_piece_meaning(piece, meanings, joined) {
  arguments_assert(arguments, 3);
  ("$plain piece");
  ("$plain meanings");
  ("$plain joined");
  ("the piece is one cut of a drawn group, the meanings map a sequence to what it says, and joined says whether the group held other pieces. All are data and none runs.");
  ("What one piece of a drawn group means, read as a joined word where it stands joined to others.");
  ("A LONE PICTURE JOINED TO OTHERS IS ASKED FOR ITS JOINED MEANING FIRST, because that is what it is there: the plus inside a Hebrew word is and, even though the plus standing alone is also. Anywhere else the piece keeps the meaning it was cut with.");
  let names = piece.names;
  let single = equal(names.length, 1);
  if (joined && single) {
    let key = bible_glyph_joined_key(names[0]);
    if (property_exists(meanings, key)) {
      let value = property_get(meanings, key);
      return value;
    }
  }
  let r = piece.meaning;
  return r;
}
