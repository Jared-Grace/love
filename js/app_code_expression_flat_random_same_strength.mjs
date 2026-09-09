import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_expression_step_value_least } from "./app_code_expression_step_value_least.mjs";
import { app_code_expression_step_value_most } from "./app_code_expression_step_value_most.mjs";
import { app_code_expression_rank } from "./app_code_expression_rank.mjs";
import { app_code_expression_step_choices_symbols } from "./app_code_expression_step_choices_symbols.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { range_from } from "./range_from.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_code_expression_step_grown_symbols } from "./app_code_expression_step_grown_symbols.mjs";
import { each_range } from "./each_range.mjs";
export function app_code_expression_flat_random_same_strength(operator_count) {
  arguments_assert(arguments, 1);
  ("a line of arithmetic with as many operators on it as asked for, every one of them the same strength as the others, needing no parentheses and answerable a step at a time all the way down: asked for three it gives lines like 2 + 2 + 2 - 3 and 2 * 2 / 2 * 3");
  ("Every operator on the line comes from one class, so no operator on it ever jumps over another and the line is worked out from the left and nothing else. That is what this is for: it is the line to hand a learner who is meeting a third step for the first time, with the question of which operator goes first held back until the lesson after.");
  ("★ ONE CLASS THROUGHOUT IS WHAT MAKES IT GROW LEFTWARD, AND NOTHING HERE ARRANGES THAT. A new operator may stand to the left of what is already there when it is at least as strong, and to the right only when it is strictly stronger. Equal strength passes the first test and fails the second, so a same-strength line can only ever be grown by hanging the new operator on the right-hand end - which is exactly the left-to-right chain the lesson is about. The shape falls out of the printing rule rather than being asked for.");
  ("★ THE GROWING CANNOT DEAD-END, AND THAT IS A FACT ABOUT THESE NUMBERS RATHER THAN A HOPE. Values run 2 through 9. On the weaker pair every value in that range has a move: a plus fits below 8 and a minus fits at 4 and above, so nothing in 2 through 9 is stuck. On the stronger pair the only values with no move are 5 and 7, and neither can ever be reached - both are prime, the multiplications that would land on them need a 1, and the divisions that would need a 10 or a 14 above the line are past the largest value allowed. So a walk begun on a value that has a move never meets one that has not, and there is no drawing again.");
  ("Which class a line is drawn from is left to chance rather than alternated, for the same reason the operators inside a line are: a learner who can predict what the next question looks like has stopped reading it.");
  let strong = app_code_operators_strong();
  let weak = app_code_operators_weak();
  let classes = [strong, weak];
  let symbols = list_random_item(classes);
  let least = app_code_expression_step_value_least();
  let most = app_code_expression_step_value_most();
  function ready_is(value) {
    "a number one of this line's operators may be written beside";
    let rank_most = app_code_expression_rank(value);
    let choices = app_code_expression_step_choices_symbols(
      value,
      rank_most,
      symbols,
    );
    let any = list_empty_not_is(choices);
    return any;
  }
  let numbers = range_from(least, most);
  let starts = list_filter(numbers, ready_is);
  let start = list_random_item(starts);
  let tree = start;
  function step_add(index_unused) {
    "one more operator on what is there so far, drawn from the same class as the ones already on it";
    tree = app_code_expression_step_grown_symbols(tree, symbols);
  }
  each_range(operator_count, step_add);
  return tree;
}
