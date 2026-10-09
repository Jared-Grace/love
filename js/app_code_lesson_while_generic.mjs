import { property_get } from "./property_get.mjs";
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
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_generic(params) {
  "A lesson about one while: let n = start; while (n comparison bound) { n change= amount; } console.log(n); asked forwards and backwards, its screens drawn from groups of programs, one group for each number of runs.";
  "What differs between lessons is the comparison, the change, the groups, how one run moves n and how it is undone, which values a wrong answer may take, the bound that makes the program run once more, and what is shown above; everything else is the same, so it is written here once.";
  let name_id = property_get(params, "name_id");
  let comparison = property_get(params, "comparison");
  let change = property_get(params, "change");
  let groups = property_get(params, "groups");
  let step = property_get(params, "step");
  let step_back = property_get(params, "step_back");
  let possible = property_get(params, "possible");
  let bound_past = property_get(params, "bound_past");
  let above_inner = property_get(params, "above");
  let name = "n";
  function program_lines(start, bound, amount) {
    "let n = start; while (n comparison bound) { n change= amount; } console.log(n);";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, comparison, bound);
    let changed = js_code_assign_operator_statement(name, change, amount);
    let while_lines = js_code_while_lines(condition, changed);
    let statement = js_code_console_log_statement(name);
    let lines = list_concat_multiple([[code], while_lines, [statement]]);
    return lines;
  }
  function program_get(start, bound, amount) {
    let lines2 = program_lines(start, bound, amount);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, each from a different group, so each runs a different number of times";
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
    let amount2 = list_get(numbers, 2);
    let ended = json_from(answer);
    let fewer = step_back(ended, amount2);
    let more = step(ended, amount2);
    let candidates = [fewer, more, start2];
    function possible_here(value) {
      let p = possible(start2, value);
      return p;
    }
    let kept = list_filter(candidates, possible_here);
    let texts = list_map(kept, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a bound just past what it writes out, so it runs once more";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let amount3 = list_get(numbers2, 2);
    let written = eval_console_log_lines(answer);
    let ended2 = json_from(written);
    let v = bound_past(ended2);
    let code4 = program_get(start3, v, amount3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, value_after, runs) {
    "value comparison bound is true, so n becomes value_after; or is false, so the { ... } is skipped and the code continues after it";
    let condition2 = js_code_binary_spaced_nb(value, comparison, bound);
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
    above_inner(root, context, program_lines, said);
  }
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
