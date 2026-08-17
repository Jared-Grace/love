import { arguments_assert } from "./arguments_assert.mjs";
import { integer_factorization_to_sat_bits_count } from "./integer_factorization_to_sat_bits_count.mjs";
import { property_get } from "./property_get.mjs";
export function integer_factorization_to_sat_cnf_built(CNF, integer_to_factor) {
  arguments_assert(arguments, 2);
  let r3 = integer_factorization_to_sat_bits_count(CNF, integer_to_factor);
  let bits_count = property_get(r3, "bits_count");
  let factorizationCNF = property_get(r3, "factorizationCNF");
  let to3SAT = property_get(r3, "to3SAT");
  let cnf_built = factorizationCNF(integer_to_factor, bits_count);
  let r = {
    bits_count,
    to3SAT,
    cnf_built,
  };
  return r;
}
