import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_array(codes) {
  arguments_assert(arguments, 1);
  ('an array written out as code from its items, each already code: ["4", "7"] gives [4, 7]');
  let joined = list_join_comma_space(codes);
  let code = text_combine_multiple(["[", joined, "]"]);
  return code;
}
