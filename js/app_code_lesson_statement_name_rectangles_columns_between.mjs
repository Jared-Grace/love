import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
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
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rectangles_rows_between } from "./app_code_lesson_statement_name_rectangles_rows_between.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_columns_between() {
  arguments_assert(arguments, 0);
  ("how many columns are between two rectangles, once the first is left of the second: let between = l2 - r1; - picked by Claude 2026-10-05 as the across half of How many rows are between two rectangles, the lesson just before it, which left the across gap for later because its picture needs a grid wide enough for both side by side. The human then asked for pictures that scroll sideways, for a student who reads with this app's larger text, which is what makes a wide picture safe to show here.");
  ("Not picked: how far apart two rectangles are either way, which needs the larger of two gaps. Every pair asked here has the first rectangle left of the second, so the answer is never negative and the lesson stays one subtraction.");
  ("Columns and not squares, because the gap is counted across only: one column between two rectangles can hold several squares down. Named between, as in How many rows are between two rectangles, so the two programs differ only in which edges they subtract.");
  ("All four across edges are names, l1, r1, l2 and r2, though only r1 and l2 are subtracted, as How many rows are between two rectangles names all four of its edges, asked there by the human 2026-10-05.");
  ("Left edges wear the start colour and right edges the end colour, as top and bottom edges do in How many rows are between two rectangles, so l2 - r1 reads as a start less an end; the number of columns wears a third colour. Words naming a rectangle wear the colour the picture fills it with.");
  ("Each screen asks 0, 1, 2 and 3 columns, so the four answers differ and one is the 0 of two rectangles that touch. The quiz uses the same numbers as How many rows are between two rectangles, so the one new thing is the direction.");
  ("The writing is a first draft by Claude 2026-10-05.");
  let names = ["l1", "r1", "l2", "r2"];
  let l = list_get(names, 0);
  let r = list_get(names, 1);
  let l2 = list_get(names, 2);
  let r2 = list_get(names, 3);
  let between = "between";
  let minus = js_operator_minus_symbol();
  let difference = js_code_binary_spaced_nb(l2, minus, r);
  let line_between = js_code_let_statement(between, difference);
  let step = {
    middle: [line_between],
    logged: [between],
  };
  let difference_rows = js_code_binary_spaced_nb("t2", minus, "b1");
  let line_rows = js_code_let_statement(between, difference_rows);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["t1", 1],
      ["b1", 3],
      ["t2", 4],
      ["b2", 6],
    ],
    [line_rows],
    [between],
  );
  function values_get() {
    "two rectangles one left of the other, as left, right, left2, right2, with 0, 1, 2 and 3 columns between them, in a fresh order each screen";
    let none = list_shuffle_take(
      [
        [1, 3, 3, 5],
        [0, 2, 2, 4],
      ],
      1,
    );
    let one_column = list_shuffle_take(
      [
        [1, 3, 4, 6],
        [0, 2, 3, 5],
      ],
      1,
    );
    let two_columns = list_shuffle_take(
      [
        [0, 2, 4, 6],
        [1, 3, 5, 7],
      ],
      1,
    );
    let three_columns = list_shuffle_take(
      [
        [0, 1, 4, 6],
        [1, 2, 5, 7],
      ],
      1,
    );
    let short = list_concat(none, one_column);
    let long = list_concat(two_columns, three_columns);
    let all = list_concat(short, long);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let columns_color = app_code_highlight_color_third();
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a left edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "a right edge, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  function counted(text) {
    "how many columns are between, as a chip in the columns colour";
    let chip = app_code_explain_number_colored(text, columns_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  function between_worked(left, right) {
    "left2 - right as one code chip, the second rectangle's left edge in the start colour and the first's right edge in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [left, spaced_minus, right],
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
  function rectangles_draw(left, right2) {
    "the first rectangle, 1 to 3 across and 1 to 3 down, and the second from left2 to right2 across and 2 to 4 down, on a grid ending one column right of the second - How many rows are between two rectangles turned on its side";
    let columns = right2 + 1;
    let first_edges = [1, 3, 1, 3];
    let second_edges = [left, right2, 2, 4];
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        columns,
        5,
        first_edges,
        second_edges,
        [
          [1, 3],
          [left, right2],
        ],
        null,
        null,
        columns_color,
        null,
      );
    }
    return draw;
  }
  let right_arrow = app_code_arrow_inline_draw(0);
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
    " goes across ",
    right_arrow,
    " from ",
    v,
    " to ",
    v2,
    ", and the ",
    second,
    " goes across from ",
    v3,
    " to ",
    v4,
  ]);
  let apart_draw = rectangles_draw(4, 6);
  let how_said = app_code_explain_said([
    "How many columns are between the ",
    first_rectangle,
    " and the ",
    second,
    "?",
  ]);
  let like_said = [
    "Across, it is like the rows between two rectangles going down",
  ];
  let compare_said = app_code_explain_said([
    "We subtract the right of the ",
    first_rectangle,
    " from the left of the ",
    second,
    ":",
  ]);
  let v5 = between_worked("4", "3");
  let v6 = counted("1");
  let apart_worked = app_code_explain_said(["", v5, " is ", v6]);
  let v7 = counted("1");
  let apart_so = app_code_explain_said(["So ", v7, " column is between them"]);
  let first = one("first");
  let only_said = app_code_explain_said([
    "The left of the ",
    first,
    ", the right of the ",
    second,
    ", and where they go down do not affect the answer",
  ]);
  let v8 = from("3");
  let v9 = till("5");
  let touching_suppose = app_code_explain_said([
    "But suppose the ",
    second_rectangle,
    " goes across from ",
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
    " columns are between them: the ",
    second,
    " starts just where the ",
    first_one,
    " ends, at ",
    v13,
  ]);
  let v14 = from(l);
  let v15 = till(r);
  let v16 = from(l2);
  let v17 = till(r2);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes across from ",
    v14,
    " to ",
    v15,
    ", and the ",
    second,
    " goes across from ",
    v16,
    " to ",
    v17,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that finds how many columns are between the rectangles:",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "How many columns are between two rectangles",
    title_code: line_between,
    names,
    values_get,
    example_values: [1, 3, 4, 6],
    step,
    remember_lesson: app_code_lesson_statement_name_rectangles_rows_between,
    remember_parts: ["we can find how many rows are between two rectangles:"],
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
      [[l, "1"], start_color],
      [[r, "3"], end_color],
      [[l2, "4"], start_color],
      [[r2, "6"], end_color],
      [[between, "1"], columns_color],
    ],
  });
  return lesson;
}
