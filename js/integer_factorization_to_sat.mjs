import { property_get } from "./property_get.mjs";
import { integer_factorization_to_sat_v } from "./integer_factorization_to_sat_v.mjs";
import { add } from "./add.mjs";
import { ceil } from "./ceil.mjs";
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
  let r3 = integer_factorization_to_sat_v(CNF, integer_to_factor);
  let v = property_get(r3, "v");
  let to3SAT = property_get(r3, "to3SAT");
  let factorizationCNF = property_get(r3, "factorizationCNF");
  let v5 = Math.log(v);
  let left2 = ceil(v5);
  let bits_count = add(left2, 1);
  let cnf_built = factorizationCNF(integer_to_factor, bits_count);
  let cnf = to3SAT(cnf_built);
  cnf.bits = bits_count;
  cnf.dimacs = cnf.toDimacs();
  return cnf;
}
