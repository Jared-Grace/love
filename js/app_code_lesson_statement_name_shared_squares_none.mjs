import { app_code_rectangles_edges_marked_draw } from "./app_code_rectangles_edges_marked_draw.mjs";
import { app_code_highlight_color_sixth } from "./app_code_highlight_color_sixth.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
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
import { app_code_rectangles_edges_draw } from "./app_code_rectangles_edges_draw.mjs";
import { app_code_arrow_inline_draw } from "./app_code_arrow_inline_draw.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_statement_name_overlap_hours } from "./app_code_lesson_statement_name_overlap_hours.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_shared_squares } from "./app_code_lesson_statement_name_shared_squares.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_shared_squares_none() {
  arguments_assert(arguments, 0);
  ("how many squares two rectangles share, even when they do not overlap: let w = Math.max(width, 0); let h = Math.max(height, 0); let area = w * h; - chosen by Claude 2026-10-04 as the step How many squares two rectangles share left out on purpose. In DSA it is the area of the intersection of two rectangles done safely, and the bug it stops is the one a negative width times a negative height makes: a positive area for two rectangles that share nothing.");
  ("It starts from the width and the height of the shared part, which How many squares two rectangles share finds, so that lesson is the reminder and the new idea is only the floor at 0, done twice, which How long two meetings overlap taught once; the writing points back to that lesson. Not picked: starting again from the four edges, which would put five lines in every program.");
  ("Each screen asks three pairs that overlap, of three different sizes, and one pair that does not, so the four answers differ and exactly one is the 0 the Math.max makes. The pairs that do not overlap are both negative, or one negative and one not, so either way a learner who forgets the floor gets a wrong answer.");
  ("The example is two rectangles apart corner to corner, because there the width and the height are both -1, and -1 * -1 is 1: the floor is needed even though the answer without it is not negative.");
  ("Edges that start wear the start colour and edges that end the end colour, as in Do two rectangles overlap.");
  ("The writing is the human's, 2026-10-04, reworded from a first draft by Claude. The question How can we make the solved overlap be 0 instead of 1 opens the second screen, so it sits with its answer.");
  ("The square between the two rectangles is drawn in the overlap colour after the wrong answer, asked by the human 2026-10-04, so the 1 can be seen to count a square the rectangles do not share. The words width and height wear the length colour too.");
  ("Lengths before the floor, which may be negative, wear a colour of their own: width, height and the -1 they hold. What the floor makes wears the overlap colour: w, h, area and 0. Asked by the human 2026-10-04, when every name in the program wore the overlap colour. Not picked: width and w in one colour and height and h in another, which would show which line feeds which but leaves no colour that says a length may be negative; and the rectangles' purple and orange, which the picture already gives to the two rectangles.");
  let names = ["width", "height"];
  let width = list_first(names);
  let height = list_second(names);
  let w = "w";
  let h = "h";
  let area = "area";
  let times = js_operator_asterisk_symbol();
  let max_name = "Math.max";
  let floored_width = js_code_call_args(max_name, [width, "0"]);
  let line_w = js_code_let_statement(w, floored_width);
  let floored_height = js_code_call_args(max_name, [height, "0"]);
  let line_h = js_code_let_statement(h, floored_height);
  let product = js_code_binary_spaced_nb(w, times, h);
  let line_area = js_code_let_statement(area, product);
  let step = {
    middle: [line_w, line_h, line_area],
    logged: [area],
  };
  let left = "left";
  let right = "right";
  let top = "top";
  let bottom = "bottom";
  let minus = js_operator_minus_symbol();
  let across = js_code_binary_spaced_nb(right, minus, left);
  let line_width = js_code_let_statement(width, across);
  let down = js_code_binary_spaced_nb(bottom, minus, top);
  let line_height = js_code_let_statement(height, down);
  let product_plain = js_code_binary_spaced_nb(width, times, height);
  let line_area_plain = js_code_let_statement(area, product_plain);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [left, 2],
      [right, 3],
      [top, 1],
      [bottom, 3],
    ],
    [line_width, line_height, line_area_plain],
    [area],
  );
  function values_get() {
    "three pairs that overlap, of three different sizes, and one that does not, in a fresh order each screen";
    let overlapping = list_shuffle_take(
      [
        [1, 2],
        [3, 1],
        [2, 2],
        [1, 1],
        [3, 2],
      ],
      3,
    );
    let separate = list_shuffle_take(
      [
        [-1, -1],
        [-2, 1],
        [2, -1],
        [-1, -3],
      ],
      1,
    );
    let all = list_concat(overlapping, separate);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
  let length_color = app_code_highlight_color_sixth();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a starting edge as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "an ending edge as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  function size(text) {
    "a size of the shared part, or a name holding one, as a chip in the overlap colour";
    let chip = app_code_explain_number_colored(text, overlap_color);
    return chip;
  }
  function raw(text) {
    "a length before the floor, or a name holding one, which may be negative, as a chip in the length colour";
    let chip = app_code_explain_number_colored(text, length_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  let length_worked = app_code_explain_code_colored_inline(
    ["2", spaced_minus, "3"],
    [end_color, plain, start_color],
  );
  let spaced_times = js_code_binary_spaced_nb("", times, "");
  function product_worked(first, second, color) {
    "first * second as one code chip, both sizes in the given colour";
    let chip = app_code_explain_code_colored_inline(
      [first, spaced_times, second],
      [color, plain, color],
    );
    return chip;
  }
  let floor_worked = app_code_explain_code_colored_inline(
    [max_name + "(", "-1", ", ", "0", ")"],
    [plain, length_color, plain, overlap_color, plain],
  );
  function apart_draw(box) {
    "two rectangles apart corner to corner, so they share no square";
    app_code_rectangles_edges_draw(
      box,
      5,
      5,
      [0, 2, 0, 2],
      [3, 5, 3, 5],
      null,
      null,
    );
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let down_arrow = app_code_arrow_inline_draw(90);
  let shared_word = app_code_explain_word_colored("shared", overlap_color);
  let share_word = app_code_explain_word_colored("share", overlap_color);
  let overlap_word = app_code_explain_word_colored("overlap", overlap_color);
  let draw = app_code_explain_said([
    "These two rectangles do not ",
    overlap_word,
    ":",
  ]);
  let v = from("3");
  let v2 = till("2");
  let draw2 = app_code_explain_said([
    "Across ",
    right_arrow,
    ", the later start is ",
    v,
    " and the earlier end is ",
    v2,
  ]);
  let v3 = from("3");
  let v4 = till("2");
  let draw3 = app_code_explain_said([
    "Down ",
    down_arrow,
    ", the later start is ",
    v3,
    " and the earlier end is ",
    v4,
  ]);
  let v5 = raw("-1");
  let width_word = app_code_explain_word_colored(width, length_color);
  let height_word = app_code_explain_word_colored(height, length_color);
  let draw4 = app_code_explain_said([
    "So the ",
    width_word,
    " is ",
    length_worked,
    ", which is ",
    v5,
  ]);
  let v6 = raw("-1");
  let draw5 = app_code_explain_said([
    "And the ",
    height_word,
    " is ",
    length_worked,
    ", which is ",
    v6,
  ]);
  let v7 = product_worked("-1", "-1", length_color);
  let v8 = size("1");
  let draw6 = app_code_explain_said(["", v7, " is ", v8]);
  let v9 = size("0");
  let v10 = size("1");
  let draw7 = app_code_explain_said([
    "However the two rectangles ",
    share_word,
    " ",
    v9,
    " squares, not ",
    v10,
  ]);
  function floor_recalled_draw(box, context) {
    "how a negative length was made 0 before, with a button to the lesson that did it";
    let line = html_div(box);
    html_span_text_content(line, "When we found how long two meetings ");
    overlap_word(line);
    html_span_text_content(line, " in ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_statement_name_overlap_hours,
    );
    html_cycle_code(line, [
      ", we used ",
      max_name,
      " to change all negative lengths to ",
      "0",
    ]);
  }
  let v11 = size("0");
  let draw8 = app_code_explain_said(["", floor_worked, " is ", v11]);
  let max_chip = app_code_explain_number_colored(max_name, plain);
  let v12 = product_worked("0", "0", overlap_color);
  let v13 = size("0");
  let v14 = size("0");
  let draw9 = app_code_explain_said([
    "",
    v12,
    " is ",
    v13,
    ", so when we use ",
    max_chip,
    " the two rectangles ",
    share_word,
    " ",
    v14,
    " squares",
  ]);
  let v15 = raw(width);
  let v16 = raw(height);
  let draw10 = app_code_explain_said([
    "Suppose the ",
    shared_word,
    " part is ",
    v15,
    " wide and ",
    v16,
    " tall",
  ]);
  let draw11 = app_code_explain_said([
    "Here is code that finds how many squares two rectangles ",
    share_word,
    ", even when they do not ",
    overlap_word,
    ":",
  ]);
  let same_said = app_code_explain_said([
    "We can do the same for the ",
    width_word,
    " and for the ",
    height_word,
    " here:",
  ]);
  function solved_draw(box) {
    "the same two rectangles, with the square a wrong answer counts between them filled in the overlap colour, asked by the human 2026-10-04";
    app_code_rectangles_edges_marked_draw(
      box,
      5,
      5,
      [0, 2, 0, 2],
      [3, 5, 3, 5],
      [3, 2],
      [3, 2],
      [2, 3, 2, 3],
    );
  }
  let try_said = app_code_explain_said([
    "But what happens if we try to solve the ",
    overlap_word,
    "?",
  ]);
  let v17 = size("1");
  let solved_said = app_code_explain_said([
    "So when we try to solve the ",
    overlap_word,
    ", we get ",
    v17,
  ]);
  let v18 = size("0");
  let v19 = size("1");
  let should_said = app_code_explain_said([
    "So the solved ",
    overlap_word,
    " should be ",
    v18,
    ", not ",
    v19,
  ]);
  let v20 = size("0");
  let v21 = size("1");
  let how_said = app_code_explain_said([
    "How can we make the solved ",
    overlap_word,
    " be ",
    v20,
    " instead of ",
    v21,
    "?",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Squares shared when rectangles may not overlap",
    title_code: line_area,
    names,
    values_get,
    example_values: [-1, -1],
    step,
    remember_lesson: app_code_lesson_statement_name_shared_squares,
    remember_parts: ["we can find how many squares two rectangles share:"],
    remember_lines,
    explain: [
      draw,
      apart_draw,
      try_said,
      draw2,
      draw3,
      draw4,
      draw5,
      draw6,
      solved_said,
      ["Here is the square it solved:"],
      solved_draw,
      draw7,
      should_said,
      app_code_explain_container_next,
      how_said,
      floor_recalled_draw,
      same_said,
      draw8,
      draw9,
      app_code_explain_container_next,
      draw10,
      draw11,
    ],
    decoys: null,
    example_pointers: [
      [[width, height, "-1"], length_color],
      [[w, h, area, "0"], overlap_color],
    ],
  });
  return lesson;
}
