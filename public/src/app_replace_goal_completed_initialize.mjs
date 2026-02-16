import { property_get_or } from "../../../love/public/src/property_get_or.mjs";
export function app_replace_goal_completed_initialize(g) {
  let value = property_get_or(g, "completed", false);
  return value;
}
