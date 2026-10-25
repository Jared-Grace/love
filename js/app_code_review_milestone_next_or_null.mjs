import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_checkpoint } from "./app_code_review_checkpoint.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_checkpoints } from "./app_code_checkpoints.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { add_1 } from "./add_1.mjs";
export function app_code_review_milestone_next_or_null(context) {
  "The id of the milestone drawn straight after the checkpoint this tab is on, under the same lesson, or nothing where none is - the way on from a checkpoint before the lesson after it.";
  "Asked because the way on used to be only the lesson after, and two milestones stand under one lesson: finishing the first, with no lesson after it, said there were no more lessons while the second was waiting right below it.";
  "Always a milestone and never a review: the checkpoints under one lesson are its review first, if it has one, then its milestones in their order - the order the list of lessons draws them in - and a lesson has at most one review, so whatever comes after the one this tab is on is a milestone.";
  arguments_assert(arguments, 1);
  let checkpoint = app_code_review_checkpoint(context);
  let key = property_get(checkpoint, "key");
  let number = property_get(checkpoint, "number");
  let checkpoints = app_code_checkpoints();
  let here = list_filter_property(checkpoints, "number", number);
  let keys = list_map_property(here, "key");
  let b = list_includes(keys, key);
  if (not(b)) {
    return null;
  }
  let index = list_index_of(keys, key);
  let index2 = add_1(index);
  let next = list_get_or_null(keys, index2);
  return next;
}
