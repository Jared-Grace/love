import { ceil } from "../../../love/public/src/ceil.mjs";
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
        let r2 = x !== 0;
        return r2;
      }
      const clean = lits.filter(lambda3);
      if (clean.length === 0) {
        return;
      }
      this.clauses.push(clean);
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
    let r3 = [sum, carry];
    return r3;
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
    let r4 = [sum, cout];
    return r4;
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
    let r5 = [s, carry];
    return r5;
  }
  function compressColumns(cnf, columns) {
    function lambda6() {
      let r6 = [];
      return r6;
    }
    const next = Array.from(
      {
        length: columns.length + 1,
      },
      lambda6,
    );
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
    function lambda7() {
      let r7 = [];
      return r7;
    }
    let columns = Array.from(
      {
        length: 2 * bits,
      },
      lambda7,
    );
    for (let i = 0; i < bits; i++) {
      for (let j = 0; j < bits; j++) {
        const p = andGate(cnf, x[i], y[j]);
        columns[i + j].push(p);
      }
    }
    function lambda8(col) {
      let r8 = col.length > 2;
      return r8;
    }
    while (columns.some(lambda8)) {
      columns = compressColumns(cnf, columns);
    }
    return columns;
  }
  function finalizeSum(cnf, columns) {
    const result = [];
    let carry = null;
    for (let i = 0; i < columns.length; i++) {
      const col = columns[i];
      const a = col[0] || null;
      const b = col[1] || null;
      if (a && b) {
        if (carry === null) {
          [result[i], carry] = halfAdder(cnf, a, b);
        } else {
          [result[i], carry] = fullAdder(cnf, a, b, carry);
        }
      } else if (a) {
        if (carry === null) {
          result[i] = a;
        } else {
          [result[i], carry] = halfAdder(cnf, a, carry);
        }
      } else if (b) {
        if (carry === null) {
          result[i] = b;
        } else {
          [result[i], carry] = halfAdder(cnf, b, carry);
        }
      } else {
        if (carry === null) {
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
    const cnf = new CNF();
    function lambda9() {
      let r9 = cnf.newVar();
      return r9;
    }
    const x = Array.from(
      {
        length: bits,
      },
      lambda9,
    );
    function lambda10() {
      let r10 = cnf.newVar();
      return r10;
    }
    const y = Array.from(
      {
        length: bits,
      },
      lambda10,
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
      if (result[i] !== null) {
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
  let v4 = Math.sqrt(integer_to_factor);
  let v5 = Math.log2(v4);
  let bits = Math.ceil(v5) + 1;
  const cnf = factorizationCNF(integer_to_factor, bits);
  const cnf3 = to3SAT(cnf);
  cnf3.bits = bits;
  return cnf3;
}
