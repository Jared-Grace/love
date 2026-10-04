import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_meetings_hours_draw } from "./app_code_meetings_hours_draw.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
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
export function app_code_lesson_statement_name_meeting_inside() {
  arguments_assert(arguments, 0);
  ("whether one meeting is inside another: let after = s1 <= s2; let before = e2 <= e1; let inside = after && before; - picked by the human 2026-10-04 from a list of next lessons. In DSA it is the interval containment check, used to drop a range another range already covers, and it leads to a rectangle inside a rectangle, which is this check across and down.");
  ("Picked in place of the number of squares in a rectangle, which was offered first and turned out to be How many squares two rectangles share already. Not picked: the squares around a rectangle's edge, 2 * (width + height) - 4, offered beside this one.");
  ("Three lines, because let inside = s1 <= s2 && e2 <= e1; is longer than the 30 characters a title line may have. after and before are said of the second meeting: it starts at or after the first starts, and ends at or before the first ends. The check is one way round, the second inside the first; the writing says so, and a question with the first inside the second answers false.");
  ("<= and not <, the other way from Do two meetings overlap: a meeting that starts when the other starts is still inside it, and the writing shows that case. Every screen asks a pair that shares a start or an end, because it is the case a < would get wrong.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two pairs where the second is inside and two where it is not: one of those crosses an end of the first, and the other is the first inside the second, or two meetings apart.");
  ("Start hours wear the start colour and end hours the end colour, as in Do two meetings overlap, which is the reminder. Words naming a meeting wear the colour the picture fills that meeting with, the first purple and the second orange, asked by the human 2026-10-04; it, standing for a meeting, stays plain.");
  ("The writing was a first draft by Claude 2026-10-04; the first two screens were then worded by the human the same day, who asked for a picture of the two meetings. Two slips in that wording were mended rather than copied, and reported back: the ends were written as 10 and 11 where the example ends at 11 and 12, and the first check was written as the second meeting having begun by the time the first starts, which is the wrong way round for s1 <= s2.");
  let names = ["s1", "e1", "s2", "e2"];
  let s = list_first(names);
  let e = list_second(names);
  let s2 = list_get(names, 2);
  let e2 = list_get(names, 3);
  let after = "after";
  let before = "before";
  let inside = "inside";
  let at_most = js_operator_less_than_equal_symbol();
  let and_op = js_operator_and_symbol();
  let check_after = js_code_binary_spaced_nb(s, at_most, s2);
  let line_after = js_code_let_statement(after, check_after);
  let check_before = js_code_binary_spaced_nb(e2, at_most, e);
  let line_before = js_code_let_statement(before, check_before);
  let both = js_code_binary_spaced_nb(after, and_op, before);
  let line_inside = js_code_let_statement(inside, both);
  let step = {
    middle: [line_after, line_before, line_inside],
    logged: [inside],
  };
  let start = "start";
  let end = "end";
  let overlap = "overlap";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let less = js_operator_less_than_symbol();
  let later = js_code_call_args(max_name, [s, s2]);
  let line_start = js_code_let_statement(start, later);
  let earlier = js_code_call_args(min_name, [e, e2]);
  let line_end = js_code_let_statement(end, earlier);
  let check_overlap = js_code_binary_spaced_nb(start, less, end);
  let line_overlap = js_code_let_statement(overlap, check_overlap);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 9],
      [e, 11],
      [s2, 10],
      [e2, 12],
    ],
    [line_start, line_end, line_overlap],
    [overlap],
  );
  function values_get() {
    "two pairs with the second inside the first, one sharing a start or an end, and two without, in a fresh order each screen";
    let sharing = list_shuffle_take(
      [
        [13, 16, 13, 15],
        [9, 12, 10, 12],
      ],
      1,
    );
    let within = list_shuffle_take(
      [
        [8, 12, 9, 10],
        [10, 14, 11, 13],
      ],
      1,
    );
    let crossing = list_shuffle_take(
      [
        [9, 11, 10, 12],
        [10, 12, 9, 11],
      ],
      1,
    );
    let other = list_shuffle_take(
      [
        [9, 10, 8, 12],
        [9, 10, 13, 14],
      ],
      1,
    );
    let insides = list_concat(sharing, within);
    let outsides = list_concat(crossing, other);
    let all = list_concat(insides, outsides);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a start hour, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "an end hour, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  let spaced_at_most = js_code_binary_spaced_nb("", at_most, "");
  function check_worked(low, high, color) {
    "low <= high as one code chip, both hours in the colour of the part they play";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_at_most, high],
      [color, plain, color],
    );
    return chip;
  }
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let at_most_chip = app_code_explain_number_colored(at_most, plain);
  let less_chip = app_code_explain_number_colored(less, plain);
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  function one(text) {
    "words naming the first meeting, in the colour the picture fills it with";
    let word = app_code_explain_word_colored(text, first_color);
    return word;
  }
  function two(text) {
    "words naming the second meeting, in the colour the picture fills it with";
    let word = app_code_explain_word_colored(text, second_color);
    return word;
  }
  let first_meeting = one("first meeting");
  let first_one = one("first one");
  let first = one("first");
  let second_meeting = two("second meeting");
  let second = two("second");
  let v = from("8");
  let v2 = till("12");
  let v3 = from("9");
  let v4 = till("11");
  let v18 = one("one meeting");
  let v19 = two("another");
  let draw = app_code_explain_said([
    "Suppose ",
    v18,
    " is from ",
    v,
    " to ",
    v2,
    " o'clock, and ",
    v19,
    " is from ",
    v3,
    " to ",
    v4,
  ]);
  let v_s = from("9");
  let v_s1 = from("8");
  let draw2 = app_code_explain_said([
    "The ",
    second_meeting,
    " starts (",
    v_s,
    ") after the ",
    first_one,
    " starts (",
    v_s1,
    ")",
  ]);
  let v_e = till("11");
  let v_e1 = till("12");
  let draw3 = app_code_explain_said([
    "And the ",
    second_meeting,
    " ends before (",
    v_e,
    ") the ",
    first_one,
    " ends (",
    v_e1,
    ")",
  ]);
  function meetings_draw(box) {
    "the first meeting, 8 to 12, above the second, 9 to 11, on a ruler of the hours";
    app_code_meetings_hours_draw(box, 8, 12, [
      [8, 12],
      [9, 11],
    ]);
  }
  let how_said = app_code_explain_said([
    "How can we tell the ",
    second_meeting,
    " is inside the ",
    first_meeting,
    " using numbers?",
  ]);
  let first_said = app_code_explain_said([
    "First we check that the ",
    first_meeting,
    " has begun by the time the ",
    second_meeting,
    " starts:",
  ]);
  let then_said = app_code_explain_said([
    "Then we check that the ",
    second_meeting,
    " has ended by the time the ",
    first_meeting,
    " ends:",
  ]);
  let draw4 = app_code_explain_said([
    "So the ",
    second_meeting,
    " is inside the ",
    first,
  ]);
  let v5 = check_worked("8", "9", start_color);
  let draw5 = app_code_explain_said(["", v5, " is ", is_true]);
  let v6 = check_worked("11", "12", end_color);
  let draw6 = app_code_explain_said(["", v6, " is ", is_true]);
  let draw7 = app_code_explain_said([
    "Both are ",
    is_true,
    ", so the ",
    second_meeting,
    " is inside the ",
    first,
  ]);
  let v7 = from("8");
  let v8 = till("10");
  let draw8 = app_code_explain_said([
    "But suppose the ",
    second_meeting,
    " is from ",
    v7,
    " to ",
    v8,
  ]);
  let v9 = from("8");
  let draw9 = app_code_explain_said([
    "It starts when the ",
    first_one,
    " starts, at ",
    v9,
    ", and it is still inside the ",
    first,
  ]);
  let v10 = check_worked("8", "8", start_color);
  let draw10 = app_code_explain_said([
    "That is why we check with ",
    at_most_chip,
    " and not ",
    less_chip,
    ": ",
    v10,
    " is ",
    is_true,
  ]);
  let v11 = from("11");
  let v12 = till("13");
  let draw11 = app_code_explain_said([
    "And suppose the ",
    second_meeting,
    " is from ",
    v11,
    " to ",
    v12,
  ]);
  let v13 = check_worked("13", "12", end_color);
  let draw12 = app_code_explain_said([
    "It ends after the ",
    first_one,
    " ends: ",
    v13,
    " is ",
    is_false,
  ]);
  let draw13 = app_code_explain_said([
    "So the ",
    second_meeting,
    " is not inside the ",
    first,
  ]);
  let v14 = from(s);
  let v15 = till(e);
  let v16 = from(s2);
  let v17 = till(e2);
  let draw14 = app_code_explain_said([
    "Suppose the ",
    first_meeting,
    " is from ",
    v14,
    " to ",
    v15,
    ", and the ",
    second,
    " is from ",
    v16,
    " to ",
    v17,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that checks whether the ",
    second_meeting,
    " is inside the ",
    first,
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Is one meeting inside another",
    title_code: line_inside,
    names,
    values_get,
    example_values: [8, 12, 9, 11],
    step,
    remember_lesson: app_code_lesson_statement_name_meetings_overlap,
    remember_parts: ["we can check whether two meetings overlap:"],
    remember_lines,
    explain: [
      draw,
      draw2,
      draw3,
      draw4,
      meetings_draw,
      app_code_explain_container_next,
      how_said,
      first_said,
      draw5,
      then_said,
      draw6,
      draw7,
      app_code_explain_container_next,
      draw8,
      draw9,
      draw10,
      app_code_explain_container_next,
      draw11,
      draw12,
      draw13,
      app_code_explain_container_next,
      draw14,
      code_said,
    ],
    decoys: null,
    example_pointers: [
      [[s, s2, after, "8", "9"], start_color],
      [[e, e2, before, "11", "12"], end_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
