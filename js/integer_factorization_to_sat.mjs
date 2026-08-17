import { property_get } from "./property_get.mjs";
import { integer_factorization_to_sat_cnf } from "./integer_factorization_to_sat_cnf.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function integer_factorization_to_sat(integer_to_factor) {
  class CNF {
    constructor() {
      this.clauses = [];
      this.varCount = 0;
    }
    newVar() {
      this.varCount++;
      let r = this.varCount;
      return r;
    }
    addClause(...lits) {
      function lambda3(x) {
        let r2 = not_equal(x, 0);
        return r2;
      }
      let clean = lits.filter(lambda3);
      if (equal(clean.length, 0)) {
        return;
      }
      this.clauses.push(clean);
    }
    toDimacs() {
      let out = text_combine_multiple([
        "p cnf ",
        this.varCount,
        " ",
        this.clauses.length,
        "\n",
      ]);
      for (let c of this.clauses) {
        let left = c.join(" ");
        out += text_combine(left, " 0\n");
      }
      return out;
    }
  }
  let r3 = integer_factorization_to_sat_cnf(CNF, integer_to_factor);
  let cnf = property_get(r3, "cnf");
  let bits_count = property_get(r3, "bits_count");
  cnf.bits = bits_count;
  cnf.dimacs = cnf.toDimacs();
  return cnf;
}
