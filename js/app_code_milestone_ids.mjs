import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_milestones } from "./app_code_milestones.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_code_milestone_ids() {
  arguments_assert(arguments, 0);
  let milestones = app_code_milestones();
  let ids = list_map_property(milestones, "id");
  return ids;
}
