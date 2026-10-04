import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_rectangles_edges_colored_draw } from "./app_code_rectangles_edges_colored_draw.mjs";
import { app_code_arrow_inline_draw } from "./app_code_arrow_inline_draw.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_meeting_inside } from "./app_code_lesson_statement_name_meeting_inside.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangle_inside() {
  arguments_assert(arguments, 0);
  ("whether one rectangle is inside another: let across = l1 <= l2 && r2 <= r1; let down = t1 <= t2 && b2 <= b1; let inside = across && down; - picked by the human 2026-10-04 from a list of next lessons. In DSA it is the box containment check, used to tell whether one box on a screen holds another, and it is Is one meeting inside another done once across and once down.");
  ("Is one meeting inside another is the reminder, so the new idea is only that a rectangle needs that check twice, joined by &&, as Do two rectangles overlap needed the overlap check twice. l1, r1, t1 and b1 are the left, right, top and bottom of the first rectangle, and l2, r2, t2 and b2 of the second; the whole words would make each line twice as long. The first two lines are longer than 30 characters; only the title line has to fit, and let inside = across && down; does.");
  ("The writing shows the first rectangle alone and then the second inside it, as Is a square inside a rectangle shows the rectangle alone and then the square, asked of that lesson by the human 2026-10-04.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two pairs where the second is inside, one of them sharing an edge with the first so a < in place of <= would be caught, then one that sticks out across and one that sticks out down, so neither check alone is enough.");
  ("Left and top are starts and wear the start colour, right and bottom are ends and wear the end colour. Words naming a rectangle wear the colour the picture fills it with, the first purple and the second orange, as Is one meeting inside another colours its meetings.");
  ("The writing is a first draft by Claude 2026-10-04, not yet the human's.");
  let names = ["l1", "r1", "t1", "b1", "l2", "r2", "t2", "b2"];
  let l = list_get(names, 0);
  let r = list_get(names, 1);
  let t = list_get(names, 2);
  let b = list_get(names, 3);
  let l2 = list_get(names, 4);
  let r2 = list_get(names, 5);
  let t2 = list_get(names, 6);
  let b2 = list_get(names, 7);
  let across = "across";
  let down = "down";
  let inside = "inside";
  let at_most = js_operator_less_than_equal_symbol();
  let and_op = js_operator_and_symbol();
  function within_code(low, low2, high2, high) {
    "low <= low2 && high2 <= high, the check that one span is inside another";
    let starts = js_code_binary_spaced_nb(low, at_most, low2);
    let ends = js_code_binary_spaced_nb(high2, at_most, high);
    let code = js_code_binary_spaced_nb(starts, and_op, ends);
    return code;
  }
  let check_across = within_code(l, l2, r2, r);
  let line_across = js_code_let_statement(across, check_across);
  let check_down = within_code(t, t2, b2, b);
  let line_down = js_code_let_statement(down, check_down);
  let both = js_code_binary_spaced_nb(across, and_op, down);
  let line_inside = js_code_let_statement(inside, both);
  let step = {
    middle: [line_across, line_down, line_inside],
    logged: [inside],
  };
  let s = "s1";
  let e = "e1";
  let s2 = "s2";
  let e2 = "e2";
  let after = "after";
  let before = "before";
  let check_after = js_code_binary_spaced_nb(s, at_most, s2);
  let line_after = js_code_let_statement(after, check_after);
  let check_before = js_code_binary_spaced_nb(e2, at_most, e);
  let line_before = js_code_let_statement(before, check_before);
  let meeting_both = js_code_binary_spaced_nb(after, and_op, before);
  let meeting_inside = js_code_let_statement(inside, meeting_both);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 8],
      [e, 12],
      [s2, 9],
      [e2, 11],
    ],
    [line_after, line_before, meeting_inside],
    [inside],
  );
  function values_get() {
    "two pairs with the second inside the first, one sharing an edge, then one sticking out across and one sticking out down, in a fresh order each screen";
    let sharing = list_shuffle_take(
      [
        [1, 5, 0, 4, 1, 3, 2, 4],
        [2, 5, 1, 3, 3, 5, 1, 2],
      ],
      1,
    );
    let within = list_shuffle_take(
      [
        [0, 4, 0, 3, 1, 3, 1, 2],
        [0, 4, 1, 5, 1, 2, 2, 4],
      ],
      1,
    );
    let out_across = list_shuffle_take(
      [
        [0, 3, 0, 4, 1, 4, 1, 3],
        [1, 4, 0, 3, 0, 2, 1, 2],
      ],
      1,
    );
    let out_down = list_shuffle_take(
      [
        [0, 4, 1, 3, 1, 3, 0, 2],
        [0, 4, 0, 3, 1, 2, 1, 4],
      ],
      1,
    );
    let insides = list_concat(sharing, within);
    let outsides = list_concat(out_across, out_down);
    let all = list_concat(insides, outsides);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a starting edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "an ending edge, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  let spaced_at_most = js_code_binary_spaced_nb("", at_most, "");
  let spaced_and = js_code_binary_spaced_nb("", and_op, "");
  function within_worked(low, low2, high2, high) {
    "low <= low2 && high2 <= high as one code chip, the starting edges in the start colour and the ending edges in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_at_most, low2, spaced_and, high2, spaced_at_most, high],
      [start_color, plain, start_color, plain, end_color, plain, end_color],
    );
    return chip;
  }
  function one(text) {
    "words naming the first rectangle, in the colour the picture fills it with";
    let word = app_code_explain_word_colored(text, first_color);
    return word;
  }
  function two(text) {
    "words naming the second rectangle, in the colour the picture fills it with";
    let word = app_code_explain_word_colored(text, second_color);
    return word;
  }
  let first_rectangle = one("first rectangle");
  let first = one("first");
  let second_rectangle = two("second rectangle");
  function rectangles_draw(second) {
    "the first rectangle, 1 to 4 across and 1 to 6 down, taller than wide so the picture can be larger on a phone, asked by the human 2026-10-04, with the second over it in its own colour, or [0, 0, 0, 0] for none";
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        7,
        [1, 4, 1, 6],
        second,
        [1, 4],
        [1, 6],
        null,
        second_color,
        null,
      );
    }
    return draw;
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let down_arrow = app_code_arrow_inline_draw(90);
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let and_chip = app_code_explain_number_colored(and_op, plain);
  function goes_said(word, left, right, top, bottom) {
    "where a rectangle goes, across and then down";
    let v = from(left);
    let v2 = till(right);
    let v3 = from(top);
    let v4 = till(bottom);
    let said = app_code_explain_said([
      "The ",
      word,
      " goes across ",
      right_arrow,
      " from ",
      v,
      " to ",
      v2,
      ", and down ",
      down_arrow,
      " from ",
      v3,
      " to ",
      v4,
    ]);
    return said;
  }
  let here_said = app_code_explain_said(["Here is the ", first_rectangle, ":"]);
  let first_goes = goes_said(first_rectangle, "1", "4", "1", "6");
  let first_alone = rectangles_draw([0, 0, 0, 0]);
  let second_here = app_code_explain_said([
    "Here is the same ",
    first_rectangle,
    ", and a ",
    second_rectangle,
    " on top of it",
  ]);
  let second_goes = goes_said(second_rectangle, "2", "3", "2", "4");
  let both_draw = rectangles_draw([2, 3, 2, 4]);
  let seen_said = app_code_explain_said([
    "We can see that the ",
    second_rectangle,
    " is inside the ",
    first,
  ]);
  let numbers_said = app_code_explain_said([
    "How can we tell that the ",
    second_rectangle,
    " is inside the ",
    first,
    " using numbers?",
  ]);
  let like_said = ['Across and down, it is like one "meeting" inside another'];
  let v5 = within_worked("1", "2", "3", "4");
  let across_said = app_code_explain_said([
    "Across ",
    right_arrow,
    ", ",
    v5,
    " is ",
    is_true,
  ]);
  let v6 = within_worked("1", "2", "4", "6");
  let down_said = app_code_explain_said([
    "Down ",
    down_arrow,
    ", ",
    v6,
    " is ",
    is_true,
  ]);
  let both_said = app_code_explain_said([
    "Both are ",
    is_true,
    ", so the ",
    second_rectangle,
    " is inside the ",
    first,
  ]);
  let v7 = from("2");
  let v8 = till("5");
  let suppose_said = app_code_explain_said([
    "But suppose the ",
    second_rectangle,
    " goes across from ",
    v7,
    " to ",
    v8,
    ":",
  ]);
  let out_draw = rectangles_draw([2, 5, 2, 4]);
  let v9 = within_worked("1", "2", "5", "4");
  let out_said = app_code_explain_said([
    "It sticks out on the right: ",
    v9,
    " is ",
    is_false,
  ]);
  let not_said = app_code_explain_said([
    "Down is still ",
    is_true,
    ", but the ",
    second_rectangle,
    " is not inside the ",
    first,
  ]);
  let need_said = app_code_explain_said([
    "So we need both: across ",
    right_arrow,
    " ",
    and_chip,
    " down ",
    down_arrow,
  ]);
  let v10 = from(l);
  let v11 = till(r);
  let v12 = from(t);
  let v13 = till(b);
  let names_first = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes across from ",
    v10,
    " to ",
    v11,
    ", and down from ",
    v12,
    " to ",
    v13,
  ]);
  let v14 = from(l2);
  let v15 = till(r2);
  let v16 = from(t2);
  let v17 = till(b2);
  let names_second = app_code_explain_said([
    "And the ",
    second_rectangle,
    " goes across from ",
    v14,
    " to ",
    v15,
    ", and down from ",
    v16,
    " to ",
    v17,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that checks whether the ",
    second_rectangle,
    " is inside the ",
    first,
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Is one rectangle inside another",
    title_code: line_inside,
    names,
    values_get,
    example_values: [1, 4, 1, 6, 2, 3, 2, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_meeting_inside,
    remember_parts: ["we can check whether one meeting is inside another:"],
    remember_lines,
    explain: [
      here_said,
      first_goes,
      first_alone,
      second_here,
      second_goes,
      both_draw,
      seen_said,
      numbers_said,
      app_code_explain_container_next,
      like_said,
      across_said,
      down_said,
      both_said,
      app_code_explain_container_next,
      suppose_said,
      out_draw,
      out_said,
      not_said,
      need_said,
      app_code_explain_container_next,
      names_first,
      names_second,
      code_said,
    ],
    decoys: null,
    example_pointers: [
      [[l, t, l2, t2, "1", "2"], start_color],
      [[r, b, r2, b2, "4", "6", "3"], end_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
