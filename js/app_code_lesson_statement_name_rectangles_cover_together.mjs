import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_highlight_color_sixth } from "./app_code_highlight_color_sixth.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_rectangles_edges_colored_draw } from "./app_code_rectangles_edges_colored_draw.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_shared_squares } from "./app_code_lesson_statement_name_shared_squares.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_cover_together() {
  arguments_assert(arguments, 0);
  ("how many squares two rectangles cover together: let total = area1 + area2; let together = total - shared; - picked by Claude 2026-10-06, when the human asked for the next lesson after Where two rectangles together start and end going across. In DSA it is the area of the union of two rectangles, adding both areas and taking away the part counted twice, the idea called inclusion and exclusion.");
  ("Not picked: the size of the box around two rectangles, offered first as let width = right - left; which turned out to be How many squares two rectangles share again on other edges, so it teaches nothing new. Also not picked: one line, let together = area1 + area2 - shared; which is longer than a title line, and hides the step where the shared squares are counted twice.");
  ("It starts from the three areas, not from eight edges, so How many squares two rectangles share is the reminder and the new idea is only the subtraction. Each screen asks one pair that shares no square, where together is just the total, and three that share some, one of them a rectangle inside the other, where shared is the whole smaller area. The answers of a screen all differ.");
  ("area1 wears the first rectangle's colour, area2 the second's and shared the overlap colour, the colours the picture fills them with; total and together wear a colour of their own.");
  ("The writing is a first draft by Claude 2026-10-06.");
  let names = ["area1", "area2", "shared"];
  let area1 = list_get(names, 0);
  let area2 = list_get(names, 1);
  let shared = list_get(names, 2);
  let total = "total";
  let together = "together";
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let sum = js_code_binary_spaced_nb(area1, plus, area2);
  let line_total = js_code_let_statement(total, sum);
  let difference = js_code_binary_spaced_nb(total, minus, shared);
  let line_together = js_code_let_statement(together, difference);
  let step = {
    middle: [line_total, line_together],
    logged: [together],
  };
  let left = "left";
  let right = "right";
  let top = "top";
  let bottom = "bottom";
  let width = "width";
  let height = "height";
  let area = "area";
  let times = js_operator_asterisk_symbol();
  let across = js_code_binary_spaced_nb(right, minus, left);
  let line_width = js_code_let_statement(width, across);
  let down = js_code_binary_spaced_nb(bottom, minus, top);
  let line_height = js_code_let_statement(height, down);
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
    "areas as area1, area2, shared: one pair sharing no square and three sharing some, one of them a rectangle inside the other, in a fresh order each screen; every answer differs from every other";
    let apart = list_shuffle_take(
      [
        [4, 6, 0],
        [2, 3, 0],
      ],
      1,
    );
    let crossing = list_shuffle_take(
      [
        [4, 4, 1],
        [6, 4, 2],
        [6, 8, 3],
        [3, 4, 1],
      ],
      2,
    );
    let inside = list_shuffle_take([[9, 4, 4]], 1);
    let some = list_concat(crossing, inside);
    let all = list_concat(apart, some);
    list_shuffle(all);
    return all;
  }
  let overlap_color = app_code_highlight_color_third();
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  let sum_color = app_code_highlight_color_sixth();
  let plain = app_shared_color_code_background();
  function first_area(text) {
    "the first rectangle's squares, or a name holding them, as a chip in the colour the picture fills it with";
    let chip = app_code_explain_number_colored(text, first_color);
    return chip;
  }
  function second_area(text) {
    "the second rectangle's squares, or a name holding them, as a chip in the colour the picture fills it with";
    let chip = app_code_explain_number_colored(text, second_color);
    return chip;
  }
  function shared_area(text) {
    "the squares both rectangles cover, or a name holding them, as a chip in the overlap colour";
    let chip = app_code_explain_number_colored(text, overlap_color);
    return chip;
  }
  function counted(text) {
    "a total or the squares covered together as a chip in its own colour";
    let chip = app_code_explain_number_colored(text, sum_color);
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
  let spaced_plus = js_code_binary_spaced_nb("", plus, "");
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  let sum_worked = app_code_explain_code_colored_inline(
    ["4", spaced_plus, "6"],
    [first_color, plain, second_color],
  );
  let difference_worked = app_code_explain_code_colored_inline(
    ["10", spaced_minus, "2"],
    [sum_color, plain, overlap_color],
  );
  function rectangles_draw(box) {
    "the first rectangle, 1 to 3 across and down, 4 squares, and the second 2 to 4 across and 1 to 4 down, 6 squares, sharing the 2 squares of column 2";
    app_code_rectangles_edges_colored_draw(
      box,
      5,
      5,
      [1, 3, 1, 3],
      [2, 4, 1, 4],
      null,
      null,
      null,
      overlap_color,
      null,
    );
  }
  let first_rectangle = one("first rectangle");
  let first = one("first");
  let second = two("second");
  let shared_word = app_code_explain_word_colored("shared", overlap_color);
  let v = first_area("4");
  let v2 = second_area("6");
  let suppose_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " covers ",
    v,
    " squares, and the ",
    second,
    " covers ",
    v2,
    " squares",
  ]);
  let v3 = shared_area("2");
  let share_said = app_code_explain_said([
    "The two rectangles share ",
    v3,
    " squares",
  ]);
  let how_said = ["How many squares do the two rectangles cover together?"];
  let v4 = counted("10");
  let add_said = app_code_explain_said(["If we add, ", sum_worked, " is ", v4]);
  let twice_said = app_code_explain_said([
    "But the ",
    shared_word,
    " squares are counted twice: once in the ",
    first,
    ", and once in the ",
    second,
  ]);
  let subtract_said = ["So we subtract the shared squares once:"];
  let v5 = counted("8");
  let subtract_worked = app_code_explain_said([
    "",
    difference_worked,
    " is ",
    v5,
  ]);
  let v6 = counted("8");
  let together_said = app_code_explain_said([
    "So together, the two rectangles cover ",
    v6,
    " squares",
  ]);
  let v7 = first_area(area1);
  let v8 = second_area(area2);
  let v9 = shared_area(shared);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " covers ",
    v7,
    " squares, the ",
    second,
    " covers ",
    v8,
    ", and they share ",
    v9,
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "How many squares two rectangles cover together",
    title_code: line_together,
    names,
    values_get,
    example_values: [4, 6, 2],
    step,
    remember_lesson: app_code_lesson_statement_name_shared_squares,
    remember_parts: ["we can find how many squares two rectangles share:"],
    remember_lines,
    explain: [
      suppose_said,
      rectangles_draw,
      share_said,
      how_said,
      app_code_explain_container_next,
      add_said,
      twice_said,
      subtract_said,
      subtract_worked,
      together_said,
      app_code_explain_container_next,
      names_said,
      [
        "Here is code that finds how many squares two rectangles cover together:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [[area1, "4"], first_color],
      [[area2, "6"], second_color],
      [[shared, "2"], overlap_color],
      [[total, together, "10", "8"], sum_color],
    ],
  });
  return lesson;
}
