import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_digits_urdu(t) {
  "The same text with every digit in it written the way Urdu writes its digits.";
  "URDU DOES NOT WRITE ITS NUMBERS WITH THE SAME TEN SHAPES ENGLISH DOES, and a verse number kept in a store as 21 stands in an Urdu sentence as ۲۱. The two are the same number and share not one character, so any search for the one inside a text written in the other finds nothing at all and says so quietly.";
  "The swap is made forwards, from the number as it is kept to the number as it is read, because that is the direction that needs only this one table. Reading the Urdu shapes back into English ones would want a second table saying the same thing, and a second table is free to come to disagree with the first.";
  "Anything that is not a digit is handed back untouched, so a whole sentence may be passed in as safely as a bare number.";
  arguments_assert(arguments, 1);
  let table = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  let letters = text_split(t, "");
  function letter_swap(letter) {
    let written = property_get_or_null(table, letter);
    if (null_is(written)) {
      return letter;
    }
    return written;
  }
  let swapped = list_map(letters, letter_swap);
  let r = text_combine_multiple(swapped);
  return r;
}
