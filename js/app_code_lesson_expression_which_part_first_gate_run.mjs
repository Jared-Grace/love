import { app_code_lesson_expression_which_part_first_line_assert } from "./app_code_lesson_expression_which_part_first_line_assert.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export function app_code_lesson_expression_which_part_first_gate_run() {
  arguments_assert(arguments, 0);
  ("the two buttons this lesson puts in front of a learner are the two real parts of the line, the right one holding the stronger operator and the wrong one holding the weaker. Both are read out of the same generated line by counting tokens, and getting a count wrong does not throw - it hands back a run of characters that is still a piece of the line, so it reads as code and only a person looking at the screen can tell it is not a part");
  ("that is what happened: the wrong button came back as * 8 - for the line 3 * 8 - 5. It is even a substring of the line, so asking whether the buttons are made of the line's own characters would have called it correct. What tells them apart is the operator each one is built around, which is exactly what this checks");
  ("the lines are generated rather than listed, because the arrangement is what the counting depends on - the stronger operator falls on either side, half the time each - so a fixed list would need to be kept in step with the generator by hand. Enough of them that both arrangements and all four pairings of the two classes are certain to appear");
  ("every pairing is also required to turn up rather than merely allowed to. A generator quietly narrowed back to one operator would still pass every check below on every line it made, because each line would be perfectly consistent - the narrowing shows only in what is missing");
  let strong_symbols = app_code_operators_strong();
  let weak_symbols = app_code_operators_weak();
  let seen = [];
  let count = 200;
  for (let i = 0; less_than(i, count); i++) {
    let pairing = app_code_lesson_expression_which_part_first_line_assert(
      strong_symbols,
      weak_symbols,
    );
    list_add(seen, pairing);
  }
  ("every pairing of the two classes turned up. Each was taught by a lesson of its own before this one, so a learner meeting only some of them here is being asked less than they were given");
  for (let strong_symbol of strong_symbols) {
    for (let weak_symbol of weak_symbols) {
      let pairing = text_combine(strong_symbol, weak_symbol);
      let there = list_includes(seen, pairing);
      true_is_assert_json(there, {
        pairing,
        count,
        hint: "this pairing never appeared in any of the generated lines, so the generator has narrowed to fewer operators than the lesson teaches",
      });
    }
  }
}
