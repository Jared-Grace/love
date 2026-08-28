import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function bible_glyph_name_picture_is(glyph_name, lookup) {
  arguments_assert(arguments, 2);
  ("$plain glyph_name");
  ("$plain lookup");
  ("the name is one glyph's name and the lookup is the table of what each name draws as. Both are data to read and neither runs.");
  ("Whether the glyph of this name actually draws as a picture, rather than standing on the page as its own English name.");
  ("A SEATED GLYPH IS NOT THE SAME THING AS A DRAWN ONE, and every reading that treats them as one is wrong at the four words that have no character anywhere. ",
    fn_name("bible_glyph_artwork_absent"),
    " says which four and why: an altar and a priest have no emoji and no artwork, so the table hands back the English word itself and the page prints letters. The word is fully seated, fully authored and completely legible - it simply is not a picture yet.");
  ("THE TEST IS THE CHARACTER AND NOT A LIST, so nothing has to be kept in step by hand. A picture is written outside the ordinary letters and an English word is not, so asking whether any part of the character is numbered above the last ASCII one answers it for every glyph at once, including ones seated tomorrow.");
  ("ONE TEST HERE IS ENOUGH WHERE TWO WERE NEEDED ELSEWHERE. A reading that walks drawn text has to ask both this and whether the character is in the table, because a curly quotation mark is also numbered above the letters. This one is handed a name out of the table already, so the second question is answered before it is asked.");
  ("A NAME THE TABLE DOES NOT HOLD ANSWERS NO, which is the safe direction. The only thing anyone does with a yes is widen a gap, so an unknown name gets an ordinary space and reads as ordinary text - which is exactly what an unknown name draws as.");
  let character = property_get_or_null(lookup, glyph_name);
  let missing = null_is(character);
  if (missing) {
    let unknown = false;
    return unknown;
  }
  let ascii_last = 127;
  for (
    let position = 0;
    less_than(position, character.length);
    position = position + 1
  ) {
    let unit = character.charCodeAt(position);
    if (greater_than(unit, ascii_last)) {
      let picture = true;
      return picture;
    }
  }
  let letters = false;
  return letters;
}
