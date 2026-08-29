import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_unanswered_index_try } from "./app_code_lesson_quiz_unanswered_index_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { add_1 } from "./add_1.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_way_on_unfinished_try(
  context,
  quizzes,
  quiz_index,
  qli,
) {
  "$plain quiz_index";
  "$plain qli";
  "Where this learner still has work left unfinished, seen from the quiz they are reading, WHEN THAT IS SOMEWHERE OTHER than where the plain way on already leads - a quiz of this lesson they never answered, or a lesson of the course they never finished - and nothing at all when the two lead to the same place, or when nothing is left unfinished.";
  "NOTHING IS ANSWERED WHERE THE TWO AGREE, because the only reason to draw a second button is that the plain one goes somewhere else. Offered anyway it would stand under Next saying the same thing in different words, and a learner reading two buttons has to work out for themselves that they are one.";
  "A QUIZ OF THIS LESSON IS LOOKED FOR FIRST, because work left behind where the learner is standing is nearer than work anywhere else in the course, and going to it does not take them out of the lesson they are reading.";
  "What comes back says WHICH OF THE TWO it is, because the two are gone to in different ways and are told to the learner in different words, and neither the going nor the telling can work that out from a place alone.";
  arguments_assert(arguments, 4);
  let index_quiz = app_code_lesson_quiz_unanswered_index_try(
    context,
    quizzes,
    quiz_index,
  );
  let quiz_found = null_not_is(index_quiz);
  if (quiz_found) {
    ("on every quiz but the last of a lesson, the plain way on IS the quiz straight after this one - so an unfinished quiz that happens to be that one is already being offered");
    let index_after = add_1(quiz_index);
    let plain_goes_to_quiz = not(qli);
    let already = equal(index_quiz, index_after);
    let same = plain_goes_to_quiz && already;
    if (same) {
      return null;
    }
    let way_quiz = {
      kind: "quiz",
      index: index_quiz,
      lesson: null,
    };
    return way_quiz;
  }
  let number = app_code_lesson_current_number(context);
  let id = app_code_lesson_current_id(context);
  let lesson = app_code_lesson_incomplete_next(context, number, id);
  let none = null_is(lesson);
  if (none) {
    return null;
  }
  ("the plain way on reaches a LESSON only at the end of the last quiz of one, and only where no review stands in between. Anywhere else it is a quiz or a review, and an unfinished lesson is somewhere else than that by construction.");
  let has_review = app_code_review_due_is(number);
  let plain_goes_to_lesson = qli && not(has_review);
  if (plain_goes_to_lesson) {
    let lessons = app_code_lessons();
    ("the lesson straight after this one sits at the 1-based number of this one, counted from zero");
    let in_order = list_get_or_null(lessons, number);
    ("where there IS no lesson after this one, the plain way on falls back to the unfinished one - which is this very lesson, so there is nothing else to offer");
    let ended = null_is(in_order);
    if (ended) {
      return null;
    }
    let id_in_order = property_get(in_order, "id");
    let id_unfinished = property_get(lesson, "id");
    let same = equal(id_in_order, id_unfinished);
    if (same) {
      return null;
    }
  }
  let way_lesson = {
    kind: "lesson",
    index: null,
    lesson,
  };
  return way_lesson;
}
