import { arguments_assert } from "./arguments_assert.mjs";
import { integer_factorization_and_gate } from "./integer_factorization_and_gate.mjs";
import { integer_factorization_xor_gate } from "./integer_factorization_xor_gate.mjs";
import { integer_factorization_to_sat_half_adder } from "./integer_factorization_to_sat_half_adder.mjs";
import { integer_factorization_to_sat_full_adder } from "./integer_factorization_to_sat_full_adder.mjs";
import { integer_factorization_to_sat_compress_columns } from "./integer_factorization_to_sat_compress_columns.mjs";
import { integer_factorization_to_sat_multiplier_csa_build } from "./integer_factorization_to_sat_multiplier_csa_build.mjs";
import { integer_factorization_to_sat_finalize_sum } from "./integer_factorization_to_sat_finalize_sum.mjs";
import { integer_factorization_to_sat_factorization_cnf } from "./integer_factorization_to_sat_factorization_cnf.mjs";
import { integer_factorization_to_sat_three_sat } from "./integer_factorization_to_sat_three_sat.mjs";
export function integer_factorization_to_sat_v(CNF, integer_to_factor) {
  arguments_assert(arguments, 2);
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
  function compressColumns(cnf, columns) {
    let r14 = integer_factorization_to_sat_compress_columns(
      cnf,
      columns,
      fullAdder,
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
    let r8 = integer_factorization_to_sat_three_sat(cnf, CNF);
    return r8;
  }
  let v = Math.sqrt(integer_to_factor);
  let r = {
    factorizationCNF,
    to3SAT,
    v,
  };
  return r;
}
