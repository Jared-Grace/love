import { app_code_milestone_ids } from "./app_code_milestone_ids.mjs";
import { app_code_lesson_id_apart_maximum } from "./app_code_lesson_id_apart_maximum.mjs";
import { texts_nearest } from "./texts_nearest.mjs";
export function app_code_milestone_id_suggestions(word) {
  "The milestones spelled most like what somebody wrote where a milestone should be. Measured the way a lesson's id is, because a milestone's id is spelled the same way, words held together by underscores.";
  let ids = app_code_milestone_ids();
  let apart_maximum = app_code_lesson_id_apart_maximum();
  let nearest = texts_nearest(ids, word, apart_maximum);
  return nearest;
}
