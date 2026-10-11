import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_if_else_program_lines } from "./app_code_if_else_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_if_either_decoys } from "./app_code_if_either_decoys.mjs";
import { app_code_if_boolean_flipped } from "./app_code_if_boolean_flipped.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { app_code_if_else_explain } from "./app_code_if_else_explain.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_else() {
  arguments_assert(arguments, 0);
  ('else: let a = true; if (a) { console.log("love"); } else { console.log("joy"); } writes out love, and with let a = false; writes out joy');
  ("The one new fact is that else names the lines to run when the if does not, which If and if not wrote as a second if asking the opposite. Exactly one of the two runs, as there.");
  ("Asked for by the human 2026-10-08, after If and if not, and on the way to: if a number is even, halve it, otherwise multiply it by 3 and add 1.");
  ("Reading forwards, the wrong answers offered are the other word, and both words, which is what a learner writes out who reads else as a line that always runs. Neither word is not offered, since a program that writes out nothing has no answer to press.");
  ("Reading backwards, the wrong program is the same program with the name holding the opposite, which writes out the other word.");
  ("Every program names its value a or b, as in If and if not. Not picked: a condition such as n < 5, since a name holding true or false keeps the one new fact, else, the only thing to read.");
  ("The writing is a first draft by Claude 2026-10-08.");
  ("The second box says else says the same as if (a) beside if (!a) as long as nothing changes a in between, at the human's word 2026-10-08, matching the last box of If and if not. Without it the claim is false: if something changes a between the two ifs, both can run, while else asks once and never runs both. Not picked: showing that difference here, a second new fact, left for a lesson after this one.");
  ("The last box says exactly one of the two runs, every time, at the human's question 2026-10-08, with no condition attached, unlike If and if not: else asks once and the side chosen stays chosen. Weighed and found not to need a condition: an await inside a side, since a changing a then cannot reach the other side; a return, continue or break, which sit inside a side and so only stop it partway; an exception thrown inside a side, the same; and one thrown while checking a, which stops the whole program. Not picked: naming any of these here, none of them yet taught.");
  ("The explanation is shared with the Does this section run? before this lesson, at the human's asking 2026-10-11.");
  let fruits = fruits_of_the_spirit();
  function program_get(name, value, words) {
    let lines2 = app_code_if_else_program_lines(name, value, words);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs: a and b, each true once and false once, each with two different words";
    let cases = [
      ["a", true],
      ["b", true],
      ["a", false],
      ["b", false],
    ];
    function program_of(c) {
      let words2 = list_shuffle_take(fruits, 2);
      let item = list_get(c, 0);
      let item4 = list_get(c, 1);
      let code = program_get(item, item4, words2);
      return code;
    }
    let codes = list_map(cases, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other word, and both words";
    let found = app_code_if_either_decoys(question, answer);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with the name holding the opposite";
    let code4 = app_code_if_boolean_flipped(answer);
    let found2 = [code4];
    return found2;
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else",
    "if (a) { ... } else { ... }",
  );
  let lesson = app_code_lesson_code_logged({
    above: app_code_if_else_explain,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
