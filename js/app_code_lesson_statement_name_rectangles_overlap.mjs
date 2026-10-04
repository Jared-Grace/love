import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_arrow_inline } from "./app_code_arrow_inline.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { list_max } from "./list_max.mjs";
import { list_min } from "./list_min.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_rectangles_edges_draw } from "./app_code_rectangles_edges_draw.mjs";
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
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
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
  ("The writing of the first two screens is the human's, 2026-10-04, apart from the lines under For the row meeting and For the column meeting after where each rectangle goes, and the last line of that screen, which are a first draft the human has since reworded. Meetings is put in quotes wherever rectangles are treated as meetings, and overlap, share and shared wear the overlap colour, both asked by the human 2026-10-04. Arrows also follow across and down in the last two screens, asked for two lines and put on every one. Each meeting is worked as Do two meetings overlap works one, so a learner sees where the shared part's edges come from. Arrows after across and down were asked for by the human; they are put after every across and down of the first screen. The rest is a first draft by Claude, 2026-10-04, not yet the human's. The first picture and the numbers under it are one example, asked by the human 2026-10-04: the picture numbers the lines between squares, so the shared part read off it is the 2 to 3 and 1 to 3 the writing works with.");
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
  function rectangles_draw(columns, rows, first, second, across, down) {
    "the picture of two rectangles with their edges numbered, as an entry of the writing";
    function draw(box) {
      app_code_rectangles_edges_draw(
        box,
        columns,
        rows,
        first,
        second,
        across,
        down,
      );
    }
    return draw;
  }
  let crossing_draw = rectangles_draw(
    4,
    4,
    [0, 3, 0, 3],
    [2, 4, 1, 4],
    [2, 3],
    [1, 3],
  );
  let stacked_draw = rectangles_draw(
    4,
    5,
    [0, 3, 0, 2],
    [1, 4, 3, 5],
    [1, 3],
    null,
  );
  let and_chip = app_code_explain_number_colored(and_op, plain);
  function arrow_drawn(degrees) {
    "the drawn arrow inside a line of writing, beside the word for its direction, asked by the human 2026-10-04";
    function draw(line) {
      app_code_arrow_inline(line, degrees);
    }
    return draw;
  }
  let right_arrow = arrow_drawn(0);
  let down_arrow = arrow_drawn(90);
  let color2 = app_code_highlight_color_fourth();
  let purple = app_code_explain_word_colored("purple", color2);
  let color3 = app_code_highlight_color_fifth();
  let orange = app_code_explain_word_colored("orange", color3);
  function call_worked(name, first, second, color) {
    "name(first, second) as one code chip, both edges in the colour of the part they play";
    let chip = app_code_explain_code_colored_inline(
      [name + "(", first, ", ", second, ")"],
      [plain, color, plain, color, plain],
    );
    return chip;
  }
  let overlap_color = app_code_highlight_color_third();
  function red(text) {
    "a word for the overlap, in the colour of the part the rectangles share, asked by the human 2026-10-04";
    let word = app_code_explain_word_colored(text, overlap_color);
    return word;
  }
  let overlap_word = red("overlap");
  let share_word = red("share");
  let shared_word = red("shared");
  function meeting_draws(word, first_from, first_to, second_from, second_to) {
    "the lines treating one direction of the two rectangles as two meetings: where each goes, where the shared part starts and ends, and the check";
    let later = list_max([first_from, second_from]);
    let earlier = list_min([first_to, second_to]);
    let t_first_from = text_to(first_from);
    let t_first_to = text_to(first_to);
    let t_second_from = text_to(second_from);
    let t_second_to = text_to(second_to);
    let t_later = text_to(later);
    let t_earlier = text_to(earlier);
    let v = from(t_first_from);
    let v2 = till(t_first_to);
    let draw3 = app_code_explain_said([
      "The ",
      purple,
      " rectangle goes from " + word + "s ",
      v,
      " to ",
      v2,
    ]);
    let v3 = from(t_second_from);
    let v4 = till(t_second_to);
    let draw4 = app_code_explain_said([
      "The ",
      orange,
      " rectangle goes from " + word + "s ",
      v3,
      " to ",
      v4,
    ]);
    let v5 = call_worked("Math.max", t_first_from, t_second_from, start_color);
    let v6 = from(t_later);
    let draw7 = app_code_explain_said(["", v5, " is ", v6]);
    let v11 = call_worked("Math.min", t_first_to, t_second_to, end_color);
    let v12 = till(t_earlier);
    let draw8 = app_code_explain_said(["", v11, " is ", v12]);
    let v13 = check_worked(t_later, t_earlier);
    let draw9 = app_code_explain_said([
      "",
      v13,
      ", so the " + word + ' "meetings" ',
      overlap_word,
    ]);
    let draw10 = app_code_explain_said([
      "The ",
      overlap_word,
      " starts at the later start:",
    ]);
    let draw11 = app_code_explain_said([
      "And the ",
      overlap_word,
      " ends at the earlier end:",
    ]);
    let draws = [
      ["For the " + word + ' "meeting":'],
      draw3,
      draw4,
      draw10,
      draw7,
      draw11,
      draw8,
      draw9,
    ];
    return draws;
  }
  let first_said = app_code_explain_said([
    "Two rectangles can ",
    overlap_word,
    " too:",
  ]);
  let across_said = app_code_explain_said([
    "Across ",
    right_arrow,
    ", they ",
    overlap_word,
    ' like two "meetings"',
  ]);
  let down_said = app_code_explain_said([
    "Down ",
    down_arrow,
    ", they also ",
    overlap_word,
    ' like two "meetings"',
  ]);
  let share_said = app_code_explain_said([
    "The part they ",
    share_word,
    " is a rectangle too",
  ]);
  let v14 = from("2");
  let v15 = till("3");
  let draw = app_code_explain_said([
    "Suppose the ",
    shared_word,
    " part goes across ",
    right_arrow,
    " from ",
    v14,
    " to ",
    v15,
  ]);
  let v16 = from("1");
  let v17 = till("3");
  let draw2 = app_code_explain_said([
    "And the ",
    shared_word,
    " part goes down ",
    down_arrow,
    " from ",
    v16,
    " to ",
    v17,
  ]);
  let seen_said = app_code_explain_said([
    "We can see from looking at the image that the rectangles ",
    overlap_word,
  ]);
  let numbers_said = app_code_explain_said([
    "But how could we solve whether or not the rectangles ",
    overlap_word,
    " through numbers?",
  ]);
  let row_draws = meeting_draws("row", 0, 3, 1, 4);
  let column_draws = meeting_draws("column", 0, 3, 2, 4);
  let both_said = app_code_explain_said([
    'Both "meetings" ',
    overlap_word,
    ", so the rectangles ",
    overlap_word,
  ]);
  let stacked_said = app_code_explain_said([
    "But these rectangles ",
    overlap_word,
    " across ",
    right_arrow,
    ", and not down ",
    down_arrow,
    ":",
  ]);
  let not_said = app_code_explain_said(["So they do not ", overlap_word]);
  let draw5 = app_code_explain_said([
    "So we need both: across ",
    right_arrow,
    " ",
    and_chip,
    " down ",
    down_arrow,
  ]);
  let v7 = from(left);
  let v8 = till(right);
  let v9 = from(top);
  let v10 = till(bottom);
  let draw6 = app_code_explain_said([
    "Suppose the ",
    shared_word,
    " part goes across ",
    right_arrow,
    " from ",
    v7,
    " to ",
    v8,
    ", and down ",
    down_arrow,
    " from ",
    v9,
    " to ",
    v10,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that checks whether the two rectangles ",
    overlap_word,
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Do two rectangles overlap",
    title_code: line_overlap,
    names,
    values_get,
    example_values: [2, 3, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_meetings_overlap,
    remember_parts: ["we can check whether two meetings overlap:"],
    remember_lines,
    explain: [
      first_said,
      crossing_draw,
      across_said,
      down_said,
      share_said,
      draw,
      draw2,
      app_code_explain_container_next,
      seen_said,
      numbers_said,
      [
        'We can treat the rectangles like two "meetings": a pair of row "meetings" and a pair of column "meetings"',
      ],
      app_code_explain_container_next,
      ...row_draws,
      app_code_explain_container_next,
      ...column_draws,
      both_said,
      app_code_explain_container_next,
      stacked_said,
      stacked_draw,
      not_said,
      draw5,
      app_code_explain_container_next,
      draw6,
      code_said,
    ],
    decoys: null,
    example_pointers: [
      [[left, top, "2", "1"], start_color],
      [[right, bottom, "3"], end_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
