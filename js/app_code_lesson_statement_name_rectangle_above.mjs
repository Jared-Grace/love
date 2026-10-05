import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
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
import { app_code_lesson_statement_name_meeting_ended } from "./app_code_lesson_statement_name_meeting_ended.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangle_above() {
  arguments_assert(arguments, 0);
  ("whether one rectangle is above another: let above = b1 <= t2; - picked by Claude 2026-10-05 when the human asked for the next lesson, named in Has one meeting ended by the time another starts as that check done down, which can follow it. In DSA it is one of the four checks that two boxes cannot overlap, the one Rectangle Overlap tests on each side.");
  ("Above and not left of, asked by the human 2026-10-05 so the picture can be narrower: two rectangles one above the other stack down the screen, where two side by side need a grid wide enough for both, and a phone is narrow. The first draft was left of, let left = r1 <= l2; with a grid seven squares across; this one is five across. Not picked: below, let below = b2 <= t1; which is the same check with the rectangles swapped, and reads backwards beside the meetings lesson, where the first meeting is the one that ends first.");
  ("Has one meeting ended by the time another starts is the reminder, so the new idea is only that down a rectangle is a meeting: its bottom edge is where it ends and its top edge where it starts. Only t1, b1, t2 and b2 are names: the lefts and rights do not decide it, and the picture shows them differing so the reader sees that, as 231 kept s1 and e2 in its program for the same reason; the four down edges already make the program as long as 231's.");
  ("Named above, the one word for it; the check is one way round: a second rectangle wholly above answers false, and the writing says only that the first is above the second.");
  ("<= and not <, as in Has one meeting ended by the time another starts: a rectangle whose bottom edge is the line the other's top edge is on shares no square with it, and the writing shows that case.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two pairs that are true, one touching and one apart, and two that are false, one overlapping down and one with the second wholly above.");
  ("Top edges are starts and wear the start colour, bottom edges are ends and wear the end colour, as in the rectangle lessons; words naming a rectangle wear the colour the picture fills it with, the first purple and the second orange. Squares both rectangles cover wear the overlap colour, as in Do two rectangles overlap.");
  ("The writing is a first draft by Claude 2026-10-05.");
  let names = ["t1", "b1", "t2", "b2"];
  let t = list_get(names, 0);
  let b = list_get(names, 1);
  let t2 = list_get(names, 2);
  let b2 = list_get(names, 3);
  let above = "above";
  let at_most = js_operator_less_than_equal_symbol();
  let check_above = js_code_binary_spaced_nb(b, at_most, t2);
  let line_above = js_code_let_statement(above, check_above);
  let step = {
    middle: [line_above],
    logged: [above],
  };
  let s = "s1";
  let e = "e1";
  let s2 = "s2";
  let e2 = "e2";
  let ended = "ended";
  let check_ended = js_code_binary_spaced_nb(e, at_most, s2);
  let line_ended = js_code_let_statement(ended, check_ended);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 8],
      [e, 10],
      [s2, 11],
      [e2, 12],
    ],
    [line_ended],
    [ended],
  );
  function values_get() {
    "two pairs where the first rectangle is above the second, one touching and one apart, and two where it is not, one overlapping down and one with the second wholly above, in a fresh order each screen";
    let touching = list_shuffle_take(
      [
        [1, 3, 3, 5],
        [0, 2, 2, 4],
      ],
      1,
    );
    let apart = list_shuffle_take(
      [
        [0, 2, 3, 5],
        [1, 2, 4, 6],
      ],
      1,
    );
    let overlapping = list_shuffle_take(
      [
        [1, 4, 2, 5],
        [0, 3, 1, 4],
      ],
      1,
    );
    let second_above = list_shuffle_take(
      [
        [3, 5, 0, 2],
        [4, 6, 1, 3],
      ],
      1,
    );
    let trues = list_concat(touching, apart);
    let falses = list_concat(overlapping, second_above);
    let all = list_concat(trues, falses);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a top edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "a bottom edge, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  let spaced_at_most = js_code_binary_spaced_nb("", at_most, "");
  function check_worked(bottom, top) {
    "bottom <= top2 as one code chip, the first rectangle's bottom edge in the end colour and the second's top edge in the start colour";
    let chip = app_code_explain_code_colored_inline(
      [bottom, spaced_at_most, top],
      [end_color, plain, start_color],
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
  function rectangles_draw(top, bottom2) {
    "the first rectangle, 1 to 3 across and 1 to 3 down, and the second 2 to 4 across and from top2 to bottom2 down, so their lefts and rights differ; only the down numbers wear colours, since only they decide it";
    let first_edges = [1, 3, 1, 3];
    let second_edges = [2, 4, top, bottom2];
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        7,
        first_edges,
        second_edges,
        null,
        [
          [1, 3],
          [top, bottom2],
        ],
        null,
        overlap_color,
        null,
      );
    }
    return draw;
  }
  let down_arrow = app_code_arrow_inline_draw(90);
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let first_rectangle = one("first rectangle");
  let first_one = one("first one");
  let first = one("first");
  let second_rectangle = two("second rectangle");
  let second = two("second");
  let v = from("1");
  let v2 = till("3");
  let v3 = from("4");
  let v4 = till("6");
  let suppose_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes down ",
    down_arrow,
    " from ",
    v,
    " to ",
    v2,
    ", and the ",
    second,
    " goes down from ",
    v3,
    " to ",
    v4,
  ]);
  let apart_draw = rectangles_draw(4, 6);
  let seen_said = app_code_explain_said([
    "We can see that the ",
    first_rectangle,
    " is above the ",
    second,
  ]);
  let how_said = app_code_explain_said([
    "How can we tell the ",
    first_rectangle,
    " is above the ",
    second,
    " using numbers?",
  ]);
  let like_said = [
    'Down, it is like one "meeting" that has ended by the time another starts',
  ];
  let compare_said = app_code_explain_said([
    "We compare the bottom of the ",
    first_rectangle,
    " to the top of the ",
    second,
    ":",
  ]);
  let v5 = check_worked("3", "4");
  let apart_worked = app_code_explain_said(["", v5, " which is ", is_true]);
  let only_said = app_code_explain_said([
    "The top of the ",
    first,
    ", the bottom of the ",
    second,
    ", and where they go across do not matter",
  ]);
  let v6 = from("3");
  let v7 = till("5");
  let touching_suppose = app_code_explain_said([
    "But suppose the ",
    second_rectangle,
    " goes down from ",
    v6,
    " to ",
    v7,
  ]);
  let touching_draw = rectangles_draw(3, 5);
  let v8 = till("3");
  let touching_said = app_code_explain_said([
    "It starts just where the ",
    first_one,
    " ends, at ",
    v8,
    ", so they share no squares",
  ]);
  let v9 = check_worked("3", "3");
  let touching_worked = app_code_explain_said(["", v9, " is ", is_true]);
  let v10 = from("2");
  let v11 = till("5");
  let overlap_suppose = app_code_explain_said([
    "And suppose the ",
    second_rectangle,
    " goes down from ",
    v10,
    " to ",
    v11,
  ]);
  let overlap_draw = rectangles_draw(2, 5);
  let v12 = check_worked("3", "2");
  let overlap_said = app_code_explain_said([
    "It starts before the ",
    first_one,
    " ends: ",
    v12,
    " is ",
    is_false,
  ]);
  let overlap_so = app_code_explain_said([
    "So the ",
    first_rectangle,
    " is not above the ",
    second,
  ]);
  let v13 = from(t);
  let v14 = till(b);
  let v15 = from(t2);
  let v16 = till(b2);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes down from ",
    v13,
    " to ",
    v14,
    ", and the ",
    second,
    " goes down from ",
    v15,
    " to ",
    v16,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that checks whether the ",
    first_rectangle,
    " is above the ",
    second,
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Is one rectangle above another",
    title_code: line_above,
    names,
    values_get,
    example_values: [1, 3, 4, 6],
    step,
    remember_lesson: app_code_lesson_statement_name_meeting_ended,
    remember_parts: [
      "we can check whether one meeting has ended by the time another starts:",
    ],
    remember_lines,
    explain: [
      suppose_said,
      apart_draw,
      seen_said,
      app_code_explain_container_next,
      how_said,
      like_said,
      compare_said,
      apart_worked,
      only_said,
      app_code_explain_container_next,
      touching_suppose,
      touching_draw,
      touching_said,
      touching_worked,
      app_code_explain_container_next,
      overlap_suppose,
      overlap_draw,
      overlap_said,
      overlap_so,
      app_code_explain_container_next,
      names_said,
      code_said,
    ],
    decoys: null,
    example_pointers: [
      [[t, "1"], start_color],
      [[b, "3"], end_color],
      [[t2, "4"], start_color],
      [[b2, "6"], end_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
