import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_rectangles_edges_draw } from "./app_code_rectangles_edges_draw.mjs";
import { app_code_arrow_inline_draw } from "./app_code_arrow_inline_draw.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rectangles_overlap } from "./app_code_lesson_statement_name_rectangles_overlap.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_shared_squares() {
  arguments_assert(arguments, 0);
  ("how many squares two overlapping rectangles share: let width = right - left; let height = bottom - top; let area = width * height; - chosen by Claude 2026-10-04, when the human asked for the next lesson after Do two rectangles overlap. In DSA it is the area of the intersection of two rectangles, used to measure how much two boxes cover each other.");
  ("It starts from the shared part's four edges, as Do two rectangles overlap does, so that lesson is the reminder and the new idea is only that a width times a height counts the squares. Every pair asked overlaps, so width and height are never negative; the Math.max floor of How long two meetings overlap, which a pair that does not overlap needs, is left for a later lesson, so this one teaches one step. Not picked: let area = Math.max(right - left, 0) * Math.max(bottom - top, 0);, which is far past 30 characters and asks two new ideas at once.");
  ("Each screen asks four shared parts of four different sizes, so the four answers differ.");
  ("Left and top are starts and wear the start colour, right and bottom are ends and wear the end colour, as in Do two rectangles overlap. Width, height and area are sizes of the shared part and wear its colour, the overlap colour.");
  ("The writing is a first draft by Claude, 2026-10-04, not yet the human's. The picture and the numbers are the one example of Do two rectangles overlap, whose shared part is 1 square wide and 2 tall.");
  let names = ["left", "right", "top", "bottom"];
  let left = list_first(names);
  let right = list_second(names);
  let top = list_get(names, 2);
  let bottom = list_get(names, 3);
  let width = "width";
  let height = "height";
  let area = "area";
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let across = js_code_binary_spaced_nb(right, minus, left);
  let line_width = js_code_let_statement(width, across);
  let down = js_code_binary_spaced_nb(bottom, minus, top);
  let line_height = js_code_let_statement(height, down);
  let product = js_code_binary_spaced_nb(width, times, height);
  let line_area = js_code_let_statement(area, product);
  let step = {
    middle: [line_width, line_height, line_area],
    logged: [area],
  };
  let less = js_operator_less_than_symbol();
  let and_op = js_operator_and_symbol();
  let overlap = "overlap";
  let across_name = "across";
  let down_name = "down";
  let check_across = js_code_binary_spaced_nb(left, less, right);
  let line_across = js_code_let_statement(across_name, check_across);
  let check_down = js_code_binary_spaced_nb(top, less, bottom);
  let line_down = js_code_let_statement(down_name, check_down);
  let both = js_code_binary_spaced_nb(across_name, and_op, down_name);
  let line_overlap = js_code_let_statement(overlap, both);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [left, 2],
      [right, 3],
      [top, 1],
      [bottom, 3],
    ],
    [line_across, line_down, line_overlap],
    [overlap],
  );
  function values_get() {
    "four shared parts of four different sizes, in a fresh order each screen";
    let all = list_shuffle_take(
      [
        [1, 3, 0, 2],
        [2, 5, 1, 2],
        [0, 1, 2, 4],
        [1, 4, 0, 2],
        [2, 3, 1, 2],
      ],
      4,
    );
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
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
  function size(text) {
    "a size of the shared part, as a chip in the overlap colour";
    let chip = app_code_explain_number_colored(text, overlap_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  function length_worked(high, low) {
    "high - low as one code chip, the ending edge in the end colour and the starting edge in the start colour";
    let chip = app_code_explain_code_colored_inline(
      [high, spaced_minus, low],
      [end_color, plain, start_color],
    );
    return chip;
  }
  let spaced_times = js_code_binary_spaced_nb("", times, "");
  let product_worked = app_code_explain_code_colored_inline(
    ["1", spaced_times, "2"],
    [overlap_color, plain, overlap_color],
  );
  function crossing_draw(box) {
    "the two rectangles of Do two rectangles overlap, their shared part 2 to 3 across and 1 to 3 down";
    app_code_rectangles_edges_draw(
      box,
      4,
      4,
      [0, 3, 0, 3],
      [2, 4, 1, 4],
      [2, 3],
      [1, 3],
    );
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let down_arrow = app_code_arrow_inline_draw(90);
  let shared_word = app_code_explain_word_colored("shared", overlap_color);
  let share_word = app_code_explain_word_colored("share", overlap_color);
  let v = from("2");
  let v2 = till("3");
  let v3 = from("1");
  let v4 = till("3");
  let draw = app_code_explain_said([
    "The ",
    shared_word,
    " part goes across ",
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
  let draw2 = app_code_explain_said([
    "How many squares do they ",
    share_word,
    "?",
  ]);
  let v5 = size("2");
  let draw3 = app_code_explain_said(["We can count them: ", v5]);
  let v6 = length_worked("3", "2");
  let v7 = size("1");
  let draw4 = app_code_explain_said([
    "Across ",
    right_arrow,
    ", ",
    v6,
    " is ",
    v7,
    ", so the ",
    shared_word,
    " part is ",
    v7,
    " square wide",
  ]);
  let v8 = length_worked("3", "1");
  let v9 = size("2");
  let draw5 = app_code_explain_said([
    "Down ",
    down_arrow,
    ", ",
    v8,
    " is ",
    v9,
    ", so the ",
    shared_word,
    " part is ",
    v9,
    " squares tall",
  ]);
  let v10 = size("2");
  let draw6 = app_code_explain_said([
    "",
    product_worked,
    " is ",
    v10,
    ", so they ",
    share_word,
    " ",
    v10,
    " squares",
  ]);
  let v11 = from(left);
  let v12 = till(right);
  let v13 = from(top);
  let v14 = till(bottom);
  let draw7 = app_code_explain_said([
    "Suppose the ",
    shared_word,
    " part goes across ",
    right_arrow,
    " from ",
    v11,
    " to ",
    v12,
    ", and down ",
    down_arrow,
    " from ",
    v13,
    " to ",
    v14,
  ]);
  let draw8 = app_code_explain_said([
    "Here is code that finds how many squares the two rectangles ",
    share_word,
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "How many squares two rectangles share",
    title_code: line_area,
    names,
    values_get,
    example_values: [2, 3, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_rectangles_overlap,
    remember_parts: ["we can check whether two rectangles overlap:"],
    remember_lines,
    explain: [
      ["Here are two rectangles that overlap:"],
      crossing_draw,
      draw,
      draw2,
      draw3,
      app_code_explain_container_next,
      ["We can also find it with numbers"],
      draw4,
      draw5,
      ["A rectangle has width times height squares:"],
      draw6,
      app_code_explain_container_next,
      draw7,
      draw8,
    ],
    decoys: null,
    example_pointers: [
      [[left, top], start_color],
      [[right, bottom], end_color],
      [[width, height, area], overlap_color],
    ],
  });
  return lesson;
}
