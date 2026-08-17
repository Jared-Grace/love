import { arguments_assert } from "./arguments_assert.mjs";
import { integer_factorization_to_sat_cnf_built } from "./integer_factorization_to_sat_cnf_built.mjs";
import { property_get } from "./property_get.mjs";
export function integer_factorization_to_sat_cnf(CNF, integer_to_factor) {
  arguments_assert(arguments, 2);
  let r3 = integer_factorization_to_sat_cnf_built(CNF, integer_to_factor);
  let cnf_built = property_get(r3, "cnf_built");
  let to3SAT = property_get(r3, "to3SAT");
  let bits_count = property_get(r3, "bits_count");
  let cnf = to3SAT(cnf_built);
  let r = {
    bits_count,
    cnf,
  };
  return r;
}
