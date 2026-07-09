import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
export function app_code_lesson_name_id(left, rights) {
  let joined = list_join_comma_space(rights);
  let wrapped = text_wrap_parenthesis(joined);
  let combined = text_combine_middle_space(left, wrapped);
  return combined;
}
