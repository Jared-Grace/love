import { cryto_mini_sat_to_factor } from "../../../love/public/src/cryto_mini_sat_to_factor.mjs";
import { list_sort_number_abs_reverse } from "../../../love/public/src/list_sort_number_abs_reverse.mjs";
import { list_filter_equal_not } from "../../../love/public/src/list_filter_equal_not.mjs";
import { list_map_integer } from "../../../love/public/src/list_map_integer.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_filter_starts_with_prefix_without } from "../../../love/public/src/list_filter_starts_with_prefix_without.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { list_find_starts_with_prefix_without } from "../../../love/public/src/list_find_starts_with_prefix_without.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { crypto_mini_sat_dimacs_to_output } from "../../../love/public/src/crypto_mini_sat_dimacs_to_output.mjs";
export async function crypto_mini_sat_dimacs_to_factors(dimacs, bits) {
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
  let a = cryto_mini_sat_to_factor(reversed, bits);
  let b = cryto_mini_sat_to_factor(reversed, bits);
  let r = [a, b];
  return r;
}
