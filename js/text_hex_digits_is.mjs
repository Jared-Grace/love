import { text_split_empty } from "./text_split_empty.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { digits_text } from "./digits_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_all } from "./list_all.mjs";
export function text_hex_digits_is(text) {
  "True when this text is written out of the sixteen hex digits and nothing else, and holds at least one of them. Either case of letter counts, because both are written by hand and both are read the same way.";
  "AN EMPTY TEXT IS ANSWERED NO RATHER THAN YES, the same way the plain-digit question answers it. The question being asked is always whether some real text is a number written out, and a yes for nothing at all would make every caller check for it first.";
  "IT EXISTS BECAUSE COUNTING THE DIGITS IS NOT READING THEM. A colour written as a hash and six characters is the right shape whatever those characters are, and the reader that turns them into numbers stops at the first one it does not know instead of complaining - so six characters with a typo in the fifth come back as a real, believable colour that nobody wrote. Asking this first is what turns that into nothing at all.";
  let characters = text_split_empty(text);
  let empty = list_empty_is(characters);
  if (empty) {
    return false;
  }
  let decimal = digits_text();
  let allowed = text_combine_multiple([decimal, "abcdef"]);
  function hex_digit_is(character) {
    let lowered = text_lower_to(character);
    let hit = text_includes(allowed, lowered);
    return hit;
  }
  let all = list_all(characters, hex_digit_is);
  return all;
}
