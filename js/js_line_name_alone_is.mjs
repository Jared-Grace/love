import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_size } from "./text_size.mjs";
import { text_identifier_char_is } from "./text_identifier_char_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_line_name_alone_is(bare) {
  "Whether one trimmed line of a program is a single name and a comma and nothing else.";
  "IT IS THE ONE SHAPE A CHANGED LINE CANNOT SETTLE ABOUT ITSELF. An entry standing alone in a list, a part of a record written under its own name, and an argument of a call broken over several lines are all written exactly like this, and the first two are values while the third is program. The line holds no mark that tells them apart, so no reading of the line alone can be right about it - only the file around it can, and a difference does not carry the file.";
  "IT IS ASKED SO THAT THE ANSWER CAN BE NEITHER. The reading that classes changed lines used to fold this shape into the program, which is the safe direction to be wrong in but is still being wrong; naming it makes the doubt a number a reader can see and weigh, rather than a sentence in a paragraph saying the count runs low.";
  arguments_assert(arguments, 1);
  let comma_is = text_ends_with(bare, ",");
  if (not(comma_is)) {
    return false;
  }
  let size = text_size(bare);
  let to = subtract(size, 1);
  let head = text_slice(bare, 0, to);
  let empty_is = equal(head, "");
  if (empty_is) {
    return false;
  }
  for (let character of head) {
    let named = text_identifier_char_is(character);
    if (not(named)) {
      return false;
    }
  }
  return true;
}
