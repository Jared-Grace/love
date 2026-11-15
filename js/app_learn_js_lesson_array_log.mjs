import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_first } from "./list_first.mjs";
import { text_is } from "./text_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_first } from "./app_learn_js_lesson_array_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_log() {
  arguments_assert(arguments, 0);
  ('writing out a whole array: let a = ["love", "joy"]; console.log(a); writes out ["love", "joy"]');
  ("2026-11-15, after Keeping the words with e and before the objects: until now a lesson showed an array by a loop writing out each item, or by its length. This lesson teaches only how a whole array looks written out - brackets, commas, and quotes around words but not numbers - so later lessons can write out an array in one line.");
  ("How it looks is ",
    fn_name("js_value_console_text"),
    "'s choice, the way a learner would type the same array; its notes say which consoles' forms were not picked.");
  ("A set is four questions: two arrays of words and two of numbers, of two or three items, shuffled - the numbers are there so a learner sees the quotes belong to words, not to arrays.");
  ("Reading forwards, the wrong answers are the items joined with commas and no brackets (what String writes), the first item alone, and the brackets with the quotes moved: words without them, numbers with them. Reading backwards, the wrong programs write out a[0] and a.length; each kept only when it writes out something else.");
  ("No stepping: the whole program is one line that makes the array and one that writes it out, and there is nothing to step through that the earlier array lessons have not stepped.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let words = ["love", "joy", "peace", "hope", "kindness", "grace"];
  let numbers = [1, 2, 3, 4, 5, 7, 12];
  let example_items = ["love", "joy", "peace"];
  function program_of(items) {
    let codes2 = list_map(items, json_to);
    let right = js_code_array(codes2);
    let code2 = js_code_let_statement("a", right);
    let statement = js_code_console_log_statement("a");
    let code = list_join_newline([code2, statement]);
    return code;
  }
  function draw(pool, size) {
    let shuffled = pool.slice();
    list_shuffle(shuffled);
    let items = list_take(shuffled, size);
    return items;
  }
  function batch_get() {
    "two arrays of words and two of numbers, sizes two and three, shuffled";
    let v = draw(words, 2);
    let v2 = program_of(v);
    let v3 = draw(words, 3);
    let v4 = program_of(v3);
    let v5 = draw(numbers, 2);
    let v6 = program_of(v5);
    let v7 = draw(numbers, 3);
    let v8 = program_of(v7);
    let codes = [v2, v4, v6, v8];
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code) {
    "the array the program writes out";
    let logs = eval_console_log_to_list(code);
    let list = list_first(logs);
    let items = list_first(list);
    return items;
  }
  function quotes_swapped(item) {
    let object = String(item);
    let t = text_is(item) ? item : json_to(object);
    return t;
  }
  function decoys(question, answer) {
    "joined with commas and no brackets, the first item alone, and the quotes moved; never the answer";
    let items = items_of(question);
    let list2 = list_map(items, String);
    let result = list_join_comma(list2);
    let first = list_first(items);
    let v9 = String(first);
    let list3 = list_map(items, quotes_swapped);
    let candidates = [result, v9, "[" + list_join_comma_space(list3) + "]"];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array writing out a[0], and writing out a.length; kept only when they write out something else";
    let list4 = text_split_newline(answer);
    let head = list_first(list4);
    let statement2 = js_code_console_log_statement("a[0]");
    let joined = list_join_newline([head, statement2]);
    let statement3 = js_code_console_log_statement("a.length");
    let joined2 = list_join_newline([head, statement3]);
    let programs = [joined, joined2];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let left = eval_console_log_lines(code);
      let ne = not_equal(left, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "the first item remembered, then the whole array written out";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_first,
      ["", "console.log(a[0]);", " writes out the first item of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "console.log(a);",
      " writes out the whole array:",
    ]);
    let code = program_of(example_items);
    let lines2 = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "It is written the way it was made: inside ",
      "[]",
      ", with a ",
      ",",
      " between the items, and each word inside ",
      '""',
    ]);
    let numbers_code = program_of([1, 2, 3]);
    let lines3 = text_split_newline(numbers_code);
    let value2 = eval_console_log_lines(numbers_code);
    app_learn_js_code_lines_writes_out(box_two, lines3, value2);
    app_learn_js_div_cycle_code(box_two, [
      "Numbers are not words, so they are written without ",
      '""',
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Writing out a whole array",
    "console.log(a);",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
