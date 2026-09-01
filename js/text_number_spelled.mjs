import { floor } from "./floor.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_number_spelled(number) {
  arguments_assert(arguments, 1);
  ("A whole number written out the way English says it aloud - thirty two rather than 32 - in lower case, with one space between the words and no hyphen anywhere.");
  ("PROSE IN THIS REPO SPELLS ITS COUNTS AND CODE HOLDS THEM AS NUMBERS, so anything wanting to check one against the other has to cross that gap. Crossed once here, the crossing is something a gate can do instead of something a person does by eye and quietly gets wrong.");
  ("NO HYPHEN IS A DECISION ABOUT MATCHING RATHER THAN ABOUT ENGLISH. The sentences this was built to check already say thirty one and thirty two with a space in the middle, so a speller that wrote thirty-two would disagree with every one of them and the gate would fail on prose that is perfectly correct. Past a hundred it says the and, because the prose here already writes four hundred and forty rather than four hundred forty.");
  ("It answers up to nine hundred and ninety nine and refuses anything louder rather than guessing. Nothing here counts that high, and a speller that quietly returned something wrong for a thousand would be worse than one that says plainly it cannot.");
  let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let whole_is = Number.isInteger(number);
  assert_json(whole_is, {
    hint: "this spells whole numbers only - would you like to look at what was handed to it?",
    number,
  });
  let in_range = greater_than_equal(number, 0) && less_than(number, 1000);
  assert_json(in_range, {
    hint: "this spells nothing below zero and nothing above nine hundred and ninety nine - would you like to look at what was handed to it?",
    number,
  });
  if (less_than(number, 20)) {
    let small = ones[number];
    return small;
  }
  if (less_than(number, 100)) {
    let p = divide(number, 10);
    let ten_word = tens[floor(p)];
    let after_ten = modulo(number, 10);
    if (equal(after_ten, 0)) {
      return ten_word;
    }
    let two_words = text_combine_multiple([ten_word, " ", ones[after_ten]]);
    return two_words;
  }
  let p2 = divide(number, 100);
  let hundred_word = ones[floor(p2)];
  let after_hundred = modulo(number, 100);
  if (equal(after_hundred, 0)) {
    let round_hundred = text_combine_multiple([hundred_word, " hundred"]);
    return round_hundred;
  }
  let rest_spelled = text_number_spelled(after_hundred);
  let whole_spelled = text_combine_multiple([
    hundred_word,
    " hundred and ",
    rest_spelled,
  ]);
  return whole_spelled;
}
