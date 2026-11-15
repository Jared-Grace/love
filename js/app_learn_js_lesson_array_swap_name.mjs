import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { fruits_of_the_spirit_short } from "./fruits_of_the_spirit_short.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_swap } from "./app_learn_js_lesson_array_swap.mjs";
import { app_learn_js_lesson_array_index_next } from "./app_learn_js_lesson_array_index_next.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_swap_name() {
  arguments_assert(arguments, 0);
  ('swapping at a name: let a = ["love", "joy", "peace"]; let i = 1; let temp = a[i]; a[i] = a[i + 1]; a[i + 1] = temp; console.log(a[i]); console.log(a[i + 1]); writes out peace and joy');
  ("2026-11-16, at the human's asking, between Swapping two items and Swapping every pair: the swap of Swapping two items, a[0] and a[1], done at the index a name holds and the one after it, with no loop. The one new fact is that the pair is a[i] and a[i + 1], so the loop lesson after it then adds only the loop. The same order the lessons on setting an item keep: an index written out, then an index held by a name, then a loop.");
  ("A set is six questions, arrays of three and four items three times each, drawn from the fruits of the Spirit, shuffled; i is any index but the last. Writing out a[i] and then a[i + 1] shows the two items swapped.");
  ("Reading forwards, the wrong answers are the two items as they were, and either item written twice, as leaving out temp writes it. Reading backwards, the wrong programs leave out temp, and set i one lower or one higher; each is kept only if it writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let example_items = ["love", "joy", "peace"];
  let swap_body = ["let temp = a[i];", "a[i] = a[i + 1];", "a[i + 1] = temp;"];
  let no_temp_body = ["a[i] = a[i + 1];", "a[i + 1] = a[i];"];
  function program_with(items, index, body) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let named = js_code_let_statement("i", index);
    let log_one = js_code_console_log_statement("a[i]");
    let log_two = js_code_console_log_statement("a[i + 1]");
    let b = list_concat(body, [log_one, log_two]);
    let lines = list_concat([head, named], b);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three and four items three times each, shuffled, each swapping the item at i with the one after it";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let list = fruits_of_the_spirit_short();
      let items = list_shuffle_take(list, count);
      let max = subtract(count, 2);
      let index = integer_random(0, max);
      let code = program_with(items, index, swap_body);
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code) {
    "the array's items, read off the first line";
    let list2 = text_split_newline(code);
    let head = list_first(list2);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function index_of(code) {
    "the index i holds, read off the second line";
    let list3 = text_split_newline(code);
    let line = list_get(list3, 1);
    let v4 = line.lastIndexOf(";");
    let after2 = line.slice(line.indexOf("=") + 1, v4);
    let index2 = json_from(after2);
    return index2;
  }
  function decoys(question, answer) {
    "the two items as they were, and either item written twice; each once, never the answer";
    let items3 = items_of(question);
    let index3 = index_of(question);
    let here = list_get(items3, index3);
    let next = list_get(items3, index3 + 1);
    let unchanged = list_join_newline([here, next]);
    let next_twice = list_join_newline([next, next]);
    let here_twice = list_join_newline([here, here]);
    let candidates = [unchanged, next_twice, here_twice];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "leaving out temp, and i one lower or one higher";
    let items4 = items_of(answer);
    let index4 = index_of(answer);
    let v2 = program_with(items4, index4, no_temp_body);
    let programs = [v2];
    if (less_than(0, index4)) {
      let difference = subtract(index4, 1);
      let v3 = program_with(items4, difference, swap_body);
      programs.push(v3);
    }
    let b2 = list_size(items4);
    if (less_than(index4 + 2, b2)) {
      let v5 = program_with(items4, index4 + 1, swap_body);
      programs.push(v5);
    }
    let out_answer = eval_console_log_lines(answer);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "swapping two items and the next item remembered, then swapping at a name";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_swap,
      [
        "",
        "let temp = a[0]; a[0] = a[1]; a[1] = temp;",
        " swaps ",
        "a[0]",
        " and ",
        "a[1]",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_index_next,
      ["", "a[i + 1]", " is the item after ", "a[i]"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The same swap works at ",
      "a[i]",
      " and ",
      "a[i + 1]",
      ":",
    ]);
    let code2 = program_with(example_items, 1, swap_body);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "i",
      " is ",
      "1",
      ", so ",
      "a[1]",
      " and ",
      "a[2]",
      " are swapped, and ",
      "a",
      " becomes ",
      '["love", "peace", "joy"]',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "peace",
      ", then ",
      "joy",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Swapping at a name",
    "let temp = a[i];",
  );
  let lesson = app_learn_js_lesson_code_logged({
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
