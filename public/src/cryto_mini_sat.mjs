import { crypto_mini_sat_dimacs_to_factors } from "../../../love/public/src/crypto_mini_sat_dimacs_to_factors.mjs";
import { integer_factorization_to_sat } from "../../../love/public/src/integer_factorization_to_sat.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function cryto_mini_sat(n) {
  `sudo apt update
sudo apt install cryptominisat`;
  let cnf3 = await integer_factorization_to_sat(n);
  let bits = property_get(cnf3, "bits");
  let dimacs = property_get(cnf3, "dimacs");
  let r = await crypto_mini_sat_dimacs_to_factors(dimacs, bits);
  return r;
}
