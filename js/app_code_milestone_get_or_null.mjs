import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_milestones } from "./app_code_milestones.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function app_code_milestone_get_or_null(id) {
  "The milestone with this id, or nothing when no milestone answers to it - an id kept in a tab or a link can outlive the milestone it named.";
  arguments_assert(arguments, 1);
  let milestones = app_code_milestones();
  let milestone = list_find_property_or_null(milestones, "id", id);
  return milestone;
}
