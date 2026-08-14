import { app_replace_goal_symbols_get } from "./app_replace_goal_symbols_get.mjs";
export function app_replace_end_get(goal) {
  let end = app_replace_goal_symbols_get(goal, "end");
  return end;
}
