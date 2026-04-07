import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_filter_starts_with_prefix_without } from "../../../love/public/src/list_filter_starts_with_prefix_without.mjs";
import { list_find_starts_with_prefix_without } from "../../../love/public/src/list_find_starts_with_prefix_without.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { property_set_new_fn } from "../../../love/public/src/property_set_new_fn.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { command_line_generic_code_ignore } from "../../../love/public/src/command_line_generic_code_ignore.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
export async function cryto_mini_sat() {
  `sudo apt update
sudo apt install cryptominisat`;
  let value = true;
  let fn = command_line_generic_code_ignore;
  let object = property_set_new_fn(fn, value);
  const command =
    "cryptominisat5 /media/j/JPM/user/temp/3addf5dd-c638-4b30-b164-d47670db6f54";
  let r = await command_line_generic(command, object);
  let stdout = property_get(r, "stdout");
  let lines = text_split_newline(stdout);
  let without = list_find_starts_with_prefix_without(lines, "s ");
  equal_assert(without, "SATISFIABLE");
  let without2 = list_filter_starts_with_prefix_without(lines, "v ");
  let joined = list_join_space(without2);
  let split = text_split_space(joined);
  let mapped = list_map(list, integer_to_try);
  return mapped;
}
