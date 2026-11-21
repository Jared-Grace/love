import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_number_spelled } from "./text_number_spelled.mjs";
import { modulo } from "./modulo.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
export function text_number_spelled_thousands(number) {
  arguments_assert(arguments, 1);
  ("A whole number written out in words, the same as the number speller, but reaching past a thousand - one thousand and five, one thousand one hundred and eighty nine - up to nine hundred and ninety nine thousand nine hundred and ninety nine.");
  ("IT WAS BUILT WHEN THE PICTURE BIBLE HELD ITS THOUSANDTH CHAPTER on 2026-11-22. The chapter list states its own size in words, and the number speller stops at nine hundred and ninety nine. Below a thousand this hands the number straight to that speller, so every word already written stays the same.");
  ("THE AND GOES IN ONLY WHERE THE REST IS BELOW A HUNDRED, the same rule as the ordinal speller past a thousand: one thousand and five, but one thousand one hundred and eighty nine.");
  let in_range = greater_than_equal(number, 0) && less_than(number, 1000000);
  assert_json(in_range, {
    hint: "this spells nothing below zero and nothing above nine hundred and ninety nine thousand nine hundred and ninety nine - would you like to look at what was handed to it?",
    number,
  });
  if (less_than(number, 1000)) {
    let below_thousand = text_number_spelled(number);
    return below_thousand;
  }
  let after_thousand = modulo(number, 1000);
  let thousands = divide_floor(number, 1000);
  let whole_spelled = text_number_spelled(thousands);
  let thousand_word = text_combine_multiple([whole_spelled, " thousand"]);
  if (equal(after_thousand, 0)) {
    return thousand_word;
  }
  let joiner = " ";
  if (less_than(after_thousand, 100)) {
    joiner = " and ";
  }
  let rest_spelled = text_number_spelled(after_thousand);
  let thousand_spelled = text_combine_multiple([
    thousand_word,
    joiner,
    rest_spelled,
  ]);
  return thousand_spelled;
}
