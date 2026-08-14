import { app_replace_goal_symbols_get } from "./app_replace_goal_symbols_get.mjs";
import { app_replace_end_get } from "./app_replace_end_get.mjs";
export function app_replace_start_end_get(goal) {
  let start = app_replace_goal_symbols_get(goal, "start");
  let end = app_replace_end_get(goal);
  let se = {
    end,
    start,
  };
  return se;
}
