import { integer_factorization_to_sat_factorization_cnf } from "./integer_factorization_to_sat_factorization_cnf.mjs";
import { integer_factorization_to_sat_multiplier_csa_build } from "./integer_factorization_to_sat_multiplier_csa_build.mjs";
import { integer_factorization_to_sat_full_adder_csa } from "./integer_factorization_to_sat_full_adder_csa.mjs";
import { integer_factorization_to_sat_half_adder } from "./integer_factorization_to_sat_half_adder.mjs";
import { integer_factorization_to_sat_full_adder } from "./integer_factorization_to_sat_full_adder.mjs";
import { integer_factorization_to_sat_compress_columns } from "./integer_factorization_to_sat_compress_columns.mjs";
import { integer_factorization_to_sat_finalize_sum } from "./integer_factorization_to_sat_finalize_sum.mjs";
import { integer_factorization_and_gate } from "./integer_factorization_and_gate.mjs";
import { integer_factorization_xor_gate } from "./integer_factorization_xor_gate.mjs";
import { add } from "./add.mjs";
import { ceil } from "./ceil.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
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
  function andGate(cnf, a, b) {
    let r12 = integer_factorization_and_gate(cnf, a, b);
    return r12;
  }
  function xorGate(cnf, a, b) {
    let r11 = integer_factorization_xor_gate(cnf, a, b);
    return r11;
  }
  function halfAdder(cnf, a, b) {
    let r4 = integer_factorization_to_sat_half_adder(
      cnf,
      a,
      b,
      xorGate,
      andGate,
    );
    return r4;
  }
  function fullAdder(cnf, a, b, cin) {
    let r6 = integer_factorization_to_sat_full_adder(
      cnf,
      a,
      b,
      cin,
      xorGate,
      andGate,
    );
    return r6;
  }
  function fullAdderCSA(cnf, a, b, c) {
    let r3 = integer_factorization_to_sat_full_adder_csa(
      cnf,
      a,
      b,
      c,
      xorGate,
      andGate,
    );
    return r3;
  }
  function compressColumns(cnf, columns) {
    let r14 = integer_factorization_to_sat_compress_columns(
      cnf,
      columns,
      fullAdderCSA,
      halfAdder,
    );
    return r14;
  }
  function buildMultiplierCSA(cnf, x, y) {
    let r5 = integer_factorization_to_sat_multiplier_csa_build(
      cnf,
      x,
      y,
      andGate,
      compressColumns,
    );
    return r5;
  }
  function finalizeSum(cnf, columns) {
    let r13 = integer_factorization_to_sat_finalize_sum(
      cnf,
      columns,
      halfAdder,
      fullAdder,
    );
    return r13;
  }
  function factorizationCNF(N, bits) {
    let r7 = integer_factorization_to_sat_factorization_cnf(
      N,
      bits,
      CNF,
      buildMultiplierCSA,
      finalizeSum,
    );
    return r7;
  }
  function to3SAT(cnf) {
    let out = new CNF();
    out.varCount = cnf.varCount;
    for (let clause of cnf.clauses) {
      if (less_than_equal(clause.length, 3)) {
        out.clauses.push(clause);
      } else {
        let prev = clause[0];
        let b2 = subtract(clause.length, 2);
        for (let i = 1; less_than(i, b2); i++) {
          let v = out.newVar();
          out.addClause(prev, clause[i], v);
          prev = -v;
        }
        out.addClause(
          prev,
          clause[subtract(clause.length, 2)],
          clause[subtract(clause.length, 1)],
        );
      }
    }
    return out;
  }
  let v4 = Math.sqrt(integer_to_factor);
  let v5 = Math.log(v4);
  let left2 = ceil(v5);
  let bits_count = add(left2, 1);
  let cnf_built = factorizationCNF(integer_to_factor, bits_count);
  let cnf3 = to3SAT(cnf_built);
  cnf3.bits = bits_count;
  cnf3.dimacs = cnf3.toDimacs();
  return cnf3;
}
