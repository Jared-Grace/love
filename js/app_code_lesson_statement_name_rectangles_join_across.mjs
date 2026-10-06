import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
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
import { app_code_lesson_statement_name_rectangles_join_down } from "./app_code_lesson_statement_name_rectangles_join_down.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_join_across() {
  arguments_assert(arguments, 0);
  ("where two rectangles together start and end going across: let left = Math.min(l1, l2); let right = Math.max(r1, r2); - picked by Claude 2026-10-06 as the across half of Where two rectangles together start and end going down, the lesson just before it, which left across for later so that no lesson starts eight names at once. Together the two are the box around two boxes, the smallest rectangle holding both.");
  ("Not picked: the whole box in one program, which now needs no new idea but would put four lines and eight names on every screen; and the box's size, which is a third line on an idea just shown.");
  ("As going down, the two rectangles need not overlap: the band from the leftmost left to the rightmost right holds both whether they cross, touch or have columns between them. Every screen has one pair whose second rectangle is further left, so Math.min is never just l1. The quiz uses the same numbers as the down lesson, so the one new thing is the direction, as How many columns are between two rectangles kept the numbers of the rows lesson. The answers of a screen all differ.");
  ("Left edges wear the start colour and right edges the end colour, as in How many columns are between two rectangles; words naming a rectangle wear the colour the picture fills it with, and squares both cover wear the overlap colour.");
  ("The writing is a first draft by Claude 2026-10-06, following the down lesson's screen for screen.");
  let names = ["l1", "r1", "l2", "r2"];
  let l = list_get(names, 0);
  let r = list_get(names, 1);
  let l2 = list_get(names, 2);
  let r2 = list_get(names, 3);
  let left = "left";
  let right = "right";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let leftmost = js_code_call_args(min_name, [l, l2]);
  let line_left = js_code_let_statement(left, leftmost);
  let rightmost = js_code_call_args(max_name, [r, r2]);
  let line_right = js_code_let_statement(right, rightmost);
  let step = {
    middle: [line_left, line_right],
    logged: [left, right],
  };
  let top = "top";
  let bottom = "bottom";
  let down_top = js_code_call_args(min_name, ["t1", "t2"]);
  let down_line_top = js_code_let_statement(top, down_top);
  let down_bottom = js_code_call_args(max_name, ["b1", "b2"]);
  let down_line_bottom = js_code_let_statement(bottom, down_bottom);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["t1", 1],
      ["b1", 3],
      ["t2", 2],
      ["b2", 4],
    ],
    [down_line_top, down_line_bottom],
    [top, bottom],
  );
  function values_get() {
    "two rectangles as left, right, left2, right2: one pair whose second rectangle is further left, and three that cross, sit inside, touch or have columns between, in a fresh order each screen";
    let second_left = list_shuffle_take(
      [
        [2, 4, 1, 3],
        [3, 5, 0, 2],
      ],
      1,
    );
    let others = list_shuffle_take(
      [
        [1, 3, 2, 5],
        [0, 4, 1, 3],
        [1, 2, 3, 6],
        [2, 3, 3, 5],
      ],
      3,
    );
    let all = list_concat(second_left, others);
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
    "a left edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "a right edge, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  function call_worked(name, first, second, color) {
    "name(first, second) as one code chip, both edges in the colour of the part they play";
    let chip = app_code_explain_code_colored_inline(
      [name + "(", first, ", ", second, ")"],
      [plain, color, plain, color, plain],
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
  function rectangles_draw(across) {
    "the first rectangle, 1 to 3 across and down, and the second 2 to 4 across and down, the picture of the down lesson, with the across edges in across coloured";
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        5,
        [1, 3, 1, 3],
        [2, 4, 2, 4],
        across,
        null,
        null,
        overlap_color,
        null,
      );
    }
    return draw;
  }
  let right_arrow = app_code_arrow_inline_draw(0);
  let first_rectangle = one("first rectangle");
  let second = two("second");
  let v = from("1");
  let v2 = till("3");
  let v3 = from("2");
  let v4 = till("4");
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
  let each_draw = rectangles_draw([
    [1, 3],
    [2, 4],
  ]);
  let v5 = from("1");
  let v6 = till("4");
  let together_said = app_code_explain_said([
    "Together, the two rectangles go across from ",
    v5,
    " to ",
    v6,
  ]);
  let together_draw = rectangles_draw([[1, 4]]);
  let min_joined = call_worked(min_name, "1", "2", start_color);
  let max_joined = call_worked(max_name, "3", "4", end_color);
  let v7 = from("1");
  let left_worked = app_code_explain_said(["", min_joined, " is ", v7]);
  let v8 = till("4");
  let right_worked = app_code_explain_said(["", max_joined, " is ", v8]);
  let v9 = from(l);
  let v10 = till(r);
  let v11 = from(l2);
  let v12 = till(r2);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes across from ",
    v9,
    " to ",
    v10,
    ", and the ",
    second,
    " goes across from ",
    v11,
    " to ",
    v12,
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Where two rectangles together start and end going across",
    title_code: line_right,
    names,
    values_get,
    example_values: [1, 3, 2, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_rectangles_join_down,
    remember_parts: [
      "we can find where two rectangles together start and end going down:",
    ],
    remember_lines,
    explain: [
      suppose_said,
      each_draw,
      together_said,
      together_draw,
      app_code_explain_container_next,
      ["Across, it is like joining two rectangles going down"],
      ["Where does the rectangle further left start?"],
      [
        "We can use ",
        min_name,
        " on the left edges to find the smaller/further left one:",
      ],
      left_worked,
      ["Where does the rectangle further right end?"],
      [
        "We can use ",
        max_name,
        " on the right edges to find the larger/further right one:",
      ],
      right_worked,
      app_code_explain_container_next,
      names_said,
      [
        "Here is code that finds where the two rectangles together start and end going across:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [[l, l2, left, "1", "2"], start_color],
      [[r, r2, right, "3", "4"], end_color],
    ],
  });
  return lesson;
}
