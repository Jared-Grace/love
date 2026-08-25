import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_identifier_char_is } from "./text_identifier_char_is.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function js_line_data_is(bare) {
  "Whether one trimmed line of a program is content of a written-out record or list rather than a statement.";
  "A VALUE CHOSEN IS NOT A COMMAND MISSING. A number raised, a colour picked, a word added to a list - these are hand-made and always will be, the same way a reworded paragraph is, so a reading that exists to size what a named command would have made has to take them out before it counts. Filed as program they make the gap look larger than it is, and every argument built on that number argues for a build the number does not support.";
  "TWO SHAPES COVER IT AND NOTHING ELSE HAS TO BE PARSED. A line that opens with a piece of text and does not close the way a whole statement closes is a value or an entry sitting inside something larger. A line whose opening run is nothing but the letters a name is made of, stopped by a colon, is a key - and a key is where the value that follows it lives, whether the value shares the line or waits on the next one.";
  "A NAME ALONE ON ITS LINE IS LEFT OUT HERE AND ASKED ABOUT SEPARATELY, because an entry in a list, a part of a record and an argument to a call broken over several lines are all written that way and the line holds no mark that tells them apart. It used to be folded into the program, which undercounts the values and never miscounts the program - the direction to be wrong in - but it is a doubt rather than a fact, so it is now carried as its own count and a reader can see how large it is.";
  arguments_assert(arguments, 1);
  let written = text_starts_with(bare, '"');
  if (written) {
    let endings = ['";'];
    let standing = text_ends_with_any(bare, endings);
    let inside = not(standing);
    return inside;
  }
  let colon_at = text_index_of_try(bare, ":");
  let missing = less_than(colon_at, 1);
  if (missing) {
    return false;
  }
  let head = text_slice(bare, 0, colon_at);
  for (let character of head) {
    let named = text_identifier_char_is(character);
    if (not(named)) {
      return false;
    }
  }
  return true;
}
