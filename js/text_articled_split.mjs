import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_articled } from "./text_articled.mjs";
export function text_articled_split(separator_valid_name) {
  let articled = text_articled(separator_valid_name);
  let split = text_split_space(articled);
  let r2 = list_first_remaining(split);
  let remaining = property_get(r2, "remaining");
  let article = property_get(r2, "first");
  let text = list_join_space(remaining);
  let r = {
    article,
    text,
  };
  return r;
}
