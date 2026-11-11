import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { equal } from "./equal.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_find } from "./list_find.mjs";
import { list_without } from "./list_without.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_index_generic(options) {
  arguments_assert(arguments, 1);
  ("an array of words given a name, then one of its items written out by its index: let a = ['love', 'joy', 'peace']; console.log(a[0]); writes out love. What differs between lessons is handed in here.");
  ("item_count is how many items each array holds, indexes the indexes a question may ask for, example the items and index of the example program, and above is handed the root, the context, the example drawer and the walk drawer.");
  ("The items are words, the fruits of the Spirit, all different, so an item can never be mistaken for an index: reading a[1] as the number 1 is a wrong answer of its own, not a right one reached the wrong way. Words rather than numbers, chosen by the human 2026-11-08: we give people names, not numbers.");
  ("Reading forwards, the wrong answers are the array's other items - which is also the answer of counting from 1 instead of 0 - and the index itself. Each is worked out by running the program with another index rather than reasoned out. Reading backwards, the wrong programs are the same array with another index.");
  ("A program's index is found by trying every index against it, not by reading its digits, so nothing here depends on how the line is spaced.");
  ("No stepping, 2026-11-06: the tracer that steps a program line by line cannot yet read an array, and threw on the example screen. Not picked: teaching the tracer arrays first, a larger change than these lessons; it is the way to give them stepping back.");
  ("2026-11-10, at the human's asking: the tracer now reads an array written out and a[i], so steps says whether a lesson has the step-by-step quiz, its example then guided step by step.");
  let steps = property_get(options, "steps");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let item_count = property_get(options, "item_count");
  let indexes = property_get(options, "indexes");
  let example_given = property_get(options, "example");
  let index_name = property_get(options, "index_name");
  ("index_name is null when the index is written as a number, a[2], or the name the index is given first, let i = 2; then a[i].");
  let index_steps = property_get(options, "index_steps");
  ("index_steps is how many times, after the named index is read, it is stepped up by one and read again: with 1, let i = 0; console.log(a[i]); i++; console.log(a[i]);. 0 without a named index.");
  let name = "a";
  ("each step reads the index after the one before, so the named index stops that many short of the end");
  let index_last = subtract(item_count, index_steps);
  let indexes_all = range(index_last);
  function step_kept() {
    return true;
  }
  let list = range(index_steps);
  let steps_all = list_map(list, step_kept);
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function index_line(index) {
    let all = index_line_steps(index, steps_all);
    return all;
  }
  function index_line_steps(index, steps_kept) {
    "steps_kept says, for each step, whether its i++ line is written - all of them in the program asked, some left out in a wrong answer";
    let json = json_to(index);
    if (equal(index_name, null)) {
      let read = js_code_index(name, json);
      let line2 = js_code_console_log_statement(read);
      return line2;
    }
    ("2026-11-10, at the human's asking: the index given a name first, let i = 2; then a[i] - the step before a loop, where i is what changes.");
    let named = js_code_let_statement(index_name, json);
    let read_named = js_code_index(name, index_name);
    let logged = js_code_console_log_statement(read_named);
    ("2026-11-10, at the human's asking: a[i], then i++, then a[i] again, and again - the items a loop's first turns would write out.");
    let lines4 = [named, logged];
    for (let kept of steps_kept) {
      if (kept) {
        lines4.push(index_name + "++;");
      }
      lines4.push(logged);
    }
    let stepped = list_join_newline(lines4);
    return stepped;
  }
  function steps_missed_all() {
    "every way of leaving out one or more of the i++ lines";
    let ways = [[]];
    for (let k = 0; less_than(k, index_steps); k++) {
      let longer = [];
      for (let way of ways) {
        let concated = list_concat(way, [false]);
        longer.push(concated);
        let concated2 = list_concat(way, [true]);
        longer.push(concated2);
      }
      ways = longer;
    }
    function missed_some(way2) {
      let some = list_includes(way2, false);
      return some;
    }
    let found3 = list_filter(ways, missed_some);
    return found3;
  }
  function program_head(head, index2) {
    let v = index_line(index2);
    let lines = [head, v];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2, index3) {
    let head2 = head_line(items2);
    let code2 = program_head(head2, index3);
    return code2;
  }
  function batch_get() {
    "four programs, each a fresh array and an index from the ones this lesson asks";
    let numbers = fruits_of_the_spirit();
    let codes2 = [];
    for (let i = 0; less_than(i, 4); i++) {
      let items3 = list_shuffle_take(numbers, item_count);
      let index4 = list_random_item(indexes);
      let v2 = program_of(items3, index4);
      codes2.push(v2);
    }
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function others(code3) {
    "the index the program asks for, and the same program with each other index";
    let lines2 = text_split_newline(code3);
    let head3 = list_first(lines2);
    function is_it(index5) {
      let left = program_head(head3, index5);
      let same = equal(left, code3);
      return same;
    }
    let index6 = list_find(indexes_all, is_it);
    let rest = list_without(indexes_all, index6);
    function program_other(index7) {
      let code4 = program_head(head3, index7);
      return code4;
    }
    let programs = list_map(rest, program_other);
    let found = {
      index: index6,
      programs,
    };
    return found;
  }
  function decoys(question, answer) {
    "the array's other items, and the index itself; each once, never the answer";
    let got = others(question);
    let programs2 = property_get(got, "programs");
    let index8 = property_get(got, "index");
    let outs = list_map(programs2, eval_console_log_lines);
    let json2 = json_to(index8);
    let extra = [json2];
    if (greater_than(index_steps, 0)) {
      ("stepping, the index alone is no longer a likely guess; what the program writes out with an i++ missed is, each way of missing one or more of them");
      let missed = programs_missed(question, index8);
      extra = list_map(missed, eval_console_log_lines);
    }
    let candidates = list_concat(outs, extra);
    let found2 = list_without(candidates, answer);
    let once = list_unique(found2);
    return once;
  }
  function programs_missed(code8, index14) {
    "the same program with one or more of its i++ lines left out, each way of leaving them out";
    let lines5 = text_split_newline(code8);
    let head4 = list_first(lines5);
    function missed_program(way3) {
      let v3 = index_line_steps(index14, way3);
      let code7 = list_join_newline([head4, v3]);
      return code7;
    }
    let list2 = steps_missed_all();
    let programs4 = list_map(list2, missed_program);
    return programs4;
  }
  function backwards_decoys(question, answer) {
    "the same array with each other index, and, stepping, the same program with an i++ left out";
    let got2 = others(answer);
    let programs3 = property_get(got2, "programs");
    let index15 = property_get(got2, "index");
    let missed2 = programs_missed(answer, index15);
    let all2 = list_concat(programs3, missed2);
    return all2;
  }
  let example_items = property_get(example_given, "items");
  let example_index = property_get(example_given, "index");
  function example(root) {
    "the example program and what it writes out";
    let code5 = program_of(example_items, example_index);
    let lines3 = text_split_newline(code5);
    let out = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines3, out);
  }
  function walk(root) {
    "the example's items counted from 0 up to its index, then the one written out";
    let code6 = program_of(example_items, example_index);
    let value = eval_console_log_lines(code6);
    if (greater_than(index_steps, 0)) {
      ("stepping: each read of a[i] worked out with what i holds then, each i++ between, then the items written out in order");
      let read_named3 = js_code_index(name, index_name);
      function reading(index13) {
        let index_json2 = json_to(index13);
        let object2 = list_get(example_items, index13);
        let item2 = json_to(object2);
        let written2 = js_code_index(name, index_json2);
        let parts3 = [
          "",
          index_name,
          " is ",
          index_json2,
          ", so ",
          read_named3,
          " is ",
          written2,
          ", which is ",
          item2,
        ];
        app_learn_js_div_cycle_code(root, parts3);
      }
      reading(example_index);
      for (let step = 1; less_than_equal(step, index_steps); step++) {
        let index_after = example_index + step;
        let json3 = json_to(index_after);
        app_learn_js_div_cycle_code(root, [
          "",
          index_name + "++",
          " adds ",
          "1",
          " to ",
          index_name,
          ", so ",
          index_name,
          " is ",
          json3,
        ]);
        reading(index_after);
      }
      let outs2 = text_split_newline(value);
      let said = ["So "];
      for (let out3 of outs2) {
        if (greater_than(said.length, 1)) {
          said.push(" then ");
        }
        said.push(out3);
      }
      said.push(" are written out");
      app_learn_js_div_cycle_output(root, said);
      return;
    }
    if (not_equal(index_name, null)) {
      let index_json = json_to(example_index);
      let read_named2 = js_code_index(name, index_name);
      let read_number = js_code_index(name, index_json);
      app_learn_js_div_cycle_code(root, ["", index_name, " is ", index_json]);
      app_learn_js_div_cycle_code(root, [
        "So ",
        read_named2,
        " is ",
        read_number,
      ]);
    }
    function counted(index10) {
      let object = list_get(example_items, index10);
      let item = json_to(object);
      let index9 = json_to(index10);
      let written = js_code_index(name, index9);
      let parts = ["", written, " is ", item];
      return parts;
    }
    function lambda(index11) {
      let le = less_than_equal(index11, example_index);
      return le;
    }
    let shown = list_filter(indexes_all, lambda);
    for (let index12 of shown) {
      let parts2 = counted(index12);
      app_learn_js_div_cycle_code(root, parts2);
    }
    app_learn_js_div_cycle_output(root, ["So ", value, " is written out"]);
  }
  function above(root, context) {
    above_inner(root, context, example, walk);
  }
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
