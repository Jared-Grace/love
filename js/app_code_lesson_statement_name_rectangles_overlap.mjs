import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
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
import { range } from "./range.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_square_grid } from "./app_code_square_grid.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_meetings_overlap } from "./app_code_lesson_statement_name_meetings_overlap.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_overlap() {
  arguments_assert(arguments, 0);
  ("whether two rectangles overlap: let across = left < right; let down = top < bottom; let overlap = across && down; - picked by the human 2026-10-04 from a list of next lessons. In DSA it is the rectangle overlap check, used to find whether two boxes on a screen or in a game touch, and it is the interval check of Do two meetings overlap done once across and once down.");
  ("It starts from the shared part's four edges rather than from the two rectangles, because the rectangles would start eight names and the shared part's edges are found the way Do two meetings overlap finds a start and an end, so that lesson is the reminder and the new idea is only that a rectangle needs the check twice, joined by &&. Not picked: let across = l1 < r2 && l2 < r1;, which is longer than 30 characters and is a form of the check no lesson teaches.");
  ("Down counts from the top, as the rows of the grid lessons do, so top < bottom reads the same way as left < right.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two pairs that overlap, one that overlaps down but not across and one that overlaps across but not down, so neither check alone is enough; one of the two that do not overlap only touches, its edges equal.");
  ("Left and top are starts and wear the start colour, right and bottom are ends and wear the end colour, as in the meetings lessons. The pictures draw the two rectangles in two more colours and the part they share in the overlap colour of How long two meetings overlap.");
  ("The writing is a first draft by Claude, 2026-10-04, not yet the human's.");
  let names = ["left", "right", "top", "bottom"];
  let left = list_first(names);
  let right = list_second(names);
  let top = list_get(names, 2);
  let bottom = list_get(names, 3);
  let across = "across";
  let down = "down";
  let overlap = "overlap";
  let less = js_operator_less_than_symbol();
  let and_op = js_operator_and_symbol();
  let check_across = js_code_binary_spaced_nb(left, less, right);
  let line_across = js_code_let_statement(across, check_across);
  let check_down = js_code_binary_spaced_nb(top, less, bottom);
  let line_down = js_code_let_statement(down, check_down);
  let both = js_code_binary_spaced_nb(across, and_op, down);
  let line_overlap = js_code_let_statement(overlap, both);
  let step = {
    middle: [line_across, line_down, line_overlap],
    logged: [overlap],
  };
  let start = "start";
  let end = "end";
  let s = "s1";
  let e = "e1";
  let s2 = "s2";
  let e2 = "e2";
  let later = js_code_call_args("Math.max", [s, s2]);
  let meeting_start = js_code_let_statement(start, later);
  let earlier = js_code_call_args("Math.min", [e, e2]);
  let meeting_end = js_code_let_statement(end, earlier);
  let meeting_check = js_code_binary_spaced_nb(start, less, end);
  let meeting_overlap = js_code_let_statement(overlap, meeting_check);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 9],
      [e, 11],
      [s2, 10],
      [e2, 12],
    ],
    [meeting_start, meeting_end, meeting_overlap],
    [overlap],
  );
  function values_get() {
    "two pairs that overlap, one that overlaps only down and one that overlaps only across, in a fresh order each screen";
    let overlapping = list_shuffle_take(
      [
        [2, 4, 1, 3],
        [1, 3, 2, 5],
        [3, 5, 0, 2],
      ],
      2,
    );
    let not_across = list_shuffle_take(
      [
        [4, 4, 1, 3],
        [5, 3, 1, 2],
      ],
      1,
    );
    let not_down = list_shuffle_take(
      [
        [1, 3, 3, 3],
        [2, 4, 4, 1],
      ],
      1,
    );
    let separate = list_concat(not_across, not_down);
    let all = list_concat(overlapping, separate);
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
    "a starting edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "an ending edge, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  let spaced_less = js_code_binary_spaced_nb("", less, "");
  function check_worked(low, high) {
    "low < high as one code chip, the starting edge in the start colour and the ending edge in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_less, high],
      [start_color, plain, end_color],
    );
    return chip;
  }
  function rectangles_draw(rows, columns, first, second) {
    "a picture of two rectangles of squares, each given as [top row, bottom row, left column, right column], the squares they share in the overlap colour";
    function inside(rectangle, row, column) {
      let [row_from, row_to, column_from, column_to] = rectangle;
      let r =
        less_than_equal(row_from, row) &&
        less_than_equal(row, row_to) &&
        less_than_equal(column_from, column) &&
        less_than_equal(column, column_to);
      return r;
    }
    function draw(box) {
      let marks = [];
      for (let row of range(rows)) {
        for (let column of range(columns)) {
          let in_first = inside(first, row, column);
          let in_second = inside(second, row, column);
          if (in_first && in_second) {
            list_add(marks, [row, column, "", overlap_color]);
          } else if (in_first) {
            list_add(marks, [row, column, "", first_color]);
          } else if (in_second) {
            list_add(marks, [row, column, "", second_color]);
          }
        }
      }
      app_code_square_grid(box, rows, columns, false, marks);
    }
    return draw;
  }
  let crossing_draw = rectangles_draw(4, 4, [0, 2, 0, 2], [1, 3, 1, 3]);
  let stacked_draw = rectangles_draw(5, 4, [0, 1, 0, 2], [3, 4, 1, 3]);
  let and_chip = app_code_explain_number_colored(and_op, plain);
  let v = from("2");
  let v2 = till("4");
  let draw = app_code_explain_said([
    "Suppose the shared part goes across from ",
    v,
    " to ",
    v2,
  ]);
  let v3 = from("1");
  let v4 = till("3");
  let draw2 = app_code_explain_said(["And it goes down from ", v3, " to ", v4]);
  let v5 = check_worked("2", "4");
  let draw3 = app_code_explain_said(["", v5, ", so they overlap across"]);
  let v6 = check_worked("1", "3");
  let draw4 = app_code_explain_said(["", v6, ", so they overlap down"]);
  let draw5 = app_code_explain_said([
    "So we need both: across ",
    and_chip,
    " down",
  ]);
  let v7 = from(left);
  let v8 = till(right);
  let v9 = from(top);
  let v10 = till(bottom);
  let draw6 = app_code_explain_said([
    "Suppose the shared part goes across from ",
    v7,
    " to ",
    v8,
    ", and down from ",
    v9,
    " to ",
    v10,
  ]);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Do two rectangles overlap",
    title_code: line_overlap,
    names,
    values_get,
    example_values: [2, 4, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_meetings_overlap,
    remember_parts: ["we can check whether two meetings overlap:"],
    remember_lines,
    explain: [
      ["Two rectangles can overlap too:"],
      crossing_draw,
      ["Across, they overlap like two meetings"],
      ["Down, they also overlap like two meetings"],
      ["The part they share is a rectangle too"],
      app_code_explain_container_next,
      draw,
      draw2,
      draw3,
      draw4,
      ["So the rectangles overlap"],
      app_code_explain_container_next,
      ["But these rectangles overlap across, and not down:"],
      stacked_draw,
      ["So they do not overlap"],
      draw5,
      app_code_explain_container_next,
      draw6,
      ["Here is code that checks whether the two rectangles overlap:"],
    ],
    decoys: null,
    example_pointers: [
      [[left, top, "2", "1"], start_color],
      [[right, bottom, "4", "3"], end_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
