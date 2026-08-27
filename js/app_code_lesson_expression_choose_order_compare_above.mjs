import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_lesson_expression_choose_order_compare_line_apart } from "./app_code_lesson_expression_choose_order_compare_line_apart.mjs";
import { app_code_lesson_expression_choose_order_compare_run } from "./app_code_lesson_expression_choose_order_compare_run.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_choose_order_compare_intro } from "./app_code_lesson_expression_choose_order_compare_intro.mjs";
export function app_code_lesson_expression_choose_order_compare_above(root) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("what stands above the card: the word comparison put back in front of the learner, then one line of each shape this lesson asks about worked all the way through, then the one sentence saying what is different here");
  ("The same recall, run, hinge shape as the lesson before it - because a learner arriving here has just read that shape on the screen behind them. A run laid out a second way would be read as a second thing to learn, when the only new thing on this screen is what the operators ARE.");
  ("The recall card is the one the comparison lessons already share, not a copy of it. This lesson leans on the word comparison in every line it draws, and a learner who met the word two lessons ago is owed it again; a second wording of it would leave the word taught twice, differently, on screens next door to each other.");
  ("BOTH SHAPES ARE WORKED, because the card below asks about both. The bank hands out a line with the comparison on the right and a line with it on the left, turn about, and the two are read by different rules: on the right the comparison is printed inside parentheses and they decide, on the left there are none and the ordinary rule for two operators decides. Measured 2026-08-27: only the bracketed line was worked, so a learner met a line like 4 === 6 !== true having read a rule about a mark that line does not carry.");
  ("The bracketed line is worked FIRST, for the reason the first question of the bank puts that shape first: the part that may be solved first is then not the leftmost thing on the line, so a learner following the run learns to read the line rather than the position. Reversing the two would teach position on the first line they ever see and take it away on the second.");
  ("The two runs come to different answers, true and then false, because two worked lines both landing on true is a pattern a learner can read off two examples and the card below breaks it on the very first question.");
  ("Every piece of each telling comes from that one line - which part cannot go yet, which part goes first, what it comes to, what is left, and what that comes to. Numbers borrowed from nowhere in particular would be five things to take on trust; one line worked from top to bottom is a run a learner can follow.");
  ("the recall makes its own card, so it is handed the root rather than a card to stand inside - a card within a card draws a second border around one line and reads as a note pinned to a screen rather than as one of its cards");
  app_code_lesson_expression_comparing_a_comparison_recall(root);
  let gathered = app_code_lesson_expression_choose_order_compare_line_apart(
    true,
    false,
  );
  app_code_lesson_expression_choose_order_compare_run(
    root,
    gathered,
    "Suppose",
  );
  let flat = app_code_lesson_expression_choose_order_compare_line_apart(
    false,
    true,
  );
  app_code_lesson_expression_choose_order_compare_run(
    root,
    flat,
    "Now suppose",
  );
  let change_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_compare_intro(change_card);
}
