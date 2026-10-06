import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
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
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_rectangles_edges_colored_draw } from "./app_code_rectangles_edges_colored_draw.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rectangles_cover_together } from "./app_code_lesson_statement_name_rectangles_cover_together.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_cover_edges() {
  arguments_assert(arguments, 0);
  ("how many squares two rectangles cover together, from their eight edges - picked by the human 2026-10-06, after asking why How many squares two rectangles cover together starts from three areas and not from the edges. In DSA it is Rectangle Area, LeetCode 223: the area of the union of two rectangles given by their corners.");
  ("A review: every line repeats a shape an earlier lesson taught - a width, a height and an area as in How many squares two rectangles share, the shared part's edges as in How long two meetings overlap, the floor at 0 as in Squares shared when rectangles may not overlap, and the last two lines as in How many squares two rectangles cover together, which is the reminder. Nothing here is new except doing them all in one program.");
  ("Every line is a short one of a shape already shown, so it is long: seventeen lines after the eight names. Not picked: parentheses, let area1 = (r1 - l1) * (b1 - t1); which would cut four lines but is a shape no rectangle lesson has shown; and nesting, let w = Math.max(right - left, 0); for the same reason. The title shows let left = Math.max(l1, l2); because the shared part's edges are the one step no rectangle lesson has written from two rectangles' edges, only from two meetings'.");
  ("Each screen asks one pair that is apart, one rectangle inside the other, and two that cross, so the four answers differ. The apart pairs make the floor matter: corner to corner both lengths are -1, whose product 1 is wrong; side by side one is -1, whose product is negative.");
  ("Left and top edges wear the start colour, right and bottom edges the end colour, as in Do two rectangles overlap.");
  ("The writing is a first draft by Claude 2026-10-06.");
  ("Taken out of the lessons 2026-10-06 by the human after reading it: twenty-six lines worked out four times is too large a computation. The plan is to split a large computation into small functions, teach functions one at a time, and then ask only a small piece of code at once, so this waits until functions are taught and is then rewritten as calls to functions for each rectangle's area and the shared squares. Its id stays frozen so the lesson can come back under the same address.");
  let names = ["l1", "r1", "t1", "b1", "l2", "r2", "t2", "b2"];
  let l = list_get(names, 0);
  let r = list_get(names, 1);
  let t = list_get(names, 2);
  let b = list_get(names, 3);
  let l2 = list_get(names, 4);
  let r2 = list_get(names, 5);
  let t2 = list_get(names, 6);
  let b2 = list_get(names, 7);
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let max_name = "Math.max";
  let min_name = "Math.min";
  function let_binary(name, first, operator, second) {
    "let name = first operator second;";
    let value = js_code_binary_spaced_nb(first, operator, second);
    let line = js_code_let_statement(name, value);
    return line;
  }
  function let_call(name, called, first, second) {
    "let name = called(first, second);";
    let value = js_code_call_args(called, [first, second]);
    let line = js_code_let_statement(name, value);
    return line;
  }
  let line_left = let_call("left", max_name, l, l2);
  let v5 = let_binary("width1", r, minus, l);
  let v6 = let_binary("height1", b, minus, t);
  let v7 = let_binary("area1", "width1", times, "height1");
  let v8 = let_binary("width2", r2, minus, l2);
  let v9 = let_binary("height2", b2, minus, t2);
  let v10 = let_binary("area2", "width2", times, "height2");
  let v11 = let_call("right", min_name, r, r2);
  let v12 = let_call("top", max_name, t, t2);
  let v13 = let_call("bottom", min_name, b, b2);
  let v14 = let_binary("width", "right", minus, "left");
  let v15 = let_binary("height", "bottom", minus, "top");
  let v16 = let_call("w", max_name, "width", "0");
  let v17 = let_call("h", max_name, "height", "0");
  let v18 = let_binary("shared", "w", times, "h");
  let v19 = let_binary("total", "area1", plus, "area2");
  let v20 = let_binary("together", "total", minus, "shared");
  let middle = [
    v5,
    v6,
    v7,
    v8,
    v9,
    v10,
    line_left,
    v11,
    v12,
    v13,
    v14,
    v15,
    v16,
    v17,
    v18,
    v19,
    v20,
  ];
  let step = {
    middle,
    logged: ["together"],
  };
  let v21 = let_binary("total", "area1", plus, "area2");
  let v22 = let_binary("together", "total", minus, "shared");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["area1", 4],
      ["area2", 6],
      ["shared", 2],
    ],
    [v21, v22],
    ["together"],
  );
  function values_get() {
    "two rectangles as l1, r1, t1, b1, l2, r2, t2, b2: one pair apart, one inside the other and two that cross, in a fresh order each screen; the answers are 8 or 5 apart, 9 inside, and 7, 10 or 11 crossing, so they all differ";
    let apart = list_shuffle_take(
      [
        [0, 2, 0, 2, 3, 5, 3, 5],
        [0, 1, 0, 3, 2, 4, 0, 1],
      ],
      1,
    );
    let inside = list_shuffle_take([[0, 3, 0, 3, 1, 2, 1, 3]], 1);
    let crossing = list_shuffle_take(
      [
        [1, 3, 1, 3, 2, 4, 2, 4],
        [0, 2, 0, 3, 1, 4, 1, 3],
        [0, 3, 0, 2, 2, 4, 1, 4],
      ],
      2,
    );
    let some = list_concat(apart, inside);
    let all = list_concat(some, crossing);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
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
  function rectangles_draw(box) {
    "the two rectangles of How many squares two rectangles cover together, with every edge numbered in its colour";
    app_code_rectangles_edges_colored_draw(
      box,
      5,
      5,
      [1, 3, 1, 3],
      [2, 4, 1, 4],
      [
        [1, 3],
        [2, 4],
      ],
      [
        [1, 3],
        [1, 4],
      ],
      null,
      overlap_color,
      null,
    );
  }
  function rectangle_said(rectangle, left, right, top, bottom) {
    "Suppose the rectangle goes across from left to right, and down from top to bottom";
    let v = from(left);
    let v2 = till(right);
    let v3 = from(top);
    let v4 = till(bottom);
    let said = app_code_explain_said([
      "The ",
      rectangle,
      " goes across from ",
      v,
      " to ",
      v2,
      ", and down from ",
      v3,
      " to ",
      v4,
    ]);
    return said;
  }
  let first_rectangle = app_code_explain_word_colored(
    "first rectangle",
    first_color,
  );
  let second_rectangle = app_code_explain_word_colored(
    "second rectangle",
    second_color,
  );
  let first_said = rectangle_said(first_rectangle, "1", "3", "1", "3");
  let second_said = rectangle_said(second_rectangle, "2", "4", "1", "4");
  let first_names_said = rectangle_said(first_rectangle, l, r, t, b);
  let second_names_said = rectangle_said(second_rectangle, l2, r2, t2, b2);
  let lesson = app_code_lesson_statement_formula({
    words: "Squares two rectangles cover together, from their edges",
    title_code: line_left,
    names,
    values_get,
    example_values: [1, 3, 1, 3, 2, 4, 1, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_rectangles_cover_together,
    remember_parts: [
      "we can find how many squares two rectangles cover together:",
    ],
    remember_lines,
    explain: [
      ["But what if we only know where each rectangle starts and ends?"],
      first_said,
      second_said,
      rectangles_draw,
      app_code_explain_container_next,
      ["We can put together what we did before:"],
      ["First we find how many squares each rectangle covers"],
      [
        "Then we find where the shared part starts and ends, as for two meetings that overlap",
      ],
      [
        "Then we find how many squares the rectangles share, even when they do not overlap",
      ],
      ["Then we find how many squares they cover together"],
      app_code_explain_container_next,
      first_names_said,
      second_names_said,
      [
        "Here is code that finds how many squares two rectangles cover together, from their edges:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [[l, t, l2, t2, "1", "2"], start_color],
      [[r, b, r2, b2, "3", "4"], end_color],
    ],
  });
  return lesson;
}
