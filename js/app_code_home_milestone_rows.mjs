import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_milestones } from "./app_code_milestones.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_review_complete_is } from "./app_code_review_complete_is.mjs";
import { app_code_home_milestone_row } from "./app_code_home_milestone_row.mjs";
import { each } from "./each.mjs";
export function app_code_home_milestone_rows(
  body,
  context,
  lesson_number,
  reviews_complete,
  id_left,
) {
  "$plain lesson_number";
  "$plain id_left";
  "Draw the rows of every milestone standing under one lesson, and hand back the row the learner just came back from, or nothing where none of them is.";
  "id_left is the milestone this tab left, or nothing when what it left was not a milestone. A finished milestone is read off the same list of finished checkpoints a review is, filed under its id.";
  "Not counted toward whether the group of lessons around it is finished: a milestone is practice offered on top of the course, at the human's request, not a step the course is walked through.";
  arguments_assert(arguments, 5);
  let milestones = app_code_milestones();
  let here = list_filter_property(milestones, "number", lesson_number);
  let left = null;
  function each_milestone(milestone) {
    let id = property_get(milestone, "id");
    let complete = app_code_review_complete_is(reviews_complete, id);
    let row = app_code_home_milestone_row(body, context, milestone, complete);
    if (equal(id, id_left)) {
      left = row;
    }
  }
  each(here, each_milestone);
  return left;
}
