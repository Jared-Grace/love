import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
import { app_code_lesson_expression_which_part_first_answer } from "./app_code_lesson_expression_which_part_first_answer.mjs";
import { app_code_lesson_expression_which_part_first_decoys } from "./app_code_lesson_expression_which_part_first_decoys.mjs";
import { app_code_lesson_expression_which_part_first_expression } from "./app_code_lesson_expression_which_part_first_expression.mjs";
import { app_code_lesson_expression_which_part_first_title_name_id } from "./app_code_lesson_expression_which_part_first_title_name_id.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { add } from "./add.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { multiply } from "./multiply.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_which_part_first() {
  "which part of a line is replaced first, and what goes wrong when it is the other one: 1 + 2 * 4. ONE new idea on top of the replacing lessons, which each held a line with only one part that could be replaced - so the choice never arose and replacing landed on the right value whichever way it was read. Here there are two parts and only one of them may go first.";
  "The rule this teaches - * before + - is not new. The cross-precedence lessons already taught it about SOLVING a line. What is new is that the same rule governs REPLACING: a learner who has been told a part can be swapped for its value has been given a move that is only sound at one of the two places it appears to fit.";
  "It is a lesson rather than a line inside another one because it can be QUIZZED. Said as a caveat at the foot of a card it can only be read; asked as a question with the wrong part sitting next to the right one, the learner has to make the choice the rule is about, and making it wrong once teaches more than the caveat ever did.";
  "The counter-example is the whole point and it is shown in full rather than asserted: the wrong replacement is carried through to 12 and set beside the true answer 9. A line that only said we cannot replace the 1 + 2 first would ask the learner to take the harm on trust, and the harm is the reason.";
  "Every number on the intro cards is worked out by add and multiply rather than typed, so the counter-example cannot quietly say something the code would not do - which on a card whose whole job is to be WRONG in a particular way is the one thing that would ruin it.";
  "Backwards is switched off. The answer is a PART of the question, so 2 * 4 belongs to every line that happens to contain it, and asking which code it came from could put two right buttons in front of the learner and mark one of them wrong.";
  let name_id = app_code_lesson_expression_which_part_first_title_name_id();
  let next_arg = list_iterator_refillable(refill);
  function questions_get() {
    let arg = next_arg();
    let r = [arg];
    return r;
  }
  let batch_get = app_code_batch_question_answer_fns(
    questions_get,
    app_code_lesson_expression_which_part_first_answer,
  );
  let lesson = app_code_lesson_code_generic({
    value: "part",
    batch_get,
    name_id,
    above,
    example_count: 4,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
    decoys: app_code_lesson_expression_which_part_first_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: "Solved first: ",
    backwards_include: false,
  });
  return lesson;
  function refill() {
    "four examples a screen";
    let v = app_code_lesson_expression_which_part_first_expression();
    let v2 = app_code_lesson_expression_which_part_first_expression();
    let v3 = app_code_lesson_expression_which_part_first_expression();
    let v4 = app_code_lesson_expression_which_part_first_expression();
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "the line, then the replacement that works, then the same line with the other replacement carried through to a different answer, then the rule";
    "One line for both cards, not two. The wrong card is only worth reading beside the right one, and a second line would let a learner file the failure under that line rather than under the choice.";
    "1 + 2 * 4 because the two parts differ in every way that matters to the reader: the numbers are all different, the two operators are different, and the two answers - 9 and 12 - are far enough apart that nobody can wonder whether they misread a digit.";
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    let left = 1;
    let middle = 2;
    let right = 4;
    let left_text = text_to(left);
    let middle_text = text_to(middle);
    let right_text = text_to(right);
    let strong_part = app_code_operator_code(middle_text, times, right_text);
    let weak_part = app_code_operator_code(left_text, plus, middle_text);
    let whole = app_code_operator_code(left_text, plus, strong_part);
    let inner = multiply(middle, right);
    let inner_text = text_to(inner);
    let value = add(left, inner);
    let value_text = text_to(value);
    let stood_in = app_code_operator_code(left_text, plus, inner_text);
    let wrong_inner = add(left, middle);
    let wrong_inner_text = text_to(wrong_inner);
    let wrong_stood_in = app_code_operator_code(
      wrong_inner_text,
      times,
      right_text,
    );
    let wrong_value = multiply(wrong_inner, right);
    let wrong_value_text = text_to(wrong_value);
    let right_card = app_code_container_light_blue(root);
    app_code_lesson_suppose_solve_line(right_card, "Suppose", whole);
    html_div_cycle_code(right_card, [
      "Remember: the ",
      strong_part,
      " is solved first, to get ",
      inner_text,
    ]);
    html_div_cycle_code(right_card, [
      "Then we have ",
      stood_in,
      ", which is ",
      value_text,
    ]);
    html_div_cycle_code(right_card, [
      "Here we replaced the ",
      strong_part,
      " with ",
      inner_text,
      ", and that is valid",
    ]);
    let wrong_card = app_code_container_light_blue(root);
    html_div_cycle_code(wrong_card, [
      "",
      weak_part,
      " is ",
      wrong_inner_text,
    ]);
    html_div_cycle_code(wrong_card, [
      "If we replace the ",
      weak_part,
      " with ",
      wrong_inner_text,
      ", then we have ",
      wrong_stood_in,
      ", which is ",
      wrong_value_text,
    ]);
    html_div_cycle_code(wrong_card, [
      "But ",
      whole,
      " is ",
      value_text,
      ", not ",
      wrong_value_text,
    ]);
    html_div_cycle_code(wrong_card, [
      "So here we cannot replace the ",
      weak_part,
      " first",
    ]);
    html_div_cycle_code(wrong_card, [
      "Instead we must replace the ",
      strong_part,
    ]);
    html_div_cycle_code(wrong_card, [
      "That is because ",
      times,
      " is done before ",
      plus,
    ]);
    let rule_card = app_code_container_light_blue(root);
    ("the rule closes the screen rather than opening it, the same way round as the lesson on comparing a comparison: a general sentence put first has nothing yet to attach to, while the same sentence at the end is a name for something already watched happening");
    html_div_cycle_code(rule_card, [
      "So, in general, replacements must honor order like ",
      times,
      " before ",
      plus,
    ]);
  }
}
