import { app_code_hash_field_lesson } from "./app_code_hash_field_lesson.mjs";
import { app_code_hash_field_screen } from "./app_code_hash_field_screen.mjs";
import { app_code_hash_field_quiz } from "./app_code_hash_field_quiz.mjs";
import { app_code_hash_field_review } from "./app_code_hash_field_review.mjs";
import { app_code_hash_field_complete } from "./app_code_hash_field_complete.mjs";
import { app_code_hash_field_course } from "./app_code_hash_field_course.mjs";
import { app_code_hash_field_milestone } from "./app_code_hash_field_milestone.mjs";
import { app_code_hash_field_questions } from "./app_code_hash_field_questions.mjs";
export function app_code_hash_fields() {
  "Every part of a code app link that is checked before the app builds anything.";
  "Every word the app writes into a link is here, so the link it hands out is a link it can read back whole.";
  let lesson = app_code_hash_field_lesson();
  let screen = app_code_hash_field_screen();
  let quiz = app_code_hash_field_quiz();
  let review = app_code_hash_field_review();
  let complete = app_code_hash_field_complete();
  let course = app_code_hash_field_course();
  let milestone = app_code_hash_field_milestone();
  let questions = app_code_hash_field_questions();
  let fields = [
    lesson,
    screen,
    quiz,
    review,
    milestone,
    questions,
    complete,
    course,
  ];
  return fields;
}
