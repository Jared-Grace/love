import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_statement_name_sum_number_pairs() {
  arguments_assert(arguments, 0);
  ("the four pairs of numbers the lessons about adding what two names hold give their two names, one pair to a program");
  ("The four totals are picked first and the two numbers worked back out of each, which is what keeps the four answers different from one another. Picked the other way round - two numbers each time and the total left to fall where it may - two programs could land on the same answer, and a question would be offering the right answer twice.");
  ("Every total is odd and every first number is odd, and those two facts together settle everything else. An odd total less an odd first number leaves an even second number, so no second number can ever be one of the totals; and an odd total is not two of anything, so the two numbers of a pair can never be equal. Given the same number twice a learner could reach the answer while reading only one of the two names, and reading both is the whole of what these lessons ask.");
  ("No number written anywhere in a program is a total that any program comes to. A question shows one program's answer and offers four programs to choose from, so a number that is an answer somewhere and a written-down value somewhere else can be found by looking rather than by adding - and looking is exactly the reading these lessons are trying to replace. The first numbers stop below the smallest total and the second numbers are the wrong parity to be one, so this holds however the totals fall.");
  ("The first number walks up from pair to pair rather than being picked, which is what makes the pair different each time without a second draw.");
  ("Two lessons ask the same four programs and differ only in whether the total is given a third name on the way out, so the numbers are picked here once and both of them read them from here.");
  let totals = list_shuffle_take([9, 11, 13, 15, 17], 4);
  function pair_of(total, index) {
    "the two numbers of one program: the first walks up through the odd numbers with the index, and the second is whatever the total has left over";
    let stepped = multiply(2, index);
    let first = add(1, stepped);
    let last = subtract(total, first);
    let pair = [first, last];
    return pair;
  }
  let pairs = list_map_index(totals, pair_of);
  return pairs;
}
