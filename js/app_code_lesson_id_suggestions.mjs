export function app_code_lesson_id_suggestions(word) {
  "The ids of the lessons spelled most like what somebody wrote where a lesson should be - what to offer when a link names a lesson the app does not teach.";
  "It may come back empty, and empty is an answer: no lesson is spelled anything like this, so there is nothing honest to offer and the page says so rather than naming its least unlike lesson.";
  let ids = app_code_lesson_ids();
  let apart_maximum = app_code_lesson_id_apart_maximum();
  let nearest = texts_nearest(ids, word, apart_maximum);
  return nearest;
}
