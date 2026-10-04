import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_between_symbols } from "./js_code_between_symbols.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_rectangles_edges_marked_draw } from "./app_code_rectangles_edges_marked_draw.mjs";
import { app_code_arrow_inline_draw } from "./app_code_arrow_inline_draw.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_grid_inside } from "./app_code_lesson_statement_name_grid_inside.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_square_in_rectangle() {
  arguments_assert(arguments, 0);
  ("whether a square is inside a rectangle: let in_c = left <= c && c < right; let in_r = top <= r && r < bottom; let inside = in_c && in_r; - picked by the human 2026-10-04 from a list of next lessons. In DSA it is the check of whether a point lies in a box, used to find which box on a screen a tap landed in, and it is Inside the grid with the 0 replaced by the box's left and top edges.");
  ("Inside the grid is the reminder, so the new idea is only that the low bound is an edge rather than 0. The rectangle's edges are numbered as the lines between squares, as in Do two rectangles overlap, and a square is numbered by the line on its left and the line above it, so square c covers c to c + 1: it is inside when left <= c and c + 1 <= right, which is c < right. The writing shows the square on the right edge, where c <= right would be wrong.");
  ("Across first and then down, as Do two rectangles overlap does, so in_c comes before in_r. The first two lines are longer than 30 characters; only the title line has to fit, and let inside = in_c && in_r; does. Not picked: the names x and y, which no lesson uses yet, where c and r are the grid lessons' own.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two squares inside and two outside; the squares outside are next to an edge, some by their column and some by their row, and some on the right or bottom edge itself, so c <= right would be caught.");
  ("Left and top are starts and wear the start colour, right and bottom are ends and wear the end colour, as in the rectangle lessons. The square and its column and row wear the overlap colour, the colour the picture fills it with.");
  ("The writing is a first draft by Claude, 2026-10-04, not yet the human's.");
  let names = ["left", "right", "top", "bottom", "c", "r"];
  let left = list_get(names, 0);
  let right = list_get(names, 1);
  let top = list_get(names, 2);
  let bottom = list_get(names, 3);
  let c = list_get(names, 4);
  let r = list_get(names, 5);
  let in_c = "in_c";
  let in_r = "in_r";
  let inside = "inside";
  let less = js_operator_less_than_symbol();
  let at_most = js_operator_less_than_equal_symbol();
  let and_op = js_operator_and_symbol();
  let check_c = js_code_between_symbols(left, at_most, c, less, right);
  let line_c = js_code_let_statement(in_c, check_c);
  let check_r = js_code_between_symbols(top, at_most, r, less, bottom);
  let line_r = js_code_let_statement(in_r, check_r);
  let both = js_code_binary_spaced_nb(in_c, and_op, in_r);
  let line_inside = js_code_let_statement(inside, both);
  let step = {
    middle: [line_c, line_r, line_inside],
    logged: [inside],
  };
  let rows = "rows";
  let cols = "cols";
  let ok = "ok";
  let grid_r = js_code_between_symbols("0", at_most, r, less, rows);
  let grid_line_r = js_code_let_statement(in_r, grid_r);
  let grid_c = js_code_between_symbols("0", at_most, c, less, cols);
  let grid_line_c = js_code_let_statement(in_c, grid_c);
  let grid_both = js_code_binary_spaced_nb(in_r, and_op, in_c);
  let grid_line_ok = js_code_let_statement(ok, grid_both);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [r, 2],
      [c, 1],
      [rows, 4],
      [cols, 3],
    ],
    [grid_line_r, grid_line_c, grid_line_ok],
    [ok],
  );
  function values_get() {
    "two squares inside and two outside, in a fresh order each screen";
    let insides = list_shuffle_take(
      [
        [0, 3, 1, 4, 0, 3],
        [2, 5, 0, 2, 4, 1],
        [1, 3, 2, 4, 2, 2],
        [0, 2, 0, 3, 1, 0],
      ],
      2,
    );
    let outsides = list_shuffle_take(
      [
        [1, 4, 1, 3, 4, 2],
        [0, 3, 1, 4, 1, 4],
        [2, 5, 0, 2, 1, 1],
        [1, 3, 2, 4, 2, 1],
      ],
      2,
    );
    let all = list_concat(insides, outsides);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let square_color = app_code_highlight_color_third();
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
  function at(text) {
    "the square's column or row, or a name holding one, as a chip in the square's colour";
    let chip = app_code_explain_number_colored(text, square_color);
    return chip;
  }
  let spaced_at_most = js_code_binary_spaced_nb("", at_most, "");
  let spaced_less = js_code_binary_spaced_nb("", less, "");
  let spaced_and = js_code_binary_spaced_nb("", and_op, "");
  function between_worked(low, middle, high) {
    "low <= middle && middle < high as one code chip, each number in the colour of the part it plays";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_at_most, middle, spaced_and, middle, spaced_less, high],
      [start_color, plain, square_color, plain, square_color, plain, end_color],
    );
    return chip;
  }
  function less_worked(low, high) {
    "low < high as one code chip, the square's column in its colour and the edge in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_less, high],
      [square_color, plain, end_color],
    );
    return chip;
  }
  function square_draw(column, row) {
    "the rectangle from 1 to 4 across and 1 to 3 down, with one square filled in the square's colour";
    function draw(box) {
      app_code_rectangles_edges_marked_draw(
        box,
        5,
        4,
        [1, 4, 1, 3],
        [0, 0, 0, 0],
        [1, 4],
        [1, 3],
        [column, column + 1, row, row + 1],
      );
    }
    return draw;
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let down_arrow = app_code_arrow_inline_draw(90);
  let square_word = app_code_explain_word_colored("square", square_color);
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let draw = app_code_explain_said([
    "Here is a rectangle, and a ",
    square_word,
    ":",
  ]);
  let v = from("1");
  let v2 = till("4");
  let v3 = from("1");
  let v4 = till("3");
  let draw2 = app_code_explain_said([
    "The rectangle goes across ",
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
  let v5 = at("2");
  let v6 = at("2");
  let draw3 = app_code_explain_said([
    "The ",
    square_word,
    " starts at line ",
    v5,
    " across and line ",
    v6,
    " down, so it is in column ",
    v5,
    " and row ",
    v6,
  ]);
  let v7 = between_worked("1", "2", "4");
  let draw4 = app_code_explain_said([
    "Across ",
    right_arrow,
    ", ",
    v7,
    " is ",
    is_true,
  ]);
  let v8 = between_worked("1", "2", "3");
  let draw5 = app_code_explain_said([
    "Down ",
    down_arrow,
    ", ",
    v8,
    " is ",
    is_true,
  ]);
  let draw6 = app_code_explain_said([
    "Both are ",
    is_true,
    ", so the ",
    square_word,
    " is inside the rectangle",
  ]);
  let v9 = at("4");
  let draw7 = app_code_explain_said([
    "But suppose the ",
    square_word,
    " is in column ",
    v9,
    ":",
  ]);
  let v10 = till("4");
  let draw8 = app_code_explain_said([
    "It starts on the right edge, ",
    v10,
    ", so it is outside",
  ]);
  let v11 = less_worked("4", "4");
  let less_chip = app_code_explain_number_colored(less, plain);
  let at_most_chip = app_code_explain_number_colored(at_most, plain);
  let draw9 = app_code_explain_said([
    "That is why we check with ",
    less_chip,
    " and not ",
    at_most_chip,
    ": ",
    v11,
    " is ",
    is_false,
  ]);
  let v12 = from(left);
  let v13 = till(right);
  let v14 = from(top);
  let v15 = till(bottom);
  let v16 = at(c);
  let v17 = at(r);
  let draw10 = app_code_explain_said([
    "Suppose the rectangle goes across from ",
    v12,
    " to ",
    v13,
    ", and down from ",
    v14,
    " to ",
    v15,
    ", and the ",
    square_word,
    " is in column ",
    v16,
    " and row ",
    v17,
  ]);
  let draw11 = app_code_explain_said([
    "Here is code that checks whether the ",
    square_word,
    " is inside the rectangle:",
  ]);
  let v18 = square_draw(2, 2);
  let v19 = square_draw(4, 2);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Is a square inside a rectangle",
    title_code: line_inside,
    names,
    values_get,
    example_values: [1, 4, 1, 3, 2, 2],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_inside,
    remember_parts: ["we can check whether a square is inside a grid:"],
    remember_lines,
    explain: [
      draw,
      v18,
      draw2,
      draw3,
      app_code_explain_container_next,
      draw4,
      draw5,
      draw6,
      app_code_explain_container_next,
      draw7,
      v19,
      draw8,
      draw9,
      app_code_explain_container_next,
      draw10,
      draw11,
    ],
    decoys: null,
    example_pointers: [
      [[left, top, "1"], start_color],
      [[right, bottom, "4", "3"], end_color],
      [[c, r, "2"], square_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
