import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { list_join_underscore } from "../../../love/public/src/list_join_underscore.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
export function app_code_lesson_name_id_generic(rights, left, name_get) {
  let rights_joined = list_join_comma_space(rights);
  let rights_wrapped = text_wrap_parenthesis(rights_joined);
  let combined = text_combine_middle_space(left, rights_wrapped);
  let lesson_name = text_first_upper_to(combined);
  let concated = list_concat_single(left, rights);
  let joined_id = list_join_underscore(concated);
  let id = text_lower_to(joined_id);
  let lambda = name_get(lesson_name);
  let name_id = {
    name: lambda,
    id,
  };
  return name_id;
}
