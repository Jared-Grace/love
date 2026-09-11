import { app_code_lesson_expression_choose_order_both_sides_any_comparison } from "./app_code_lesson_expression_choose_order_both_sides_any_comparison.mjs";
import { app_code_lesson_same_message } from "./app_code_lesson_same_message.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_both_sides_any_comparison_expression } from "./app_code_lesson_expression_choose_order_both_sides_any_comparison_expression.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_container_light_blue_text } from "./app_code_container_light_blue_text.mjs";
import { app_code_lesson_expression_choose_order_both_sides_any_comparison_above } from "./app_code_lesson_expression_choose_order_both_sides_any_comparison_above.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_both_sides_any_comparison_title_name_id } from "./app_code_lesson_expression_both_sides_any_comparison_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
export function app_code_lesson_expression_both_sides_any_comparison() {
  arguments_assert(arguments, 0);
  ("the whole line answered in one go: 9 - 2 < 4 + 1 asked for its value, with nothing to press");
  ("The twin of the lesson that walks the same line a press at a time, and the one the run was missing. The both sides lesson whose middle is always === already has its twin - the learner is asked for 3 + 4 === 5 + 2 in one go - and the lesson that changes the middle to any of the other five had none, so the only line a learner ever held whole was an === one. That is a rule about one symbol rather than the rule there is.");
  ("The lines are drawn by the very same maker the pressing lesson draws its lines with, so the middle is still drawn fresh for every line from the five comparisons that are not ===, and a learner meets one family of lines twice rather than two families that merely look alike.");
  ("What stands above the card is the pressing lesson's own telling, asked for rather than written again: one true line of this kind worked all the way through, and then the sentence saying what is new.");
  ("★ SO A CARD ABOVE IT SAYS THE TELLING IS THE ONE THEY ALREADY READ. Its twin sits immediately before it, so the card can say the previous lesson and name no title at all. It used to name the twin by its home title, because the lesson on arithmetic on both sides of an === sat between the two; the run was then reordered so that every pressing lesson is followed by its own all-at-once twin, which put this pair side by side. The shorter wording is also the safer one - a card holding a title goes quietly wrong the day that title is reworded, and this one already had. Neither wording is written here at all now: the two lessons are handed over as themselves and the sentence is worked out from where they sit, so a reorder and a retitle both reach it and neither can break it.");
  ("A screen holds one line that comes to true and one that comes to false, so neither answer can be reached by habit. The wrong answer offered is the opposite word, which is the only other thing a line like this can come to.");
  function code_wanted(want_true) {
    "one line of this lesson's family, drawn to come out to want_true, handed over as the text of it";
    let tree =
      app_code_lesson_expression_choose_order_both_sides_any_comparison_expression(
        want_true,
      );
    let code = app_code_expression_code(tree);
    return code;
  }
  function above(root) {
    "the card saying this telling is one already read, naming the lesson it came from, and then that lesson's telling itself";
    let text = app_code_lesson_same_message(
      app_code_lesson_expression_both_sides_any_comparison,
      app_code_lesson_expression_choose_order_both_sides_any_comparison,
      "you are asked to provide the final answer, instead of solving it step by step",
    );
    app_code_container_light_blue_text(root, text);
    app_code_lesson_expression_choose_order_both_sides_any_comparison_above(
      root,
      context,
    );
  }
  function refill() {
    "two questions a screen, one line coming to true and one coming to false";
    let v = code_wanted(true);
    let v2 = code_wanted(false);
    let list = [v, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id =
    app_code_lesson_expression_both_sides_any_comparison_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
