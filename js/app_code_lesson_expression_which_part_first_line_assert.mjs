import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_code_lesson_expression_which_part_first_expression } from "./app_code_lesson_expression_which_part_first_expression.mjs";
import { app_code_lesson_expression_which_part_first_answer } from "./app_code_lesson_expression_which_part_first_answer.mjs";
import { app_code_lesson_expression_which_part_first_decoys } from "./app_code_lesson_expression_which_part_first_decoys.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_expression_which_part_first_line_assert(
  strong_symbols,
  weak_symbols,
) {
  "Generate one line for this lesson, check that the two buttons made from it are the two real parts of it, and answer with the pairing of operators the line turned out to use.";
  "The pairing is answered for rather than checked here, because whether every pairing turns up is a question about the whole run of lines and no single line can see it.";
  function symbols_used(line, symbols) {
    "which of one class of operators a line uses, read off its characters";
    "the characters rather than the tokenizer on purpose, because the reading being checked here goes through the tokenizer - asking the same way would make the two agree by construction and check nothing";
    function used(symbol) {
      let there = text_includes(line, symbol);
      return there;
    }
    let found = list_filter(symbols, used);
    return found;
  }
  let code = app_code_lesson_expression_which_part_first_expression();
  let answer = app_code_lesson_expression_which_part_first_answer(code);
  let decoys = app_code_lesson_expression_which_part_first_decoys(code, answer);
  let decoy = list_first(decoys);
  let json = {
    code,
    answer,
    decoy,
  };
  let left = list_size(decoys);
  equal_assert_json(left, 1, json);
  ("one operator from each class, which is what makes exactly one part of the line go first");
  let strong_used = symbols_used(code, strong_symbols);
  let strong = list_single_message(
    strong_used,
    "a line for this lesson should use exactly one of the operators that are solved first",
  );
  let weak_used = symbols_used(code, weak_symbols);
  let weak = list_single_message(
    weak_used,
    "a line for this lesson should use exactly one of the operators that are solved last",
  );
  ("the right button is the part built around the stronger operator, and the wrong one is the part built around the weaker");
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
  let pairing = text_combine(strong, weak);
  return pairing;
}
