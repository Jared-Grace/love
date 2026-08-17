import { app_code_lesson_expression_which_part_first_above } from "./app_code_lesson_expression_which_part_first_above.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
import { app_code_lesson_expression_which_part_first_answer } from "./app_code_lesson_expression_which_part_first_answer.mjs";
import { app_code_lesson_expression_which_part_first_decoys } from "./app_code_lesson_expression_which_part_first_decoys.mjs";
import { app_code_lesson_expression_which_part_first_expression } from "./app_code_lesson_expression_which_part_first_expression.mjs";
import { app_code_lesson_expression_which_part_first_title_name_id } from "./app_code_lesson_expression_which_part_first_title_name_id.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
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
    let r2 = app_code_lesson_expression_which_part_first_above(root);
    return r2;
  }
}
