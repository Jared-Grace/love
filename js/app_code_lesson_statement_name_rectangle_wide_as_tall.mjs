import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
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
import { app_code_highlight_color_sixth } from "./app_code_highlight_color_sixth.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_rectangles_edges_colored_draw } from "./app_code_rectangles_edges_colored_draw.mjs";
import { app_code_arrow_inline_draw } from "./app_code_arrow_inline_draw.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_shared_squares } from "./app_code_lesson_statement_name_shared_squares.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangle_wide_as_tall() {
  arguments_assert(arguments, 0);
  ("whether a rectangle is as wide as it is tall: let width = right - left; let height = bottom - top; let same = width === height; - picked by Claude 2026-10-06, when the human asked for a next rectangle lesson that stays small, after Squares two rectangles cover together, from their edges was put off until functions are taught. In DSA it is the check of whether a box is a square, used to tell a square grid or tile from any other.");
  ("Offered first: whether a square at x and y is inside a rectangle, which turned out to be Is a square inside a rectangle already. Not picked: a rectangle's centre, (left + right) / 2, which is a half whenever the width is odd; and the squares around a rectangle's edge, 2 * (width + height) - 4, which needs parentheses no rectangle lesson has shown.");
  ("Named same and not square, because in these lessons a square is one of the grid's 1 by 1 squares, and a rectangle that is a square would read as a rectangle that is one of them; the words say as wide as it is tall for the same reason.");
  ("How many squares two rectangles share is the reminder, because its first two lines are this lesson's first two; the new idea is only comparing the two with ===, which Are two names equal taught. The writing shows a rectangle whose right and bottom edges differ though it is as wide as it is tall, so comparing edges in place of sizes is shown wrong.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two rectangles as wide as they are tall and two that are not; among those that are not is one whose right and bottom edges are equal, so comparing edges would be caught.");
  ("Left and top are starts and wear the start colour, right and bottom are ends and wear the end colour, as in the rectangle lessons; width and height wear a colour of their own, the length colour of Squares shared when rectangles may not overlap.");
  ("The writing is a first draft by Claude 2026-10-06.");
  let names = ["left", "right", "top", "bottom"];
  let left = list_get(names, 0);
  let right = list_get(names, 1);
  let top = list_get(names, 2);
  let bottom = list_get(names, 3);
  let width = "width";
  let height = "height";
  let same = "same";
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let equal_symbol = js_operator_triple_equal_symbol();
  let across = js_code_binary_spaced_nb(right, minus, left);
  let line_width = js_code_let_statement(width, across);
  let down = js_code_binary_spaced_nb(bottom, minus, top);
  let line_height = js_code_let_statement(height, down);
  let compared = js_code_binary_spaced_nb(width, equal_symbol, height);
  let line_same = js_code_let_statement(same, compared);
  let step = {
    middle: [line_width, line_height, line_same],
    logged: [same],
  };
  let area = "area";
  let product = js_code_binary_spaced_nb(width, times, height);
  let line_area = js_code_let_statement(area, product);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [left, 2],
      [right, 3],
      [top, 1],
      [bottom, 3],
    ],
    [line_width, line_height, line_area],
    [area],
  );
  function values_get() {
    "rectangles as left, right, top, bottom: two as wide as they are tall and two not, one of those with its right and bottom edges equal, in a fresh order each screen";
    let alike = list_shuffle_take(
      [
        [1, 3, 0, 2],
        [0, 3, 1, 4],
        [2, 3, 2, 3],
        [1, 4, 0, 3],
      ],
      2,
    );
    let edges_equal = list_shuffle_take(
      [
        [1, 3, 0, 3],
        [0, 4, 2, 4],
      ],
      1,
    );
    let other = list_shuffle_take(
      [
        [0, 4, 1, 3],
        [2, 3, 1, 4],
        [0, 2, 2, 3],
      ],
      1,
    );
    let unlike = list_concat(edges_equal, other);
    let all = list_concat(alike, unlike);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
  let rectangle_color = app_code_highlight_color_fourth();
  let length_color = app_code_highlight_color_sixth();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a left or top edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "a right or bottom edge, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  function length(text) {
    "a width or a height, or a name holding one, as a chip in the length colour";
    let chip = app_code_explain_number_colored(text, length_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  let spaced_equal = js_code_binary_spaced_nb("", equal_symbol, "");
  function minus_worked(end, start) {
    "end - start as one code chip, each edge in its colour";
    let chip = app_code_explain_code_colored_inline(
      [end, spaced_minus, start],
      [end_color, plain, start_color],
    );
    return chip;
  }
  function equal_worked(first, second) {
    "first === second as one code chip, both lengths in the length colour";
    let chip = app_code_explain_code_colored_inline(
      [first, spaced_equal, second],
      [length_color, plain, length_color],
    );
    return chip;
  }
  function rectangle_draw(edges, across, down) {
    "one rectangle with the given edges on a 5 by 5 grid, its edge numbers coloured";
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        5,
        edges,
        [0, 0, 0, 0],
        [across],
        [down],
        null,
        overlap_color,
        null,
      );
    }
    return draw;
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let down_arrow = app_code_arrow_inline_draw(90);
  let rectangle_word = app_code_explain_word_colored(
    "rectangle",
    rectangle_color,
  );
  let width_word = app_code_explain_word_colored(width, length_color);
  let height_word = app_code_explain_word_colored(height, length_color);
  let is_true = app_code_explain_number_colored("true", plain);
  function goes_said(start_across, end_across, start_down, end_down) {
    "The rectangle goes across from start_across to end_across, and down from start_down to end_down";
    let v = from(start_across);
    let v2 = till(end_across);
    let v3 = from(start_down);
    let v4 = till(end_down);
    let said = app_code_explain_said([
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
    return said;
  }
  function size_said(word, end, start, result) {
    "The width or height is end - start, which is result";
    let v = minus_worked(end, start);
    let v2 = length(result);
    let said = app_code_explain_said([
      "The ",
      word,
      " is ",
      v,
      ", which is ",
      v2,
    ]);
    return said;
  }
  let first_draw = rectangle_draw([1, 3, 1, 3], [1, 3], [1, 3]);
  let question_said = app_code_explain_said([
    "Is the ",
    rectangle_word,
    " as wide as it is tall?",
  ]);
  let v = equal_worked("2", "2");
  let first_answer = app_code_explain_said([
    "",
    v,
    " is ",
    is_true,
    ", so the ",
    rectangle_word,
    " is as wide as it is tall",
  ]);
  let moved_draw = rectangle_draw([0, 2, 1, 3], [0, 2], [1, 3]);
  let v2 = till("2");
  let v3 = till("3");
  let edges_said = app_code_explain_said([
    "Its right edge ",
    v2,
    " and its bottom edge ",
    v3,
    " are not equal",
  ]);
  let v4 = equal_worked("2", "2");
  let moved_answer = app_code_explain_said([
    "But ",
    v4,
    " is ",
    is_true,
    ", so it is still as wide as it is tall",
  ]);
  let compare_said = app_code_explain_said([
    "So we compare the ",
    width_word,
    " and the ",
    height_word,
    ", not the edges",
  ]);
  let v5 = from(left);
  let v6 = till(right);
  let v7 = from(top);
  let v8 = till(bottom);
  let names_said = app_code_explain_said([
    "Suppose the ",
    rectangle_word,
    " goes across from ",
    v5,
    " to ",
    v6,
    ", and down from ",
    v7,
    " to ",
    v8,
  ]);
  let v9 = goes_said("1", "3", "1", "3");
  let v10 = size_said(width_word, "3", "1", "2");
  let v11 = size_said(height_word, "3", "1", "2");
  let draw2 = app_code_explain_said([
    "But suppose the ",
    rectangle_word,
    " moves left by one square:",
  ]);
  let v12 = goes_said("0", "2", "1", "3");
  let v13 = size_said(width_word, "2", "0", "2");
  let v14 = size_said(height_word, "3", "1", "2");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Is a rectangle as wide as it is tall",
    title_code: line_same,
    names,
    values_get,
    example_values: [1, 3, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_shared_squares,
    remember_parts: ["we can find how many squares two rectangles share:"],
    remember_lines,
    explain: [
      v9,
      first_draw,
      question_said,
      app_code_explain_container_next,
      v10,
      v11,
      first_answer,
      app_code_explain_container_next,
      draw2,
      v12,
      moved_draw,
      edges_said,
      v13,
      v14,
      moved_answer,
      compare_said,
      app_code_explain_container_next,
      names_said,
      [
        "Here is code that checks whether a rectangle is as wide as it is tall:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [[left, top, "1"], start_color],
      [[right, bottom, "3"], end_color],
      [[width, height, "2"], length_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
