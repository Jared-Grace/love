import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { text_articled } from "../../../love/public/src/text_articled.mjs";
export function text_articled_split(separator_valid_name) {
  let articled = text_articled(separator_valid_name);
  let split = text_split_space(articled);
  let r = list_first_second_only(split);
  return r;
}
