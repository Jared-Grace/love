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
import { app_code_lesson_statement_name_meetings_join } from "./app_code_lesson_statement_name_meetings_join.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rectangles_join_down() {
  arguments_assert(arguments, 0);
  ("where two rectangles together start and end going down: let top = Math.min(t1, t2); let bottom = Math.max(b1, b2); - picked by Claude 2026-10-05 when the human asked for the next lesson, as Join two overlapping meetings done down a picture, the way How many rows are between two rectangles did How many hours are free between two meetings. In DSA it is half of the box around two boxes, the smallest rectangle holding both, which a screen uses to redraw only the part that changed and a game to test two shapes together.");
  ("Down only, with across the lesson after it, as rows and then columns between two rectangles went: the four lines of the whole box would start eight names at once. Not picked: the whole box in one lesson, for that reason; and the box's size, which would add a third line to an idea not yet shown.");
  ("Unlike two meetings, two rectangles need not overlap for this: the band from the higher top to the lower bottom holds both whether they cross, touch or have rows between them. So the quiz asks all of those, and every screen has one pair whose second rectangle is the higher, so Math.min is never just t1. The answers of a screen all differ.");
  ("Top edges wear the start colour and bottom edges the end colour, as in How many rows are between two rectangles; words naming a rectangle wear the colour the picture fills it with, and squares both cover wear the overlap colour of the other rectangle pictures.");
  ("The writing is a first draft by Claude 2026-10-05, its middle screen following the human's writing of Join two overlapping meetings.");
  let names = ["t1", "b1", "t2", "b2"];
  let t = list_get(names, 0);
  let b = list_get(names, 1);
  let t2 = list_get(names, 2);
  let b2 = list_get(names, 3);
  let top = "top";
  let bottom = "bottom";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let higher = js_code_call_args(min_name, [t, t2]);
  let line_top = js_code_let_statement(top, higher);
  let lower = js_code_call_args(max_name, [b, b2]);
  let line_bottom = js_code_let_statement(bottom, lower);
  let step = {
    middle: [line_top, line_bottom],
    logged: [top, bottom],
  };
  let start = "start";
  let end = "end";
  let join_start = js_code_call_args(min_name, ["s1", "s2"]);
  let join_line_start = js_code_let_statement(start, join_start);
  let join_end = js_code_call_args(max_name, ["e1", "e2"]);
  let join_line_end = js_code_let_statement(end, join_end);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["s1", 9],
      ["e1", 11],
      ["s2", 10],
      ["e2", 12],
    ],
    [join_line_start, join_line_end],
    [start, end],
  );
  function values_get() {
    "two rectangles as top, bottom, top2, bottom2: one pair whose second rectangle is the higher, and three that cross, sit inside, touch or have rows between, in a fresh order each screen";
    let second_higher = list_shuffle_take(
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
    let all = list_concat(second_higher, others);
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
    "a top edge, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "a bottom edge, or a name holding one, as a chip in the end colour";
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
  function rectangles_draw(down) {
    "the first rectangle, 1 to 3 across and down, and the second 2 to 4 across and down, with the down edges in down coloured";
    function draw(box) {
      app_code_rectangles_edges_colored_draw(
        box,
        5,
        5,
        [1, 3, 1, 3],
        [2, 4, 2, 4],
        null,
        down,
        null,
        overlap_color,
        null,
      );
    }
    return draw;
  }
  let down_arrow = app_code_arrow_inline_draw(90);
  let first_rectangle = one("first rectangle");
  let second = two("second");
  let v = from("1");
  let v2 = till("3");
  let v3 = from("2");
  let v4 = till("4");
  let suppose_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes down ",
    down_arrow,
    " from ",
    v,
    " to ",
    v2,
    ", and the ",
    second,
    " goes down from ",
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
    "Together, the two rectangles go down from ",
    v5,
    " to ",
    v6,
  ]);
  let together_draw = rectangles_draw([[1, 4]]);
  let min_joined = call_worked(min_name, "1", "2", start_color);
  let max_joined = call_worked(max_name, "3", "4", end_color);
  let v7 = from("1");
  let top_worked = app_code_explain_said(["", min_joined, " is ", v7]);
  let v8 = till("4");
  let bottom_worked = app_code_explain_said(["", max_joined, " is ", v8]);
  let v9 = from(t);
  let v10 = till(b);
  let v11 = from(t2);
  let v12 = till(b2);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_rectangle,
    " goes down from ",
    v9,
    " to ",
    v10,
    ", and the ",
    second,
    " goes down from ",
    v11,
    " to ",
    v12,
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Where two rectangles together start and end going down",
    title_code: line_bottom,
    names,
    values_get,
    example_values: [1, 3, 2, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_meetings_join,
    remember_parts: ["we can find when two meetings together start and end:"],
    remember_lines,
    explain: [
      suppose_said,
      each_draw,
      together_said,
      together_draw,
      app_code_explain_container_next,
      ['Down, it is like joining two "meetings"'],
      ["Where does the higher rectangle start?"],
      ["We can use ", min_name, " on the tops to find the smaller/higher top:"],
      top_worked,
      ["Where does the lower rectangle end?"],
      [
        "We can use ",
        max_name,
        " on the bottoms to find the larger/lower bottom:",
      ],
      bottom_worked,
      app_code_explain_container_next,
      names_said,
      [
        "Here is code that finds where the two rectangles together start and end going down:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [[t, t2, top, "1", "2"], start_color],
      [[b, b2, bottom, "3", "4"], end_color],
    ],
  });
  return lesson;
}
