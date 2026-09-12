import { arguments_assert } from "./arguments_assert.mjs";
import { add_1 } from "./add_1.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { range_map } from "./range_map.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_uneven_dividend_between(least, most, divisor) {
  arguments_assert(arguments, 3);
  ("a number to divide by the divisor given, drawn between least and most, that the divisor never goes into exactly: for 4 between 5 and 20 it draws one of 5, 6, 7, 9, 10, 11, 13, and so on, and never 8, 12, 16 or 20");
  ("★ A REMAINDER OF NOUGHT SHOWS A LEARNER PRACTISING REMAINDERS NOTHING AT ALL. The line is asked so that the learner works out what is left over, and a division that comes out even leaves nothing to work out and nothing to read: the answer is nought whatever the two numbers were. Drawn freely between two ends, one question in every few comes out that way, and on 2026-09-12 both questions on one screen did.");
  ("The whole run of numbers between the two ends is laid out and the even ones taken out of it, rather than a number being drawn and then pushed off a multiple. Drawing and mending would lean the answers towards the leftovers next to nought, and the run is a few numbers long.");
  let n = subtract(most, least);
  let count = add_1(n);
  function number_of(index) {
    let number = add(least, index);
    return number;
  }
  let numbers = range_map(count, number_of);
  function uneven_is(number) {
    let leftover = modulo(number, divisor);
    let even = equal(leftover, 0);
    let uneven = not(even);
    return uneven;
  }
  let uneven = list_filter(numbers, uneven_is);
  let drawn = list_random_item(uneven);
  return drawn;
}
