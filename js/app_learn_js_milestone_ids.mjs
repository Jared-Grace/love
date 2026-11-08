import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_milestones } from "./app_learn_js_milestones.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_learn_js_milestone_ids() {
  arguments_assert(arguments, 0);
  let milestones = app_learn_js_milestones();
  let ids = list_map_property(milestones, "id");
  return ids;
}
