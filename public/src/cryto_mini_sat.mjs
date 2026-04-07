import { cryto_mini_sat_to_factor } from "../../../love/public/src/cryto_mini_sat_to_factor.mjs";
import { list_remove_last_multiple } from "../../../love/public/src/list_remove_last_multiple.mjs";
import { list_sort_number_abs_reverse } from "../../../love/public/src/list_sort_number_abs_reverse.mjs";
import { crypto_mini_sat_dimacs_to_output } from "../../../love/public/src/crypto_mini_sat_dimacs_to_output.mjs";
import { integer_factorization_to_sat } from "../../../love/public/src/integer_factorization_to_sat.mjs";
import { list_filter_equal_not } from "../../../love/public/src/list_filter_equal_not.mjs";
import { list_map_integer } from "../../../love/public/src/list_map_integer.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_filter_starts_with_prefix_without } from "../../../love/public/src/list_filter_starts_with_prefix_without.mjs";
import { list_find_starts_with_prefix_without } from "../../../love/public/src/list_find_starts_with_prefix_without.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function cryto_mini_sat(n) {
  `sudo apt update
sudo apt install cryptominisat`;
  let cnf3 = await integer_factorization_to_sat(n);
  let bits = property_get(cnf3, "bits");
  let dimacs = property_get(cnf3, "dimacs");
  let stdout = await crypto_mini_sat_dimacs_to_output(dimacs);
  let lines = text_split_newline(stdout);
  let without = list_find_starts_with_prefix_without(lines, "s ");
  equal_assert(without, "SATISFIABLE");
  let without2 = list_filter_starts_with_prefix_without(lines, "v ");
  let joined = list_join_space(without2);
  let normalize = whitespace_normalize(joined);
  let split = text_split_space(normalize);
  let mapped = list_map_integer(split);
  let reversed = list_filter_equal_not(mapped, 0);
  list_sort_number_abs_reverse(reversed);
  let i = cryto_mini_sat_to_factor(reversed, bits);
  let e2 = list_remove_last_multiple(reversed, bits);
  let r = {
    i,
    e2,
  };
  return r;
}
