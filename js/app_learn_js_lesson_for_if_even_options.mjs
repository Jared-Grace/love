import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function app_learn_js_lesson_for_if_even_options() {
  arguments_assert(arguments, 0);
  ("what a for lesson whose if asks n % 2 === remainder hands in: the question, its groups of programs, the example, and the wrong remainder read backwards");
  ("The threshold here is the remainder asked for, 0 for even and 1 for odd. The groups, by what is let through: one of three, two of three, one of two, and two of three further up. Every program runs at least twice, so both remainders turn up and asking the other one always writes out something different.");
  ("Read backwards, the wrong program asks for the other remainder.");
  ("The example is 2, 5 and 0: n is 2, 3 and 4, and the even ones, 2 and 4, are let through.");
  let percent = js_operator_percent_symbol();
  let same = js_operator_triple_equal_symbol();
  function asked_write(left, remainder) {
    let divided = js_code_binary_spaced_nb(left, percent, 2);
    let asked = js_code_binary_spaced_nb(divided, same, remainder);
    return asked;
  }
  function passes(value, remainder2) {
    let left2 = modulo(value, 2);
    let p = equal(left2, remainder2);
    return p;
  }
  function threshold_other(remainder3, start) {
    let other = subtract(1, remainder3);
    return other;
  }
  let r = {
    asked_write,
    passes,
    groups: [
      [
        [1, 4, 0],
        [2, 5, 1],
      ],
      [
        [1, 4, 1],
        [2, 5, 0],
      ],
      [
        [3, 5, 0],
        [4, 6, 1],
      ],
      [
        [3, 6, 1],
        [4, 7, 0],
      ],
    ],
    example: [2, 5, 0],
    threshold_other,
  };
  return r;
}
