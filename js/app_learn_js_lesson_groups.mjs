import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_symbols_digits_numbered } from "./app_learn_js_lesson_symbols_digits_numbered.mjs";
import { app_learn_js_lesson_operators_addition } from "./app_learn_js_lesson_operators_addition.mjs";
import { app_learn_js_lesson_expression_choose_order } from "./app_learn_js_lesson_expression_choose_order.mjs";
import { app_learn_js_lesson_expression_arithmetic_less_than } from "./app_learn_js_lesson_expression_arithmetic_less_than.mjs";
import { app_learn_js_lesson_expression_remainder_2 } from "./app_learn_js_lesson_expression_remainder_2.mjs";
import { app_learn_js_lesson_expression_round_up } from "./app_learn_js_lesson_expression_round_up.mjs";
import { app_learn_js_lesson_expression_choose_order_compare } from "./app_learn_js_lesson_expression_choose_order_compare.mjs";
import { app_learn_js_lesson_comment_note } from "./app_learn_js_lesson_comment_note.mjs";
import { app_learn_js_lesson_statement_name_average_two } from "./app_learn_js_lesson_statement_name_average_two.mjs";
import { app_learn_js_lesson_if_true } from "./app_learn_js_lesson_if_true.mjs";
import { app_learn_js_lesson_token_order } from "./app_learn_js_lesson_token_order.mjs";
import { app_learn_js_lesson_braces_run_nested } from "./app_learn_js_lesson_braces_run_nested.mjs";
import { app_learn_js_lesson_while } from "./app_learn_js_lesson_while.mjs";
import { app_learn_js_lesson_for } from "./app_learn_js_lesson_for.mjs";
import { app_learn_js_lesson_while_two_names } from "./app_learn_js_lesson_while_two_names.mjs";
import { app_learn_js_lesson_array_first } from "./app_learn_js_lesson_array_first.mjs";
export function app_learn_js_lesson_groups() {
  arguments_assert(arguments, 0);
  ("the groups the home list folds its lessons into, each named and starting at the lesson given, and running until the next one starts - the last runs to the end of the list");
  ("Each group starts at a lesson named by its function, at the human's request 2026-10-11, so a lesson added before a group's first lesson no longer pushes the lessons after it into the wrong group; nine section-run lessons added that day had just moved every number after 263. The numbers a learner sees are worked out from these by the groups' numbered twin. Until then the groups were numbers, because the human gave them as ranges of the numbers a learner sees; the names are the lessons those numbers stood at that day.");
  ("Each name is its parts in turn, words then code then words, the way a lesson title with code in it is written - so console.log is shown as code, at the human's request.");
  ("2026-10-08: Statements split in three at the human's request: Statements, the lines one at a time, through the remainder at 193; Formulas from 194, the average onward, where a line works out a question about the world - clocks, seats, grids, meetings, rectangles; Branching from 240, the first if. Not picked for 194: Word problems, since the lessons there are code to read rather than stories to solve; nor Arithmetic, which the Operators group already is.");
  ("2026-10-11: Looping from 296, the first while, at the human's request, named as Branching is, a word then the keyword as code. Not picked: Loops, since Looping matches the roadmap's word for the stage.");
  ("2026-10-28: Looping starts at Step by step: While, at the human's asking, since that lesson now comes straight before While and had fallen under Branching");
  ("2026-10-31: Looping starts at While again, the step lessons having become the last quiz of each while lesson");
  ("2026-10-29: Branching split in three, at the human's asking: Branching: if, one if; Several branches: else, from the brace-reading lessons before two ifs in a row, through if ... else; Nested branches, from an if inside an if, through else if, which is an if inside an else written shorter. No lesson moved; the order already taught several branches before nested ones. Not picked: else if as a group of its own, four small groups for one idea. Then Multiple branches rather than Several, at the human's asking.");
  ("2026-11-04: Looping: for starts at For, at the human's asking. More looping: while starts at the while lessons that follow For, so those are not filed under for. Not picked: leaving them in the for group, which would name them wrongly; moving For after them, since For comes first for the easiest learning curve, the human's stated goal.");
  ("2026-11-06: Arrays starts at The first item of an array, at the human's asking, a group of its own after the for+if lessons. Named by the one word, since an array has no keyword to show as code. Not picked: Arrays: followed by square brackets as code, which reads as an empty array rather than as the topic.");
  ("2026-11-12: More looping names for as well as while, at the human's asking, since half its lessons are for lessons");
  let groups = [
    {
      parts: ["Identifiers"],
      lesson: app_learn_js_lesson_symbols_digits_numbered,
    },
    {
      parts: [
        "Operators (",
        "+",
        " ",
        "-",
        " ",
        "*",
        " ",
        "/",
        " ",
        "<",
        " ",
        ">",
        " ",
        "<=",
        " ",
        ">=",
        " ",
        "===",
        " ",
        "!==",
        " ",
        "!",
        " ",
        "||",
        " ",
        "&&",
        ")",
      ],
      lesson: app_learn_js_lesson_operators_addition,
    },
    {
      parts: ["Nested Expressions"],
      lesson: app_learn_js_lesson_expression_choose_order,
    },
    {
      parts: ["Writing output: ", "console.log"],
      lesson: app_learn_js_lesson_expression_arithmetic_less_than,
    },
    {
      parts: ["Remainder (", "%", ")"],
      lesson: app_learn_js_lesson_expression_remainder_2,
    },
    {
      parts: ["Math functions"],
      lesson: app_learn_js_lesson_expression_round_up,
    },
    {
      parts: ["More Expressions"],
      lesson: app_learn_js_lesson_expression_choose_order_compare,
    },
    {
      parts: ["Statements"],
      lesson: app_learn_js_lesson_comment_note,
    },
    {
      parts: ["Formulas"],
      lesson: app_learn_js_lesson_statement_name_average_two,
    },
    {
      parts: ["Branching: ", "if"],
      lesson: app_learn_js_lesson_if_true,
    },
    {
      parts: ["Multiple branches: ", "else"],
      lesson: app_learn_js_lesson_token_order,
    },
    {
      parts: ["Nested branches"],
      lesson: app_learn_js_lesson_braces_run_nested,
    },
    {
      parts: ["Looping: ", "while"],
      lesson: app_learn_js_lesson_while,
    },
    {
      parts: ["Looping: ", "for"],
      lesson: app_learn_js_lesson_for,
    },
    {
      parts: ["More looping: ", "while", " and ", "for"],
      lesson: app_learn_js_lesson_while_two_names,
    },
    {
      parts: ["Arrays"],
      lesson: app_learn_js_lesson_array_first,
    },
  ];
  return groups;
}
