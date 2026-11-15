import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { not_equal } from "./not_equal.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from } from "./json_from.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_includes_e } from "./app_learn_js_lesson_array_for_includes_e.mjs";
import { app_learn_js_lesson_array_copy } from "./app_learn_js_lesson_array_copy.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_push_if_e() {
  arguments_assert(arguments, 0);
  ('building a new array: let a = ["love", "joy", "peace", "kind"]; let b = []; for (let i = 0; i < a.length; i++) { if (a[i].includes("e")) { b.push(a[i]); } } and a for loop writing out each item of b writes out love and peace');
  ("2026-11-15, at the human's asking (item 3 of the CS 1 plan, before objects): nothing in it is new. Which have e? put .includes in the if, and Copying an array pushed a[i] into an empty b; here the push sits inside the if, so b holds only the words with e, in a's order. The end is a for loop writing out each item of b, the human's choice 2026-11-15 over writing out b.length (the same answer as How many have e?) and over console.log(b), which no lesson teaches yet.");
  ("Names a and b, as Copying an array names them: a always the array read, b always the one built. Not found, which For a word found already uses for a true or false value.");
  ("A set is six questions, arrays of four and five words three times each, shuffled, from How many have e?'s pool. Every array holds at least one word with e and at least one without, so b is never empty and never the whole of a - a b holding every word could be answered as a copy, ignoring the if.");
  ("Reading forwards, the wrong answers are every word (the push outside the if), the words without e (the ! of the if), and b missing its last word. Reading backwards, the wrong programs push with no if, push when the word has no e, and push i rather than a[i]. The forwards questions overlap with Which have e?, which writes out the same words, so the backwards questions carry most of the new idea - accepted 2026-11-15 by the human.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let sizes = [4, 4, 4, 5, 5, 5];
  let with_e = ["love", "peace", "hope", "mercy", "grace"];
  let without_e = ["joy", "kind", "good", "faith"];
  let example_items = ["love", "joy", "peace", "kind"];
  let condition = 'a[i].includes("e")';
  function program_with(items, asked, pushed) {
    "the program, its if asking asked (or no if when asked is null) and pushing pushed";
    let codes = list_map(items, json_to);
    let right = js_code_array(codes);
    let head = js_code_let_statement("a", right);
    let empty = js_code_let_statement("b", "[]");
    let push_line = js_code_called("b.push", pushed) + ";";
    let inside = [push_line];
    if (not_equal(asked, null)) {
      inside = js_code_if_lines(asked, push_line);
    }
    let statements = list_concat(inside, ["i++;"]);
    let build_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      statements,
    );
    let log_line = js_code_console_log_statement("b[i]");
    let log_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < b.length",
      [log_line, "i++;"],
    );
    let lines = list_concat_multiple([[head, empty], build_lines, log_lines]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items) {
    let code = program_with(items, condition, "a[i]");
    return code;
  }
  function items_draw(size) {
    "size words, at least one with e and at least one without, shuffled";
    let counts = [];
    for (let k = 1; less_than(k, size); k++) {
      counts.push(k);
    }
    let count_e = list_random_item(counts);
    let picked_e = list_shuffle_take(with_e, count_e);
    let count = subtract(size, count_e);
    let picked_not = list_shuffle_take(without_e, count);
    let items = list_concat(picked_e, picked_not);
    list_shuffle(items);
    return items;
  }
  function batch_get() {
    "six programs, arrays of four and five words three times each, shuffled";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let item = list_get(sizes, k);
      let items = items_draw(item);
      let v2 = program_of(items);
      codes.push(v2);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code) {
    "a's words, read off the first line";
    let list = text_split_newline(code);
    let head = list_first(list);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items = json_from(after);
    return items;
  }
  function has_e(word) {
    let found = text_includes(word, "e");
    return found;
  }
  function lacks_e(word) {
    let b = has_e(word);
    let missing = not(b);
    return missing;
  }
  function decoys(question, answer) {
    "every word, the words without e, and b missing its last word; each once, never the answer";
    let items = items_of(question);
    let every = list_join_newline(items);
    let list2 = list_filter(items, lacks_e);
    let others = list_join_newline(list2);
    let kept = list_filter(items, has_e);
    let list3 = list_take_less_1(kept);
    let early = list_join_newline(list3);
    let candidates = [every, others, early];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "pushing with no if, pushing when the word has no e, and pushing i rather than a[i]; kept only when they write out something else";
    let items = items_of(answer);
    let v3 = program_with(items, null, "a[i]");
    let v4 = program_with(items, "!" + condition, "a[i]");
    let v5 = program_with(items, condition, "i");
    let programs = [v3, v4, v5];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let out = eval_console_log_lines(code);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "Which have e? remembered, Copying an array remembered, then pushing only inside the if";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_includes_e,
      [
        "",
        'if (a[i].includes("e"))',
        " runs its lines only for the words with ",
        '"e"',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_copy,
      [
        "",
        "b.push(a[i]);",
        " in a loop puts every word of ",
        "a",
        " into ",
        "b",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put the push inside the ",
      "if",
      ", and ",
      "b",
      " gets only the words with ",
      '"e"',
      ":",
    ]);
    let code = program_of(example_items);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      '"love"',
      " and ",
      '"peace"',
      " have ",
      '"e"',
      ", so they are pushed. ",
      '"joy"',
      " and ",
      '"kind"',
      " do not, so they are skipped",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "love",
      ", then ",
      "peace",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Keeping the words with e",
    "b.push(a[i]);",
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
