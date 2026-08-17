import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function app_code_lesson_statement_name_sum_number_pairs() {
  arguments_assert(arguments, 0);
  ("the four pairs of numbers the lessons about adding what two names hold give their two names, one pair to a program");
  ("The four totals are picked first and the two numbers worked back out of each, which is what keeps the four answers different from one another. Picked the other way round - two numbers each time and the total left to fall where it may - two programs could land on the same answer, and a question would be offering the right answer twice.");
  ("Every total is odd, which is what stops the two numbers of a pair ever being the same as each other. Given the same number twice a learner could reach the answer while reading only one of the two names, and reading both is the whole of what these lessons ask.");
  ("The first number walks up by one from pair to pair rather than being picked. It is what makes the pair different each time without a second draw, and it keeps the first number away from the total, which a learner is looking at in the buttons.");
  ("Two lessons ask the same four programs and differ only in whether the total is given a third name on the way out, so the numbers are picked here once and both of them read them from here.");
  let totals = list_shuffle_take([7, 9, 11, 13, 15], 4);
  function pair_of(total, index) {
    "the two numbers of one program: the first walks up with the index, and the second is whatever the total has left over";
    let first = add(2, index);
    let last = subtract(total, first);
    let pair = [first, last];
    return pair;
  }
  let pairs = list_map_index(totals, pair_of);
  return pairs;
}
