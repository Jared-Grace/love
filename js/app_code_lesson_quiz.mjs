import { app_code_lesson_quiz_container_correction } from "./app_code_lesson_quiz_container_correction.mjs";
import { app_code_lesson_quiz_answer_label_set } from "./app_code_lesson_quiz_answer_label_set.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_progress_quiz_correct_record } from "./app_code_progress_quiz_correct_record.mjs";
import { app_code_lesson_quiz_render_correction } from "./app_code_lesson_quiz_render_correction.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz(
  container_blue_light,
  qa,
  parent,
  context,
  refresh,
  info,
  batch_get,
  quizzes,
  next_get,
) {
  let question_label = property_get(info, "question_label");
  let r = app_code_lesson_quiz_answer_label_set(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let answer_label_set = property_get(r, "answer_label_set");
  let container_question = property_get(r, "container_question");
  let r22 = property_get(r, "r2");
  let answer_label2 = property_get(r, "answer_label");
  let quiz_index2 = property_get(r, "quiz_index");
  let container_success_message2 = property_get(r, "container_success_message");
  let container_correction3 = property_get(r, "container_correction");
  let answers_div3 = property_get(r22, "answers_div");
  let qa_for3 = property_get(r22, "qa_for");
  let answer_property3 = property_get(r22, "answer_property");
  let quiz_question3 = property_get(r22, "quiz_question");
  let on_question3 = property_get(r22, "on_question");
  let on_answer3 = property_get(r22, "on_answer");
  let correction_render3 = property_get(r22, "correction_render");
  let r33 = {
    quiz_index: quiz_index2,
    container_success_message: container_success_message2,
    container_correction: container_correction3,
    answers_div: answers_div3,
    qa_for: qa_for3,
    answer_property: answer_property3,
    quiz_question: quiz_question3,
    on_question: on_question3,
    on_answer: on_answer3,
    correction_render: correction_render3,
  };
  let r32 = r33;
  let correction_render2 = property_get(r32, "correction_render");
  let on_answer2 = property_get(r32, "on_answer");
  let on_question2 = property_get(r32, "on_question");
  let quiz_question2 = property_get(r32, "quiz_question");
  let answer_property2 = property_get(r32, "answer_property");
  let qa_for2 = property_get(r32, "qa_for");
  let answers_div2 = property_get(r32, "answers_div");
  let container_correction2 = property_get(r32, "container_correction");
  let r4 = {
    answer_label: answer_label2,
    r3: r32,
    correction_render: correction_render2,
    on_answer: on_answer2,
    on_question: on_question2,
    quiz_question: quiz_question2,
    answer_property: answer_property2,
    qa_for: qa_for2,
    answers_div: answers_div2,
    container_correction: container_correction2,
  };
  let r2 = r4;
  let container_correction = property_get(r2, "container_correction");
  let answers_div = property_get(r2, "answers_div");
  let qa_for = property_get(r2, "qa_for");
  let answer_property = property_get(r2, "answer_property");
  let quiz_question = property_get(r2, "quiz_question");
  let on_question = property_get(r2, "on_question");
  let on_answer = property_get(r2, "on_answer");
  let correction_render = property_get(r2, "correction_render");
  let r3 = property_get(r2, "r3");
  let answer_label = property_get(r2, "answer_label");
  let container_success_message = property_get(r3, "container_success_message");
  let quiz_index = property_get(r3, "quiz_index");
  ("the first question is painted here, below everything it reads, and not up where the pieces are gathered");
  on_qa_change();
  function on_qa_change() {
    quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
    html_clear(container_question);
    on_question(container_question, quiz_question);
    html_clear(answers_div);
    ("the label is put back to what the lesson wrote before every question, because a quiz that changed it while working the last one out would otherwise open the next one still asking the question it finished on");
    answer_label_set(answer_label);
    app_code_lesson_quiz_render_correction(
      container_correction,
      correction_render,
      qa,
    );
    on_answer(
      answers_div,
      info,
      qa,
      on_success,
      on_wrong,
      batch_get,
      answer_label_set,
    );
  }
  function on_wrong() {
    "a wrong attempt no longer reveals the answer - the learner narrows down (MC) or keeps building (unscramble); only the 'Show me the answer' button reveals the correction";
    html_visibility_hidden(container_success_message);
  }
  async function on_success() {
    "on any correct answer, flash success then auto-advance to the NEXT QUESTION of the SAME kind (the player loops through as many questions as they want; Next changes the kind, Skip leaves)";
    "the correct answer is written down here, at the one place that knows both which quiz of the lesson this is and how many the lesson has - the list screen shows a lesson as finished once every one of them has been answered right at least once";
    let quizzes_total = list_size(quizzes);
    app_code_progress_quiz_correct_record(context, quiz_index, quizzes_total);
    html_clear(container_success_message);
    app_shared_success_message(container_success_message);
    html_visibility_visible(container_success_message);
    await sleep_success_color();
    let item = next_get();
    qa = qa_for(item);
    on_qa_change();
  }
}
