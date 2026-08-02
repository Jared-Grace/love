import { property_text_split_space } from "./property_text_split_space.mjs";
import { app_replace_end_get } from "./app_replace_end_get.mjs";
export function app_replace_start_end_get(goal) {
  let start = property_text_split_space(goal, "start");
  let end = app_replace_end_get(goal);
  let se = {
    end,
    start,
  };
  return se;
}
