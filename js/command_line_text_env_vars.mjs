import { object_to_list_key_value_text_between_equal } from "./object_to_list_key_value_text_between_equal.mjs";
import { text_combine_curried } from "./text_combine_curried.mjs";
import { list_join } from "./list_join.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
export function command_line_text_env_vars(env_vars, command) {
  let mapped2 = object_to_list_key_value_text_between_equal(env_vars);
  let r = text_combine_curried("set ");
  let mapped = list_map(mapped2, r);
  list_add(mapped, command);
  let c = list_join(mapped, " && ");
  return c;
}
