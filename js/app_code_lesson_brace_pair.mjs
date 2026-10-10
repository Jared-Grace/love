import { app_code_code_dark_lines_braces_paired_random } from "./app_code_code_dark_lines_braces_paired_random.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_add } from "./list_add.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_brace_marked } from "./app_code_brace_marked.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_code_dark_lines_brace_marked } from "./app_code_code_dark_lines_brace_marked.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_after_nested } from "./app_code_lesson_if_after_nested.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_quizzes_unscramble } from "./app_code_lesson_quizzes_unscramble.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
export function app_code_lesson_brace_pair() {
  arguments_assert(arguments, 0);
  ("which brace pairs with which: in if (a) { if (b) { ... } }, the first { is closed by the last }, not by the } nearest to it");
  ("The one new fact is how a { and its } are found from each other: going down from a {, count 1 more for every { and 1 less for every }, and the } that brings the count back to 0 closes it; going up from a }, the same with the two swapped finds the { that opens it.");
  ("Asked for by the human 2026-10-09, after a learner asked why the last else in if ( if else ) else belongs to the first if when it is so far away from it: the else belongs to the if whose { the } before it closes, so matching braces is the fact underneath the question. The human asked for both ways, which } closes a { and which { opens a }, and at least two pairs of braces in every program.");
  ("Placed straight after If after an if inside an if and before the first else inside an if, so it comes before the shape the learner tripped on and uses only shapes already taught: three ifs one after the other, an if and else with an if after it, an if inside an if with an if after it or before it, and two ifs inside an if. Rejected: straight after If inside an else, where every nesting with else has been seen, because by then the learner has already met the question unequipped; and before If inside an if, because the nested shapes would be new there. Which if an else belongs to is left for a lesson of its own, after the nesting lessons with else.");
  ("Every program has exactly three pairs of braces, so every question offers three buttons - the three braces of the kind asked for - and the quiz is told to show three. Two pairs was the first draft and was rejected: it leaves one wrong answer, so a guess is right half the time, and a quiz told to show more fills the rest from other questions, which offered a different program and even the question itself.");
  ("Each screen has four of the five shapes. Two questions point at a { and two at a }, so both ways are asked on every screen.");
  ("The wrong answers are every other brace of the kind asked for, each once. In a nested program the nearest one is among them, which is the mistake the learner made.");
  ("There is no backwards quiz, because the question and the answer are the same kind of thing - a program with one brace pointed at - and reading it backwards is the other way of asking, which the screen already asks. There are no quizzes about lines or building the code, because no program here is run.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let peace = list_get(fruits, 2);
  let say_love = app_code_word_console_log_statement(love);
  let say_joy = app_code_word_console_log_statement(joy);
  let say_peace = app_code_word_console_log_statement(peace);
  function shapes() {
    "the five programs, each with exactly three pairs of braces";
    let if_a = js_code_if_lines_multiple("a", [say_love]);
    let if_b = js_code_if_lines_multiple("b", [say_joy]);
    let if_c = js_code_if_lines_multiple("c", [say_peace]);
    let three_ifs = list_concat_multiple([if_a, if_b, if_c]);
    let if_else = js_code_if_else_lines_multiple("a", [say_love], [say_joy]);
    let else_then_if = list_concat(if_else, if_c);
    let statements = list_concat([say_love], if_b);
    let nested = js_code_if_lines_multiple("a", statements);
    let after_nested = list_concat(nested, if_c);
    let before_nested = list_concat(if_c, nested);
    let statements2 = list_concat(if_b, if_c);
    let two_inside = js_code_if_lines_multiple("a", statements2);
    let lines_list = [
      three_ifs,
      else_then_if,
      after_nested,
      before_nested,
      two_inside,
    ];
    let codes = list_map(lines_list, list_join_newline);
    return codes;
  }
  function braces_of(code, brace) {
    "where every brace of one kind stands in code";
    let indexes = [];
    for (let i = 0; less_than(i, code.length); i++) {
      if (equal(code[i], brace)) {
        list_add(indexes, i);
      }
    }
    return indexes;
  }
  function batch_get() {
    "four of the five programs, two pointing at a { and two at a }";
    let list = shapes();
    let codes2 = list_shuffle_take(list, 4);
    let left = js_code_brace_left();
    let right = js_code_brace_right();
    let questions = [];
    for (let i = 0; less_than(i, codes2.length); i++) {
      let code = list_get(codes2, i);
      let brace = left;
      let left3 = modulo(i, 2);
      if (equal(left3, 1)) {
        brace = right;
      }
      let indexes2 = braces_of(code, brace);
      let index = list_random_item(indexes2);
      let question = app_code_brace_marked(code, index);
      list_add(questions, question);
    }
    return questions;
  }
  function partner_marked(question) {
    "the same program with the partner of the pointed-at brace pointed at instead";
    let unmarked = app_code_brace_unmarked(question);
    let code3 = property_get(unmarked, "code");
    let index3 = property_get(unmarked, "index");
    let partner = js_code_brace_partner_index(code3, index3);
    let answer = app_code_brace_marked(code3, partner);
    return answer;
  }
  let batch = app_code_batch_question_answer_fns(batch_get, partner_marked);
  function decoys(question, answer) {
    "every other brace of the kind asked for, each once and never the answer";
    let unmarked2 = app_code_brace_unmarked(question);
    let code4 = property_get(unmarked2, "code");
    let index4 = property_get(unmarked2, "index");
    let partner2 = js_code_brace_partner_index(code4, index4);
    let kind = code4[partner2];
    let indexes3 = braces_of(code4, kind);
    function marked_at(i) {
      let m = app_code_brace_marked(code4, i);
      return m;
    }
    let texts = list_map(indexes3, marked_at);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  let painter = app_code_code_dark_lines_brace_marked;
  function code_shown(root, text) {
    let div = html_div(root);
    painter(div, text);
  }
  function above(root, context) {
    "an if inside an if remembered, then finding a } from its { by counting, and a { from its } the same way";
    let left2 = js_code_brace_left();
    let right2 = js_code_brace_right();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_after_nested,
      ["an ", "if", " can go inside the ", "{ ... }", " of an ", "if", "."],
    );
    let box_paired = app_code_container_light_blue(root);
    html_div_cycle_code(box_paired, [
      "Braces come in pairs. Every ",
      left2,
      " has a matching ",
      right2,
      ", which means every ",
      right2,
      " has a matching ",
      left2,
      " too",
    ]);
    html_div_cycle_code(box_paired, [
      "A ",
      left2,
      " begins a section of code, and its ",
      right2,
      " ends it",
    ]);
    html_div_cycle_code(box_paired, [
      "Here each pair has a colour of its own:",
    ]);
    let if_b3 = js_code_if_lines_multiple("b", [say_joy]);
    let statements4 = list_concat([say_love], if_b3);
    let nested3 = js_code_if_lines_multiple("a", statements4);
    let if_c3 = js_code_if_lines_multiple("c", [say_peace]);
    let list4 = list_concat(nested3, if_c3);
    let paired_code = list_join_newline(list4);
    let paired_div = html_div(box_paired);
    app_code_code_dark_lines_braces_paired_random(paired_div, paired_code);
    html_div_cycle_code(box_paired, [
      "The ",
      left2,
      " after ",
      "if (a)",
      " is closed by the last ",
      right2,
      " before ",
      "if (c)",
      ", not by the ",
      right2,
      " nearest to it",
    ]);
    let if_b2 = js_code_if_lines_multiple("b", [say_joy]);
    let statements3 = list_concat([say_love], if_b2);
    let lines = js_code_if_lines_multiple("a", statements3);
    let code5 = list_join_newline(lines);
    let list2 = braces_of(code5, left2);
    let opening = list_get(list2, 0);
    let closings = braces_of(code5, right2);
    let closing_inner = list_get(closings, 0);
    let closing_outer = list_get(closings, 1);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Without the colours, which ",
      right2,
      " closes this ",
      left2,
      "?",
    ]);
    let marked = app_code_brace_marked(code5, opening);
    code_shown(box_two, marked);
    html_div_cycle_code(box_two, [
      "Count, going down. The ",
      left2,
      " we start at makes 1",
    ]);
    html_div_cycle_code(box_two, ["The next ", left2, " makes 2"]);
    html_div_cycle_code(box_two, [
      "The next ",
      right2,
      " makes 1. It is not the one, because the count is not 0",
    ]);
    html_div_cycle_code(box_two, [
      "The next ",
      right2,
      " makes 0, so this is the ",
      right2,
      " that closes it:",
    ]);
    let marked2 = app_code_brace_marked(code5, closing_outer);
    code_shown(box_two, marked2);
    html_div_cycle_code(box_two, [
      "It also stands right under the start of the line its ",
      left2,
      " is on",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "It works the other way too. Which ",
      left2,
      " opens this ",
      right2,
      "?",
    ]);
    let marked3 = app_code_brace_marked(code5, closing_inner);
    code_shown(box_three, marked3);
    html_div_cycle_code(box_three, [
      "Count, going up. The ",
      right2,
      " we start at makes 1, and the next ",
      left2,
      " makes 0, so this is the ",
      left2,
      " that opens it:",
    ]);
    let list3 = braces_of(code5, left2);
    let opening_inner = list_get(list3, 1);
    let marked4 = app_code_brace_marked(code5, opening_inner);
    code_shown(box_three, marked4);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Which brace pairs with which",
    "{ ... }",
  );
  let question_label = "Code:";
  let answer_label = "Which brace pairs with the one pointed at?";
  let forwards = {
    question_label,
    on_question: painter,
    answer_label,
    answer_on_button: painter,
    answer_count_override: 3,
    decoys,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble({
    batch_get: batch,
    forwards,
    backwards: forwards,
    unscramble_label: null,
    unscramble: false,
    backwards_include: false,
    lines: false,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch,
    painter,
    "Its pair:",
    quizzes_get,
    question_label,
    app_code_brace_marked_div,
  );
  return lesson;
}
