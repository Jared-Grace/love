import { crypto_mini_sat_dimacs_to_factors } from "./crypto_mini_sat_dimacs_to_factors.mjs";
import { integer_factorization_to_sat } from "./integer_factorization_to_sat.mjs";
import { property_get } from "./property_get.mjs";
export async function cryto_mini_sat(n) {
  "sudo apt update\nsudo apt install cryptominisat";
  let cnf = await integer_factorization_to_sat(n);
  let bits = property_get(cnf, "bits");
  let dimacs = property_get(cnf, "dimacs");
  let r = await crypto_mini_sat_dimacs_to_factors(dimacs, bits);
  return r;
}
