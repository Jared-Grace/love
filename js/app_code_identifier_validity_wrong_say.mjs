import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_alphabet_cases_both } from "./text_alphabet_cases_both.mjs";
import { digits_text } from "./digits_text.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { boolean_to_text_validity } from "./boolean_to_text_validity.mjs";
import { text_trim } from "./text_trim.mjs";
export function app_code_identifier_validity_wrong_say(
  question,
  answer,
  choice,
) {
  arguments_assert(arguments, 3);
  ("said when a learner calls a name a valid or invalid identifier wrongly: an identifier is made of letters, digits, _ and $ and does not start with a digit, and what in this name keeps or breaks that, as parts that take turns between words and code. null when that rule and the answer disagree, as for a word JS keeps for itself, so a reason is never given beside an answer it does not explain");
  ("Only the first fault is named: a digit in front before any other mark, since that is the one the lessons teach on its own. Not picked: listing every mark that does not belong, which says the same thing at greater length");
  let name = text_to(question);
  let right_answer = text_to(answer);
  let characters = text_split_empty(name);
  if (list_empty_is(characters)) {
    return null;
  }
  let underscore = "_";
  let dollar = "$";
  let combined = text_alphabet_cases_both();
  let d = digits_text();
  let allowed = text_combine_multiple([combined, d, underscore, dollar]);
  function outside(character) {
    let inside = text_includes(allowed, character);
    let n = not(inside);
    return n;
  }
  let first = list_first(characters);
  let input = digits_text();
  let digit_first = text_includes(input, first);
  let faults = list_filter(characters, outside);
  let made_right = list_empty_is(faults);
  let rule_valid = made_right && not(digit_first);
  let right = boolean_to_text_validity(true);
  let answer_valid = equal(right_answer, right);
  let b = equal(rule_valid, answer_valid);
  if (not(b)) {
    return null;
  }
  if (rule_valid) {
    let r = [
      "Remember: an identifier is made of letters, digits, ",
      underscore,
      " and ",
      dollar,
      ", and does not start with a digit, so ",
      name,
      " is valid",
    ];
    return r;
  }
  if (digit_first) {
    let r2 = [
      "Remember: an identifier cannot start with a digit, and ",
      name,
      " starts with ",
      first,
      "",
    ];
    return r2;
  }
  let fault = list_first(faults);
  ("The lessons write a space between words as a no-break space so it shows on the page, so a space is known by trimming to nothing rather than by comparing with one kind of space");
  let left = text_trim(fault);
  let fault_space = equal(left, "");
  if (fault_space) {
    let r3 = [
      "Remember: an identifier cannot have a space in it, and ",
      name,
      " has one",
    ];
    return r3;
  }
  let r4 = [
    "Remember: an identifier is made of only letters, digits, ",
    underscore,
    " and ",
    dollar,
    ", and ",
    name,
    " has ",
    fault,
    " in it",
  ];
  return r4;
}
