import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_size } from "./list_size.mjs";
import { list_last } from "./list_last.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { each } from "./each.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_update_log_generic(options) {
  arguments_assert(arguments, 1);
  ("a while that writes out n and then changes it by one: let n = 1; while (n < 4) { console.log(n); n++; } writes out 1, 2 and 3; the adding and the taking away differ only in what is handed in here");
  ("Asked for by the human 2026-11-02: n++ and n-- come into a while here, before Two numbers meeting, and not in the first while. Changing by one, n always stops exactly on the number it is compared with, so a program that wrote out only the last n could be answered by copying that number; written out on every run, each line has to be followed. Weighed: writing out only the last n, as While does, for that reason not picked.");
  ("Each screen has one program from each of three counts of runs - one, two and three. None is left out, because a program that writes out nothing would show an empty answer.");
  ("Reading forwards, the wrong answers are the lines one run fewer, one run more, and every line written after n has changed rather than before; each once and never the answer.");
  ("Reading backwards, the wrong program is compared against a number one further on, so it runs once more; or, for a program already running as often as a while lesson allows, one nearer, so it runs once fewer.");
  let bound = property_get(options, "bound");
  let start = property_get(options, "start");
  let intro_parts = property_get(options, "intro_parts");
  let remembered_parts = property_get(options, "remembered_parts");
  let remembered = property_get(options, "remembered");
  let groups = property_get(options, "groups");
  let step_back = property_get(options, "step_back");
  let step = property_get(options, "step");
  let change = property_get(options, "change");
  let asks = property_get(options, "asks");
  let comparison = property_get(options, "comparison");
  let name_id = property_get(options, "name_id");
  let name = "n";
  function program_lines(start_value, bound_value) {
    "let n = start_value; while (n < bound_value) { console.log(n); n++; }";
    let code = js_code_let_statement(name, start_value);
    let condition = js_code_binary_spaced_nb(name, comparison, bound_value);
    let logged = js_code_console_log_statement(name);
    let changed = js_code_update_statement(name, change);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function program_get(start_value, bound_value) {
    let lines2 = program_lines(start_value, bound_value);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function moved(value) {
    let after = step(value, 1);
    return after;
  }
  function values_of(start_value, bound_value) {
    "every value n holds when the while asks and the answer is true";
    let values = [];
    let value = start_value;
    while (asks(value, bound_value)) {
      list_add(values, value);
      value = moved(value);
    }
    return values;
  }
  function written(values) {
    let texts = list_map(values, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let pairs = list_shuffle_take_map(groups, 3, list_random_item);
    function program_of(pair) {
      let item = list_get(pair, 0);
      let item2 = list_get(pair, 1);
      let code2 = program_get(item, item2);
      return code2;
    }
    let codes = list_map(pairs, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the lines one run fewer, one run more, and every line written after n has changed; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let values2 = values_of(start2, bound2);
    let size = list_size(values2);
    let last = list_last(values2);
    let ended = moved(last);
    let more = list_concat(values2, [ended]);
    let shifted = list_map(values2, moved);
    let candidates = [more, shifted];
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer = list_take(values2, count);
      candidates = [fewer, more, shifted];
    }
    let texts = list_map(candidates, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let values3 = values_of(start3, bound3);
    let left = list_size(values3);
    let bound4 = step(bound3, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      bound4 = step_back(bound3, 1);
    }
    let code4 = program_get(start3, bound4);
    let found2 = [code4];
    return found2;
  }
  function said(root, value) {
    "value < bound is true, so it writes out value, and n becomes the next value";
    let condition2 = js_code_binary_spaced_nb(value, comparison, bound);
    let json = json_to(value);
    let after2 = moved(value);
    let json2 = json_to(after2);
    app_code_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      json,
      ", and ",
      name,
      " becomes ",
      json2,
    ]);
  }
  function above(root, context) {
    "the lesson on changing by one remembered, then a while doing it, writing out each run";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      remembered,
      remembered_parts,
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, intro_parts);
    let lines3 = program_lines(start, bound);
    let values4 = values_of(start, bound);
    let value2 = written(values4);
    app_code_code_lines_writes_out(box_two, lines3, value2);
    function said_on(value3) {
      said(box_two, value3);
    }
    each(values4, said_on);
    let last2 = list_last(values4);
    let ended2 = moved(last2);
    let condition3 = js_code_binary_spaced_nb(ended2, comparison, bound);
    app_code_div_cycle_code(box_two, [
      "",
      condition3,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
  }
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
