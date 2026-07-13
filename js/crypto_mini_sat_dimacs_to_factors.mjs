import { cryto_mini_sat_to_factor } from "./cryto_mini_sat_to_factor.mjs";
import { list_sort_number_abs_reverse } from "./list_sort_number_abs_reverse.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { list_map_integer } from "./list_map_integer.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_filter_starts_with_prefix_without } from "./list_filter_starts_with_prefix_without.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { list_find_starts_with_prefix_without } from "./list_find_starts_with_prefix_without.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { crypto_mini_sat_dimacs_to_output } from "./crypto_mini_sat_dimacs_to_output.mjs";
export async function crypto_mini_sat_dimacs_to_factors(dimacs, bits) {
  let stdout = await crypto_mini_sat_dimacs_to_output(dimacs);
  let lines = text_split_newline(stdout);
  let without = list_find_starts_with_prefix_without(lines, "s ");
  equal_assert_json(without, "SATISFIABLE", {
    hint: "the solver output should report SATISFIABLE before factors can be read — was the problem unsatisfiable or malformed?",
  });
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
