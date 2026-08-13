import { less_than } from "./less_than.mjs";
import { app_code_lesson_expression_which_part_first_answer } from "./app_code_lesson_expression_which_part_first_answer.mjs";
import { app_code_lesson_expression_which_part_first_decoys } from "./app_code_lesson_expression_which_part_first_decoys.mjs";
import { app_code_lesson_expression_which_part_first_expression } from "./app_code_lesson_expression_which_part_first_expression.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { text_includes } from "./text_includes.mjs";
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
    let code = app_code_lesson_expression_which_part_first_expression();
    let answer = app_code_lesson_expression_which_part_first_answer(code);
    let decoys = app_code_lesson_expression_which_part_first_decoys(
      code,
      answer,
    );
    let decoy = list_first(decoys);
    let json = {
      code,
      answer,
      decoy,
    };
    let left = list_size(decoys);
    equal_assert_json(left, 1, json);
    ("the right button is the part built around the *, and the wrong one is the part built around the operator that is not the *");
    let enabled = text_includes(answer, strong);
    true_is_assert_json(enabled, json);
    let b = text_includes(decoy, strong);
    false_is_assert_json(b, json);
    ("three tokens each - a number, an operator, a number - so a miscount that lands on an operator or runs off the end is caught even when the characters it returns look like code");
    let list = app_code_quiz_tokens(answer);
    let left2 = list_size(list);
    equal_assert_json(left2, 3, json);
    let list2 = app_code_quiz_tokens(decoy);
    let left3 = list_size(list2);
    equal_assert_json(left3, 3, json);
    equal_not_assert_json(answer, decoy, json);
    ("both parts are cut out of the line the learner is looking at, so a button holding a number the line never showed would be a giveaway rather than a decision");
    let enabled2 = text_includes(code, answer);
    true_is_assert_json(enabled2, json);
    let enabled3 = text_includes(code, decoy);
    true_is_assert_json(enabled3, json);
  }
}
