import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_while_lines } from "./js_code_while_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_thrice } from "./app_code_lesson_if_thrice.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while() {
  arguments_assert(arguments, 0);
  ("the first while: let n = 1; while (n < 9) { n += 3; } console.log(n); writes out 10, the same as if (n < 9) { n += 3; } written three times");
  ("The one new fact is that while asks again after its lines run, and keeps going until what it asks is false, so it does what the same if written over and over does, without the learner counting how many to write.");
  ("Asked for by the human 2026-10-09, as the lesson after The same if three times: the first box writes that program and this one side by side, so the two are seen to write out the same.");
  ("Each screen has four programs drawn from five counts of runs - none, one, two, three and four - so a screen always asks one that runs more often than three ifs could.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts, each once and never the answer, so stopping a run early or late is offered, and so is reading while as never running.");
  ("Reading backwards, the wrong program is the same program compared against one more than the answer, so it runs once more and writes out the answer plus what is added.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program, as in The same if twice.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(start, bound, added) {
    "let n = start; while (n < bound) { n += added; } console.log(n);";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let change = js_code_assign_operator_statement(name, plus, added);
    let while_lines = js_code_while_lines(condition, change);
    let statement = js_code_console_log_statement(name);
    let lines = list_concat_multiple([[code], while_lines, [statement]]);
    return lines;
  }
  function program_get(start, bound, added) {
    let lines2 = program_lines(start, bound, added);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, each running a different number of times, from none to four";
    let groups = [
      [
        [6, 4, 2],
        [9, 5, 3],
      ],
      [
        [3, 5, 4],
        [2, 4, 3],
      ],
      [
        [1, 6, 3],
        [2, 5, 2],
      ],
      [
        [1, 9, 3],
        [2, 7, 2],
      ],
      [
        [1, 8, 2],
        [2, 13, 3],
      ],
    ];
    let picked = list_shuffle_take(groups, 4);
    let triples = list_map(picked, list_random_item);
    function program_of(triple) {
      let item = list_get(triple, 0);
      let item2 = list_get(triple, 1);
      let item3 = list_get(triple, 2);
      let code2 = program_get(item, item2, item3);
      return code2;
    }
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "n after one run fewer, one run more, and where n starts, each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let added2 = list_get(numbers, 2);
    let ended = json_from(answer);
    let fewer = subtract(ended, added2);
    let more = ended + added2;
    let candidates = [fewer, more, start2];
    function possible(value) {
      let p = less_than_equal(start2, value);
      return p;
    }
    let kept = list_filter(candidates, possible);
    let texts = list_map(kept, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against one more than what it writes out, so it runs once more";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let added3 = list_get(numbers2, 2);
    let written = eval_console_log_lines(answer);
    let ended2 = json_from(written);
    let code4 = program_get(start3, ended2 + 1, added3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, value_after, runs) {
    "value < bound is true, so n becomes value_after; or is false, so the { ... } is skipped and the code continues after it";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    if (runs) {
      let after = json_to(value_after);
      html_div_cycle_code(root, [
        "",
        condition2,
        " is ",
        "true",
        ", so ",
        name,
        " becomes ",
        after,
      ]);
      return;
    }
    html_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
  }
  function above(root, context) {
    "the same if three times remembered, then while doing the same, and a while that never runs";
    let condition3 = js_code_binary_spaced_nb(name, less, 9);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_thrice, [
      "the same ",
      "if",
      " can be written three times:",
    ]);
    let code5 = js_code_let_statement(name, 1);
    let change2 = js_code_assign_operator_statement(name, plus, 3);
    let if_lines = js_code_if_lines(condition3, change2);
    let statement2 = js_code_console_log_statement(name);
    let thrice_lines = list_concat_multiple([
      [code5],
      if_lines,
      if_lines,
      if_lines,
      [statement2],
    ]);
    app_code_code_lines_writes_out(box_one, thrice_lines, "10");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "A ",
      "while",
      " does the same, and asks again each time:",
    ]);
    let while_lines2 = program_lines(1, 9, 3);
    app_code_code_lines_writes_out(box_two, while_lines2, "10");
    said(box_two, 1, 9, 4, true);
    said(box_two, 4, 9, 7, true);
    said(box_two, 7, 9, 10, true);
    said(box_two, 10, 9, 10, false);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "12",
      ":",
    ]);
    let never_lines = program_lines(12, 9, 3);
    app_code_code_lines_writes_out(box_three, never_lines, "12");
    let never = js_code_binary_spaced_nb(12, less, 9);
    html_div_cycle_code(box_three, [
      "",
      never,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "While",
    "while (n < 9) { ... }",
  );
  let lesson = app_code_lesson_code_logged({
    above,
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
