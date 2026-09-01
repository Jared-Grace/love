import { divide_floor } from "./divide_floor.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { floor } from "./floor.mjs";
import { text_number_spelled } from "./text_number_spelled.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_number_ordinal_spelled(number) {
  arguments_assert(arguments, 1);
  ("A whole number written out the way English says its place in a line - thirty third rather than 33rd - in lower case, with one space between the words and no hyphen anywhere.");
  ("IT IS THE COMPANION OF THE PLAIN SPELLER AND KEEPS ITS RULES. That one writes a count and this one writes a position, and the two are told apart nowhere else: no hyphen, one space, lower case, and a refusal rather than a guess past what it can say. A name in code spells the same words with an underscore where the space is, so whoever needs that shape makes it from this rather than keeping a second table.");
  ("A POSITION HAS NO ZERO. Nothing is the zeroth of anything, and a speller that answered for zero would be inventing a word to avoid saying it could not. So the count starts at one and below that is refused.");
  ("THE ROUND TENS ARE THEIR OWN WORDS AND THAT IS THE WHOLE DIFFICULTY. Twenty becomes twentieth rather than twenty first, so a compound is the plain ten word beside the ordinal of what is left, and a round ten is a word off a second list. Every other shape falls out of those two.");
  let ones = [
    "",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
    "thirteenth",
    "fourteenth",
    "fifteenth",
    "sixteenth",
    "seventeenth",
    "eighteenth",
    "nineteenth",
  ];
  let tens = [
    "",
    "",
    "twentieth",
    "thirtieth",
    "fortieth",
    "fiftieth",
    "sixtieth",
    "seventieth",
    "eightieth",
    "ninetieth",
  ];
  let whole_is = Number.isInteger(number);
  assert_json(whole_is, {
    hint: "this spells whole numbers only - would you like to look at what was handed to it?",
    number,
  });
  let in_range = greater_than_equal(number, 1) && less_than(number, 1000);
  assert_json(in_range, {
    hint: "this spells nothing below one - nothing is the zeroth of anything - and nothing above nine hundred and ninety nine - would you like to look at what was handed to it?",
    number,
  });
  if (less_than(number, 20)) {
    let small = ones[number];
    return small;
  }
  if (less_than(number, 100)) {
    let after_ten = modulo(number, 10);
    let p = divide(number, 10);
    if (equal(after_ten, 0)) {
      let round_ten = tens[floor(p)];
      return round_ten;
    }
    let number2 = subtract(number, after_ten);
    let ten_word = text_number_spelled(number2);
    let two_words = text_combine_multiple([ten_word, " ", ones[after_ten]]);
    return two_words;
  }
  let after_hundred = modulo(number, 100);
  let hundreds = divide_floor(number, 100);
  if (equal(after_hundred, 0)) {
    let hundred_word = text_number_spelled(hundreds);
    let round_hundred = text_combine_multiple([hundred_word, " hundredth"]);
    return round_hundred;
  }
  let number3 = subtract(number, after_hundred);
  let hundreds_word = text_number_spelled(number3);
  let rest_spelled = text_number_ordinal_spelled(after_hundred);
  let whole_spelled = text_combine_multiple([
    hundreds_word,
    " and ",
    rest_spelled,
  ]);
  return whole_spelled;
}
