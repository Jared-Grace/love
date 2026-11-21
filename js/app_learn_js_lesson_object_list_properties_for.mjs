import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_properties_add } from "./app_learn_js_lesson_object_properties_add.mjs";
import { app_learn_js_lesson_object_count_words_for } from "./app_learn_js_lesson_object_count_words_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_list_properties_for() {
  arguments_assert(arguments, 0);
  ("setting properties in a loop: let items = [{}, {}, {}]; a for loop setting items[i].n = i + 1; and items[i].double = items[i].n * 2; then console.log(items[2]); writes out { n: 3, double: 6 }");
  ("2026-11-16, at the human's asking - list of empty objects, use for to initialize properties (n:3, double:6): items[i] is one object of the list, so items[i].n sets a property on that object, the same as counts.joy = 4 did.");
  ("A set is four questions: two to four empty objects, and one of them written out, each pair of those different, shuffled. One object is written out rather than the whole list, to keep the answer short.");
  ("Reading forwards, the wrong answers are n as i with no + 1, the next object's properties, and an empty object as if the loop set nothing. Reading backwards, the wrong programs set n to i, set double to i * 2, and add 2 in place of times 2; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let pairs = [
    [2, 0],
    [2, 1],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
  ];
  function empties_of(size) {
    let list = [];
    for (let j = 0; less_than(j, size); j++) {
      list.push("{}");
    }
    let text = "[" + list.join(", ") + "]";
    return text;
  }
  function program_with(size, n_line, double_line, k) {
    let lines = [
      "let items = " + empties_of(size) + ";",
      "for (let i = 0; i < items.length; i++) {",
      "  " + n_line,
      "  " + double_line,
      "}",
      "console.log(items[" + k + "]);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(size, k) {
    let code = program_with(
      size,
      "items[i].n = i + 1;",
      "items[i].double = items[i].n * 2;",
      k,
    );
    return code;
  }
  function batch_get() {
    "four programs, each its own size and object written out, shuffled";
    let drawn = list_shuffle_take(pairs, 4);
    let codes = [];
    for (let pair of drawn) {
      let v = program_of(pair[0], pair[1]);
      codes.push(v);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function parts_of(code) {
    "how many objects, read off the first line, and which is written out, read off the last";
    let lines = text_split_newline(code);
    let size = subtract(lines[0].split("{}").length, 1);
    let found = lines[subtract(lines.length, 1)].match(/items\[(\d+)\]/);
    let parts = {
      size,
      k: Number(found[1]),
    };
    return parts;
  }
  function object_text(n, double) {
    let text = "{ n: " + n + ", double: " + double + " }";
    return text;
  }
  function decoys(question, answer) {
    "n as i, the next object, still empty; each once, never the answer";
    let p = parts_of(question);
    let p2 = multiply(p.k, 2);
    let v1 = object_text(p.k, p2);
    let p3 = multiply(p.k + 2, 2);
    let v2 = object_text(p.k + 2, p3);
    let candidates = [v1, v2, "{}"];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "n set to i, double set to i * 2, + 2 for * 2; kept only when they write out something else";
    let p = parts_of(answer);
    let v1 = program_with(
      p.size,
      "items[i].n = i;",
      "items[i].double = items[i].n * 2;",
      p.k,
    );
    let v2 = program_with(
      p.size,
      "items[i].n = i + 1;",
      "items[i].double = i * 2;",
      p.k,
    );
    let v3 = program_with(
      p.size,
      "items[i].n = i + 1;",
      "items[i].double = items[i].n + 2;",
      p.k,
    );
    let programs = [v1, v2, v3];
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
    "adding properties and a loop over a list remembered, then setting properties on each object of a list";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_properties_add,
      ["Each line like ", "counts.love = 2;", " adds one more property"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_count_words_for,
      ["In a loop, ", "words[i]", " is one item of the array at a time"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "[{}, {}, {}]",
      " is an array of three empty objects. ",
      "items[i]",
      " is one of them, so ",
      "items[i].n = i + 1;",
      " adds a property to it:",
    ]);
    let code2 = program_of(3, 2);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "For ",
      "items[2]",
      ", ",
      "i",
      " is ",
      "2",
      ", so ",
      "n",
      " is ",
      "3",
      " and ",
      "double",
      " is ",
      "3 * 2",
      ", which is ",
      "6",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "{ n: 3, double: 6 }",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Setting properties in a loop",
    "items[i].n = i + 1;",
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
