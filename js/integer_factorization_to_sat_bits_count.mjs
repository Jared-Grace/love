import { arguments_assert } from "./arguments_assert.mjs";
import { integer_factorization_to_sat_v } from "./integer_factorization_to_sat_v.mjs";
import { property_get } from "./property_get.mjs";
import { ceil } from "./ceil.mjs";
import { add } from "./add.mjs";
export function integer_factorization_to_sat_bits_count(
  CNF,
  integer_to_factor,
) {
  arguments_assert(arguments, 2);
  let r3 = integer_factorization_to_sat_v(CNF, integer_to_factor);
  let v = property_get(r3, "v");
  let to3SAT = property_get(r3, "to3SAT");
  let factorizationCNF = property_get(r3, "factorizationCNF");
  let v5 = Math.log(v);
  let left = ceil(v5);
  let bits_count = add(left, 1);
  let r = {
    to3SAT,
    factorizationCNF,
    bits_count,
  };
  return r;
}
