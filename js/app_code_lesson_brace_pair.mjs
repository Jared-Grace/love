import { app_code_lesson_brace_pair_generic } from "./app_code_lesson_brace_pair_generic.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_token_order_braces } from "./app_code_lesson_token_order_braces.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_code_braces_colors_next } from "./app_code_braces_colors_next.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
import { app_code_braces_pair_color } from "./app_code_braces_pair_color.mjs";
import { app_code_div_braces_painted } from "./app_code_div_braces_painted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_after_nested } from "./app_code_lesson_if_after_nested.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
export function app_code_lesson_brace_pair() {
  arguments_assert(arguments, 0);
  ("which brace pairs with which: in if (a) { if (b) { ... } }, the first { is closed by the last }, not by the } nearest to it");
  ("The one new fact is that braces come in pairs, and the pair of a brace is found by eye: a } closes the most recent { still open, so pairs close in the reverse order they opened, shown by naming each brace in the colour it wears in the code (written by the human 2026-10-11, replacing a line saying a } stands under the start of the line its { is on). Rejected 2026-10-11 by the human: counting 1 more for every { and 1 less for every } until the count is 0, which was taught here first; the human asked for the pair to be eyeballed instead.");
  ("Asked for by the human 2026-10-09, after a learner asked why the last else in if ( if else ) else belongs to the first if when it is so far away from it: the else belongs to the if whose { the } before it closes, so matching braces is the fact underneath the question. The human asked for both ways, which } closes a { and which { opens a }, and at least two pairs of braces in every program.");
  ("Placed straight after If after an if inside an if and before the first else inside an if, so it comes before the shape the learner tripped on and uses only shapes already taught: three ifs one after the other, an if and else with an if after it, an if inside an if with an if after it or before it, and two ifs inside an if. Rejected: straight after If inside an else, where every nesting with else has been seen, because by then the learner has already met the question unequipped; and before If inside an if, because the nested shapes would be new there. Which if an else belongs to is left for a lesson of its own, after the nesting lessons with else.");
  ("Every program has exactly three pairs of braces, so every question offers three buttons. Two pairs was the first draft and was rejected here: it leaves one wrong answer, so a guess is right half the time.");
  ("The writing is a first draft by Claude 2026-10-09.");
  ("The braces line points back to The braces among the tokens, and the lines saying which { is closest to the first } were written by the human 2026-10-11.");
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
  function above(root, context) {
    "an if inside an if remembered, then braces in pairs, shown in colours, with the first } closing the most recent { rather than the first";
    let left = js_code_brace_left();
    let right = js_code_brace_right();
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
      left,
      " has a matching ",
      right,
      ", which means every ",
      right,
      " has a matching ",
      left,
      " too",
    ]);
    html_div_cycle_code(box_paired, [
      "A ",
      left,
      " begins a section of code, and its ",
      right,
      " ends it",
    ]);
    html_div_cycle_code(box_paired, [
      "Here each pair has a colour of its own:",
    ]);
    let if_b3 = js_code_if_lines_multiple("b", [say_joy]);
    let statements4 = list_concat([say_love], if_b3);
    let nested3 = js_code_if_lines_multiple("a", statements4);
    let if_c3 = js_code_if_lines_multiple("c", [say_peace]);
    let list = list_concat(nested3, if_c3);
    let paired_code = list_join_newline(list);
    let paired_div = html_div(box_paired);
    let colors = app_code_braces_colors_next(paired_code);
    app_code_code_dark_lines_braces_paired_colors(
      paired_div,
      paired_code,
      colors,
    );
    let braces_painted = [["In this code, the braces are: "]];
    for (let i = 0; less_than(i, paired_code.length); i++) {
      let brace_char = paired_code[i];
      if (equal(brace_char, left) || equal(brace_char, right)) {
        let brace_color = app_code_braces_pair_color(paired_code, i, colors);
        list_add_multiple(braces_painted, [
          {
            brace: brace_char,
            color: brace_color,
          },
          [" "],
        ]);
      }
    }
    let braces_line = app_code_div_braces_painted(box_paired, braces_painted);
    html_span_text_content(braces_line, "as taught in ");
    app_code_lesson_reference_draw(
      braces_line,
      context,
      app_code_lesson_token_order_braces,
    );
    let outer = list_get(colors, 0);
    let inner = list_get(colors, 1);
    let outer_left = {
      brace: left,
      color: outer,
    };
    let outer_right = {
      brace: right,
      color: outer,
    };
    let inner_left = {
      brace: left,
      color: inner,
    };
    let inner_right = {
      brace: right,
      color: inner,
    };
    app_code_div_braces_painted(box_paired, [
      outer_left,
      [" is the first opening brace"],
    ]);
    app_code_div_braces_painted(box_paired, [
      inner_right,
      [" is the first closing brace"],
    ]);
    app_code_div_braces_painted(box_paired, [
      ["Even though "],
      inner_right,
      [
        " is the first closing brace, it does not close the first opening brace: ",
      ],
      outer_left,
    ]);
    app_code_div_braces_painted(box_paired, [
      inner_right,
      [" closes the most recent ", left, ", which is "],
      inner_left,
      [" not "],
      outer_left,
    ]);
    app_code_div_braces_painted(box_paired, [
      ["The first 3 braces are "],
      outer_left,
      [" "],
      inner_left,
      [" "],
      inner_right,
    ]);
    app_code_div_braces_painted(box_paired, [
      inner_left,
      [" is closer to "],
      inner_right,
      [" than "],
      outer_left,
    ]);
    app_code_div_braces_painted(box_paired, [
      ["and "],
      inner_left,
      [" is closest to "],
      inner_right,
    ]);
    app_code_div_braces_painted(box_paired, [
      ["so "],
      inner_right,
      [" closes "],
      inner_left,
      [" not "],
      outer_left,
    ]);
    app_code_div_braces_painted(box_paired, [
      outer_left,
      [" opens, then "],
      inner_left,
      [" opens"],
    ]);
    app_code_div_braces_painted(box_paired, [
      ["They close in reverse order of color:"],
    ]);
    app_code_div_braces_painted(box_paired, [
      ["So "],
      inner_right,
      [" closes and then "],
      outer_right,
      [" closes"],
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Which brace pairs with which",
    "{ ... }",
  );
  let lesson = app_code_lesson_brace_pair_generic(name_id, above, shapes, 3);
  return lesson;
}
