import { app_code_lesson_operand_generic_quizzes_get } from "./app_code_lesson_operand_generic_quizzes_get.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_bold_term } from "./app_code_lesson_bold_term.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_lesson_operand_generic(params) {
  "the shared shape for the identify-an-operand lessons (dividend / divisor / quotient): show a division (or Math.floor(a / b) === c) and let the learner pick which number is the named role, the other numbers standing as decoys (via the choose-an-operand quiz) with a role-named 'Show me the answer' (the operand correction). The caller passes only what differs: the role word, the define_prose that ends in the bolded term, a batch_get producing {question, answer}, and the name_id. The intro is BUILT here from a random sample of batch_get, so its worked example varies each visit (a different example may be the one that clicks)";
  let role = property_get(params, "role");
  let define_prose = property_get(params, "define_prose");
  let batch_get = property_get(params, "batch_get");
  let name_id = property_get(params, "name_id");
  let unscramble = property_get_or(params, "unscramble", false);
  let above_more = property_get_or(params, "above_more", null);
  let example_question_label = app_code_label_code_question();
  let answer_label = text_combine_multiple(["Choose the ", role, ": "]);
  let example_answer_label = text_combine_multiple(["The ", role, " is: "]);
  function above(root) {
    "define the role with the term bolded, then a RANDOM worked example from the same generator as the quiz, then the ask";
    let intro = app_code_container_light_blue(root);
    app_code_lesson_bold_term(intro, define_prose, role);
    let list = batch_get();
    let sample = list_first(list);
    let sample_question = property_get(sample, "question");
    let sample_answer = property_get(sample, "answer");
    let middle = text_combine_multiple([" the ", role, " is "]);
    html_div_cycle_code(intro, ["In ", sample_question, middle, sample_answer]);
    if (above_more) {
      ("an optional extra block after the definition (the quotient lesson uses it to remind all three roles, since its question shows the dividend, divisor and quotient at once)");
      above_more(root);
    }
    let ask = app_code_container_light_blue(root);
    let combined = text_combine_multiple([
      "In this lesson you will choose the ",
      role,
    ]);
    html_div_cycle_code(ask, [combined]);
  }
  function quizzes_get(question, answer) {
    let r = app_code_lesson_operand_generic_quizzes_get(
      question,
      answer,
      answer_label,
      role,
      unscramble,
      example_answer_label,
      batch_get,
    );
    return r;
  }
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
