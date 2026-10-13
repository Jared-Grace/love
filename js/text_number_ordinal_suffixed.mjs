import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { modulo } from "./modulo.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_number_ordinal_suffixed(number) {
  arguments_assert(arguments, 1);
  ("$plain number");
  ("A whole number written as its own digits with the two letters English says its place in a line with - 147th rather than one hundred and forty seventh.");
  ("IT IS THE THIRD MEMBER OF A FAMILY AND THE SHORTEST. The spelled speller writes the words and its underscore twin writes those words as a name in code; this one keeps the digits, which is what a reader wants where the number is the subject rather than part of a sentence - a chapter, a page, a verse. Its rules are the family's rules: a position has no zero, and anything it cannot say is refused rather than guessed.");
  ("THE WHOLE DIFFICULTY IS THAT ELEVEN, TWELVE AND THIRTEEN TAKE TH AND NOT ST, ND, RD. They are the teens, where the last digit lies about how the word is said, so the last two digits are looked at before the last one. Eleven, twelve and thirteen is the whole of the exception - the hundreds repeat it unchanged, which is why the test is on the last two digits and not on the number.");
  ("Nothing is said about how big the number may be, because the digits are the number and there is no table to run out of.");
  let whole_is = Number.isInteger(number);
  assert_json(whole_is, {
    hint: "this writes whole numbers only - would you like to look at what was handed to it?",
    number,
  });
  let in_range = greater_than_equal(number, 1);
  assert_json(in_range, {
    hint: "this writes nothing below one - nothing is the zeroth of anything - would you like to look at what was handed to it?",
    number,
  });
  let last_two = modulo(number, 100);
  let teen_is = list_includes([11, 12, 13], last_two);
  let suffix = "th";
  if (teen_is) {
    let r = text_combine(number, suffix);
    return r;
  }
  let last_one = modulo(number, 10);
  let suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];
  let suffix_chosen = suffixes[last_one];
  let r2 = text_combine(number, suffix_chosen);
  return r2;
}
