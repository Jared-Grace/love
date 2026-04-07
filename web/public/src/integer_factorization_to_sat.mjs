import { ceil } from "../../../love/public/src/ceil.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function integer_factorization_to_sat() {
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
      this.clauses.push(lits);
    }
    toDimacs() {
      let out = `p cnf ${this.varCount} ${this.clauses.length}\n`;
      for (const c of this.clauses) {
        out += c.join(" ") + " 0\n";
      }
      return out;
    }
  }
  function andGate(cnf, a, b) {
    const z = cnf.newVar();
    cnf.addClause(-a, -b, z);
    cnf.addClause(a, -z);
    cnf.addClause(b, -z);
    return z;
  }
  function xorGate(cnf, a, b) {
    const z = cnf.newVar();
    cnf.addClause(-a, -b, -z);
    cnf.addClause(a, b, -z);
    cnf.addClause(a, -b, z);
    cnf.addClause(-a, b, z);
    return z;
  }
  function halfAdder(cnf, a, b) {
    const sum = xorGate(cnf, a, b);
    const carry = andGate(cnf, a, b);
    let r2 = [sum, carry];
    return r2;
  }
  function fullAdder(cnf, a, b, cin) {
    const s1 = xorGate(cnf, a, b);
    const sum = xorGate(cnf, s1, cin);
    const c1 = andGate(cnf, a, b);
    const c2 = andGate(cnf, a, cin);
    const c3 = andGate(cnf, b, cin);
    const cout = cnf.newVar();
    cnf.addClause(-c1, cout);
    cnf.addClause(-c2, cout);
    cnf.addClause(-c3, cout);
    cnf.addClause(-cout, c1, c2, c3);
    let r3 = [sum, cout];
    return r3;
  }
  function fullAdderCSA(cnf, a, b, c) {
    let v2 = xorGate(cnf, a, b);
    const s = xorGate(cnf, v2, c);
    const ab = andGate(cnf, a, b);
    const ac = andGate(cnf, a, c);
    const bc = andGate(cnf, b, c);
    const carry = cnf.newVar();
    cnf.addClause(-ab, carry);
    cnf.addClause(-ac, carry);
    cnf.addClause(-bc, carry);
    cnf.addClause(-carry, ab, ac, bc);
    let r4 = [s, carry];
    return r4;
  }
  function compressColumns(cnf, columns) {
    const next = [];
    for (let i = 0; i < columns.length + 1; i++) {
      next[i] = [];
    }
    for (let i = 0; i < columns.length; i++) {
      let col = [...columns[i]];
      while (col.length >= 3) {
        const a = col.pop();
        const b = col.pop();
        const c = col.pop();
        const [s, carry] = fullAdderCSA(cnf, a, b, c);
        next[i].push(s);
        next[i + 1].push(carry);
      }
      if (col.length === 2) {
        const [s, carry] = halfAdder(cnf, col[0], col[1]);
        next[i].push(s);
        next[i + 1].push(carry);
      } else if (col.length === 1) {
        next[i].push(col[0]);
      }
    }
    return next;
  }
  function buildMultiplierCSA(cnf, x, y) {
    const bits = x.length;
    function lambda5() {
      let r5 = [];
      return r5;
    }
    let columns = Array.from(
      {
        length: 2 * bits,
      },
      lambda5,
    );
    for (let i = 0; i < bits; i++) {
      for (let j = 0; j < bits; j++) {
        const p = andGate(cnf, x[i], y[j]);
        columns[i + j].push(p);
      }
    }
    function lambda6(col) {
      let r6 = col.length > 2;
      return r6;
    }
    while (columns.some(lambda6)) {
      columns = compressColumns(cnf, columns);
    }
    return columns;
  }
  function finalizeSum(cnf, columns) {
    const result = [];
    let carry = 0;
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];
      let a = col[0] || 0;
      let b = col[1] || 0;
      if (a && b) {
        [result[i], carry] = fullAdder(cnf, a, b, carry);
      } else if (a) {
        [result[i], carry] = fullAdder(cnf, a, 0, carry);
      } else if (b) {
        [result[i], carry] = fullAdder(cnf, b, 0, carry);
      } else {
        result[i] = carry;
        carry = 0;
      }
    }
    return result;
  }
  function factorizationCNF(N, bits = 4) {
    const cnf = new CNF();
    function lambda7() {
      let r7 = cnf.newVar();
      return r7;
    }
    const x = Array.from(
      {
        length: bits,
      },
      lambda7,
    );
    function lambda8() {
      let r8 = cnf.newVar();
      return r8;
    }
    const y = Array.from(
      {
        length: bits,
      },
      lambda8,
    );
    cnf.addClause(...x);
    cnf.addClause(...y);
    if (bits > 1) {
      cnf.addClause(...x.slice(1));
      cnf.addClause(...y.slice(1));
    }
    cnf.addClause(-x[bits - 1], y[bits - 1]);
    const columns = buildMultiplierCSA(cnf, x, y);
    const result = finalizeSum(cnf, columns);
    for (let i = 0; i < result.length; i++) {
      const bit = (N >> i) & 1;
      if (result[i]) {
        cnf.addClause(bit ? result[i] : -result[i]);
      }
    }
    return cnf;
  }
  function to3SAT(cnf) {
    const out = new CNF();
    out.varCount = cnf.varCount;
    for (const clause of cnf.clauses) {
      if (clause.length <= 3) {
        out.clauses.push(clause);
      } else {
        let prev = clause[0];
        for (let i = 1; i < clause.length - 2; i++) {
          const v = out.newVar();
          out.addClause(prev, clause[i], v);
          prev = -v;
        }
        out.addClause(
          prev,
          clause[clause.length - 2],
          clause[clause.length - 1],
        );
      }
    }
    return out;
  }
  const N = 4;
  let v4 = Math.log2(N);
  const bits = Math.ceil(v4);
  const cnf = factorizationCNF(N, bits);
  const cnf3 = to3SAT(cnf);
  return cnf3;
  let v3 = cnf3.toDimacs();
  console.log(v3);
}
