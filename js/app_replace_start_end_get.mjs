import { app_replace_end_get } from "./app_replace_end_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_start_end_get(goal) {
  let start_value = property_get(goal, "start");
  let start = text_split_space(start_value);
  let end = app_replace_end_get(goal);
  let se = {
    end,
    start,
  };
  return se;
}
