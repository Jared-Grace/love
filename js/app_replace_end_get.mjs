import { property_text_split_space } from "./property_text_split_space.mjs";
export function app_replace_end_get(goal) {
  let end = property_text_split_space(goal, "end");
  return end;
}
