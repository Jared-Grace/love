import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { app_code_lesson_bold_term } from "./app_code_lesson_bold_term.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_statement_name_average_two } from "./app_code_lesson_statement_name_average_two.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_middle_step } from "./app_code_lesson_statement_name_middle_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_integer_division } from "./app_code_lesson_expression_integer_division.mjs";
import { app_code_line_ends_middle_draw } from "./app_code_line_ends_middle_draw.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_number_line_draw } from "./app_code_number_line_draw.mjs";
export function app_code_lesson_statement_name_middle() {
  arguments_assert(arguments, 0);
  ("the whole number in the middle of two names, rounded down: let sum = low + high; let middle = Math.floor(sum / 2); console.log(middle);");
  ("The average of two with the halving rounded down, so the answer is always a whole number. It is taught because a search through a sorted list looks here on every step; the writing says so without naming lists, which are not taught yet.");
  ("Most sums are odd, so the rounding changes the answer, and no middle is one of the numbers on its own screen or the 2 it is divided by. The five middles differ.");
  ("The writing follows the human's outline, 2026-09-27, from its second half: the average-of-two lesson already shows the middle on a number line, so this one opens by naming that and teaches only what is new, an odd sum whose middle is .5 and the choice to always round down. The outline wrote Math.floor(2 + 7 / 2), which divides only the 7; the lesson adds first in a line of its own, so the order cannot go wrong.");
  ("The opening is the human's second outline, 2026-09-27: even and odd are defined, each in bold where it is first used, and each shown on a division of its own, 8 / 2 and 7 / 2, so the .5 is seen on a number that is not in the example; then the average is reminded with a button to its lesson, and only then is the sum said to be odd. Even is defined by dividing by 2 rather than by the remainder, because dividing is the step this lesson takes. Not picked: defining even by what % 2 gives, which the remainder lessons would allow, but which is not the operation on this screen.");
  ("Later the same day the human split the writing into three boxes: even and odd, then the middle, then the code under Here's the code:; and said the two distances from the middle one to a line, and how close both roundings are, 0.5.");
  ("The reminder quotes lesson 87 in its own shape, Math.floor(14 / 4) is Math.floor(3.5) and Math.floor(3.5) is 3, so the decimal and the rounding down are both on the screen before the writing uses them. Picked over the human's other thought, 2026-09-27, of two reminders, one for dividing and one for Math.floor: lesson 87's first line already shows the division ending in a decimal, so a second box would repeat it.");
  ("Numbers in the writing are code chips wearing the number line's pointing colours: 4 and 9 the ends', 6.5 and then 6 the middle's, and the last program's code and output wear them too. The line 13 / 2 === 6.5 points at its middle only, because its 2 is the one divided by, not an end.");
  ("The example is 4 and 9, asked by the human 2026-09-28, so 2 is only ever the number divided by and never an end as well. Its sum 13 is odd, and none of 4, 9, 13, 6.5 or 6 is the 8 / 2 === 4 or 7 / 2 === 3.5 worked beside even and odd, save the 4 those two give. Not picked: 3 and 8, whose 8 is the even example's; 5 and 10, whose middle 7 is the odd example's; 5 and 6, whose middle 5 is an end; 3 and 10, a longer number line for nothing more.");
  let step = app_code_lesson_statement_name_middle_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let names = ["low", "high"];
  let low = list_first(names);
  let high = list_second(names);
  let floor_name = js_code_math_floor_name();
  let slash = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  function remember_lines(box) {
    "lesson 87 in its own shape, each expression beside what it is";
    html_div_cycle_code(box, [
      "",
      "Math.floor(14 / 4)",
      " is ",
      "Math.floor(3.5)",
    ]);
    html_div_cycle_code(box, ["", "Math.floor(3.5)", " is ", "3"]);
  }
  function values_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [0, 9],
      [2, 13],
      [4, 7],
      [1, 12],
      [3, 14],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let ends = ["4", "9"];
  let combined = js_code_binary_spaced_nb("sum", slash, "2");
  let draw = app_code_line_ends_middle_draw(
    ["For example, suppose we have ", "4", " and ", "9", ":"],
    ends,
    [],
  );
  let code = js_code_binary_result_nb("4", plus, "9", "13");
  let draw2 = app_code_line_ends_middle_draw(["", code], ends, []);
  let code2 = js_code_binary_result_nb("13", slash, "2", "6.5");
  let draw3 = app_code_line_ends_middle_draw(["", code2], [], ["6.5"]);
  let draw4 = app_code_number_line_draw(4, 9, 0.5, [4, 9], 6.5);
  let draw5 = app_code_line_ends_middle_draw(
    ["", "6.5", " is ", "0.5", " away from ", "6"],
    [],
    ["6.5"],
  );
  let draw5_after = app_code_line_ends_middle_draw(
    ["And ", "6.5", " is ", "0.5", " away from ", "7"],
    [],
    ["6.5"],
  );
  ("the line under the number line, the human's, 2026-09-28: the sum is odd and so the middle is 6.5, with the word middle in the middle's colour, as the average lesson colours it");
  let odd_middle = app_code_line_ends_middle_draw(
    [
      "",
      "13",
      " is odd and ",
      "6.5",
      " is the ",
      "",
      "middle",
      "",
      " number between ",
      "4",
      " and ",
      "9",
    ],
    ends,
    ["6.5", "middle"],
  );
  function middle_worded(parts) {
    "a line whose word middle wears the middle colour, as the number line and the average lesson colour it, asked by the human 2026-09-28";
    let draw = app_code_line_ends_middle_draw(parts, [], ["middle"]);
    return draw;
  }
  let middle_sum = middle_worded([
    "So to find the number in the ",
    "",
    "middle",
    "",
    " of two numbers, we first add the two numbers together",
  ]);
  let middle_odd = middle_worded([
    "If that sum is odd, then when we divide it by ",
    "2",
    ", the ",
    "",
    "middle",
    "",
    " ends in .5",
  ]);
  let middle_whole = middle_worded([
    "What if we want the ",
    "",
    "middle",
    "",
    " number to be a whole number?",
  ]);
  let next = app_code_explain_container_next;
  let draw6 = app_code_number_line_draw(4, 9, 0.5, [4, 9], 6);
  let code_even = js_code_binary_result_nb("8", slash, "2", "4");
  let code_odd = js_code_binary_result_nb("7", slash, "2", "3.5");
  function even_draw(box) {
    "the word even, defined in bold where it is first used";
    let line = app_code_lesson_bold_term(box, "A number is ", "even");
    html_span_text_content(
      line,
      " when we divide it by 2 and get a whole number",
    );
  }
  function odd_draw(box) {
    "the word odd, defined in bold where it is first used";
    app_code_lesson_bold_term(
      box,
      "A whole number that is not even is ",
      "odd",
    );
  }
  function average_remember_draw(box, context) {
    "the average, reminded with a button to the lesson that taught it, so a learner who has forgotten can go and look";
    let line = html_div(box);
    html_span_text_content(line, "Remember, from ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_statement_name_average_two,
    );
    html_span_text_content(
      line,
      ", the average of two numbers is the number in the ",
    );
    let color_middle = app_code_highlight_color_second();
    app_code_span_text_highlight_color(line, "middle", color_middle);
  }
  let color = app_code_highlight_color();
  let color2 = app_code_highlight_color_second();
  let lesson = app_code_lesson_statement_formula({
    words: "Middle of two names",
    title_code: js_code_call_args(floor_name, [combined]),
    names,
    values_get,
    example_values: [4, 9],
    step,
    remember_lesson: app_code_lesson_expression_integer_division,
    remember_parts: ["we divide, and then round down to get a whole number:"],
    remember_lines,
    explain: [
      even_draw,
      ["For example: ", code_even],
      [
        "Even numbers can be evenly divided by 2 - that's why they're called even",
      ],
      odd_draw,
      ["If we divide an odd number by 2, the answer ends in .5: ", code_odd],
      next,
      average_remember_draw,
      middle_sum,
      middle_odd,
      draw,
      draw2,
      draw3,
      draw4,
      odd_middle,
      middle_whole,
      draw5,
      draw5_after,
      ["So rounding up and rounding down are just as close (", "0.5", ")"],
      ["So we choose one and always use it: we round down"],
      draw6,
      next,
      ["Here's the code:"],
      ["First we add the two numbers together: ", line_sum],
      ["Then we divide by ", "2", " and round down with ", floor_name],
      [
        "Programs that search quickly do this again and again, with ",
        low,
        " and ",
        high,
        " marking where to look:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [ends, color],
      [["6"], color2],
    ],
  });
  return lesson;
}
