import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_end_get(goal) {
  let end_value = property_get(goal, "end");
  let end = text_split_space(end_value);
  return end;
}
