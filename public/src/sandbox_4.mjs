import { bind } from "../../../love/public/src/bind.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function sandbox_4() {
  var p = null;
  var ba = "undefined" === typeof globalThis ? this || window : globalThis,
    ca = function lambda3(a) {
      function b(f) {
        let v211 = String.fromCharCode(f);
        let v2 =
          48 > f
            ? 36 === f
            : 58 > f
              ? not(0)
              : 65 > f
                ? not(1)
                : 91 > f
                  ? not(0)
                  : 97 > f
                    ? 95 === f
                    : 123 > f
                      ? not(0)
                      : 170 <= f && Kc.test(v211);
        return v2;
      }
      function d(f) {
        let v212 = String.fromCharCode(f);
        let v3 =
          65 > f
            ? 36 === f
            : 91 > f
              ? not(0)
              : 97 > f
                ? 95 === f
                : 123 > f
                  ? not(0)
                  : 170 <= f && Qb.test(v212);
        return v3;
      }
      function c(f, h) {
        var l = r;
        for (var n = 1, w = 0; ; ) {
          Ta.lastIndex = w;
          var K = Ta.exec(l);
          if (K && K.index < f) {
            (++n, (w = K.index + K[0].length));
          } else break;
        }
        l = {
          line: n,
          eb: f - w,
        };
        h += " (" + l.line + ":" + l.eb + ")";
        h = new SyntaxError(h);
        h.j = f;
        h.O = l;
        h.o = m;
        throw h;
      }
      function e(f) {
        f = f.split(" ");
        for (var h = Object.create(null), l = 0; l < f.length; l++)
          h[f[l]] = not(0);
        let v5 = function lambda(n) {
          let v4 = h[n] || not(1);
          return v4;
        };
        return v5;
      }
      function g() {
        this.line = ka;
        this.eb = m - W;
      }
      function k(f, h) {
        let na = m;
        z.D && (cb = new g());
        let x = f;
        C();
        let T = h;
        let ya = f.m;
      }
      function q() {
        for (
          var f = m, h = z.Aa && z.D && new g(), l = r.charCodeAt((m += 2));
          m < oa && 10 !== l && 13 !== l && 8232 !== l && 8233 !== l;

        )
          (++m, (l = r.charCodeAt(m)));
        let n15 = not(1);
        let v213 = r.slice(f + 2, m);
        z.Aa && z.Aa(n15, v213, f, m, h, z.D && new g());
      }
      function C() {
        for (; m < oa; ) {
          var f = r.charCodeAt(m);
          let v215 = String.fromCharCode(f);
          if (32 === f) {
            ++m;
          } else if (13 === f) {
            (++m,
              (f = r.charCodeAt(m)),
              10 === f && ++m,
              z.D && (++ka, (W = m)));
          } else if (10 === f || 8232 === f || 8233 === f) {
            (++m, z.D && (++ka, (W = m)));
          } else if (8 < f && 14 > f) {
            ++m;
          } else if (47 === f) {
            if (((f = r.charCodeAt(m + 1)), 42 === f)) {
              f = void 0;
              var h = z.Aa && z.D && new g(),
                l = m,
                n = r.indexOf("*/", (m += 2));
              -1 === n && c(m - 2, "Unterminated comment");
              let m = n + 2;
              if (z.D) {
                for (Ta.lastIndex = l; (f = Ta.exec(r)) && f.index < m; )
                  (++ka, (W = f.index + f[0].length));
              }
              let n16 = not(0);
              let v214 = r.slice(l + 2, n);
              z.Aa && z.Aa(n16, v214, l, m, h, z.D && new g());
            } else if (47 === f) {
              q();
            } else break;
          } else if (160 === f || (5760 <= f && Lc.test(v215))) {
            ++m;
          }
        }
      }
      function R(f) {
        let v216 = k(X);
        let v6 = (++m, v216);
        let v217 = k(V);
        let v7 = (++m, v217);
        let v218 = k(Y);
        let v8 = (++m, v218);
        let v219 = k(ea);
        let v9 = (++m, v219);
        let v220 = k(db);
        let v10 = (++m, v220);
        let v221 = k(eb);
        let v11 = (++m, v221);
        let v222 = k(za);
        let v12 = (++m, v222);
        let v223 = k(pa);
        let v13 = (++m, v223);
        let v224 = k(Aa);
        let v14 = (++m, v224);
        let v225 = k(Tb);
        let v15 = (++m, v225);
        let n17 = not(1);
        let v16 = Rb(n17);
        let v17 = L(Zb, 1);
        let n18 = not(0);
        let v226 = k(Sb);
        let v233 = Ub();
        let v234 = r.slice(fa, m);
        let v235 = q();
        let v236 = C();
        let v237 = ha();
        let v238 = q();
        let v239 = C();
        let v240 = ha();
        let v241 = L(Tc, l);
        switch (f) {
          case 46:
            f = r.charCodeAt(m + 1);
            48 <= f && 57 >= f ? Rb(n18) : (++m, v226);
            return;
          case 40:
            return v6;
          case 41:
            return v7;
          case 59:
            return v8;
          case 44:
            return v9;
          case 91:
            return v10;
          case 93:
            return v11;
          case 123:
            return v12;
          case 125:
            return v13;
          case 58:
            return v14;
          case 63:
            return v15;
          case 48:
            if (((f = r.charCodeAt(m + 1)), 120 === f || 88 === f)) {
              let m = 2;
              f = Ba(16);
              null === f && c(I + 2, "Expected hexadecimal number");
              let v227 = r.charCodeAt(m);
              d(v227) && c(m, "Identifier directly after number");
              k(Ca, f);
              return;
            }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return v16;
          case 34:
          case 39:
            m++;
            for (var h = ""; ; ) {
              m >= oa && c(I, "Unterminated string constant");
              var l = r.charCodeAt(m);
              if (l === f) {
                ++m;
                k(Ua, h);
                break;
              }
              if (92 === l) {
                l = r.charCodeAt(++m);
                let v228 = r.slice(m, m + 3);
                var n = /^[0-7]+/.exec(v228);
                for (n && (n = n[0]); n && 255 < parseInt(n, 8); )
                  n = n.slice(0, -1);
                "0" === n && (n = null);
                ++m;
                let v230 = Va(2);
                let v231 = Va(4);
                let v232 = Va(8);
                if (n) {
                  let v229 = parseInt(n, 8);
                  (S && c(m - 2, "Octal literal in strict mode"),
                    (h += String.fromCharCode(v229)),
                    (m += n.length - 1));
                } else
                  switch (l) {
                    case 110:
                      let h = "\n";
                      break;
                    case 114:
                      let h = "\r";
                      break;
                    case 120:
                      let h = String.fromCharCode(v230);
                      break;
                    case 117:
                      let h = String.fromCharCode(v231);
                      break;
                    case 85:
                      let h = String.fromCharCode(v232);
                      break;
                    case 116:
                      let h = "\t";
                      break;
                    case 98:
                      let h = "\b";
                      break;
                    case 118:
                      let h = "\v";
                      break;
                    case 102:
                      let h = "\f";
                      break;
                    case 48:
                      let h = "\x00";
                      break;
                    case 13:
                      10 === r.charCodeAt(m) && ++m;
                    case 10:
                      z.D && ((W = m), ++ka);
                      break;
                    default:
                      let h = String.fromCharCode(l);
                  }
              } else
                ((13 !== l && 10 !== l && 8232 !== l && 8233 !== l) ||
                  c(I, "Unterminated string constant"),
                  (h += String.fromCharCode(l)),
                  ++m);
            }
            return;
          case 47:
            f = r.charCodeAt(m + 1);
            ya ? (++m, v233) : 61 === f ? L(la, 2) : L(Vb, 1);
            return;
          case 37:
          case 42:
            61 === r.charCodeAt(m + 1) ? L(la, 2) : L(Mc, 1);
            return;
          case 124:
          case 38:
            let h = r.charCodeAt(m + 1);
            h === f
              ? L(124 === f ? Wb : Xb, 2)
              : 61 === h
                ? L(la, 2)
                : L(124 === f ? Nc : Oc, 1);
            return;
          case 94:
            61 === r.charCodeAt(m + 1) ? L(la, 2) : L(Pc, 1);
            return;
          case 43:
          case 45:
            let h = r.charCodeAt(m + 1);
            h === f
              ? 45 === h && 62 === r.charCodeAt(m + 2) && Wa.test(v234)
                ? ((m += 3), v235, v236, v237)
                : L(Qc, 2)
              : 61 === h
                ? L(la, 2)
                : L(Rc, 1);
            return;
          case 60:
          case 62:
            let h = r.charCodeAt(m + 1);
            let l = 1;
            h === f
              ? ((l = 62 === f && 62 === r.charCodeAt(m + 2) ? 3 : 2),
                61 === r.charCodeAt(m + l) ? L(la, l + 1) : L(Sc, l))
              : 33 === h &&
                  60 === f &&
                  45 === r.charCodeAt(m + 2) &&
                  45 === r.charCodeAt(m + 3)
                ? ((m += 4), v238, v239, v240)
                : (61 === h && (l = 61 === r.charCodeAt(m + 2) ? 3 : 2), v241);
            return;
          case 61:
          case 33:
            61 === r.charCodeAt(m + 1)
              ? L(Uc, 61 === r.charCodeAt(m + 2) ? 3 : 2)
              : L(61 === f ? Yb : Zb, 1);
            return;
          case 126:
            return v17;
        }
        let n2 = not(1);
        return n2;
      }
      function ha(f) {
        f ? (m = I + 1) : (I = m);
        z.D && (fb = new g());
        if (f) {
          let v18 = Ub();
          return v18;
        }
        if (m >= oa) {
          let v19 = k(gb);
          return v19;
        }
        f = r.charCodeAt(m);
        if (d(f) || 92 === f) {
          let v20 = $b();
          return v20;
        }
        if (not(1) === R(f)) {
          f = String.fromCharCode(f);
          if ("\\" === f || Qb.test(f)) {
            let v21 = $b();
            return v21;
          }
          c(m, "Unexpected character '" + f + "'");
        }
      }
      function L(f, h) {
        var l = r.slice(m, m + h);
        let m = h;
        k(f, l);
      }
      function Ub() {
        for (var f = null, h = null, l = m; ; ) {
          m >= oa && c(l, "Unterminated regexp");
          var n = r.charAt(m);
          Wa.test(n) && c(l, "Unterminated regexp");
          if (f) {
            let f = not(1);
          } else {
            if ("[" === n) {
              let h = not(0);
            } else if ("]" === n && h) {
              let h = not(1);
            } else if ("/" === n && not(h)) {
              break;
            }
            let f = "\\" === n;
          }
          ++m;
        }
        let f = r.slice(l, m);
        ++m;
        let a2 = /^[gmi]*$/.test(h);
        (h = ac()) && not(a2) && c(l, "Invalid regexp flag");
        try {
          var w = new RegExp(f, h);
        } catch (K) {
          throw (K instanceof SyntaxError && c(l, K.message), K);
        }
        k(bc, w);
      }
      function Ba(f, h) {
        for (
          var l = m, n = 0, w = void 0 === h ? Infinity : h, K = 0;
          K < w;
          ++K
        ) {
          var O = r.charCodeAt(m);
          O =
            97 <= O
              ? O - 97 + 10
              : 65 <= O
                ? O - 65 + 10
                : 48 <= O && 57 >= O
                  ? O - 48
                  : Infinity;
          if (O >= f) {
            break;
          }
          ++m;
          let n = n * f + O;
        }
        let v22 = m === l || (void 0 !== h && m - l !== h) ? null : n;
        return v22;
      }
      function Rb(f) {
        var h = m,
          l = not(1),
          n = 48 === r.charCodeAt(m);
        f || null !== Ba(10) || c(h, "Invalid number");
        let v242 = Ba(10);
        46 === r.charCodeAt(m) && (++m, v242, (l = not(0)));
        f = r.charCodeAt(m);
        if (69 === f || 101 === f) {
          ((f = r.charCodeAt(++m)),
            (43 !== f && 45 !== f) || ++m,
            null === Ba(10) && c(h, "Invalid number"),
            (l = not(0)));
        }
        let v243 = r.charCodeAt(m);
        d(v243) && c(m, "Identifier directly after number");
        f = r.slice(h, m);
        var w = null;
        l
          ? (w = parseFloat(f))
          : n && 1 !== f.length
            ? /[89]/.test(f) || S
              ? c(h, "Invalid number")
              : (w = parseInt(f, 8))
            : (w = parseInt(f, 10));
        k(Ca, w);
      }
      function Va(f) {
        f = Ba(16, f);
        null === f && c(I, "Bad character escape sequence");
        return f;
      }
      function ac() {
        let qa = not(1);
        for (var f = null, h = not(0), l = m; ; ) {
          var n = r.charCodeAt(m);
          if (b(n)) {
            (qa && (f += r.charAt(m)), ++m);
          } else if (92 === n) {
            qa || (f = r.slice(l, m));
            qa = not(0);
            117 !== r.charCodeAt(++m) &&
              c(m, "Expecting Unicode escape sequence \\uXXXX");
            ++m;
            n = Va(4);
            var w = String.fromCharCode(n);
            w || c(m - 1, "Invalid Unicode escape");
            (h ? d(n) : b(n)) || c(m - 4, "Invalid Unicode escape");
            let f = w;
          } else break;
          let h = not(1);
        }
        let v23 = qa ? f : r.slice(l, m);
        return v23;
      }
      function $b() {
        var f = ac(),
          h = ra;
        not(qa) && Vc(f) && (h = Wc[f]);
        k(h, f);
      }
      function B() {
        let hb = I;
        let fa = na;
        let ib = cb;
        ha();
      }
      function jb(f) {
        let S = f;
        let m = I;
        if (z.D) {
          for (; m < W; ) ((W = r.lastIndexOf("\n", W - 2) + 1), --ka);
        }
        C();
        ha();
      }
      function cc() {
        this.type = null;
        this.start = I;
        this.end = null;
      }
      function dc() {
        this.start = fb;
        this.end = null;
        kb && (this.source = kb);
      }
      function M() {
        var f = new cc();
        z.D && (f.O = new dc());
        z.vb && (f.sourceFile = z.vb);
        z.Za && (f.j = [I, 0]);
        return f;
      }
      function ia(f) {
        var h = new cc();
        h.start = f.start;
        z.D && ((h.O = new dc()), (h.O.start = f.O.start));
        z.Za && (h.j = [f.j[0], 0]);
        return h;
      }
      function y(f, h) {
        f.type = h;
        f.end = fa;
        z.D && (f.O.end = ib);
        z.Za && (f.j[1] = fa);
        return f;
      }
      function lb(f) {
        let v24 =
          "ExpressionStatement" === f.type &&
          "Literal" === f.pa.type &&
          "use strict" === f.pa.value;
        return v24;
      }
      function E(f) {
        let v244 = B();
        let n19 = not(0);
        let v25 = x === f ? (v244, n19) : not(1);
        return v25;
      }
      function Xa() {
        let v245 = r.slice(fa, I);
        let v26 = not(z.ec) && (x === gb || x === pa || Wa.test(v245));
        return v26;
      }
      function ma() {
        E(Y) || Xa() || Z();
      }
      function F(f) {
        x === f ? B() : Z();
      }
      function Z() {
        c(I, "Unexpected token");
      }
      function Ya(f) {
        "Identifier" !== f.type &&
          "MemberExpression" !== f.type &&
          c(f.start, "Assigning to rvalue");
        S &&
          "Identifier" === f.type &&
          Za(f.name) &&
          c(f.start, "Assigning to " + f.name + " in strict mode");
      }
      function U() {
        let n20 = not(0);
        (x === Vb || (x === la && "/=" === T)) && ha(n20);
        var f = x,
          h = M();
        let v27 = y(h, l ? "BreakStatement" : "ContinueStatement");
        let v246 = B();
        let v247 = ma();
        let v248 = y(h, "DebuggerStatement");
        let v28 = (v246, v247, v248);
        let v249 = B();
        let v250 = G.push(nb);
        let v251 = G.pop();
        let v252 = F(ob);
        let v253 = ma();
        let v254 = y(h, "DoWhileStatement");
        let v29 =
          (v249, v250, (h.body = U()), v251, v252, (h.test = Da()), v253, v254);
        let v255 = Ya(f);
        let v256 = jc(h, f);
        let v32 = E($a) ? (v255, v256) : pb(h, f);
        let v257 = B();
        let n21 = not(0);
        let v258 = sb(h, n21);
        let v33 = (v257, v258);
        let v259 = B();
        let v260 = y(h, "IfStatement");
        let v34 =
          (v259,
          (h.test = Da()),
          (h.fa = U()),
          (h.alternate = E(lc) ? U() : null),
          v260);
        let v261 = B();
        let v262 = ma();
        let v263 = y(h, "ReturnStatement");
        let v35 =
          (Ea || z.Gb || c(I, "'return' outside of function"),
          v261,
          E(Y) || Xa() ? (h.J = null) : ((h.J = N()), v262),
          v263);
        let v36 = y(h, "SwitchStatement");
        let v264 = B();
        let v265 = r.slice(fa, I);
        let v266 = ma();
        let v267 = y(h, "ThrowStatement");
        let v37 =
          (v264,
          Wa.test(v265) && c(fa, "Illegal newline after throw"),
          (h.J = N()),
          v266,
          v267);
        let v268 = B();
        let v269 = B();
        let v270 = F(X);
        let v271 = F(V);
        let v272 = y(h, "TryStatement");
        let v38 =
          (v268,
          (h.block = Fa()),
          (h.Ha = null),
          x === qc &&
            ((f = M()),
            v269,
            v270,
            (f.Wa = aa()),
            S &&
              Za(f.Wa.name) &&
              c(f.Wa.start, "Binding " + f.Wa.name + " in strict mode"),
            v271,
            (f.body = Fa()),
            (h.Ha = y(f, "CatchClause"))),
          (h.ib = E(rc) ? Fa() : null),
          h.Ha || h.ib || c(h.start, "Missing catch or finally clause"),
          v272);
        let v273 = B();
        let v274 = ic(h);
        let v275 = ma();
        let v276 = y(h, "VariableDeclaration");
        let v39 = (v273, v274, v275, v276);
        let v277 = B();
        let v278 = G.push(nb);
        let v279 = G.pop();
        let v280 = y(h, "WhileStatement");
        let v40 = (v277, (h.test = Da()), v278, (h.body = U()), v279, v280);
        let v281 = B();
        let v282 = y(h, "WithStatement");
        let v41 =
          (S && c(I, "'with' in strict mode"),
          v281,
          (h.object = Da()),
          (h.body = U()),
          v282);
        let v42 = Fa();
        let v283 = B();
        let v284 = y(h, "EmptyStatement");
        let v43 = (v283, v284);
        let v45 = y(h, "ExpressionStatement");
        let v285 = ma();
        let n23 = not(1);
        let n24 = not(0);
        let v289 = h.tb.push((n = M()));
        let v290 = B();
        let v291 = F(Aa);
        let v292 = U();
        let v293 = n.fa.push(v292);
        switch (f) {
          case mb:
          case ec:
            B();
            var l = f === mb;
            E(Y) || Xa()
              ? (h.label = null)
              : x !== ra
                ? Z()
                : ((h.label = aa()), v285);
            for (var n = 0; n < G.length; ++n) {
              var w = G[n];
              if (null === h.label || w.name === h.label.name) {
                if (null !== w.kind && (l || "loop" === w.kind)) {
                  break;
                }
                if (h.label && l) {
                  break;
                }
              }
            }
            n === G.length && c(h.start, "Unsyntactic " + f.l);
            return v27;
          case fc:
            return v28;
          case gc:
            return v29;
          case hc:
            B();
            G.push(nb);
            F(X);
            if (x === Y) {
              let v30 = pb(h, null);
              return v30;
            }
            if (x === qb) {
              let v286 = B();
              let n22 = not(0);
              let v287 = ic(f, n22);
              let v288 = y(f, "VariableDeclaration");
              let v31 =
                ((f = M()),
                v286,
                v287,
                v288,
                1 === f.ia.length && E($a) ? jc(h, f) : pb(h, f));
              return v31;
            }
            f = N(n23, n24);
            return v32;
          case rb:
            return v33;
          case kc:
            return v34;
          case mc:
            return v35;
          case tb:
            B();
            h.Nb = Da();
            h.tb = [];
            F(za);
            for (G.push(Xc); x !== pa; )
              x === ub || x === nc
                ? ((f = x === ub),
                  n && y(n, "SwitchCase"),
                  v289,
                  (n.fa = []),
                  v290,
                  f
                    ? (n.test = N())
                    : (l && c(hb, "Multiple default clauses"),
                      (l = not(0)),
                      (n.test = null)),
                  v291)
                : (n || Z(), v293);
            n && y(n, "SwitchCase");
            B();
            G.pop();
            return v36;
          case oc:
            return v37;
          case pc:
            return v38;
          case qb:
            return v39;
          case ob:
            return v40;
          case sc:
            return v41;
          case za:
            return v42;
          case Y:
            return v43;
          default:
            let l = T;
            let w = N();
            if (f === ra && "Identifier" === w.type && E(Aa)) {
              for (n = 0; n < G.length; ++n)
                G[n].name === l &&
                  c(w.start, "Label '" + l + "' is already declared");
              G.push({
                name: l,
                kind: x.ca ? "loop" : x === tb ? "switch" : null,
              });
              h.body = U();
              G.pop();
              h.label = w;
              let v44 = y(h, "LabeledStatement");
              return v44;
            }
            h.pa = w;
            ma();
            return v45;
        }
      }
      function Da() {
        F(X);
        var f = N();
        F(V);
        return f;
      }
      function Fa(f) {
        var h = M(),
          l = not(0),
          n = not(1);
        h.body = [];
        let a3 = E(pa);
        for (F(za); not(a3); ) {
          var w = U();
          h.body.push(w);
          if (l && f && lb(w)) {
            var K = n;
            jb((n = not(0)));
          }
          l = not(1);
        }
        let n25 = not(1);
        n && not(K) && jb(n25);
        let v46 = y(h, "BlockStatement");
        return v46;
      }
      function pb(f, h) {
        f.za = h;
        F(Y);
        f.test = x === Y ? null : N();
        F(Y);
        f.update = x === V ? null : N();
        F(V);
        f.body = U();
        G.pop();
        let v47 = y(f, "ForStatement");
        return v47;
      }
      function jc(f, h) {
        f.left = h;
        f.right = N();
        F(V);
        f.body = U();
        G.pop();
        let v48 = y(f, "ForInStatement");
        return v48;
      }
      function ic(f, h) {
        f.ia = [];
        for (f.kind = "var"; ; ) {
          var l = M();
          l.id = aa();
          S &&
            Za(l.id.name) &&
            c(l.id.start, "Binding " + l.id.name + " in strict mode");
          let n26 = not(0);
          l.za = E(Yb) ? N(n26, h) : null;
          let v294 = y(l, "VariableDeclarator");
          f.ia.push(v294);
          let a4 = E(ea);
          if (not(a4)) {
            break;
          }
        }
      }
      function N(f, h) {
        var l = vb(h);
        if (not(f) && x === ea) {
          f = ia(l);
          let v295 = vb(h);
          for (f.xb = [l]; E(ea); ) f.xb.push(v295);
          let v49 = y(f, "SequenceExpression");
          return v49;
        }
        return l;
      }
      function vb(f) {
        let v296 = xb();
        var h = wb(v296, -1, f);
        if (E(Tb)) {
          var l = ia(h);
          l.test = h;
          let n27 = not(0);
          l.fa = N(n27);
          F(Aa);
          let n28 = not(0);
          l.alternate = N(n28, f);
          h = y(l, "ConditionalExpression");
        }
        let v297 = B();
        let v298 = Ya(h);
        let v299 = y(l, "AssignmentExpression");
        let v50 = x.Bb
          ? ((l = ia(h)),
            (l.operator = T),
            (l.left = h),
            v297,
            (l.right = vb(f)),
            v298,
            v299)
          : h;
        return v50;
      }
      function wb(f, h, l) {
        var n = x.K;
        if (null !== n && (not(l) || x !== $a) && n > h) {
          var w = ia(f);
          w.left = f;
          w.operator = T;
          f = x;
          B();
          let v300 = xb();
          w.right = wb(v300, n, l);
          n = y(
            w,
            f === Wb || f === Xb ? "LogicalExpression" : "BinaryExpression",
          );
          let v51 = wb(n, h, l);
          return v51;
        }
        return f;
      }
      function xb() {
        if (x.prefix) {
          var f = M(),
            h = x.Yb;
          f.operator = T;
          let ya = (f.prefix = not(0));
          B();
          f.J = xb();
          h
            ? Ya(f.J)
            : S &&
              "delete" === f.operator &&
              "Identifier" === f.J.type &&
              c(f.start, "Deleting local variable in strict mode");
          let v52 = y(f, h ? "UpdateExpression" : "UnaryExpression");
          return v52;
        }
        let v301 = ab();
        let a5 = Xa();
        let v302 = Ya(h);
        let v303 = B();
        for (h = Ga(v301); x.ac && not(a5); )
          ((f = ia(h)),
            (f.operator = T),
            (f.prefix = not(1)),
            (f.J = h),
            v302,
            v303,
            (h = y(f, "UpdateExpression")));
        return h;
      }
      function Ga(f, h) {
        if (E(Sb)) {
          var l = ia(f);
          l.object = f;
          let n29 = not(0);
          l.Ya = aa(n29);
          l.fb = not(1);
          let v304 = y(l, "MemberExpression");
          let v53 = Ga(v304, h);
          return v53;
        }
        let v305 = F(eb);
        let v306 = y(l, "MemberExpression");
        let v307 = Ga(v306, h);
        let n30 = not(1);
        let v308 = y(l, "CallExpression");
        let v309 = Ga(v308, h);
        let v54 = E(db)
          ? ((l = ia(f)),
            (l.object = f),
            (l.Ya = N()),
            (l.fb = not(0)),
            v305,
            v307)
          : not(h) && E(X)
            ? ((l = ia(f)), (l.callee = f), (l.arguments = yb(V, n30)), v309)
            : f;
        return v54;
      }
      function ab() {
        let v55 = y(f, "ThisExpression");
        let v56 = aa();
        let v310 = B();
        let v311 = y(f, "Literal");
        let v57 =
          ((f = M()), (f.value = T), (f.raw = r.slice(I, na)), v310, v311);
        let v312 = B();
        let v313 = y(f, "Literal");
        let v58 = ((f = M()), (f.value = x.cb), (f.raw = x.l), v312, v313);
        let v314 = B();
        let n31 = not(0);
        let n32 = not(0);
        let v315 = y(f, "ArrayExpression");
        let v59 = ((f = M()), v314, (f.elements = yb(eb, n31, n32)), v315);
        let v60 = y(f, "ObjectExpression");
        let v316 = B();
        let n33 = not(1);
        let v317 = sb(f, n33);
        let v61 = ((f = M()), v316, v317);
        let v318 = B();
        let v319 = ab();
        let n34 = not(0);
        let n35 = not(1);
        let v320 = y(f, "NewExpression");
        let v62 =
          ((f = M()),
          v318,
          (f.callee = Ga(v319, n34)),
          (f.arguments = E(X) ? yb(V, n35) : Yc),
          v320);
        let a6 = E(pa);
        switch (x) {
          case tc:
            var f = M();
            B();
            return v55;
          case ra:
            return v56;
          case Ca:
          case Ua:
          case bc:
            return v57;
          case uc:
          case vc:
          case wc:
            return v58;
          case X:
            let f = fb;
            var h = I;
            B();
            var l = N();
            l.start = h;
            l.end = na;
            z.D && ((l.O.start = f), (l.O.end = cb));
            z.Za && (l.j = [h, na]);
            F(V);
            return l;
          case db:
            return v59;
          case za:
            let f = M();
            let h = not(0);
            let l = not(1);
            f.h = [];
            for (B(); not(a6); ) {
              let v321 = F(ea);
              if (h) {
                let h = not(1);
              } else if ((v321, z.sb && E(pa))) {
                break;
              }
              let n36 = not(0);
              var n = {
                  key: x === Ca || x === Ua ? ab() : aa(n36),
                },
                w = not(1);
              let n38 = not(0);
              let v322 = M();
              let n39 = not(1);
              if (E(Aa)) {
                let n37 = not(0);
                n.value = N(n37);
                var K = (n.kind = "init");
              } else
                "Identifier" !== n.key.type ||
                ("get" !== n.key.name && "set" !== n.key.name)
                  ? Z()
                  : ((w = l = not(0)),
                    (K = n.kind = n.key.name),
                    (n.key = x === Ca || x === Ua ? ab() : aa(n38)),
                    x !== X && Z(),
                    (n.value = sb(v322, n39)));
              if ("Identifier" === n.key.type && (S || l)) {
                for (var O = 0; O < f.h.length; ++O) {
                  var sa = f.h[O];
                  if (sa.key.name === n.key.name) {
                    var zb =
                      K === sa.kind ||
                      (w && "init" === sa.kind) ||
                      ("init" === K &&
                        ("get" === sa.kind || "set" === sa.kind));
                    zb &&
                      not(S) &&
                      "init" === K &&
                      "init" === sa.kind &&
                      (zb = not(1));
                    zb && c(n.key.start, "Redefinition of property");
                  }
                }
              }
              f.h.push(n);
            }
            return v60;
          case rb:
            return v61;
          case xc:
            return v62;
        }
        Z();
      }
      function sb(f, h) {
        x === ra ? (f.id = aa()) : h ? Z() : (f.id = null);
        f.sa = [];
        var l = not(0);
        let a7 = E(V);
        let v323 = aa();
        let v324 = f.sa.push(v323);
        for (F(X); not(a7); ) (l ? (l = not(1)) : F(ea), v324);
        l = Ea;
        var n = G;
        let Ea = not(0);
        let G = [];
        let n40 = not(0);
        f.body = Fa(n40);
        Ea = l;
        G = n;
        if (S || (f.body.body.length && lb(f.body.body[0]))) {
          for (l = f.id ? -1 : 0; l < f.sa.length; ++l)
            if (
              ((n = 0 > l ? f.id : f.sa[l]),
              (yc(n.name) || Za(n.name)) &&
                c(n.start, "Defining '" + n.name + "' in strict mode"),
              0 <= l)
            ) {
              for (var w = 0; w < l; ++w)
                n.name === f.sa[w].name &&
                  c(n.start, "Argument name clash in strict mode");
            }
        }
        let v63 = y(f, h ? "FunctionDeclaration" : "FunctionExpression");
        return v63;
      }
      function yb(f, h, l) {
        let a8 = E(f);
        for (var n = [], w = not(0); not(a8); ) {
          let v325 = F(ea);
          if (w) {
            let w = not(1);
          } else if ((v325, h && z.sb && E(f))) {
            break;
          }
          let n41 = not(0);
          n.push(l && x === ea ? null : N(n41));
        }
        return n;
      }
      function aa(f) {
        var h = M();
        f && "everywhere" === z.yb && (f = not(1));
        x === ra
          ? (not(f) &&
              ((z.yb && Zc(T)) || (S && yc(T))) &&
              -1 === r.slice(I, na).indexOf("\\") &&
              c(I, "The keyword '" + T + "' is reserved"),
            (h.name = T))
          : f && x.l
            ? (h.name = x.l)
            : Z();
        let ya = not(1);
        B();
        let v64 = y(h, "Identifier");
        return v64;
      }
      a.version = "0.5.0";
      var z = null,
        r = "",
        oa = null,
        kb = null;
      a.parse = function lambda2(f, h) {
        r = String(f);
        oa = r.length;
        z = h || {};
        for (var l = (null) in zc)
          Object.prototype.hasOwnProperty.call(z, l) || (z[l] = zc[l]);
        kb = z.sourceFile;
        let ka = 1;
        let m = (W = 0);
        let ya = not(0);
        C();
        let l = z.bc;
        let hb = (fa = m);
        z.D && (ib = new g());
        let Ea = (S = not(1));
        let G = [];
        ha();
        f = l || M();
        h = not(0);
        l || (f.body = []);
        let v326 = f.body.push(l);
        let n42 = not(0);
        for (; x !== gb; )
          ((l = U()), v326, h && lb(l) && jb(n42), (h = not(1)));
        let v65 = y(f, "Program");
        return v65;
      };
      var zc = {
          ec: not(1),
          sb: not(0),
          yb: not(1),
          Gb: not(1),
          D: not(1),
          Aa: null,
          Za: not(1),
          bc: null,
          sourceFile: null,
          vb: null,
        },
        m = 0,
        I = 0,
        na = 0,
        fb = null,
        cb = null,
        x = null,
        T = null,
        ya = null,
        ka = null,
        W = null,
        hb = 0,
        fa = 0,
        ib = null,
        Ea = null,
        G = null,
        S = null,
        Yc = [],
        Ca = {
          type: "num",
        },
        bc = {
          type: "regexp",
        },
        Ua = {
          type: "string",
        },
        ra = {
          type: "name",
        },
        gb = {
          type: "eof",
        },
        mb = {
          l: "break",
        },
        ub = {
          l: "case",
          m: not(0),
        },
        qc = {
          l: "catch",
        },
        ec = {
          l: "continue",
        },
        fc = {
          l: "debugger",
        },
        nc = {
          l: "default",
        },
        gc = {
          l: "do",
          ca: not(0),
        },
        lc = {
          l: "else",
          m: not(0),
        },
        rc = {
          l: "finally",
        },
        hc = {
          l: "for",
          ca: not(0),
        },
        rb = {
          l: "function",
        },
        kc = {
          l: "if",
        },
        mc = {
          l: "return",
          m: not(0),
        },
        tb = {
          l: "switch",
        },
        oc = {
          l: "throw",
          m: not(0),
        },
        pc = {
          l: "try",
        },
        qb = {
          l: "var",
        },
        ob = {
          l: "while",
          ca: not(0),
        },
        sc = {
          l: "with",
        },
        xc = {
          l: "new",
          m: not(0),
        },
        tc = {
          l: "this",
        },
        uc = {
          l: "null",
          cb: null,
        },
        vc = {
          l: "true",
          cb: not(0),
        },
        wc = {
          l: "false",
          cb: not(1),
        },
        $a = {
          l: "in",
          K: 7,
          m: not(0),
        },
        Wc = {
          break: mb,
          case: ub,
          catch: qc,
          continue: ec,
          debugger: fc,
          default: nc,
          do: gc,
          else: lc,
          finally: rc,
          for: hc,
          function: rb,
          if: kc,
          return: mc,
          switch: tb,
          throw: oc,
          try: pc,
          var: qb,
          while: ob,
          with: sc,
          null: uc,
          true: vc,
          false: wc,
          new: xc,
          in: $a,
          instanceof: {
            l: "instanceof",
            K: 7,
            m: not(0),
          },
          this: tc,
          typeof: {
            l: "typeof",
            prefix: not(0),
            m: not(0),
          },
          void: {
            l: "void",
            prefix: not(0),
            m: not(0),
          },
          delete: {
            l: "delete",
            prefix: not(0),
            m: not(0),
          },
        },
        db = {
          type: "[",
          m: not(0),
        },
        eb = {
          type: "]",
        },
        za = {
          type: "{",
          m: not(0),
        },
        pa = {
          type: "}",
        },
        X = {
          type: "(",
          m: not(0),
        },
        V = {
          type: ")",
        },
        ea = {
          type: ",",
          m: not(0),
        },
        Y = {
          type: ";",
          m: not(0),
        },
        Aa = {
          type: ":",
          m: not(0),
        },
        Sb = {
          type: ".",
        },
        Tb = {
          type: "?",
          m: not(0),
        },
        Vb = {
          K: 10,
          m: not(0),
        },
        Yb = {
          Bb: not(0),
          m: not(0),
        },
        la = {
          Bb: not(0),
          m: not(0),
        },
        Qc = {
          ac: not(0),
          prefix: not(0),
          Yb: not(0),
        },
        Zb = {
          prefix: not(0),
          m: not(0),
        },
        Wb = {
          K: 1,
          m: not(0),
        },
        Xb = {
          K: 2,
          m: not(0),
        },
        Nc = {
          K: 3,
          m: not(0),
        },
        Pc = {
          K: 4,
          m: not(0),
        },
        Oc = {
          K: 5,
          m: not(0),
        },
        Uc = {
          K: 6,
          m: not(0),
        },
        Tc = {
          K: 7,
          m: not(0),
        },
        Sc = {
          K: 8,
          m: not(0),
        },
        Rc = {
          K: 9,
          prefix: not(0),
          m: not(0),
        },
        Mc = {
          K: 10,
          m: not(0),
        },
        Zc = e("class enum extends super const export import"),
        yc = e(
          "implements interface let package private protected public static yield",
        ),
        Za = e("eval arguments"),
        Vc = e(
          "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
        ),
        Lc = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
        Qb = RegExp(
          "[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]",
        ),
        Kc = RegExp(
          "[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]",
        ),
        Wa = /[\n\r\u2028\u2029]/,
        Ta = /\r\n|[\n\r\u2028\u2029]/g,
        qa = null,
        nb = {
          kind: "loop",
        },
        Xc = {
          kind: "switch",
        };
    };
  "object" === typeof exports && "object" === typeof module
    ? ca(exports)
    : "function" === typeof define && define.ic
      ? define(["exports"], ca)
      : ca(ba.j || (ba.j = {}));
  function t(a, b) {
    "string" === typeof a && (a = da(a, "code"));
    var d = a.constructor;
    this.Da = function lambda4() {
      let v66 = new d({
        options: {},
      });
      return v66;
    };
    var c = this.Da(),
      e = null;
    for (e in a) c[e] = "body" === e ? a[e].slice() : a[e];
    this.va = c;
    this.$ = [];
    this.qb = b;
    this.wa = not(1);
    this.Z = [];
    this.ab = 0;
    this.rb = Object.create(null);
    a = /^step([A-Z]\w*)$/;
    var g = null,
      k = null;
    for (k in this)
      "function" === typeof this[k] &&
        (g = k.match(a)) &&
        (this.rb[g[1]] = this[k].bind(this));
    this.M = ja(this, this.va, null);
    this.Qa = this.M.object;
    let v327 = this.Z.join("\n");
    this.va = da(v327, "polyfills");
    this.Z = void 0;
    ta(this.va);
    g = new u(this.va, this.M);
    g.done = not(1);
    this.j = [g];
    this.Cb();
    this.value = void 0;
    this.va = c;
    g = new u(this.va, this.M);
    g.done = not(1);
    this.j.length = 0;
    this.j[0] = g;
  }
  var ua = {
      DONE: 0,
      STEP: 1,
      TASK: 2,
      ASYNC: 3,
    },
    va = {
      D: not(0),
      jc: 5,
    },
    wa = {
      configurable: not(0),
      enumerable: not(0),
      writable: not(1),
    },
    v = {
      configurable: not(0),
      enumerable: not(1),
      writable: not(0),
    },
    A = {
      configurable: not(0),
      enumerable: not(1),
      writable: not(1),
    },
    xa = {
      configurable: not(1),
      enumerable: not(1),
      writable: not(1),
    },
    Ha = {
      configurable: not(1),
      enumerable: not(0),
      writable: not(0),
    },
    Ia = {
      STEP_ERROR: not(0),
    },
    Ja = {
      SCOPE_REFERENCE: not(0),
    },
    Ka = {
      VALUE_IN_DESCRIPTOR: not(0),
    },
    La = {
      REGEXP_TIMEOUT: not(0),
    },
    Ma = [],
    Na = null,
    Oa = null,
    Pa = "undefined" === typeof globalThis ? this || window : globalThis,
    Qa = [
      "onmessage = function(e) {",
      "var result;",
      "var data = e.data;",
      "switch (data[0]) {",
      "case 'split':",
      "result = data[1].split(data[2], data[3]);",
      "break;",
      "case 'match':",
      "result = data[1].match(data[2]);",
      "break;",
      "case 'search':",
      "result = data[1].search(data[2]);",
      "break;",
      "case 'replace':",
      "result = data[1].replace(data[2], data[3]);",
      "break;",
      "case 'exec':",
      "var regexp = data[1];",
      "regexp.lastIndex = data[2];",
      "result = [regexp.exec(data[3]), data[1].lastIndex];",
      "break;",
      "default:",
      "throw Error('Unknown RegExp operation: ' + data[0]);",
      "}",
      "postMessage(result);",
      "close();",
      "};",
    ];
  function Ra(a) {
    var b = a >>> 0;
    let v67 = b === Number(a) ? b : NaN;
    return v67;
  }
  function Sa(a) {
    var b = a >>> 0;
    let v68 = String(b) === String(a) && 4294967295 !== b ? b : NaN;
    return v68;
  }
  function ta(a, b, d) {
    b ? (a.start = b) : delete a.start;
    d ? (a.end = d) : delete a.end;
    for (var c = (null) in a)
      if (a[c] !== a.O && a.hasOwnProperty(c)) {
        var e = a[c];
        e && "object" === typeof e && ta(e, b, d);
      }
  }
  t.prototype.REGEXP_MODE = 2;
  t.prototype.REGEXP_THREAD_TIMEOUT = 1e3;
  t.prototype.POLYFILL_TIMEOUT = 1e3;
  p = t.prototype;
  p.R = not(1);
  p.Ma = not(1);
  p.Ib = 0;
  p.hc = 0;
  function da(a, b) {
    var d = {},
      c = null;
    for (c in va) d[c] = va[c];
    d.sourceFile = b;
    let v69 = Pa.j.parse(a, d);
    return v69;
  }
  p.Hb = function lambda5(a) {
    var b = this.j[0];
    if (not(b) || "Program" !== b.node.type) {
      throw Error("Expecting original AST to start with a Program node");
    }
    "string" === typeof a && (a = da(a, "appendCode" + this.Ib++));
    if (not(a) || "Program" !== a.type) {
      throw Error("Expecting new AST to start with a Program node");
    }
    bb(this, a, b.scope);
    Array.prototype.push.apply(b.node.body, a.body);
    b.node.body.lb = null;
    b.done = not(1);
  };
  p.nb = function lambda6() {
    var a = this.j,
      b = null;
    do {
      var d = a[a.length - 1];
      if (this.wa) {
        break;
      } else if (not(d) || ("Program" === d.node.type && d.done)) {
        if (not(this.$.length)) {
          let n3 = not(1);
          return n3;
        }
        d = this.$[0];
        if (not(d) || d.time > Date.now()) {
          d = null;
        } else {
          this.$.shift();
          0 <= d.j && Ab(this, d, d.j);
          var c = new u(d.node, d.scope);
          d.o &&
            ((c.ma = 2),
            (c.C = this.Qa),
            (c.aa = d.o),
            (c.Ta = not(0)),
            (c.G = d.A));
          d = c;
        }
        if (not(d)) {
          break;
        }
      }
      let c = d.node;
      var e = Oa;
      Oa = this;
      try {
        var g = this.rb[c.type](a, d, c);
      } catch (k) {
        if (k !== Ia) {
          throw (this.value !== k && (this.value = void 0), k);
        }
      } finally {
        Oa = e;
      }
      g && a.push(g);
      if (this.R) {
        let v328 = Error("Getter not supported in this context");
        throw ((this.value = void 0), v328);
      }
      if (this.Ma) {
        let v329 = Error("Setter not supported in this context");
        throw ((this.value = void 0), v329);
      }
      b || c.end || (b = Date.now() + this.POLYFILL_TIMEOUT);
    } while (not(c.end) && b > Date.now());
    let n4 = not(0);
    return n4;
  };
  p.Cb = function lambda7() {
    for (; not(this.wa) && this.nb(); );
    let v70 = this.wa;
    return v70;
  };
  p.Wb = function lambda8() {
    if (this.wa) {
      let v71 = ua.ASYNC;
      return v71;
    }
    var a = this.j;
    let v72 =
      not((a = a[a.length - 1])) || ("Program" === a.node.type && a.done)
        ? (a = this.$[0])
          ? a.time > Date.now()
            ? ua.TASK
            : ua.STEP
          : ua.DONE
        : ua.STEP;
    return v72;
  };
  function Bb(a, b) {
    a.g(b, "NaN", NaN, xa);
    a.g(b, "Infinity", Infinity, xa);
    a.g(b, "undefined", void 0, xa);
    a.g(b, "window", b, wa);
    a.g(b, "this", b, xa);
    a.g(b, "self", b);
    a.L = new D(null);
    a.X = new D(a.L);
    Cb(a, b);
    Db(a, b);
    b.Ca = a.L;
    a.g(b, "constructor", a.u, v);
    Eb(a, b);
    Fb(a, b);
    Gb(a, b);
    Hb(a, b);
    Ib(a, b);
    Jb(a, b);
    Kb(a, b);
    Lb(a, b);
    Mb(a, b);
    function lambda9() {
      throw EvalError("Can't happen");
    }
    let n43 = not(1);
    var d = a.i(lambda9, n43);
    d.eval = not(0);
    a.g(b, "eval", d, v);
    let n44 = not(1);
    let v330 = a.i(parseInt, n44);
    a.g(b, "parseInt", v330, v);
    let n45 = not(1);
    let v331 = a.i(parseFloat, n45);
    a.g(b, "parseFloat", v331, v);
    let n46 = not(1);
    let v332 = a.i(isNaN, n46);
    a.g(b, "isNaN", v332, v);
    let n47 = not(1);
    let v333 = a.i(isFinite, n47);
    a.g(b, "isFinite", v333, v);
    let n48 = not(1);
    let v334 = a.i(d, n48);
    let v335 = a.g(b, c[e][1], v334, v);
    for (
      var c = [
          [escape, "escape"],
          [unescape, "unescape"],
          [decodeURI, "decodeURI"],
          [decodeURIComponent, "decodeURIComponent"],
          [encodeURI, "encodeURI"],
          [encodeURIComponent, "encodeURIComponent"],
        ],
        e = 0;
      e < c.length;
      e++
    )
      ((d = (function lambda11(g) {
        let v74 = function lambda10(k) {
          try {
            let v73 = g(k);
            return v73;
          } catch (q) {
            H(a, a.Eb, q.message);
          }
        };
        return v74;
      })(c[e][0])),
        v335);
    d = function lambda12(g) {
      let n49 = not(1);
      let v75 = Nb(a, n49, arguments);
      return v75;
    };
    let n50 = not(1);
    let v336 = a.i(d, n50);
    a.g(b, "setTimeout", v336, v);
    d = function lambda13(g) {
      let n51 = not(0);
      let v76 = Nb(a, n51, arguments);
      return v76;
    };
    let n52 = not(1);
    let v337 = a.i(d, n52);
    a.g(b, "setInterval", v337, v);
    d = function lambda14(g) {
      Ob(a, g);
    };
    let n53 = not(1);
    let v338 = a.i(d, n53);
    a.g(b, "clearTimeout", v338, v);
    d = function lambda15(g) {
      Ob(a, g);
    };
    let n54 = not(1);
    let v339 = a.i(d, n54);
    a.g(b, "clearInterval", v339, v);
    a.OBJECT = a.u;
    a.OBJECT_PROTO = a.L;
    a.FUNCTION = a.P;
    a.FUNCTION_PROTO = a.X;
    a.ARRAY = a.ua;
    a.ARRAY_PROTO = a.Na;
    a.REGEXP = a.I;
    a.REGEXP_PROTO = a.Pa;
    a.DATE = a.W;
    a.DATE_PROTO = a.ob;
    a.qb && a.qb(a, b);
  }
  p.Tb = 0;
  function Cb(a, b) {
    var d = /^[A-Za-z_$][\w$]*$/;
    var c = function lambda16(e) {
      var g = arguments.length ? String(arguments[arguments.length - 1]) : "",
        k = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
      if (k) {
        k = k.split(/\s*,\s*/);
        for (var q = 0; q < k.length; q++) {
          var C = k[q];
          d.test(C) || H(a, a.Y, "Invalid function argument: " + C);
        }
        k = k.join(", ");
      }
      try {
        var R = da("(function(" + k + ") {" + g + "})", "function" + a.Tb++);
      } catch (ha) {
        H(a, a.Y, "Invalid code: " + ha.message);
      }
      1 !== R.body.length && H(a, a.Y, "Invalid code in function body");
      let v77 = Pb(a, R.body[0].pa, a.M, "anonymous");
      return v77;
    };
    let n55 = not(0);
    a.P = a.i(c, n55);
    a.g(b, "Function", a.P, v);
    a.g(a.P, "prototype", a.X, v);
    a.g(a.X, "constructor", a.P, v);
    a.X.Va = function lambda17() {};
    a.X.Va.id = a.ab++;
    a.X.zb = not(0);
    a.g(a.X, "length", 0, A);
    a.X.H = "Function";
    c = function lambda18(e, g, k) {
      var q = a.j[a.j.length - 1];
      q.aa = e;
      q.C = g;
      q.G = [];
      null !== k &&
        void 0 !== k &&
        (k instanceof D
          ? (q.G = Array.from(k.h))
          : H(a, a.o, "CreateListFromArrayLike called on non-object"));
      q.hb = not(1);
    };
    J(a, a.P, "apply", c);
    a.Z.push(
      "(function(){var d=Function.prototype.apply;Function.prototype.apply=function(e,b){for(var c=[],a=0;b&&a<b.length;a++)c[a]=b[a];return d(this,e,c)}})();",
    );
    c = function lambda19(e) {
      var g = a.j[a.j.length - 1];
      g.aa = this;
      g.C = e;
      g.G = [];
      for (var k = 1; k < arguments.length; k++) g.G.push(arguments[k]);
      g.hb = not(1);
    };
    J(a, a.P, "call", c);
    a.Z.push(
      'Object.defineProperty(Function.prototype,"bind",{configurable:!0,writable:!0,value:function(c){if("function"!==typeof this)throw TypeError("What is trying to be bound is not callable");var d=Array.prototype.slice.call(arguments,1),e=this,a=function(){},b=function(){return e.apply(this instanceof a?this:c,d.concat(Array.prototype.slice.call(arguments)))};this.prototype&&(a.prototype=this.prototype);b.prototype=new a;return b}});',
    );
    c = function lambda20() {
      let v78 = String(this);
      return v78;
    };
    J(a, a.P, "toString", c);
    let n56 = not(1);
    let v340 = a.i(c, n56);
    a.g(a.P, "toString", v340, v);
    c = function lambda21() {
      let v79 = this.valueOf();
      return v79;
    };
    J(a, a.P, "valueOf", c);
    let n57 = not(1);
    let v341 = a.i(c, n57);
    a.g(a.P, "valueOf", v341, v);
  }
  function Db(a, b) {
    function d(e) {
      (void 0 !== e && null !== e) ||
        H(a, a.o, "Cannot convert '" + e + "' to object");
    }
    var c = function lambda22(e) {
      if (void 0 === e || null === e) {
        let v80 = Ac(a) ? this : a.s(a.L);
        return v80;
      }
      if (not(e instanceof D)) {
        let v342 = Bc(a, e);
        var g = a.s(v342);
        g.data = e;
        return g;
      }
      return e;
    };
    let n58 = not(0);
    a.u = a.i(c, n58);
    a.g(a.u, "prototype", a.L, v);
    a.g(a.L, "constructor", a.u, v);
    a.g(b, "Object", a.u, v);
    c = function lambda23(e) {
      d(e);
      let v343 = Object.getOwnPropertyNames(e instanceof D ? e.h : e);
      let v81 = a.S(v343);
      return v81;
    };
    let n59 = not(1);
    let v344 = a.i(c, n59);
    a.g(a.u, "getOwnPropertyNames", v344, v);
    c = function lambda24(e) {
      d(e);
      e instanceof D && (e = e.h);
      let v345 = Object.keys(e);
      let v82 = a.S(v345);
      return v82;
    };
    let n60 = not(1);
    let v346 = a.i(c, n60);
    a.g(a.u, "keys", v346, v);
    c = function lambda25(e) {
      if (null === e) {
        let v83 = a.s(null);
        return v83;
      }
      e instanceof D ||
        H(a, a.o, "Object prototype may only be an Object or null, not " + e);
      let v84 = a.s(e);
      return v84;
    };
    let n61 = not(1);
    let v347 = a.i(c, n61);
    a.g(a.u, "create", v347, v);
    a.Z.push(
      "(function(){var c=Object.create;Object.create=function(a,b){a=c(a);b&&Object.defineProperties(a,b);return a}})();",
    );
    c = function lambda26(e, g, k) {
      g = String(g);
      e instanceof D ||
        H(a, a.o, "Object.defineProperty called on non-object: " + e);
      k instanceof D || H(a, a.o, "Property description must be an object");
      not(e.preventExtensions) ||
        g in e.h ||
        H(
          a,
          a.o,
          "Can't define property '" + g + "', object is not extensible",
        );
      a.g(e, g, Ka, k.h);
      return e;
    };
    let n62 = not(1);
    let v348 = a.i(c, n62);
    a.g(a.u, "defineProperty", v348, v);
    a.Z.push(
      '(function(){var d=Object.defineProperty;Object.defineProperty=function(e,c,a){var b={};"configurable"in a&&(b.configurable=a.configurable);"enumerable"in a&&(b.enumerable=a.enumerable);"writable"in a&&(b.writable=a.writable);"value"in a&&(b.value=a.value);"get"in a&&(b.get=a.get);"set"in a&&(b.set=a.set);return d(e,c,b)}})();\nObject.defineProperty(Object,"defineProperties",{configurable:!0,writable:!0,value:function(d,e){for(var c=Object.keys(e),a=0;a<c.length;a++)Object.defineProperty(d,c[a],e[c[a]]);return d}});',
    );
    c = function lambda27(e, g) {
      e instanceof D ||
        H(a, a.o, "Object.getOwnPropertyDescriptor called on non-object: " + e);
      g = String(g);
      if (g in e.h) {
        var k = Object.getOwnPropertyDescriptor(e.h, g),
          q = e.ba[g];
        e = e.ea[g];
        g = a.s(a.L);
        let v349 = a.g(g, "get", q);
        let v350 = a.g(g, "set", e);
        let v351 = a.g(g, "value", k.value);
        let v352 = a.g(g, "writable", k.writable);
        q || e ? (v349, v350) : (v351, v352);
        a.g(g, "configurable", k.configurable);
        a.g(g, "enumerable", k.enumerable);
        return g;
      }
    };
    let n63 = not(1);
    let v353 = a.i(c, n63);
    a.g(a.u, "getOwnPropertyDescriptor", v353, v);
    c = function lambda28(e) {
      d(e);
      let v85 = Bc(a, e);
      return v85;
    };
    let n64 = not(1);
    let v354 = a.i(c, n64);
    a.g(a.u, "getPrototypeOf", v354, v);
    c = function lambda29(e) {
      let a9 = not(e);
      let v86 = not(a9) && not(e.preventExtensions);
      return v86;
    };
    let n65 = not(1);
    let v355 = a.i(c, n65);
    a.g(a.u, "isExtensible", v355, v);
    c = function lambda30(e) {
      e instanceof D && (e.preventExtensions = not(0));
      return e;
    };
    let n66 = not(1);
    let v356 = a.i(c, n66);
    a.g(a.u, "preventExtensions", v356, v);
    J(a, a.u, "toString", D.prototype.toString);
    J(a, a.u, "toLocaleString", D.prototype.toString);
    J(a, a.u, "valueOf", D.prototype.valueOf);
    c = function lambda31(e) {
      d(this);
      let v87 =
        this instanceof D ? String(e) in this.h : this.hasOwnProperty(e);
      return v87;
    };
    J(a, a.u, "hasOwnProperty", c);
    c = function lambda32(e) {
      d(this);
      let v88 =
        this instanceof D
          ? Object.prototype.propertyIsEnumerable.call(this.h, e)
          : this.propertyIsEnumerable(e);
      return v88;
    };
    J(a, a.u, "propertyIsEnumerable", c);
    c = function lambda33(e) {
      for (;;) {
        e = Bc(a, e);
        if (not(e)) {
          let n5 = not(1);
          return n5;
        }
        if (e === this) {
          let n6 = not(0);
          return n6;
        }
      }
    };
    J(a, a.u, "isPrototypeOf", c);
  }
  function Eb(a, b) {
    var d = function lambda34(c) {
      var e = Ac(a) ? this : Cc(a),
        g = arguments[0];
      if (1 === arguments.length && "number" === typeof g) {
        let v357 = Ra(g);
        (isNaN(v357) && H(a, a.$a, "Invalid array length: " + g),
          (e.h.length = g));
      } else {
        for (g = 0; g < arguments.length; g++) e.h[g] = arguments[g];
        e.h.length = g;
      }
      return e;
    };
    let n67 = not(0);
    a.ua = a.i(d, n67);
    a.Na = a.ua.h.prototype;
    a.g(b, "Array", a.ua, v);
    d = function lambda35(c) {
      let v89 = c && "Array" === c.H;
      return v89;
    };
    let n68 = not(1);
    let v358 = a.i(d, n68);
    a.g(a.ua, "isArray", v358, v);
    a.g(a.Na, "length", 0, {
      configurable: not(1),
      enumerable: not(1),
      writable: not(0),
    });
    a.Na.H = "Array";
    a.Z.push(
      '(function(){function g(c,b){Object.defineProperty(b,"name",{value:c});Object.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:b})}g("pop",function(){if(!this)throw TypeError();var c=Object(this),b=c.length>>>0;if(!b||0>b)c.length=0;else{b--;var d=c[b];delete c[b];c.length=b;return d}});g("push",function(c){if(!this)throw TypeError();for(var b=Object(this),d=b.length>>>0,a=0;a<arguments.length;a++)b[d]=arguments[a],d++;return b.length=d});g("shift",function(){if(!this)throw TypeError();\nvar c=Object(this),b=c.length>>>0;if(!b||0>b)c.length=0;else{for(var d=c[0],a=0;a<b-1;a++)a+1 in c?c[a]=c[a+1]:delete c[a];delete c[a];c.length=b-1;return d}});g("unshift",function(c){if(!this)throw TypeError();var b=Object(this),d=b.length>>>0;if(!d||0>d)d=0;for(var a=d-1;0<=a;a--)a in b?b[a+arguments.length]=b[a]:delete b[a+arguments.length];for(a=0;a<arguments.length;a++)b[a]=arguments[a];return b.length=d+arguments.length});g("reverse",function(){if(!this)throw TypeError();var c=Object(this),\nb=c.length>>>0;if(!b||2>b)return c;for(var d=0;d<b/2-.5;d++){var a=c[d],e=d in c;b-d-1 in c?c[d]=c[b-d-1]:delete c[d];e?c[b-d-1]=a:delete c[b-d-1]}return c});g("indexOf",function(c,b){if(!this)throw TypeError();var d=Object(this),a=d.length>>>0;b|=0;if(!a||b>=a)return-1;for(b=Math.max(0<=b?b:a-Math.abs(b),0);b<a;){if(b in d&&d[b]===c)return b;b++}return-1});g("lastIndexOf",function(c,b){if(!this)throw TypeError();var d=Object(this),a=d.length>>>0;if(!a)return-1;var e=a-1;1<arguments.length&&(e=b|\n0)&&(e=(0<e||-1)*Math.floor(Math.abs(e)));for(a=0<=e?Math.min(e,a-1):a-Math.abs(e);0<=a;){if(a in d&&d[a]===c)return a;a--}return-1});g("slice",function(c,b){if(!this)throw TypeError();var d=Object(this),a=d.length>>>0;c|=0;c=0<=c?c:Math.max(0,a+c);"undefined"!==typeof b?(Infinity!==b&&(b|=0),b=0>b?a+b:Math.min(b,a)):b=a;b-=c;a=Array(b);for(var e=0;e<b;e++)c+e in d&&(a[e]=d[c+e]);return a});g("splice",function(c,b,d){if(!this)throw TypeError();var a=Object(this),e=a.length>>>0;c|=0;c=0>c?Math.max(e+\nc,0):Math.min(c,e);b=2>arguments.length?e-c:Math.max(0,Math.min(b|0,e-c));for(var h=[],f=c;f<c+b;f++)f in a?h.push(a[f]):h.length++,f+b in a?a[f]=a[f+b]:delete a[f];for(f=c+b;f<e-b;f++)f+b in a?a[f]=a[f+b]:delete a[f];for(f=e-b;f<e;f++)delete a[f];e-=b;if(2<arguments.length){var k=arguments.length-2;for(f=e-1;f>=c;f--)f in a?a[f+k]=a[f]:delete a[f+k];e+=k;for(f=2;f<arguments.length;f++)a[c+f-2]=arguments[f]}a.length=e;return h});g("concat",function(c){if(!this)throw TypeError();for(var b=Object(this),\nd=[],a=-1;a<arguments.length;a++){var e=-1===a?b:arguments[a];if(Array.isArray(e))for(var h=0,f=e.length;h<f;h++)h in e?d.push(e[h]):d.length++;else d.push(e)}return d});g("join",function(c){if(!this)throw TypeError();var b=Object(this),d=b.length>>>0;c="undefined"===typeof c?",":""+c;for(var a="",e=0;e<d;e++)e&&c&&(a+=c),a+=null===b[e]||void 0===b[e]?"":b[e];return a});g("every",function(c,b){if(!this||"function"!==typeof c)throw TypeError();var d,a=0,e=Object(this),h=e.length>>>0;for(1<arguments.length&&\n(d=b);a<h;){if(a in e&&!c.call(d,e[a],a,e))return!1;a++}return!0});g("filter",function(c,b){if(!this||"function"!==typeof c)throw TypeError();for(var d=Object(this),a=d.length>>>0,e=[],h=2<=arguments.length?arguments[1]:void 0,f=0;f<a;f++)if(f in d){var k=d[f];c.call(h,k,f,d)&&e.push(k)}return e});g("forEach",function(c,b){if(!this||"function"!==typeof c)throw TypeError();var d,a=0,e=Object(this),h=e.length>>>0;for(1<arguments.length&&(d=b);a<h;)a in e&&c.call(d,e[a],a,e),a++});g("map",function(c,\nb){if(!this||"function"!==typeof c)throw TypeError();var d,a=0,e=Object(this),h=e.length>>>0;1<arguments.length&&(d=b);for(var f=Array(h);a<h;)a in e&&(f[a]=c.call(d,e[a],a,e)),a++;return f});g("reduce",function(c){if(!this||"function"!==typeof c)throw TypeError();var b=Object(this),d=b.length>>>0,a=0;if(2===arguments.length)var e=arguments[1];else{for(;a<d&&!(a in b);)a++;if(a>=d)throw TypeError("Reduce of empty array with no initial value");e=b[a++]}for(;a<d;a++)a in b&&(e=c(e,b[a],a,b));return e});\ng("reduceRight",function(c){if(!this||"function"!==typeof c)throw TypeError();var b=Object(this),d=(b.length>>>0)-1;if(2<=arguments.length)var a=arguments[1];else{for(;0<=d&&!(d in b);)d--;if(0>d)throw TypeError("Reduce of empty array with no initial value");a=b[d--]}for(;0<=d;d--)d in b&&(a=c(a,b[d],d,b));return a});g("some",function(c){if(!this||"function"!==typeof c)throw TypeError();for(var b=Object(this),d=b.length>>>0,a=2<=arguments.length?arguments[1]:void 0,e=0;e<d;e++)if(e in b&&c.call(a,\nb[e],e,b))return!0;return!1});g("sort",function(c){if(!this)throw TypeError();"function"!==typeof c&&(c=void 0);for(var b=0;b<this.length;b++){for(var d=0,a=0;a<this.length-b-1;a++)if(c?0<c(this[a],this[a+1]):String(this[a])>String(this[a+1])){var e=this[a],h=a in this;a+1 in this?this[a]=this[a+1]:delete this[a];h?this[a+1]=e:delete this[a+1];d++}if(!d)break}return this});g("toLocaleString",function(){if(!this)throw TypeError();for(var c=Object(this),b=c.length>>>0,d=[],a=0;a<b;a++)d[a]=null===c[a]||\nvoid 0===c[a]?"":c[a].toLocaleString();return d.join(",")})})();',
    );
  }
  function Fb(a, b) {
    var d = function lambda36(c) {
      c = arguments.length ? Pa.String(c) : "";
      let v90 = Ac(a) ? ((this.data = c), this) : c;
      return v90;
    };
    let n69 = not(0);
    a.F = a.i(d, n69);
    a.g(b, "String", a.F, v);
    let n70 = not(1);
    let v359 = a.i(String.fromCharCode, n70);
    a.g(a.F, "fromCharCode", v359, v);
    b =
      "charAt charCodeAt concat indexOf lastIndexOf slice substr substring toLocaleLowerCase toLocaleUpperCase toLowerCase toUpperCase trim".split(
        " ",
      );
    for (d = 0; d < b.length; d++) J(a, a.F, b[d], String.prototype[b[d]]);
    d = function lambda37(c, e, g) {
      e = a.T(e);
      g = a.T(g);
      try {
        let v91 = String(this).localeCompare(c, e, g);
        return v91;
      } catch (k) {
        H(a, a.A, "localeCompare: " + k.message);
      }
    };
    J(a, a.F, "localeCompare", d);
    d = function lambda39(c, e, g) {
      var k = String(this);
      e = e ? Number(e) : void 0;
      let v360 = Dc(a, c, g);
      if (P(a, c, a.I) && ((c = c.data), v360, 2 === a.REGEXP_MODE)) {
        if (Na) {
          let v361 = a.S(c);
          ((c = Ec(
            a,
            "string.split(separator, limit)",
            {
              string: k,
              separator: c,
              limit: e,
            },
            c,
            g,
          )),
            c !== La && g(v361));
        } else {
          var q = a.la(),
            C = Fc(a, c, q, g);
          q.onmessage = function lambda38(R) {
            clearTimeout(C);
            let v362 = a.S(R.data);
            g(v362);
          };
          q.postMessage(["split", k, c, e]);
        }
        return;
      }
      c = k.split(c, e);
      let v363 = a.S(c);
      g(v363);
    };
    Gc(a, a.F, "split", d);
    d = function lambda41(c, e) {
      var g = String(this);
      c = P(a, c, a.I) ? c.data : new RegExp(c);
      Dc(a, c, e);
      let v364 = e(c && Hc(a, c));
      if (2 === a.REGEXP_MODE) {
        if (Na) {
          ((c = Ec(
            a,
            "string.match(regexp)",
            {
              string: g,
              regexp: c,
            },
            c,
            e,
          )),
            c !== La && e(c && Hc(a, c)));
        } else {
          var k = a.la(),
            q = Fc(a, c, k, e);
          k.onmessage = function lambda40(C) {
            clearTimeout(q);
            e(C.data && Hc(a, C.data));
          };
          k.postMessage(["match", g, c]);
        }
      } else ((c = g.match(c)), v364);
    };
    Gc(a, a.F, "match", d);
    d = function lambda43(c, e) {
      var g = String(this);
      P(a, c, a.I) ? (c = c.data) : (c = new RegExp(c));
      Dc(a, c, e);
      let v365 = g.search(c);
      if (2 === a.REGEXP_MODE) {
        if (Na) {
          ((c = Ec(
            a,
            "string.search(regexp)",
            {
              string: g,
              regexp: c,
            },
            c,
            e,
          )),
            c !== La && e(c));
        } else {
          var k = a.la(),
            q = Fc(a, c, k, e);
          k.onmessage = function lambda42(C) {
            clearTimeout(q);
            e(C.data);
          };
          k.postMessage(["search", g, c]);
        }
      } else e(v365);
    };
    Gc(a, a.F, "search", d);
    d = function lambda45(c, e, g) {
      var k = String(this);
      e = String(e);
      let v366 = Dc(a, c, g);
      if (P(a, c, a.I) && ((c = c.data), v366, 2 === a.REGEXP_MODE)) {
        if (Na) {
          ((c = Ec(
            a,
            "string.replace(substr, newSubstr)",
            {
              string: k,
              substr: c,
              newSubstr: e,
            },
            c,
            g,
          )),
            c !== La && g(c));
        } else {
          var q = a.la(),
            C = Fc(a, c, q, g);
          q.onmessage = function lambda44(R) {
            clearTimeout(C);
            g(R.data);
          };
          q.postMessage(["replace", k, c, e]);
        }
        return;
      }
      let v367 = k.replace(c, e);
      g(v367);
    };
    Gc(a, a.F, "replace", d);
    a.Z.push(
      '(function(){var g=String.prototype.replace;String.prototype.replace=function(c,e){if("function"!==typeof e)return g.call(this,c,e);var b=this;if(c instanceof RegExp){for(var d=[],a=c.exec(b);a;){a.push(a.index,b);var f=e.apply(null,a);d.push([a.index,a[0].length,f]);a=c.global?c.exec(b):null}for(a=d.length-1;0<=a;a--)b=b.substring(0,d[a][0])+d[a][2]+b.substring(d[a][0]+d[a][1])}else a=b.indexOf(c),-1!==a&&(f=e(b.substr(a,c.length),a,b),b=b.substring(0,a)+f+b.substring(a+c.length));return b}})();',
    );
  }
  function Gb(a, b) {
    function lambda46(d) {
      d = Pa.Boolean(d);
      let v92 = Ac(a) ? ((this.data = d), this) : d;
      return v92;
    }
    let n71 = not(0);
    a.Oa = a.i(lambda46, n71);
    a.g(b, "Boolean", a.Oa, v);
  }
  function Hb(a, b) {
    var d = function lambda47(c) {
      c = arguments.length ? Pa.Number(c) : 0;
      let v93 = Ac(a) ? ((this.data = c), this) : c;
      return v93;
    };
    let n72 = not(0);
    a.V = a.i(d, n72);
    a.g(b, "Number", a.V, v);
    b = [
      "MAX_VALUE",
      "MIN_VALUE",
      "NaN",
      "NEGATIVE_INFINITY",
      "POSITIVE_INFINITY",
    ];
    for (d = 0; d < b.length; d++) a.g(a.V, b[d], Number[b[d]], xa);
    d = function lambda48(c) {
      try {
        let v94 = Number(this).toExponential(c);
        return v94;
      } catch (e) {
        H(a, a.A, e.message);
      }
    };
    J(a, a.V, "toExponential", d);
    d = function lambda49(c) {
      try {
        let v95 = Number(this).toFixed(c);
        return v95;
      } catch (e) {
        H(a, a.A, e.message);
      }
    };
    J(a, a.V, "toFixed", d);
    d = function lambda50(c) {
      try {
        let v96 = Number(this).toPrecision(c);
        return v96;
      } catch (e) {
        H(a, a.A, e.message);
      }
    };
    J(a, a.V, "toPrecision", d);
    d = function lambda51(c) {
      try {
        let v97 = Number(this).toString(c);
        return v97;
      } catch (e) {
        H(a, a.A, e.message);
      }
    };
    J(a, a.V, "toString", d);
    d = function lambda52(c, e) {
      c = c ? a.T(c) : void 0;
      e = e ? a.T(e) : void 0;
      try {
        let v98 = Number(this).toLocaleString(c, e);
        return v98;
      } catch (g) {
        H(a, a.A, "toLocaleString: " + g.message);
      }
    };
    J(a, a.V, "toLocaleString", d);
  }
  function Ib(a, b) {
    var d = function lambda53(e, g) {
      let a10 = Ac(a);
      if (not(a10)) {
        let v99 = Pa.Date();
        return v99;
      }
      let v368 = Array.from(arguments);
      var k = [null].concat(v368);
      this.data = new (Function.prototype.bind.apply(Pa.Date, k))();
      let v100 = this;
      return v100;
    };
    let n73 = not(0);
    a.W = a.i(d, n73);
    a.ob = a.W.h.prototype;
    a.g(b, "Date", a.W, v);
    let n74 = not(1);
    let v369 = a.i(Date.now, n74);
    a.g(a.W, "now", v369, v);
    let n75 = not(1);
    let v370 = a.i(Date.parse, n75);
    a.g(a.W, "parse", v370, v);
    let n76 = not(1);
    let v371 = a.i(Date.UTC, n76);
    a.g(a.W, "UTC", v371, v);
    b =
      "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toJSON toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(
        " ",
      );
    let v372 = J(a, a.W, b[c], d);
    for (var c = 0; c < b.length; c++)
      ((d = (function lambda55(e) {
        let v102 = function lambda54(g) {
          var k = this.data;
          k instanceof Date || H(a, a.o, e + " not called on a Date");
          for (var q = [], C = 0; C < arguments.length; C++)
            q[C] = a.T(arguments[C]);
          let v101 = k[e].apply(k, q);
          return v101;
        };
        return v102;
      })(b[c])),
        v372);
    d = function lambda56() {
      try {
        let v103 = this.data.toISOString();
        return v103;
      } catch (e) {
        H(a, a.$a, "toISOString: " + e.message);
      }
    };
    J(a, a.W, "toISOString", d);
  }
  function Jb(a, b) {
    var d = function lambda57(c, e) {
      if (Ac(a)) {
        var g = this;
      } else {
        if (void 0 === e && P(a, c, a.I)) {
          return c;
        }
        let g = a.s(a.Pa);
      }
      c = void 0 === c ? "" : String(c);
      e = e ? String(e) : "";
      /^[gmi]*$/.test(e) || H(a, a.Y, "Invalid regexp flag: " + e);
      try {
        var k = new Pa.RegExp(c, e);
      } catch (q) {
        H(a, a.Y, q.message);
      }
      Ic(a, g, k);
      return g;
    };
    let n77 = not(0);
    a.I = a.i(d, n77);
    a.Pa = a.I.h.prototype;
    a.g(b, "RegExp", a.I, v);
    a.g(a.I.h.prototype, "global", void 0, A);
    a.g(a.I.h.prototype, "ignoreCase", void 0, A);
    a.g(a.I.h.prototype, "multiline", void 0, A);
    a.g(a.I.h.prototype, "source", "(?:)", A);
    a.Z.push(
      'Object.defineProperty(RegExp.prototype,"test",{configurable:!0,writable:!0,value:function(a){return!!this.exec(a)}});',
    );
    d = function lambda59(c, e) {
      var g = this.data;
      c = String(c);
      let v373 = a.N(this, "lastIndex");
      g.lastIndex = Number(v373);
      Dc(a, g, e);
      let v378 = a.g(this, "lastIndex", g.lastIndex);
      let v379 = Hc(a, c);
      let v380 = e(v379);
      if (2 === a.REGEXP_MODE) {
        if (Na) {
          let v374 = a.g(this, "lastIndex", g.lastIndex);
          let v375 = Hc(a, c);
          let v376 = e(v375);
          ((c = Ec(
            a,
            "regexp.exec(string)",
            {
              string: c,
              regexp: g,
            },
            g,
            e,
          )),
            c !== La && (v374, v376));
        } else {
          var k = a.la(),
            q = Fc(a, g, k, e),
            C = this;
          k.onmessage = function lambda58(R) {
            clearTimeout(q);
            a.g(C, "lastIndex", R.data[1]);
            let v377 = Hc(a, R.data[0]);
            e(v377);
          };
          k.postMessage(["exec", g, g.lastIndex, c]);
        }
      } else ((c = g.exec(c)), v378, v380);
    };
    Gc(a, a.I, "exec", d);
  }
  function Hc(a, b) {
    if (b) {
      for (var d = Object.getOwnPropertyNames(b), c = 0; c < d.length; c++) {
        var e = d[c];
        let v381 = Number(e);
        isNaN(v381) &&
          "length" !== e &&
          "input" !== e &&
          "index" !== e &&
          delete b[e];
      }
      let v104 = a.S(b);
      return v104;
    }
    let v105 = null;
    return v105;
  }
  function Kb(a, b) {
    function d(c) {
      function lambda60(g) {
        var k = Ac(a) ? this : a.ga(e);
        Jc(a, k, g);
        return k;
      }
      let n78 = not(0);
      var e = a.i(lambda60, n78);
      let v382 = a.ga(a.A);
      a.g(e, "prototype", v382, v);
      a.g(e.h.prototype, "name", c, v);
      a.g(b, c, e, v);
      return e;
    }
    function lambda61(c) {
      var e = Ac(a) ? this : a.ga(a.A);
      Jc(a, e, c);
      return e;
    }
    let n79 = not(0);
    a.A = a.i(lambda61, n79);
    a.g(b, "Error", a.A, v);
    a.g(a.A.h.prototype, "message", "", v);
    a.g(a.A.h.prototype, "name", "Error", v);
    d("EvalError");
    a.$a = d("RangeError");
    a.pb = d("ReferenceError");
    a.Y = d("SyntaxError");
    a.o = d("TypeError");
    a.Eb = d("URIError");
  }
  function Lb(a, b) {
    var d = a.s(a.L);
    a.g(b, "Math", d, v);
    var c = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" ");
    for (b = 0; b < c.length; b++) a.g(d, c[b], Math[c[b]], A);
    c =
      "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(
        " ",
      );
    let n80 = not(1);
    let v383 = a.i(Math[c[b]], n80);
    for (b = 0; b < c.length; b++) a.g(d, c[b], v383, v);
  }
  function Mb(a, b) {
    var d = a.s(a.L);
    a.g(b, "JSON", d, v);
    b = function lambda62(c) {
      try {
        let v384 = String(c);
        var e = JSON.parse(v384);
      } catch (g) {
        H(a, a.Y, g.message);
      }
      let v106 = a.S(e);
      return v106;
    };
    let n81 = not(1);
    let v385 = a.i(b, n81);
    a.g(d, "parse", v385);
    b = function lambda64(c, e, g) {
      function lambda63(q) {
        let v107 = "string" === typeof q || "number" === typeof q;
        return v107;
      }
      e && "Function" === e.H
        ? H(a, a.o, "Function replacer on JSON.stringify not supported")
        : e && "Array" === e.H
          ? ((e = a.T(e)), (e = e.filter(lambda63)))
          : (e = null);
      "string" !== typeof g && "number" !== typeof g && (g = void 0);
      c = a.T(c);
      try {
        var k = JSON.stringify(c, e, g);
      } catch (q) {
        H(a, a.o, q.message);
      }
      return k;
    };
    let n82 = not(1);
    let v386 = a.i(b, n82);
    a.g(d, "stringify", v386);
  }
  function P(a, b, d) {
    if (null === b || void 0 === b || not(d)) {
      let n7 = not(1);
      return n7;
    }
    d = d.h.prototype;
    if (b === d) {
      let n8 = not(0);
      return n8;
    }
    for (b = Bc(a, b); b; ) {
      if (b === d) {
        let n9 = not(0);
        return n9;
      }
      b = b.Ca;
    }
    let n10 = not(1);
    return n10;
  }
  function Ic(a, b, d) {
    b.data = new RegExp(d.source, d.flags);
    a.g(b, "lastIndex", d.lastIndex, v);
    a.g(b, "source", d.source, A);
    a.g(b, "global", d.global, A);
    a.g(b, "ignoreCase", d.ignoreCase, A);
    a.g(b, "multiline", d.multiline, A);
  }
  function Jc(a, b, d) {
    let v387 = String(d);
    d && a.g(b, "message", v387, v);
    d = [];
    for (var c = a.j.length - 1; 0 <= c; c--) {
      var e = a.j[c],
        g = e.node;
      "CallExpression" === g.type &&
        (e = e.aa) &&
        d.length &&
        (d[d.length - 1].Lb = a.N(e, "name"));
      not(g.O) ||
        (d.length && "CallExpression" !== g.type) ||
        d.push({
          Kb: g.O,
        });
    }
    let v388 = a.N(b, "name");
    let c = String(v388);
    let v389 = a.N(b, "message");
    let g = String(v389);
    g = c + ": " + g + "\n";
    for (c = 0; c < d.length; c++) {
      var k = d[c].Kb;
      let e = d[c].Lb;
      k = k.source + ":" + k.start.line + ":" + k.start.eb;
      g = e ? g + ("  at " + e + " (" + k + ")\n") : g + ("  at " + k + "\n");
    }
    let v390 = g.trim();
    a.g(b, "stack", v390, v);
  }
  p.la = function lambda65() {
    var a = this.la.Jb;
    let v391 = Qa.join("\n");
    a ||
      ((a = new Blob([v391], {
        type: "application/javascript",
      })),
      (this.la.Jb = a));
    let v392 = URL.createObjectURL(a);
    let v108 = new Worker(v392);
    return v108;
  };
  function Ec(a, b, d, c, e) {
    var g = {
      timeout: a.REGEXP_THREAD_TIMEOUT,
    };
    try {
      let v109 = Na.runInNewContext(b, d, g);
      return v109;
    } catch (k) {
      let v393 = e(null);
      let v394 = H(a, a.A, "RegExp Timeout: " + c);
      (v393, v394);
    }
    return La;
  }
  function Dc(a, b, d) {
    if (0 === a.REGEXP_MODE) {
      var c = not(1);
    } else if (
      1 === a.REGEXP_MODE ||
      Na ||
      ("function" === typeof Worker && "function" === typeof URL)
    ) {
      let c = not(0);
    }
    let v395 = d(null);
    let v396 = H(a, a.A, "Regular expressions not supported: " + b);
    c || (v395, v396);
  }
  function Fc(a, b, d, c) {
    function lambda66() {
      d.terminate();
      c(null);
      try {
        H(a, a.A, "RegExp Timeout: " + b);
      } catch (e) {}
    }
    let v110 = setTimeout(lambda66, a.REGEXP_THREAD_TIMEOUT);
    return v110;
  }
  p.ga = function lambda67(a) {
    let v111 = this.s(a && a.h.prototype);
    return v111;
  };
  p.s = function lambda68(a) {
    if ("object" !== typeof a) {
      throw Error("Non object prototype");
    }
    a = new D(a);
    P(this, a, this.A) && (a.H = "Error");
    return a;
  };
  function Cc(a) {
    var b = a.s(a.Na);
    a.g(b, "length", 0, {
      configurable: not(1),
      enumerable: not(1),
      writable: not(0),
    });
    b.H = "Array";
    return b;
  }
  function $c(a, b, d) {
    var c = a.s(a.X);
    let v397 = a.g(c, "prototype", d, v);
    let v398 = a.g(d, "constructor", c, v);
    d ? ((d = a.s(a.L)), v397, v398) : (c.zb = not(0));
    a.g(c, "length", b, A);
    c.H = "Function";
    return c;
  }
  function Pb(a, b, d, c) {
    let n83 = not(0);
    var e = $c(a, b.sa.length, n83);
    e.Xa = d;
    e.node = b;
    a.g(e, "name", b.id ? String(b.id.name) : c || "", A);
    return e;
  }
  p.i = function lambda69(a, b) {
    b = $c(this, a.length, b);
    b.Va = a;
    a.id = this.ab++;
    this.g(b, "name", a.name, A);
    return b;
  };
  p.ub = function lambda70(a) {
    let n84 = not(0);
    var b = $c(this, a.length, n84);
    b.bb = a;
    a.id = this.ab++;
    this.g(b, "name", a.name, A);
    return b;
  };
  p.S = function lambda73(a, b) {
    if (
      null === a ||
      void 0 === a ||
      not(0) === a ||
      not(1) === a ||
      "string" === typeof a ||
      "number" === typeof a
    ) {
      return a;
    }
    if (a instanceof D) {
      throw Error("Object is already pseudo");
    }
    b = b || {
      da: [],
      ja: [],
    };
    var d = b.ja.indexOf(a);
    if (-1 !== d) {
      let v112 = b.da[d];
      return v112;
    }
    b.ja.push(a);
    if (a instanceof RegExp) {
      var c = this.s(this.Pa);
      Ic(this, c, a);
      b.da.push(c);
      return c;
    }
    if (a instanceof Date) {
      let v399 = a.valueOf();
      let v400 = b.da.push(c);
      let v113 = ((c = this.s(this.ob)), (c.data = new Date(v399)), v400, c);
      return v113;
    }
    var e = null;
    a instanceof Number
      ? (e = this.ga(this.V))
      : a instanceof String
        ? (e = this.ga(this.F))
        : a instanceof Boolean && (e = this.ga(this.Oa));
    if (e) {
      let v401 = b.da.push(e);
      let v114 = ((e.data = a.valueOf()), v401, e);
      return v114;
    }
    if ("function" === typeof a) {
      var g = this;
      let c = Object.getOwnPropertyDescriptor(a, "prototype");
      function lambda72() {
        function lambda71(q) {
          let v115 = g.T(q);
          return v115;
        }
        var k = Array.prototype.slice.call(arguments).map(lambda71);
        k = a.apply(g, k);
        let v116 = g.S(k);
        return v116;
      }
      let a11 = not(c);
      let n85 = not(a11);
      c = this.i(lambda72, n85);
      b.da.push(c);
      return c;
    }
    e = Array.isArray(a) ? Cc(this) : this.s(this.L);
    b.da.push(e);
    let v402 = this.S(a[c], b);
    for (c in a) this.g(e, c, v402);
    return e;
  };
  p.T = function lambda74(a, b) {
    if (
      null === a ||
      void 0 === a ||
      not(0) === a ||
      not(1) === a ||
      "string" === typeof a ||
      "number" === typeof a
    ) {
      return a;
    }
    if (not(a instanceof D)) {
      throw Error("Object is not pseudo");
    }
    b = b || {
      da: [],
      ja: [],
    };
    var d = b.da.indexOf(a);
    if (-1 !== d) {
      let v117 = b.ja[d];
      return v117;
    }
    b.da.push(a);
    if (P(this, a, this.I)) {
      var c = new RegExp(a.data.source, a.data.flags);
      c.lastIndex = a.data.lastIndex;
      b.ja.push(c);
      return c;
    }
    if (P(this, a, this.W)) {
      let v403 = a.data.valueOf();
      let v404 = b.ja.push(a);
      let v118 = ((a = new Date(v403)), v404, a);
      return v118;
    }
    if (P(this, a, this.V) || P(this, a, this.F) || P(this, a, this.Oa)) {
      let v405 = b.ja.push(a);
      let v119 = ((a = Object(a.data)), v405, a);
      return v119;
    }
    d = P(this, a, this.ua) ? [] : {};
    b.ja.push(d);
    for (c in a.h) {
      var e = this.T(a.h[c], b);
      Object.defineProperty(d, c, {
        value: e,
        writable: not(0),
        enumerable: not(0),
        configurable: not(0),
      });
    }
    return d;
  };
  function Bc(a, b) {
    let v120 = a.V.h.prototype;
    let v121 = a.Oa.h.prototype;
    let v122 = a.F.h.prototype;
    switch (typeof b) {
      case "number":
        return v120;
      case "boolean":
        return v121;
      case "string":
        return v122;
    }
    let v123 = b ? b.Ca : null;
    return v123;
  }
  p.N = function lambda75(a, b) {
    if (this.R) {
      throw Error("Getter not supported in that context");
    }
    b = String(b);
    (void 0 !== a && null !== a) ||
      H(this, this.o, "Cannot read property '" + b + "' of " + a);
    if ("object" === typeof a && not(a instanceof D)) {
      throw TypeError("Expecting native value or pseudo object");
    }
    if ("length" === b) {
      if (P(this, a, this.F)) {
        let v124 = String(a).length;
        return v124;
      }
    } else if (64 > b.charCodeAt(0) && P(this, a, this.F)) {
      var d = Sa(b);
      let a12 = isNaN(d);
      if (not(a12) && d < String(a).length) {
        let v125 = String(a)[d];
        return v125;
      }
    }
    do
      if (a.h && b in a.h) {
        let v126 = (d = a.ba[b]) ? ((this.R = not(0)), d) : a.h[b];
        return v126;
      }
    while ((a = Bc(this, a)));
  };
  function ad(a, b, d) {
    if (not(b instanceof D)) {
      throw TypeError("Primitive data type has no properties");
    }
    d = String(d);
    if ("length" === d && P(a, b, a.F)) {
      let n11 = not(0);
      return n11;
    }
    if (P(a, b, a.F)) {
      var c = Sa(d);
      let a13 = isNaN(c);
      if (not(a13) && c < String(b).length) {
        let n12 = not(0);
        return n12;
      }
    }
    do
      if (b.h && d in b.h) {
        let n13 = not(0);
        return n13;
      }
    while ((b = Bc(a, b)));
    let n14 = not(1);
    return n14;
  }
  p.g = function lambda76(a, b, d, c) {
    if (this.Ma) {
      throw Error("Setter not supported in that context");
    }
    b = String(b);
    (void 0 !== a && null !== a) ||
      H(this, this.o, "Cannot set property '" + b + "' of " + a);
    if ("object" === typeof a && not(a instanceof D)) {
      throw TypeError("Expecting native value or pseudo object");
    }
    c &&
      ("get" in c || "set" in c) &&
      ("value" in c || "writable" in c) &&
      H(
        this,
        this.o,
        "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute",
      );
    var e = not(this.j) || bd(this).U;
    if (a instanceof D) {
      if (P(this, a, this.F)) {
        var g = Sa(b);
        let a14 = isNaN(g);
        if ("length" === b || (not(a14) && g < String(a).length)) {
          e &&
            H(
              this,
              this.o,
              "Cannot assign to read only property '" +
                b +
                "' of String '" +
                a.data +
                "'",
            );
          return;
        }
      }
      if ("Array" === a.H) {
        if (((g = a.h.length), "length" === b)) {
          if (c) {
            if (not("value" in c)) {
              return;
            }
            d = c.value;
          }
          d = Ra(d);
          isNaN(d) && H(this, this.$a, "Invalid array length");
          if (d < g) {
            for (k in a.h) {
              var k = Sa(k);
              let a15 = isNaN(k);
              not(a15) && d <= k && delete a.h[k];
            }
          }
        } else isNaN((k = Sa(b))) || (a.h.length = Math.max(g, k + 1));
      }
      if (not(a.preventExtensions) || b in a.h) {
        if (c) {
          e = {};
          "get" in c && c.get && ((a.ba[b] = c.get), (e.get = this.g.Zb));
          "set" in c && c.set && ((a.ea[b] = c.set), (e.set = this.g.$b));
          "configurable" in c && (e.configurable = c.configurable);
          "enumerable" in c && (e.enumerable = c.enumerable);
          "writable" in c &&
            ((e.writable = c.writable), delete a.ba[b], delete a.ea[b]);
          "value" in c
            ? ((e.value = c.value), delete a.ba[b], delete a.ea[b])
            : d !== Ka && ((e.value = d), delete a.ba[b], delete a.ea[b]);
          try {
            Object.defineProperty(a.h, b, e);
          } catch (q) {
            H(this, this.o, "Cannot redefine property: " + b);
          }
          "get" in c && not(c.get) && delete a.ba[b];
          "set" in c && not(c.set) && delete a.ea[b];
        } else {
          if (d === Ka) {
            throw ReferenceError("Value not specified");
          }
          let n86 = not(c);
          for (c = a; not(b in c.h); )
            if (((c = Bc(this, c)), n86)) {
              c = a;
              break;
            }
          if (c.ea && c.ea[b]) {
            let v127 = ((this.Ma = not(0)), c.ea[b]);
            return v127;
          }
          if (c.ba && c.ba[b]) {
            e &&
              H(
                this,
                this.o,
                "Cannot set property '" +
                  b +
                  "' of object '" +
                  a +
                  "' which only has a getter",
              );
          } else
            try {
              a.h[b] = d;
            } catch (q) {
              e &&
                H(
                  this,
                  this.o,
                  "Cannot assign to read only property '" +
                    b +
                    "' of object '" +
                    a +
                    "'",
                );
            }
        }
      } else
        e &&
          H(
            this,
            this.o,
            "Can't add property '" + b + "', object is not extensible",
          );
    } else
      e && H(this, this.o, "Can't create property '" + b + "' on '" + a + "'");
  };
  p.g.Zb = function lambda77() {
    throw Error("Placeholder getter");
  };
  p.g.$b = function lambda78() {
    throw Error("Placeholder setter");
  };
  function J(a, b, d, c) {
    let n87 = not(1);
    let v406 = a.i(c, n87);
    a.g(b.h.prototype, d, v406, v);
  }
  function Gc(a, b, d, c) {
    let v407 = a.ub(c);
    a.g(b.h.prototype, d, v407, v);
  }
  function bd(a) {
    a = a.j[a.j.length - 1].scope;
    if (not(a)) {
      throw Error("No scope found");
    }
    return a;
  }
  function ja(a, b, d) {
    var c = not(1);
    if (d && d.U) {
      c = not(0);
    } else {
      var e = b.body && b.body[0];
      e &&
        e.pa &&
        "Literal" === e.pa.type &&
        "use strict" === e.pa.value &&
        (c = not(0));
    }
    let e = a.s(null);
    c = new cd(d, c, e);
    d || Bb(a, c.object);
    bb(a, b, c);
    return c;
  }
  function dd(a, b, d) {
    if (not(b)) {
      throw Error("parentScope required");
    }
    a = d || a.s(null);
    let v128 = new cd(b, b.U, a);
    return v128;
  }
  function ed(a, b) {
    for (var d = bd(a); d && d !== a.M; ) {
      if (b in d.object.h) {
        let v129 = d.object.h[b];
        return v129;
      }
      let d = d.Xa;
    }
    if (d === a.M && ad(a, d.object, b)) {
      let v130 = a.N(d.object, b);
      return v130;
    }
    let d = a.j[a.j.length - 1].node;
    ("UnaryExpression" === d.type && "typeof" === d.operator) ||
      H(a, a.pb, b + " is not defined");
  }
  function fd(a, b, d) {
    for (var c = bd(a), e = c.U; c && c !== a.M; ) {
      if (b in c.object.h) {
        try {
          c.object.h[b] = d;
        } catch (g) {
          e && H(a, a.o, "Cannot assign to read only variable '" + b + "'");
        }
        return;
      }
      let c = c.Xa;
    }
    if (c === a.M && (not(e) || ad(a, c.object, b))) {
      let v131 = a.g(c.object, b, d);
      return v131;
    }
    H(a, a.pb, b + " is not defined");
  }
  function bb(a, b, d) {
    if (b.lb) {
      var c = b.lb;
    } else {
      let c = Object.create(null);
      switch (b.type) {
        case "VariableDeclaration":
          for (var e = 0; e < b.ia.length; e++) c[b.ia[e].id.name] = not(0);
          break;
        case "FunctionDeclaration":
          c[b.id.name] = b;
          break;
        case "BlockStatement":
        case "CatchClause":
        case "DoWhileStatement":
        case "ForInStatement":
        case "ForStatement":
        case "IfStatement":
        case "LabeledStatement":
        case "Program":
        case "SwitchCase":
        case "SwitchStatement":
        case "TryStatement":
        case "WithStatement":
        case "WhileStatement":
          var g = b.constructor,
            k = null;
          for (k in b)
            if (b[k] !== b.O) {
              var q = b[k];
              if (q && "object" === typeof q) {
                if (Array.isArray(q)) {
                  for (e = 0; e < q.length; e++) {
                    if (q[e] && q[e].constructor === g) {
                      var C = bb(a, q[e], d);
                      for (k in C) c[k] = C[k];
                    }
                  }
                } else if (q.constructor === g) {
                  for (k in ((C = bb(a, q, d)), C)) c[k] = C[k];
                }
              }
            }
      }
      b.lb = c;
    }
    let v408 = Pb(a, c[k], d);
    for (k in c)
      not(0) === c[k]
        ? a.g(d.object, k, void 0, Ha)
        : a.g(d.object, k, v408, Ha);
    return c;
  }
  function Ac(a) {
    let v132 = a.j[a.j.length - 1].isConstructor;
    return v132;
  }
  function gd(a, b) {
    let v133 = b[0] === Ja ? ed(a, b[1]) : a.N(b[0], b[1]);
    return v133;
  }
  function hd(a, b, d) {
    let v134 = b[0] === Ja ? fd(a, b[1], d) : a.g(b[0], b[1], d);
    return v134;
  }
  function H(a, b, d) {
    if (not(a.M)) {
      throw void 0 === d ? b : d;
    }
    let v409 = Jc(a, b, d);
    void 0 !== d && b instanceof D && ((b = a.ga(b)), v409);
    id(a, 4, b);
    throw Ia;
  }
  function id(a, b, d, c) {
    if (0 === b) {
      throw TypeError("Should not unwind for NORMAL completions");
    }
    var e = a.j;
    a: for (; 0 < e.length; e.pop()) {
      var g = e[e.length - 1];
      switch (g.node.type) {
        case "TryStatement":
          g.ha = {
            type: b,
            value: d,
            label: c,
          };
          return;
        case "CallExpression":
        case "NewExpression":
          if (3 === b) {
            g.value = d;
            return;
          }
          if (1 === b || 2 === b) {
            throw Error("Unsyntactic break/continue not rejected by Acorn");
          }
          break;
        case "Program":
          if (3 === b) {
            return;
          }
          g.done = not(0);
          break a;
      }
      if (1 === b) {
        if (c ? g.labels && -1 !== g.labels.indexOf(c) : g.ca || g.Xb) {
          e.pop();
          return;
        }
      } else if (
        2 === b &&
        (c ? g.labels && -1 !== g.labels.indexOf(c) : g.ca)
      ) {
        return;
      }
    }
    let v410 = a.N(d, "name");
    let v411 = a.N(d, "stack");
    P(a, d, a.A)
      ? ((b = {
          EvalError: EvalError,
          RangeError: RangeError,
          ReferenceError: ReferenceError,
          SyntaxError: SyntaxError,
          TypeError: TypeError,
          URIError: URIError,
        }),
        (c = String(v410)),
        (e = a.N(d, "message").valueOf()),
        (b = (b[c] || Error)(e)),
        (b.stack = String(v411)))
      : (b = String(d));
    a.value = b;
    throw b;
  }
  function Q(a, b) {
    let v135 = "[...]";
    let v136 = Q(a, b.left) + " " + b.operator + " " + Q(a, b.right);
    let v137 = Q(a, b.callee) + "(...)";
    let v138 = Q(a, b.test) + " ? " + Q(a, b.fa) + " : " + Q(a, b.alternate);
    let v139 = b.name;
    let v140 = b.raw;
    let v141 = b.fb ? d + "[" + a + "]" : d + "." + a;
    let v142 = "new " + Q(a, b.callee) + "(...)";
    let v143 = "{...}";
    let v144 = "this";
    let v145 = b.operator + " " + Q(a, b.J);
    let v146 = ((d = Q(a, b.J)), b.prefix ? b.operator + d : d + b.operator);
    switch (b.type) {
      case "ArrayExpression":
        return v135;
      case "BinaryExpression":
      case "LogicalExpression":
        return v136;
      case "CallExpression":
        return v137;
      case "ConditionalExpression":
        return v138;
      case "Identifier":
        return v139;
      case "Literal":
        return v140;
      case "MemberExpression":
        var d = Q(a, b.object);
        a = Q(a, b.Ya);
        return v141;
      case "NewExpression":
        return v142;
      case "ObjectExpression":
        return v143;
      case "ThisExpression":
        return v144;
      case "UnaryExpression":
        return v145;
      case "UpdateExpression":
        return v146;
    }
    let v147 = "???";
    return v147;
  }
  function Nb(a, b, d) {
    var c = a.j[a.j.length - 1],
      e = Array.from(d),
      g = e.shift();
    let v412 = Number(e.shift() || 0);
    d = Math.max(v412, 0);
    var k = a.Da();
    if (g instanceof D && "Function" === g.H) {
      var q = g;
      k.type = "CallExpression";
      c = c.scope;
    } else {
      try {
        let v413 = String(g);
        var C = da(v413, "taskCode" + a.hc++);
      } catch (R) {
        H(a, a.Y, "Invalid code: " + R.message);
      }
      k.type = "EvalProgram_";
      k.body = C.body;
      c = c.node.arguments[0];
      ta(k, c ? c.start : void 0, c ? c.end : void 0);
      c = a.M;
      e.length = 0;
    }
    b = new jd(q, e, c, k, b ? d : -1);
    Ab(a, b, d);
    let v148 = b.u;
    return v148;
  }
  function Ab(a, b, d) {
    b.time = Date.now() + d;
    a.$.push(b);
    function lambda79(c, e) {
      let v149 = c.time - e.time;
      return v149;
    }
    a.$.sort(lambda79);
  }
  function Ob(a, b) {
    for (var d = 0; d < a.$.length; d++)
      if (a.$[d].u == b) {
        a.$.splice(d, 1);
        break;
      }
  }
  function kd(a, b, d) {
    if (not(a.R)) {
      throw Error("Unexpected call to createGetter");
    }
    a.R = not(1);
    d = Array.isArray(d) ? d[0] : d;
    var c = a.Da();
    c.type = "CallExpression";
    a = new u(c, a.j[a.j.length - 1].scope);
    a.ma = 2;
    a.C = d;
    a.aa = b;
    a.Ta = not(0);
    a.G = [];
    return a;
  }
  function ld(a, b, d, c) {
    if (not(a.Ma)) {
      throw Error("Unexpected call to createSetter");
    }
    a.Ma = not(1);
    d = Array.isArray(d) ? d[0] : a.Qa;
    var e = a.Da();
    e.type = "CallExpression";
    a = new u(e, a.j[a.j.length - 1].scope);
    a.ma = 2;
    a.C = d;
    a.aa = b;
    a.Ta = not(0);
    a.G = [c];
    return a;
  }
  function md(a, b) {
    let v414 = Bc(a, b);
    let v150 =
      void 0 === b || null === b
        ? a.Qa
        : b instanceof D
          ? b
          : ((a = a.s(v414)), (a.data = b), a);
    return v150;
  }
  p.Ub = function lambda80() {
    let v151 = this.M;
    return v151;
  };
  p.cc = function lambda81(a) {
    this.M = a;
    this.j[0].scope = a;
  };
  p.Vb = function lambda82() {
    let v152 = this.j;
    return v152;
  };
  p.dc = function lambda83(a) {
    this.j = a;
  };
  function u(a, b) {
    this.node = a;
    this.scope = b;
  }
  function cd(a, b, d) {
    this.Xa = a;
    this.U = b;
    this.object = d;
  }
  function D(a) {
    this.ba = Object.create(null);
    this.ea = Object.create(null);
    this.h = Object.create(null);
    this.Ca = a;
  }
  p = D.prototype;
  p.Ca = null;
  p.H = "Object";
  p.data = null;
  p.toString = function lambda84() {
    if (not(Oa)) {
      let v153 = "[object Interpreter.Object]";
      return v153;
    }
    if (not(this instanceof D)) {
      let v154 = String(this);
      return v154;
    }
    if ("Array" === this.H) {
      var a = Ma;
      a.push(this);
      try {
        var b = [],
          d = this.h.length,
          c = not(1);
        1024 < d && ((d = 1e3), (c = not(0)));
        for (var e = 0; e < d; e++) {
          var g = this.h[e];
          b[e] = g instanceof D && -1 !== a.indexOf(g) ? "..." : g;
        }
        c && b.push("...");
      } finally {
        a.pop();
      }
      let v155 = b.join(",");
      return v155;
    }
    if ("Error" === this.H) {
      let a = Ma;
      if (-1 !== a.indexOf(this)) {
        let v156 = "[object Error]";
        return v156;
      }
      let d = this;
      do
        if ("name" in d.h) {
          let b = d.h.name;
          break;
        }
      while ((d = d.Ca));
      d = this;
      do
        if ("message" in d.h) {
          let c = d.h.message;
          break;
        }
      while ((d = d.Ca));
      a.push(this);
      try {
        ((b = b && String(b)), (c = c && String(c)));
      } finally {
        a.pop();
      }
      let v157 = c ? b + ": " + c : String(b);
      return v157;
    }
    let v158 =
      null !== this.data ? String(this.data) : "[object " + this.H + "]";
    return v158;
  };
  p.valueOf = function lambda85() {
    let v159 =
      not(Oa) ||
      void 0 === this.data ||
      null === this.data ||
      this.data instanceof RegExp
        ? this
        : this.data instanceof Date
          ? this.data.valueOf()
          : this.data;
    return v159;
  };
  function jd(a, b, d, c, e) {
    this.o = a;
    this.A = b;
    this.scope = d;
    this.node = c;
    this.j = e;
    this.u = ++nd;
    this.time = 0;
  }
  var nd = 0;
  t.prototype.stepArrayExpression = function lambda86(a, b, d) {
    d = d.elements;
    var c = b.B || 0;
    let v415 = this.g(b.Ra, c, b.value);
    b.Ra ? (v415, c++) : ((b.Ra = Cc(this)), (b.Ra.h.length = d.length));
    for (; c < d.length; ) {
      if (d[c]) {
        let v160 = ((b.B = c), new u(d[c], b.scope));
        return v160;
      }
      c++;
    }
    a.pop();
    a[a.length - 1].value = b.Ra;
  };
  t.prototype.stepAssignmentExpression = function lambda87(a, b, d) {
    if (not(b.na)) {
      let v161 =
        ((b.na = not(0)), (b = new u(d.left, b.scope)), (b.xa = not(0)), b);
      return v161;
    }
    if (not(b.Ga)) {
      b.Ia || (b.Ia = b.value);
      b.Ea && (b.qa = b.value);
      if (
        not(b.Ea) &&
        "=" !== d.operator &&
        ((a = gd(this, b.Ia)), (b.qa = a), this.R)
      ) {
        let v416 = kd(this, a, b.Ia);
        let v162 = ((b.Ea = not(0)), v416);
        return v162;
      }
      b.Ga = not(0);
      "=" === d.operator &&
        "Identifier" === d.left.type &&
        (b.Sa = d.left.name);
      let v163 = new u(d.right, b.scope);
      return v163;
    }
    if (b.ya) {
      let v417 = a.pop();
      (v417, (a[a.length - 1].value = b.kb));
    } else {
      var c = b.qa,
        e = b.value;
      switch (d.operator) {
        case "=":
          c = e;
          break;
        case "+=":
          c += e;
          break;
        case "-=":
          c -= e;
          break;
        case "*=":
          c *= e;
          break;
        case "/=":
          c /= e;
          break;
        case "%=":
          c %= e;
          break;
        case "<<=":
          c <<= e;
          break;
        case ">>=":
          c >>= e;
          break;
        case ">>>=":
          c >>>= e;
          break;
        case "&=":
          c &= e;
          break;
        case "^=":
          c ^= e;
          break;
        case "|=":
          c |= e;
          break;
        default:
          throw SyntaxError("Unknown assignment expression: " + d.operator);
      }
      if ((d = hd(this, b.Ia, c))) {
        let v418 = ld(this, d, b.Ia, c);
        let v164 = ((b.ya = not(0)), (b.kb = c), v418);
        return v164;
      }
      a.pop();
      a[a.length - 1].value = c;
    }
  };
  t.prototype.stepBinaryExpression = function lambda88(a, b, d) {
    if (not(b.na)) {
      let v165 = ((b.na = not(0)), new u(d.left, b.scope));
      return v165;
    }
    if (not(b.Ga)) {
      let v166 = ((b.Ga = not(0)), (b.qa = b.value), new u(d.right, b.scope));
      return v166;
    }
    a.pop();
    var c = b.qa;
    b = b.value;
    switch (d.operator) {
      case "==":
        d = c == b;
        break;
      case "!=":
        d = c != b;
        break;
      case "===":
        d = c === b;
        break;
      case "!==":
        d = c !== b;
        break;
      case ">":
        d = c > b;
        break;
      case ">=":
        d = c >= b;
        break;
      case "<":
        d = c < b;
        break;
      case "<=":
        d = c <= b;
        break;
      case "+":
        d = c + b;
        break;
      case "-":
        d = c - b;
        break;
      case "*":
        d = c * b;
        break;
      case "/":
        d = c / b;
        break;
      case "%":
        d = c % b;
        break;
      case "&":
        d = c & b;
        break;
      case "|":
        d = c | b;
        break;
      case "^":
        d = c ^ b;
        break;
      case "<<":
        d = c << b;
        break;
      case ">>":
        d = c >> b;
        break;
      case ">>>":
        d = c >>> b;
        break;
      case "in":
        b instanceof D ||
          H(this, this.o, "'in' expects an object, not '" + b + "'");
        d = ad(this, b, c);
        break;
      case "instanceof":
        P(this, b, this.P) ||
          H(this, this.o, "'instanceof' expects an object, not '" + b + "'");
        d = c instanceof D ? P(this, c, b) : not(1);
        break;
      default:
        throw SyntaxError("Unknown binary operator: " + d.operator);
    }
    a[a.length - 1].value = d;
  };
  t.prototype.stepBlockStatement = function lambda89(a, b, d) {
    var c = b.B || 0;
    if ((d = d.body[c])) {
      let v167 = ((b.B = c + 1), new u(d, b.scope));
      return v167;
    }
    a.pop();
  };
  t.prototype.stepBreakStatement = function lambda90(a, b, d) {
    id(this, 1, void 0, d.label && d.label.name);
  };
  t.prototype.Fb = 0;
  t.prototype.stepCallExpression = function lambda92(a, b, d) {
    if (not(b.ma)) {
      b.ma = 1;
      var c = new u(d.callee, b.scope);
      c.xa = not(0);
      return c;
    }
    if (1 === b.ma) {
      b.ma = 2;
      var e = b.value;
      if (Array.isArray(e)) {
        if (
          ((b.aa = gd(this, e)),
          e[0] === Ja ? (b.Mb = "eval" === e[1]) : (b.C = e[0]),
          (e = b.aa),
          this.R)
        ) {
          let v419 = kd(this, e, b.value);
          let v168 = ((b.ma = 1), v419);
          return v168;
        }
      } else b.aa = e;
      b.G = [];
      b.B = 0;
    }
    let e = b.aa;
    if (not(b.Ta)) {
      0 !== b.B && b.G.push(b.value);
      if (d.arguments[b.B]) {
        let v169 = new u(d.arguments[b.B++], b.scope);
        return v169;
      }
      if ("NewExpression" === d.type) {
        (e instanceof D && not(e.zb)) ||
          H(this, this.o, Q(this, d.callee) + " is not a constructor");
        if (e === this.ua) {
          b.C = Cc(this);
        } else {
          var g = e.h.prototype;
          if ("object" !== typeof g || null === g) {
            g = this.L;
          }
          b.C = this.s(g);
        }
        b.isConstructor = not(0);
      }
      b.Ta = not(0);
    }
    if (b.hb) {
      let v420 = a.pop();
      (v420,
        (a[a.length - 1].value =
          b.isConstructor && "object" !== typeof b.value ? b.C : b.value));
    } else {
      b.hb = not(0);
      e instanceof D ||
        H(this, this.o, Q(this, d.callee) + " is not a function");
      if ((a = e.node)) {
        d = ja(this, a.body, e.Xa);
        let c = Cc(this);
        for (e = 0; e < b.G.length; e++) this.g(c, e, b.G[e]);
        this.g(d.object, "arguments", c);
        for (e = 0; e < a.sa.length; e++)
          this.g(d.object, a.sa[e].name, b.G.length > e ? b.G[e] : void 0);
        d.U || (b.C = md(this, b.C));
        this.g(d.object, "this", b.C, wa);
        b.value = void 0;
        let v170 = new u(a.body, d);
        return v170;
      }
      if (e.eval) {
        if (((e = b.G[0]), "string" !== typeof e)) {
          b.value = e;
        } else {
          try {
            let v421 = String(e);
            let c = da(v421, "eval" + this.Fb++);
          } catch (q) {
            H(this, this.Y, "Invalid code: " + q.message);
          }
          e = this.Da();
          e.type = "EvalProgram_";
          e.body = c.body;
          ta(e, d.start, d.end);
          d = b.Mb ? b.scope : this.M;
          d.U ? (d = ja(this, c, d)) : bb(this, c, d);
          this.value = void 0;
          let v171 = new u(e, d);
          return v171;
        }
      } else if (e.Va) {
        (b.scope.U || (b.C = md(this, b.C)), (b.value = e.Va.apply(b.C, b.G)));
      } else if (e.bb) {
        var k = this;
        let c = e.bb.length - 1;
        let v422 = Array(c);
        c = b.G.concat(v422).slice(0, c);
        function lambda91(q) {
          b.value = q;
          k.wa = not(1);
        }
        c.push(lambda91);
        this.wa = not(0);
        b.scope.U || (b.C = md(this, b.C));
        e.bb.apply(b.C, c);
      } else H(this, this.o, Q(this, d.callee) + " is not callable");
    }
  };
  t.prototype.stepConditionalExpression = function lambda93(a, b, d) {
    var c = b.ra || 0;
    if (0 === c) {
      let v172 = ((b.ra = 1), new u(d.test, b.scope));
      return v172;
    }
    if (1 === c) {
      b.ra = 2;
      let a16 = not(b.value);
      if ((c = not(a16)) && d.fa) {
        let v173 = new u(d.fa, b.scope);
        return v173;
      }
      if (not(c) && d.alternate) {
        let v174 = new u(d.alternate, b.scope);
        return v174;
      }
      this.value = void 0;
    }
    a.pop();
    "ConditionalExpression" === d.type && (a[a.length - 1].value = b.value);
  };
  t.prototype.stepContinueStatement = function lambda94(a, b, d) {
    id(this, 2, void 0, d.label && d.label.name);
  };
  t.prototype.stepDebuggerStatement = function lambda95(a) {
    a.pop();
  };
  t.prototype.stepDoWhileStatement = function lambda96(a, b, d) {
    "DoWhileStatement" === d.type &&
      void 0 === b.ka &&
      ((b.value = not(0)), (b.ka = not(0)));
    if (not(b.ka)) {
      let v175 = ((b.ka = not(0)), new u(d.test, b.scope));
      return v175;
    }
    if (not(b.value)) {
      a.pop();
    } else if (d.body) {
      let v176 = ((b.ka = not(1)), (b.ca = not(0)), new u(d.body, b.scope));
      return v176;
    }
  };
  t.prototype.stepEmptyStatement = function lambda97(a) {
    a.pop();
  };
  t.prototype.stepEvalProgram_ = function lambda98(a, b, d) {
    var c = b.B || 0;
    if ((d = d.body[c])) {
      let v177 = ((b.B = c + 1), new u(d, b.scope));
      return v177;
    }
    a.pop();
    a[a.length - 1].value = this.value;
  };
  t.prototype.stepExpressionStatement = function lambda99(a, b, d) {
    if (not(b.oa)) {
      let v178 = ((this.value = void 0), (b.oa = not(0)), new u(d.pa, b.scope));
      return v178;
    }
    a.pop();
    this.value = b.value;
  };
  t.prototype.stepForInStatement = function lambda100(a, b, d) {
    if (not(b.Rb) && ((b.Rb = not(0)), d.left.ia && d.left.ia[0].za)) {
      let v179 =
        (b.scope.U &&
          H(
            this,
            this.Y,
            "for-in loop variable declaration may not have an initializer",
          ),
        new u(d.left, b.scope));
      return v179;
    }
    if (not(b.Fa)) {
      let v180 =
        ((b.Fa = not(0)), b.ta || (b.ta = b.value), new u(d.right, b.scope));
      return v180;
    }
    b.ca || ((b.ca = not(0)), (b.v = b.value), (b.mb = Object.create(null)));
    if (void 0 === b.Ua) {
      a: for (;;) {
        if (b.v instanceof D) {
          for (b.Ba || (b.Ba = Object.getOwnPropertyNames(b.v.h)); ; ) {
            var c = b.Ba.shift();
            if (void 0 === c) {
              break;
            }
            let v423 = Object.prototype.propertyIsEnumerable.call(b.v.h, c);
            if (
              Object.prototype.hasOwnProperty.call(b.v.h, c) &&
              not(b.mb[c]) &&
              ((b.mb[c] = not(0)), v423)
            ) {
              b.Ua = c;
              break a;
            }
          }
        } else if (null !== b.v && void 0 !== b.v) {
          for (b.Ba || (b.Ba = Object.getOwnPropertyNames(b.v)); ; ) {
            let c = b.Ba.shift();
            if (void 0 === c) {
              break;
            }
            b.mb[c] = not(0);
            if (Object.prototype.propertyIsEnumerable.call(b.v, c)) {
              b.Ua = c;
              break a;
            }
          }
        }
        b.v = Bc(this, b.v);
        b.Ba = null;
        if (null === b.v) {
          a.pop();
          return;
        }
      }
    }
    if (not(b.wb)) {
      let v181 = ((b.ta = null), (b = new u(a, b.scope)), (b.xa = not(0)), b);
      if (((b.wb = not(0)), (a = d.left), "VariableDeclaration" === a.type)) {
        b.ta = [Ja, a.ia[0].id.name];
      } else return v181;
    }
    b.ta || (b.ta = b.value);
    if (not(b.ya) && ((b.ya = not(0)), (a = b.Ua), (c = hd(this, b.ta, a)))) {
      let v182 = ld(this, c, b.ta, a);
      return v182;
    }
    b.Ua = void 0;
    b.wb = not(1);
    b.ya = not(1);
    if (d.body) {
      let v183 = new u(d.body, b.scope);
      return v183;
    }
  };
  t.prototype.stepForStatement = function lambda101(a, b, d) {
    let v186 = ((b.ca = not(0)), new u(d.body, b.scope));
    switch (b.ra) {
      default:
        b.ra = 1;
        if (d.za) {
          let v184 = new u(d.za, b.scope);
          return v184;
        }
        break;
      case 1:
        b.ra = 2;
        if (d.test) {
          let v185 = new u(d.test, b.scope);
          return v185;
        }
        break;
      case 2:
        b.ra = 3;
        if (d.test && not(b.value)) {
          a.pop();
        } else return v186;
        break;
      case 3:
        if (((b.ra = 1), d.update)) {
          let v187 = new u(d.update, b.scope);
          return v187;
        }
    }
  };
  t.prototype.stepFunctionDeclaration = function lambda102(a) {
    a.pop();
  };
  t.prototype.stepFunctionExpression = function lambda103(a, b, d) {
    a.pop();
    b = a[a.length - 1];
    a = b.scope;
    d.id && (a = dd(this, a));
    b.value = Pb(this, d, a, b.Sa);
    d.id && this.g(a.object, d.id.name, b.value, wa);
  };
  t.prototype.stepIdentifier = function lambda104(a, b, d) {
    a.pop();
    if (b.xa) {
      a[a.length - 1].value = [Ja, d.name];
    } else {
      b = ed(this, d.name);
      if (this.R) {
        let v188 = kd(this, b, this.Qa);
        return v188;
      }
      a[a.length - 1].value = b;
    }
  };
  t.prototype.stepIfStatement = t.prototype.stepConditionalExpression;
  t.prototype.stepLabeledStatement = function lambda105(a, b, d) {
    a.pop();
    a = b.labels || [];
    a.push(d.label.name);
    b = new u(d.body, b.scope);
    b.labels = a;
    return b;
  };
  t.prototype.stepLiteral = function lambda106(a, b, d) {
    a.pop();
    b = d.value;
    let v424 = Ic(this, d, b);
    b instanceof RegExp && ((d = this.s(this.Pa)), v424, (b = d));
    a[a.length - 1].value = b;
  };
  t.prototype.stepLogicalExpression = function lambda107(a, b, d) {
    if ("&&" !== d.operator && "||" !== d.operator) {
      throw SyntaxError("Unknown logical operator: " + d.operator);
    }
    if (not(b.na)) {
      let v189 = ((b.na = not(0)), new u(d.left, b.scope));
      return v189;
    }
    if (
      b.Ga ||
      ("&&" === d.operator && not(b.value)) ||
      ("||" === d.operator && b.value)
    ) {
      let v425 = a.pop();
      (v425, (a[a.length - 1].value = b.value));
    }
  };
  t.prototype.stepMemberExpression = function lambda108(a, b, d) {
    if (not(b.Fa)) {
      let v190 = ((b.Fa = not(0)), new u(d.object, b.scope));
      return v190;
    }
    if (d.fb) {
      let v191 = ((b.v = b.value), (b.Sb = not(0)), new u(d.Ya, b.scope));
      if (b.Sb) {
        d = b.value;
      } else return v191;
    } else ((b.v = b.value), (d = d.Ya.name));
    a.pop();
    if (b.xa) {
      a[a.length - 1].value = [b.v, d];
    } else {
      d = this.N(b.v, d);
      if (this.R) {
        let v192 = kd(this, d, b.v);
        return v192;
      }
      a[a.length - 1].value = d;
    }
  };
  t.prototype.stepNewExpression = t.prototype.stepCallExpression;
  t.prototype.stepObjectExpression = function lambda109(a, b, d) {
    var c = b.B || 0,
      e = d.h[c];
    if (b.v) {
      var g = b.Sa;
      b.La[g] || (b.La[g] = {});
      b.La[g][e.kind] = b.value;
      b.B = ++c;
      e = d.h[c];
    } else ((b.v = this.s(this.L)), (b.La = Object.create(null)));
    if (e) {
      var k = e.key;
      if ("Identifier" === k.type) {
        let g = k.name;
      } else if ("Literal" === k.type) {
        let g = k.value;
      } else throw SyntaxError("Unknown object structure: " + k.type);
      b.Sa = g;
      let v193 = new u(e.value, b.scope);
      return v193;
    }
    for (k in b.La)
      ((d = b.La[k]),
        "get" in d || "set" in d
          ? this.g(b.v, k, Ka, {
              configurable: not(0),
              enumerable: not(0),
              get: d.get,
              set: d.set,
            })
          : this.g(b.v, k, d.init));
    a.pop();
    a[a.length - 1].value = b.v;
  };
  t.prototype.stepProgram = function lambda110(a, b, d) {
    if ((a = d.body.shift())) {
      let v194 = ((b.done = not(1)), new u(a, b.scope));
      return v194;
    }
    b.done = not(0);
  };
  t.prototype.stepReturnStatement = function lambda111(a, b, d) {
    if (d.J && not(b.oa)) {
      let v195 = ((b.oa = not(0)), new u(d.J, b.scope));
      return v195;
    }
    id(this, 3, b.value);
  };
  t.prototype.stepSequenceExpression = function lambda112(a, b, d) {
    var c = b.B || 0;
    if ((d = d.xb[c])) {
      let v196 = ((b.B = c + 1), new u(d, b.scope));
      return v196;
    }
    a.pop();
    a[a.length - 1].value = b.value;
  };
  t.prototype.stepSwitchStatement = function lambda113(a, b, d) {
    if (not(b.ka)) {
      let v197 = ((b.ka = 1), new u(d.Nb, b.scope));
      return v197;
    }
    1 === b.ka && ((b.ka = 2), (b.fc = b.value), (b.gb = -1));
    for (;;) {
      var c = b.jb || 0,
        e = d.tb[c];
      if (b.Ka || not(e) || e.test) {
        if (e || b.Ka || -1 === b.gb) {
          if (e) {
            if (not(b.Ka) && not(b.Db) && e.test) {
              let v198 = ((b.Db = not(0)), new u(e.test, b.scope));
              return v198;
            }
            if (b.Ka || b.value === b.fc) {
              b.Ka = not(0);
              var g = b.B || 0;
              if (e.fa[g]) {
                let v199 =
                  ((b.Xb = not(0)), (b.B = g + 1), new u(e.fa[g], b.scope));
                return v199;
              }
            }
            b.Db = not(1);
            b.B = 0;
            b.jb = c + 1;
          } else {
            a.pop();
            break;
          }
        } else ((b.Ka = not(0)), (b.jb = b.gb));
      } else ((b.gb = c), (b.jb = c + 1));
    }
  };
  t.prototype.stepThisExpression = function lambda114(a) {
    a.pop();
    a[a.length - 1].value = ed(this, "this");
  };
  t.prototype.stepThrowStatement = function lambda115(a, b, d) {
    let v200 = ((b.oa = not(0)), new u(d.J, b.scope));
    if (b.oa) {
      H(this, b.value);
    } else return v200;
  };
  t.prototype.stepTryStatement = function lambda116(a, b, d) {
    if (not(b.Ob)) {
      let v201 = ((b.Ob = not(0)), new u(d.block, b.scope));
      return v201;
    }
    if (b.ha && 4 === b.ha.type && not(b.Qb) && d.Ha) {
      let v426 = this.g(a.object, d.Ha.Wa.name, b.ha.value);
      let v202 =
        ((b.Qb = not(0)),
        (a = dd(this, b.scope)),
        v426,
        (b.ha = void 0),
        new u(d.Ha.body, a));
      return v202;
    }
    if (not(b.Pb) && d.ib) {
      let v203 = ((b.Pb = not(0)), new u(d.ib, b.scope));
      return v203;
    }
    a.pop();
    b.ha && id(this, b.ha.type, b.ha.value, b.ha.label);
  };
  t.prototype.stepUnaryExpression = function lambda117(a, b, d) {
    if (not(b.oa)) {
      let v204 =
        ((b.oa = not(0)),
        (a = new u(d.J, b.scope)),
        (a.xa = "delete" === d.operator),
        a);
      return v204;
    }
    a.pop();
    var c = b.value;
    switch (d.operator) {
      case "-":
        c = -c;
        break;
      case "+":
        c = +c;
        break;
      case "!":
        c = not(c);
        break;
      case "~":
        c = ~c;
        break;
      case "delete":
        d = not(0);
        if (Array.isArray(c)) {
          var e = c[0];
          e === Ja && (e = b.scope);
          c = String(c[1]);
          try {
            delete e.h[c];
          } catch (g) {
            b.scope.U
              ? H(
                  this,
                  this.o,
                  "Cannot delete property '" + c + "' of '" + e + "'",
                )
              : (d = not(1));
          }
        }
        c = d;
        break;
      case "typeof":
        c = c && "Function" === c.H ? "function" : typeof c;
        break;
      case "void":
        c = void 0;
        break;
      default:
        throw SyntaxError("Unknown unary operator: " + d.operator);
    }
    a[a.length - 1].value = c;
  };
  t.prototype.stepUpdateExpression = function lambda118(a, b, d) {
    if (not(b.na)) {
      let v205 =
        ((b.na = not(0)), (a = new u(d.J, b.scope)), (a.xa = not(0)), a);
      return v205;
    }
    b.Ja || (b.Ja = b.value);
    b.Ea && (b.qa = b.value);
    if (not(b.Ea)) {
      var c = gd(this, b.Ja);
      b.qa = c;
      if (this.R) {
        let v427 = kd(this, c, b.Ja);
        let v206 = ((b.Ea = not(0)), v427);
        return v206;
      }
    }
    if (b.ya) {
      let v428 = a.pop();
      (v428, (a[a.length - 1].value = b.kb));
    } else {
      let c = Number(b.qa);
      if ("++" === d.operator) {
        var e = c + 1;
      } else if ("--" === d.operator) {
        let e = c - 1;
      } else throw SyntaxError("Unknown update expression: " + d.operator);
      d = d.prefix ? e : c;
      if ((c = hd(this, b.Ja, e))) {
        let v429 = ld(this, c, b.Ja, e);
        let v207 = ((b.ya = not(0)), (b.kb = d), v429);
        return v207;
      }
      a.pop();
      a[a.length - 1].value = d;
    }
  };
  t.prototype.stepVariableDeclaration = function lambda119(a, b, d) {
    d = d.ia;
    var c = b.B || 0,
      e = d[c];
    let v430 = fd(this, e.id.name, b.value);
    b.Ab && e && (v430, (b.Ab = not(1)), (e = d[++c]));
    for (; e; ) {
      if (e.za) {
        let v208 =
          ((b.B = c),
          (b.Ab = not(0)),
          (b.Sa = e.id.name),
          new u(e.za, b.scope));
        return v208;
      }
      e = d[++c];
    }
    a.pop();
  };
  t.prototype.stepWithStatement = function lambda120(a, b, d) {
    if (not(b.Fa)) {
      let v209 = ((b.Fa = not(0)), new u(d.object, b.scope));
      return v209;
    }
    a.pop();
    a = dd(this, b.scope, b.value);
    let v210 = new u(d.body, a);
    return v210;
  };
  t.prototype.stepWhileStatement = t.prototype.stepDoWhileStatement;
  Pa.Interpreter = t;
  t.prototype.step = t.prototype.nb;
  t.prototype.run = t.prototype.Cb;
  t.prototype.getStatus = t.prototype.Wb;
  t.prototype.appendCode = t.prototype.Hb;
  t.prototype.createObject = t.prototype.ga;
  t.prototype.createObjectProto = t.prototype.s;
  t.prototype.createNativeFunction = t.prototype.i;
  t.prototype.createAsyncFunction = t.prototype.ub;
  t.prototype.getProperty = t.prototype.N;
  t.prototype.setProperty = t.prototype.g;
  t.prototype.nativeToPseudo = t.prototype.S;
  t.prototype.pseudoToNative = t.prototype.T;
  t.prototype.getGlobalScope = t.prototype.Ub;
  t.prototype.setGlobalScope = t.prototype.cc;
  t.prototype.getStateStack = t.prototype.Vb;
  t.prototype.setStateStack = t.prototype.dc;
  t.Status = ua;
  t.VALUE_IN_DESCRIPTOR = Ka;
}
