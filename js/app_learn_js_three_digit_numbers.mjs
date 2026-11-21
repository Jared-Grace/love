import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
export function app_learn_js_three_digit_numbers(count) {
  arguments_assert(arguments, 1);
  ("count numbers of three digits, the digits of each drawn from 1 to 9 with none twice, so no digit is 0 and no two digits of one number look alike; for the lessons that take a number apart one digit at a time");
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numbers = [];
  for (let k = 0; less_than(k, count); k++) {
    let three = list_shuffle_take(digits, 3);
    let left = list_get(three, 0);
    let left2 = list_get(three, 1);
    let number = multiply(left, 100) + multiply(left2, 10) + list_get(three, 2);
    numbers.push(number);
  }
  return numbers;
}
