import { list_get } from "./list_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
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
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rectangle_above } from "./app_code_lesson_statement_name_rectangle_above.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_rows_between() {
  arguments_assert(arguments, 0);
  ("how many rows are between two rectangles, once the first is above the second: let between = t2 - b1; - picked by Claude 2026-10-05 when the human asked to continue on the code app, as Is one rectangle above another done the way How many hours are free between two meetings follows Has one meeting ended by the time another starts. In DSA it is the gap between two boxes one above the other, the distance a layout keeps between them.");
  ("Not picked: the gap across, let between = l2 - r1; which needs a grid wide enough for both side by side, the reason Is one rectangle above another went down and not across; and how far apart two rectangles are either way, which needs the larger of two gaps. Every pair asked here has the first rectangle above the second, so the answer is never negative and the lesson stays one subtraction.");
  ("Rows and not squares, because the gap is counted down only: one row between two rectangles can hold several squares across. Named between, the word the question asks with; gap would read as the across gap as much as the down one.");
  ("All four down edges are names, t1, b1, t2 and b2, though only b1 and t2 are subtracted, asked by the human 2026-10-05 after reading this beside Is one rectangle above another, whose program has all four and checks two: the reminder just above shows four, so a program here with two read as a different set of rectangles. Not picked: only b1 and t2, as How many hours are free between two meetings keeps only e1 and s2, which was the first draft.");
  ("Top edges wear the start colour and bottom edges the end colour, as in Is one rectangle above another, so t2 - b1 reads as a start less an end; the number of rows wears a third colour, as the free hours do in How many hours are free between two meetings. Words naming a rectangle wear the colour the picture fills it with.");
  ("Each screen asks 0, 1, 2 and 3 rows, so the four answers differ and one is the 0 of two rectangles that touch.");
  ("The writing is a first draft by Claude 2026-10-05.");
  let names = ["t1", "b1", "t2", "b2"];
  let t = list_get(names, 0);
  let b = list_get(names, 1);
  let t2 = list_get(names, 2);
  let b2 = list_get(names, 3);
  let between = "between";
  let minus = js_operator_minus_symbol();
  let difference = js_code_binary_spaced_nb(t2, minus, b);
  let line_between = js_code_let_statement(between, difference);
  let step = {
    middle: [line_between],
    logged: [between],
  };
  let above = "above";
  let at_most = js_operator_less_than_equal_symbol();
  let check_above = js_code_binary_spaced_nb(b, at_most, t2);
  let line_above = js_code_let_statement(above, check_above);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [t, 1],
      [b, 3],
      [t2, 4],
      [b2, 6],
    ],
    [line_above],
    [above],
  );
  function values_get() {
    "two rectangles one above the other, as top, bottom, top2, bottom2, with 0, 1, 2 and 3 rows between them, in a fresh order each screen";
    let none = list_shuffle_take(
      [
        [1, 3, 3, 5],
        [0, 2, 2, 4],
      ],
      1,
    );
    let one_row = list_shuffle_take(
      [
        [1, 3, 4, 6],
        [0, 2, 3, 5],
      ],
      1,
    );
    let two_rows = list_shuffle_take(
      [
        [0, 2, 4, 6],
        [1, 3, 5, 7],
      ],
      1,
    );
    let three_rows = list_shuffle_take(
      [
        [0, 1, 4, 6],
        [1, 2, 5, 7],
      ],
      1,
    );
    let short = list_concat(none, one_row);
    let long = list_concat(two_rows, three_rows);
    let all = list_concat(short, long);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let rows_color = app_code_highlight_color_third();
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
  function counted(text) {
    "how many rows are between, as a chip in the rows colour";
    let chip = app_code_explain_number_colored(text, rows_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  function between_worked(top, bottom) {
    "top2 - bottom as one code chip, the second rectangle's top edge in the start colour and the first's bottom edge in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [top, spaced_minus, bottom],
      [start_color, plain, end_color],
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
    "the first rectangle, 1 to 3 across and 1 to 3 down, and the second 2 to 4 across and from top2 to bottom2 down, on a grid ending one row below the second, as in Is one rectangle above another";
    let rows = bottom2 + 1;
    let first_edges = [1, 3, 1, 3];
    let second_edges = [2, 4, top, bottom2];
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        rows,
        first_edges,
        second_edges,
        null,
        [
          [1, 3],
          [top, bottom2],
        ],
        null,
        rows_color,
        null,
      );
    }
    return draw;
  }
  let down_arrow = app_code_arrow_inline_draw(90);
  let first_rectangle = one("first rectangle");
  let first_one = one("first one");
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
  let how_said = app_code_explain_said([
    "How many rows are between the ",
    first_rectangle,
    " and the ",
    second,
    "?",
  ]);
  let like_said = ['Down, it is like the hours free between two "meetings"'];
  let compare_said = app_code_explain_said([
    "We subtract the bottom of the ",
    first_rectangle,
    " from the top of the ",
    second,
    ":",
  ]);
  let v5 = between_worked("4", "3");
  let v6 = counted("1");
  let apart_worked = app_code_explain_said(["", v5, " is ", v6]);
  let v7 = counted("1");
  let apart_so = app_code_explain_said(["So ", v7, " row is between them"]);
  let first = one("first");
  let only_said = app_code_explain_said([
    "The top of the ",
    first,
    ", the bottom of the ",
    second,
    ", and where they go across do not affect the answer",
  ]);
  let v8 = from("3");
  let v9 = till("5");
  let touching_suppose = app_code_explain_said([
    "But suppose the ",
    second_rectangle,
    " goes down from ",
    v8,
    " to ",
    v9,
  ]);
  let touching_draw = rectangles_draw(3, 5);
  let v10 = between_worked("3", "3");
  let v11 = counted("0");
  let touching_worked = app_code_explain_said(["", v10, " is ", v11]);
  let v12 = counted("0");
  let v13 = till("3");
  let touching_said = app_code_explain_said([
    "So ",
    v12,
    " rows are between them: the ",
    second,
    " starts just where the ",
    first_one,
    " ends, at ",
    v13,
  ]);
  let v14 = from(t);
  let v15 = till(b);
  let v16 = from(t2);
  let v17 = till(b2);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes down from ",
    v14,
    " to ",
    v15,
    ", and the ",
    second,
    " goes down from ",
    v16,
    " to ",
    v17,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that finds how many rows are between the rectangles:",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "How many rows are between two rectangles",
    title_code: line_between,
    names,
    values_get,
    example_values: [1, 3, 4, 6],
    step,
    remember_lesson: app_code_lesson_statement_name_rectangle_above,
    remember_parts: ["we can check whether one rectangle is above another:"],
    remember_lines,
    explain: [
      suppose_said,
      apart_draw,
      how_said,
      like_said,
      app_code_explain_container_next,
      compare_said,
      apart_worked,
      apart_so,
      only_said,
      app_code_explain_container_next,
      touching_suppose,
      touching_draw,
      touching_worked,
      touching_said,
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
      [[between, "1"], rows_color],
    ],
  });
  return lesson;
}
