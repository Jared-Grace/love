import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_total } from "./app_code_lesson_while_total.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_product() {
  arguments_assert(arguments, 0);
  ("a while multiplying up a product: let product = 1; let n = 2; while (n < 5) { product *= n; n += 1; } console.log(product); writes out 24, which is 2 * 3 * 4");
  ("The one new fact is that a running product starts at 1, not 0, since 0 times anything is 0; otherwise it is A running total with *= in place of +=.");
  ("Asked for by the human 2026-11-01, straight after A running total of squares.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three. A program that never runs writes out 1, where n is never multiplied in.");
  ("Reading forwards, the wrong answers are the total of n rather than the product, which for a program that never runs is 0; the product one run fewer; and n where it ends, the name not written out. Each once, never the answer.");
  ("Reading backwards, the wrong program is the same program compared against one more, so it runs once more; or, when it already runs as often as a while lesson allows, against one less, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let name = "n";
  let product_name = "product";
  function program_lines(start, bound) {
    "let product = 1; let n = start; while (n < bound) { product *= n; n += 1; } console.log(product);";
    let product_let = js_code_let_statement(product_name, 1);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let multiplied = js_code_assign_operator_statement(
      product_name,
      times,
      name,
    );
    let counted = js_code_assign_operator_statement(name, plus, 1);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      multiplied,
      counted,
    ]);
    let statement = js_code_console_log_statement(product_name);
    let lines = list_concat_multiple([
      [product_let, n_let],
      while_lines,
      [statement],
    ]);
    return lines;
  }
  function program_get(start, bound) {
    let lines2 = program_lines(start, bound);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, each from a different group, so each runs a different number of times";
    let groups = [
      [
        [5, 3],
        [4, 2],
      ],
      [
        [3, 4],
        [5, 6],
      ],
      [
        [2, 4],
        [3, 5],
      ],
      [
        [2, 5],
        [1, 4],
      ],
    ];
    let pairs = list_shuffle_take_map(groups, 4, list_random_item);
    function program_of(pair) {
      let start = list_get(pair, 0);
      let bound = list_get(pair, 1);
      let code = program_get(start, bound);
      return code;
    }
    let codes = list_map(pairs, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the total of n rather than the product, the product one run fewer, and n where it ends; each once, never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let product = json_from(answer);
    let total = 0;
    let n = start2;
    while (less_than(n, bound2)) {
      total = add(total, n);
      n = add(n, 1);
    }
    let candidates = [total, n];
    if (less_than(start2, bound2)) {
      let last = subtract(n, 1);
      let fewer = divide(product, last);
      candidates = [total, fewer, n];
    }
    let texts = list_map(candidates, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against one more, so it runs once more; or, when it already runs as often as a while lesson allows, against one less, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 1);
    let bound3 = list_get(numbers2, 2);
    let ended = start3;
    if (less_than(start3, bound3)) {
      ended = bound3;
    }
    let bound_other = add(ended, 1);
    let runs = subtract(ended, start3);
    let a = app_code_while_runs_max();
    if (less_than_equal(a, runs)) {
      bound_other = subtract(ended, 1);
    }
    let code4 = program_get(start3, bound_other);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, product_after) {
    "value < bound is true, so product becomes product_after, and n becomes value + 1";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let after = json_to(product_after);
    let object = add(value, 1);
    let n_after = json_to(object);
    app_code_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      product_name,
      " becomes ",
      after,
      ", and ",
      name,
      " becomes ",
      n_after,
    ]);
  }
  function above(root, context) {
    "the running total remembered, then a product multiplying 2 * 3 * 4, starting at 1";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_total,
      [
        "",
        "total += n;",
        " adds each ",
        name,
        " to ",
        "total",
        ", which starts at 0.",
      ],
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "",
      "product *= n;",
      " multiplies instead. It starts at 1, not 0, because 0 times anything is 0. Here ",
      name,
      " counts 2, 3, 4:",
    ]);
    let lines3 = program_lines(2, 5);
    app_code_code_lines_writes_out(box_two, lines3, "24");
    said(box_two, 2, 5, 2);
    said(box_two, 3, 5, 6);
    said(box_two, 4, 5, 24);
    let last2 = js_code_binary_spaced_nb(5, less, 5);
    app_code_div_cycle_code(box_two, [
      "",
      last2,
      " is ",
      "false",
      ", so the ",
      app_code_braces_dots(),
      " is skipped, and the code continues after it",
    ]);
    let left = js_code_binary_spaced_nb(2, times, 3);
    let product_shown = js_code_binary_spaced_nb(left, times, 4);
    app_code_div_cycle_code(box_two, [
      "So ",
      product_name,
      " is ",
      product_shown,
      ", which is 24",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A running product",
    "product *= n;",
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
