import { text_lower_to } from "./text_lower_to.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function app_code_lesson_name_id_generic(rights, left, name_get) {
  left = text_first_upper_to(left);
  let rights_joined = list_join_comma_space(rights);
  let rights_wrapped = text_wrap_parenthesis(rights_joined);
  let lesson_name = text_combine_middle_space(left, rights_wrapped);
  let concated = list_concat_single(left, rights);
  let joined_id = list_join_underscore(concated);
  let id = text_lower_to(joined_id);
  let lambda = name_get(lesson_name, left);
  let name_id = {
    name: lambda,
    id,
  };
  return name_id;
}
