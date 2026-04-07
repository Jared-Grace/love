import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { integer_factorization_to_sat } from "../../../love/public/src/integer_factorization_to_sat.mjs";
import { list_sort_number_abs } from "../../../love/public/src/list_sort_number_abs.mjs";
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
export async function cryto_mini_sat(n) {
  `sudo apt update
sudo apt install cryptominisat`;
  let cnf3 = await integer_factorization_to_sat(n);
  let dimacs = property_get(cnf3, "dimacs");
  async function lambda(temp_path) {
    await file_write(temp_path, dimacs);
    let value = true;
    let command = text_combine("cryptominisat5 ", temp_path);
    let fn = command_line_generic_code_ignore;
    let object = property_set_new_fn(fn, value);
    let r = await command_line_generic(command, object);
    return r;
  }
  let r = await file_temp(lambda);
  let stdout = property_get(r, "stdout");
  let lines = text_split_newline(stdout);
  let without = list_find_starts_with_prefix_without(lines, "s ");
  equal_assert(without, "SATISFIABLE");
  let without2 = list_filter_starts_with_prefix_without(lines, "v ");
  let joined = list_join_space(without2);
  let normalize = whitespace_normalize(joined);
  let split = text_split_space(normalize);
  let mapped = list_map_integer(split);
  let filtered = list_filter_equal_not(mapped, 0);
  list_sort_number_abs(filtered);
  return filtered;
}
