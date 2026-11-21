import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from } from "./json_from.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_shift_value } from "./app_learn_js_lesson_array_shift_value.mjs";
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_shift_push() {
  arguments_assert(arguments, 0);
  ('moving the first item to the end: let a = ["love", "joy", "peace"]; let first = a.shift(); a.push(first); console.log(a); writes out ["joy", "peace", "love"]');
  ("2026-11-22, at the human's asking: right after Writing out a whole array, since the answer is the whole array. It puts together two lessons already taught - what shift gives back (369) and push (361) - and adds nothing new.");
  ("A set is four questions, arrays of three and four items twice each, shuffled.");
  ("Every wrong answer is what a wrong program writes out, so a wrong answer is always written the way the console writes an array. Reading forwards and backwards, the wrong programs are: the push left out (the first item is lost), pop and unshift in place of shift and push (the last item moves to the front), and nothing moved at all. Each is kept only when it writes out something else.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_items = ["love", "joy", "peace"];
  let sizes = [3, 3, 4, 4];
  function program_from(items, middle) {
    "let a = [...]; then the middle lines; then console.log(a);";
    let codes = list_map(items, json_to);
    let right = js_code_array(codes);
    let head = js_code_let_statement("a", right);
    let log_line = js_code_console_log_statement("a");
    let before = list_concat([head], middle);
    let lines = list_concat(before, [log_line]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_from(items2, [
      "let first = a.shift();",
      "a.push(first);",
    ]);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_from(items3, ["let first = a.shift();"]);
    let v2 = program_from(items3, ["let last = a.pop();", "a.unshift(last);"]);
    let v3 = program_from(items3, []);
    let programs = [v, v2, v3];
    return programs;
  }
  function program_sized(size) {
    "a program over that many fruits of the Spirit, shuffled";
    let shuffled = fruits_of_the_spirit().slice();
    list_shuffle(shuffled);
    let items4 = list_take(shuffled, size);
    let code3 = program_of(items4);
    return code3;
  }
  function batch_get() {
    "arrays of three and four items twice each, shuffled";
    let codes2 = list_map(sizes, program_sized);
    list_shuffle(codes2);
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code4) {
    "the array's items, read off the first line";
    let list = text_split_newline(code4);
    let head2 = list_first(list);
    let v4 = head2.lastIndexOf(";");
    let after = head2.slice(head2.indexOf("=") + 1, v4);
    let items5 = json_from(after);
    return items5;
  }
  function wrong_kept(code5) {
    "the wrong programs for the same array, each kept only when it writes out something else";
    let v5 = items_of(code5);
    let programs2 = wrong_programs_of(v5);
    let out = eval_console_log_lines(code5);
    function differs(program) {
      let left = eval_console_log_lines(program);
      let ne = not_equal(left, out);
      return ne;
    }
    let kept = list_filter(programs2, differs);
    return kept;
  }
  function decoys(question, answer) {
    "what each wrong program writes out; never the answer";
    let list2 = wrong_kept(question);
    let outputs = list_map(list2, eval_console_log_lines);
    let once = list_unique(outputs);
    return once;
  }
  function backwards_decoys(question2, answer2) {
    "the wrong programs for the answer's array";
    let kept2 = wrong_kept(answer2);
    return kept2;
  }
  function above(root, context) {
    "shift and push remembered, then the first item moved to the end";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_shift_value,
      ["", "a.shift()", " removes the first item and gives it back"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_push,
      ["", "a.push()", " adds an item to the end of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want to move the first item of ",
      "a",
      " to the end",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "First ",
      "a.shift()",
      " takes it off the front, and we keep it in ",
      "first",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Then ",
      "a.push(first)",
      " puts it on the end:",
    ]);
    let code6 = program_of(example_items);
    let lines2 = text_split_newline(code6);
    let value = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "First to the end",
    "a.push(first);",
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
