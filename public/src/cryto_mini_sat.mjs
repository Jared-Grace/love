import { list_filter_equal_not } from "../../../love/public/src/list_filter_equal_not.mjs";
import { list_map_integer } from "../../../love/public/src/list_map_integer.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
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
  let n = whitespace_normalize(joined);
  let split = text_split_space(n);
  let mapped = list_map_integer(split);
  let filtered = list_filter_equal_not(mapped, 0);
  return filtered;
}
