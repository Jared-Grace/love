import { add } from "./add.mjs";
import { ceil } from "./ceil.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { multiply } from "./multiply.mjs";
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
    let z = cnf.newVar();
    cnf.addClause(-a, -b, z);
    cnf.addClause(a, -z);
    cnf.addClause(b, -z);
    return z;
  }
  function xorGate(cnf, a, b) {
    let z = cnf.newVar();
    cnf.addClause(-a, -b, -z);
    cnf.addClause(a, b, -z);
    cnf.addClause(a, -b, z);
    cnf.addClause(-a, b, z);
    return z;
  }
  function halfAdder(cnf, a, b) {
    let sum = xorGate(cnf, a, b);
    let carry = andGate(cnf, a, b);
    let r3 = [sum, carry];
    return r3;
  }
  function fullAdder(cnf, a, b, cin) {
    let s1 = xorGate(cnf, a, b);
    let sum = xorGate(cnf, s1, cin);
    let c1 = andGate(cnf, a, b);
    let c2 = andGate(cnf, a, cin);
    let c3 = andGate(cnf, b, cin);
    let cout = cnf.newVar();
    cnf.addClause(-c1, cout);
    cnf.addClause(-c2, cout);
    cnf.addClause(-c3, cout);
    cnf.addClause(-cout, c1, c2, c3);
    let r4 = [sum, cout];
    return r4;
  }
  function fullAdderCSA(cnf, a, b, c) {
    let v2 = xorGate(cnf, a, b);
    let s = xorGate(cnf, v2, c);
    let ab = andGate(cnf, a, b);
    let ac = andGate(cnf, a, c);
    let bc = andGate(cnf, b, c);
    let carry = cnf.newVar();
    cnf.addClause(-ab, carry);
    cnf.addClause(-ac, carry);
    cnf.addClause(-bc, carry);
    cnf.addClause(-carry, ab, ac, bc);
    let r5 = [s, carry];
    return r5;
  }
  function compressColumns(cnf, columns) {
    function lambda6() {
      let r6 = [];
      return r6;
    }
    let next = Array.from(
      {
        length: add(columns.length, 1),
      },
      lambda6,
    );
    for (let i = 0; less_than(i, columns.length); i++) {
      let col = [...columns[i]];
      while (greater_than_equal(col.length, 3)) {
        let a = col.pop();
        let b = col.pop();
        let c = col.pop();
        let [s, carry] = fullAdderCSA(cnf, a, b, c);
        next[i].push(s);
        next[add(i, 1)].push(carry);
      }
      if (equal(col.length, 2)) {
        let [s, carry] = halfAdder(cnf, col[0], col[1]);
        next[i].push(s);
        next[add(i, 1)].push(carry);
      } else if (equal(col.length, 1)) {
        next[i].push(col[0]);
      }
    }
    return next;
  }
  function buildMultiplierCSA(cnf, x, y) {
    let bits = x.length;
    function lambda7() {
      let r7 = [];
      return r7;
    }
    let columns = Array.from(
      {
        length: multiply(2, bits),
      },
      lambda7,
    );
    for (let i = 0; less_than(i, bits); i++) {
      for (let j = 0; less_than(j, bits); j++) {
        let p = andGate(cnf, x[i], y[j]);
        columns[text_combine(i, j)].push(p);
      }
    }
    function lambda8(col) {
      let r8 = greater_than(col.length, 2);
      return r8;
    }
    while (columns.some(lambda8)) {
      columns = compressColumns(cnf, columns);
    }
    return columns;
  }
  function finalizeSum(cnf, columns) {
    let result = [];
    let carry = null;
    for (let i = 0; less_than(i, columns.length); i++) {
      let col = columns[i];
      let a = col[0] || null;
      let b = col[1] || null;
      if (a && b) {
        if (equal(carry, null)) {
          [result[i], carry] = halfAdder(cnf, a, b);
        } else {
          [result[i], carry] = fullAdder(cnf, a, b, carry);
        }
      } else if (a) {
        if (equal(carry, null)) {
          result[i] = a;
        } else {
          [result[i], carry] = halfAdder(cnf, a, carry);
        }
      } else if (b) {
        if (equal(carry, null)) {
          result[i] = b;
        } else {
          [result[i], carry] = halfAdder(cnf, b, carry);
        }
      } else {
        if (equal(carry, null)) {
          result[i] = null;
        } else {
          result[i] = carry;
          carry = null;
        }
      }
    }
    return result;
  }
  function factorizationCNF(N, bits) {
    let cnf = new CNF();
    function lambda9() {
      let r9 = cnf.newVar();
      return r9;
    }
    let x = Array.from(
      {
        length: bits,
      },
      lambda9,
    );
    function lambda10() {
      let r10 = cnf.newVar();
      return r10;
    }
    let y = Array.from(
      {
        length: bits,
      },
      lambda10,
    );
    cnf.addClause(...x);
    cnf.addClause(...y);
    if (greater_than(bits, 1)) {
      cnf.addClause(...x.slice(1));
      cnf.addClause(...y.slice(1));
    }
    cnf.addClause(-x[subtract(bits, 1)], y[subtract(bits, 1)]);
    let columns = buildMultiplierCSA(cnf, x, y);
    let result = finalizeSum(cnf, columns);
    for (let i = 0; less_than(i, result.length); i++) {
      let bit = (N >> i) & 1;
      if (not_equal(result[i], null)) {
        cnf.addClause(bit ? result[i] : -result[i]);
      }
    }
    return cnf;
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
