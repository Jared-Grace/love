import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_number_ordinal_spelled } from "./text_number_ordinal_spelled.mjs";
import { modulo } from "./modulo.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_number_spelled } from "./text_number_spelled.mjs";
import { equal } from "./equal.mjs";
export function text_number_ordinal_spelled_thousands(number) {
  arguments_assert(arguments, 1);
  ("A whole number's place in a line written out in words, the same as the ordinal speller, but reaching past a thousand - one thousand and first, one thousand one hundred and eighty ninth - up to nine hundred and ninety nine thousand nine hundred and ninety ninth.");
  ("IT WAS BUILT WHEN THE PICTURE BIBLE NAMED ITS THOUSANDTH CHAPTER on 2026-11-22. The registry numbers every chapter with an ordinal word, and the ordinal speller stops at nine hundred and ninety nine, so the thousandth chapter could not be named. Below a thousand this hands the number straight to that speller, so every name already written stays the same word.");
  ("THE AND GOES IN ONLY WHERE THE REST IS BELOW A HUNDRED. One thousand and fifth, but one thousand one hundred and first, because the hundred already carries its own and. A round thousand takes th on the end, as a round hundred does.");
  let in_range = greater_than_equal(number, 1) && less_than(number, 1000000);
  assert_json(in_range, {
    hint: "this spells nothing below one and nothing above nine hundred and ninety nine thousand nine hundred and ninety nine - would you like to look at what was handed to it?",
    number,
  });
  if (less_than(number, 1000)) {
    let below_thousand = text_number_ordinal_spelled(number);
    return below_thousand;
  }
  let after_thousand = modulo(number, 1000);
  let thousands = divide_floor(number, 1000);
  let whole_spelled = text_number_spelled(thousands);
  let thousand_word = text_combine_multiple([whole_spelled, " thousand"]);
  if (equal(after_thousand, 0)) {
    let round_thousand = text_combine_multiple([thousand_word, "th"]);
    return round_thousand;
  }
  let joiner = " ";
  if (less_than(after_thousand, 100)) {
    joiner = " and ";
  }
  let whole_spelled2 = text_number_ordinal_spelled(after_thousand);
  let thousand_spelled = text_combine_multiple([
    thousand_word,
    joiner,
    whole_spelled2,
  ]);
  return thousand_spelled;
}
