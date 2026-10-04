import { app_code_rectangles_edges_colored_draw } from "./app_code_rectangles_edges_colored_draw.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
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
import { app_code_arrow_inline_draw } from "./app_code_arrow_inline_draw.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_grid_inside } from "./app_code_lesson_statement_name_grid_inside.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_square_in_rectangle() {
  arguments_assert(arguments, 0);
  ("whether a square is inside a rectangle: let in_x = left <= x && x < right; let in_y = top <= y && y < bottom; let inside = in_x && in_y; - picked by the human 2026-10-04 from a list of next lessons. In DSA it is the check of whether a point lies in a box, used to find which box on a screen a tap landed in, and it is Inside the grid with the 0 replaced by the box's left and top edges.");
  ("Inside the grid is the reminder, so the new idea is only that the low bound is an edge rather than 0. The rectangle's edges are numbered as the lines between squares, as in Do two rectangles overlap, and a square is named by the line on its left, x, and the line above it, y, so it covers x to x + 1: it is inside when left <= x and x + 1 <= right, which is x < right. The writing shows the square on the right edge, where x <= right would be wrong.");
  ("Across first and then down, as Do two rectangles overlap does, so in_x comes before in_y. The first two lines are longer than 30 characters; only the title line has to fit, and let inside = in_x && in_y; does.");
  ("x and y, asked by the human 2026-10-04 after a student asked about the rows and columns: the first draft said the square was in column c and row r, the grid lessons' seats, while every number in the picture is a line, so one number was read two ways. Now only lines are spoken of, and the square is where its top left corner is. Not picked: keeping c and r and explaining that column c sits between line c and line c + 1, which is the two readings again; and numbering the squares rather than the lines, which would break left < right from Do two rectangles overlap.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two squares inside and two outside; the squares outside are next to an edge, some across and some down, and some on the right or bottom edge itself, so x <= right would be caught.");
  ("Left and top are starts and wear the start colour, right and bottom are ends and wear the end colour, as in the rectangle lessons. The square and its x and y wear the overlap colour, the colour the picture fills it with.");
  ("The rectangle is shown alone first and the square added after, with red lines at its left and top, reworded so by the human 2026-10-04; their first line still read Here is a rectangle, and a 1 by 1 square, over a picture with no square, so the square was left out of it, as the second line brings it in.");
  ("The writing was a first draft by Claude 2026-10-04, then reworded by the human the same day, who asked for the rectangle to be coloured: the word wears the colour the picture fills the rectangle with, the first rectangle's colour from Do two rectangles overlap.");
  let names = ["left", "right", "top", "bottom", "x", "y"];
  let left = list_get(names, 0);
  let right = list_get(names, 1);
  let top = list_get(names, 2);
  let bottom = list_get(names, 3);
  let x = list_get(names, 4);
  let y = list_get(names, 5);
  let in_x = "in_x";
  let in_y = "in_y";
  let inside = "inside";
  let less = js_operator_less_than_symbol();
  let at_most = js_operator_less_than_equal_symbol();
  let and_op = js_operator_and_symbol();
  let check_x = js_code_between_symbols(left, at_most, x, less, right);
  let line_x = js_code_let_statement(in_x, check_x);
  let check_y = js_code_between_symbols(top, at_most, y, less, bottom);
  let line_y = js_code_let_statement(in_y, check_y);
  let both = js_code_binary_spaced_nb(in_x, and_op, in_y);
  let line_inside = js_code_let_statement(inside, both);
  let step = {
    middle: [line_x, line_y, line_inside],
    logged: [inside],
  };
  let rows = "rows";
  let cols = "cols";
  let ok = "ok";
  let r = "r";
  let c = "c";
  let in_r = "in_r";
  let in_c = "in_c";
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
    "the line the square starts on, across or down, or a name holding one, as a chip in the square's colour";
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
    "low < high as one code chip, the square's x in its colour and the edge in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_less, high],
      [square_color, plain, end_color],
    );
    return chip;
  }
  function rectangle_draw(marked, corner) {
    "the rectangle from 1 to 4 across and 1 to 3 down, with the marked squares filled in the square's colour and the corner's lines drawn in it, either null for none";
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        4,
        [1, 4, 1, 3],
        [0, 0, 0, 0],
        [1, 4],
        [1, 3],
        marked,
        square_color,
        corner,
      );
    }
    return draw;
  }
  function square_draw(across, down) {
    "the rectangle with one square filled, its lines left plain";
    let draw = rectangle_draw([across, across + 1, down, down + 1], null);
    return draw;
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let down_arrow = app_code_arrow_inline_draw(90);
  let square_word = app_code_explain_word_colored("square", square_color);
  let rectangle_color = app_code_highlight_color_fourth();
  let rectangle_word = app_code_explain_word_colored(
    "rectangle",
    rectangle_color,
  );
  let one = app_code_explain_number_colored("1", plain);
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let draw = app_code_explain_said(["Here is a ", rectangle_word, ":"]);
  let same_said = app_code_explain_said([
    "Here is the same ",
    rectangle_word,
    ", but also a ",
    one,
    " by ",
    one,
    " ",
    square_word,
  ]);
  let v = from("1");
  let v2 = till("4");
  let v3 = from("1");
  let v4 = till("3");
  let draw2 = app_code_explain_said([
    "The ",
    rectangle_word,
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
  let v5 = at("2");
  let v6 = at("2");
  let draw3 = app_code_explain_said([
    "The left of the ",
    square_word,
    " is ",
    v5,
    " across",
  ]);
  let top_said = app_code_explain_said([
    "The top of the ",
    square_word,
    " is ",
    v6,
    " down",
  ]);
  let seen_said = app_code_explain_said([
    "We can see that the ",
    square_word,
    " is inside the ",
    rectangle_word,
  ]);
  let numbers_said = app_code_explain_said([
    "How can we tell that the ",
    square_word,
    " is inside the ",
    rectangle_word,
    " using numbers?",
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
    " is inside the ",
    rectangle_word,
  ]);
  let v9 = at("4");
  let draw7 = app_code_explain_said([
    "But suppose the ",
    square_word,
    " starts at line ",
    v9,
    " across:",
  ]);
  let v10 = till("4");
  let draw8 = app_code_explain_said([
    "The ",
    square_word,
    " starts on the right edge of the ",
    rectangle_word,
    ", ",
    v10,
    ", so it is outside of the ",
    rectangle_word,
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
  let v16 = at(x);
  let v17 = at(y);
  let draw10 = app_code_explain_said([
    "Suppose the ",
    rectangle_word,
    " goes across from ",
    v12,
    " to ",
    v13,
    ", and down from ",
    v14,
    " to ",
    v15,
    ", and the ",
    square_word,
    " starts at line ",
    v16,
    " across and line ",
    v17,
    " down",
  ]);
  let draw11 = app_code_explain_said([
    "Here is code that checks whether the ",
    square_word,
    " is inside the ",
    rectangle_word,
    ":",
  ]);
  let draw_size = app_code_explain_said([
    "Because the ",
    square_word,
    " is ",
    one,
    " by ",
    one,
    " we only need the location of the ",
    square_word,
    ", not the size of the ",
    square_word,
    " or another point of the ",
    square_word,
  ]);
  let rectangle_alone = rectangle_draw(null, null);
  let v18 = rectangle_draw([2, 3, 2, 3], [2, 2]);
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
      draw2,
      rectangle_alone,
      same_said,
      draw3,
      top_said,
      v18,
      seen_said,
      numbers_said,
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
      draw_size,
      draw11,
    ],
    decoys: null,
    example_pointers: [
      [[left, top, "1"], start_color],
      [[right, bottom, "4", "3"], end_color],
      [[x, y, "2"], square_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
