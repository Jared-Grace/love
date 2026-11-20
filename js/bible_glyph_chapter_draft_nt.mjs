import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { berean_book_chapters_verses } from "./berean_book_chapters_verses.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { math_min } from "./math_min.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { math_max } from "./math_max.mjs";
import { bible_glyph_reasons } from "./bible_glyph_reasons.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
export async function bible_glyph_chapter_draft_nt(chapter_code) {
  arguments_assert(arguments, 1);
  ("Drafts one New Testament picture-Bible chapter: the BSB text of each verse with every word the root table seats replaced by its mark, returned as text. It only reads, so it runs in the read-only sandbox, and the text is kept as scripts/temp/<CODE>draft.txt, which the module builder and the tally audit read.");
  ("The draft file holds, per verse, the BSB line and the drawn line with what English was supplied and what gloss had no BSB word; then a === marks by frequency line, which the tally audit checks the hand-finished chapter against; then the pieces without a reason; then === JSON, the verses the chapter file is built from.");
  ("Words are aligned to the BSB by longest common subsequence over the interlinear glosses. A negation whose gloss is empty takes the not that English writes elsewhere in the verse, so the English not is never drawn twice.");
  let book = chapter_code.slice(0, 3);
  let v2 = chapter_code.slice(3);
  let chapter_number = Number(v2);
  let inter = await bible_interlinear_chapter_words(chapter_code);
  let filed = await bible_glyph_chapter_rows_filed(chapter_code);
  let rows = filed.rows;
  let books = await berean_book_chapters_verses(book);
  function lambda(c) {
    let left = Number(c.chapter_number);
    let eq = equal(left, chapter_number);
    return eq;
  }
  let chapter = books.find(lambda);
  let bsb_by_verse = {};
  for (let v of chapter.verses) bsb_by_verse[Number(v.verse_number)] = v.text;
  let v3 =
    "to of in for with from by on at was were is are am had has have will shall be been being would should could may might do does did let not the a an".split(
      " ",
    );
  let small = new Set(v3);
  function norm(w) {
    let r = w.toLowerCase().replace(/[^a-z0-9]/g, "");
    return r;
  }
  let tally = {};
  let out = [];
  let report = [];
  for (let i = 0; less_than(i, rows.length); i++) {
    let row = rows[i];
    let vn = row.verse_number;
    let iw = inter[i].words;
    function lambda2(w, k) {
      let r2 = {
        ...w,
        sort: iw[k].gloss_sort,
      };
      return r2;
    }
    let words = row.words.map(lambda2);
    function lambda3(x, y) {
      let difference = subtract(x.sort, y.sort);
      return difference;
    }
    words.sort(lambda3);
    let G = [];
    function lambda5(w) {
      function lambda4(t) {
        let left2 = norm(t);
        let r3 = not_equal(left2, "") && not_equal(norm(t), "vvv");
        return r3;
      }
      let r4 =
        w.glyph &&
        w.glyph.startsWith("no_entry") &&
        equal((w.gloss || "").split(/\s+/).filter(lambda4).length, 0);
      return r4;
    }
    let neg_silent = words.filter(lambda5).length;
    for (let w of words) {
      let mark = w.glyph ? "$" + w.glyph : null;
      if (mark) {
        tally[mark] = (tally[mark] || 0) + 1;
      }
      let gloss = (w.gloss || "").trim();
      let toks =
        equal(gloss, "-") || equal(gloss, "") ? [] : gloss.split(/\s+/);
      function lambda6(t) {
        let left3 = norm(t);
        let r5 = not_equal(left3, "") && not_equal(norm(t), "vvv");
        return r5;
      }
      toks = toks.filter(lambda6);
      if (equal(toks.length, 0)) {
        if (mark) {
          G.push({
            n: null,
            mark,
            emit: mark,
            gloss,
          });
        }
        continue;
      }
      if (not(mark)) {
        for (let t of toks)
          G.push({
            n: norm(t),
            mark: null,
            emit: "TEXT",
          });
        continue;
      }
      let lead = 0;
      while (
        less_than(lead, subtract(toks.length, 1)) &&
        small.has(norm(toks[lead]))
      )
        lead++;
      for (let k = 0; less_than(k, toks.length); k++) {
        let b2 = subtract(toks.length, 1);
        if (
          less_than(k, lead) &&
          greater_than(neg_silent, 0) &&
          equal(norm(toks[k]), "not")
        ) {
          neg_silent--;
          G.push({
            n: "not",
            mark: null,
            emit: "",
          });
        } else if (less_than(k, lead)) {
          G.push({
            n: norm(toks[k]),
            mark: null,
            emit: "TEXT",
          });
        } else if (less_than(k, b2)) {
          G.push({
            n: norm(toks[k]),
            mark,
            emit: "",
          });
        } else
          G.push({
            n: norm(toks[k]),
            mark,
            emit: mark,
          });
      }
    }
    function lambda7(g) {
      let r6 = equal(g.n, null) && g.mark && g.mark.startsWith("$no_entry");
      return r6;
    }
    let negs = G.filter(lambda7);
    function lambda8(g) {
      let r7 = equal(g.n, "not") && equal(g.mark, null) && equal(g.emit, "");
      return r7;
    }
    let nots = G.filter(lambda8);
    for (let j = 0; less_than(j, math_min(negs.length, nots.length)); j++) {
      nots[j].emit = negs[j].mark;
      nots[j].mark = negs[j].mark;
      negs[j].emit = "";
    }
    let text = bsb_by_verse[vn] || "";
    function lambda9(t) {
      let neq = not_equal(t, "");
      return neq;
    }
    let B = text.split(/\s+/).filter(lambda9);
    let Bn = B.map(norm);
    let n = G.length;
    let m = B.length;
    function lambda11() {
      function lambda10() {
        let r8 = 0;
        return r8;
      }
      let r9 = Array.from(
        {
          length: m + 1,
        },
        lambda10,
      );
      return r9;
    }
    let L = Array.from(
      {
        length: n + 1,
      },
      lambda11,
    );
    for (let a = subtract(n, 1); greater_than_equal(a, 0); a--)
      for (let b = subtract(m, 1); greater_than_equal(b, 0); b--)
        L[a][b] =
          not_equal(G[a].n, null) && equal(G[a].n, Bn[b])
            ? L[a + 1][b + 1] + 1
            : math_max(L[a + 1][b], L[a][b + 1]);
    let pieces = [];
    let dropped = [];
    let supplied = [];
    let a = 0;
    let b = 0;
    function split_punct(tok) {
      let mm = tok.match(/^([^A-Za-z0-9]*)(.*?)([^A-Za-z0-9]*)$/);
      let r10 = [mm[1], mm[2], mm[3]];
      return r10;
    }
    function emit_b(bi, g) {
      let [pre, core, post] = split_punct(B[bi]);
      let body = equal(g, null) ? core : equal(g.emit, "TEXT") ? core : g.emit;
      pieces.push({
        pre,
        body,
        post,
      });
    }
    while (less_than(a, n) || less_than(b, m)) {
      if (
        less_than(a, n) &&
        less_than(b, m) &&
        not_equal(G[a].n, null) &&
        equal(G[a].n, Bn[b])
      ) {
        emit_b(b, G[a]);
        a++;
        b++;
      } else if (
        less_than(a, n) &&
        (greater_than_equal(b, m) ||
          greater_than_equal(L[a + 1][b], L[a][b + 1]))
      ) {
        let g = G[a];
        if (g.mark && g.emit) {
          pieces.push({
            pre: "",
            body: g.emit,
            post: "",
            unmatched: true,
          });
        } else if (not(g.mark && equal(g.emit, ""))) {
          dropped.push(g.n);
        }
        if (g.mark && not_equal(g.n, null) && g.emit) {
          dropped.push("(" + g.n + "->" + g.mark + ")");
        }
        a++;
      } else {
        emit_b(b, null);
        pieces[subtract(pieces.length, 1)].supplied = Bn[b];
        supplied.push(Bn[b]);
        b++;
      }
    }
    for (let p of pieces)
      if (p.unmatched && p.body.startsWith("$no_entry")) {
        function lambda12(q) {
          let r11 = equal(q.supplied, "not") || equal(q.supplied, "no");
          return r11;
        }
        let s = pieces.find(lambda12);
        if (s) {
          s.body = "";
          s.supplied = null;
          supplied.push("(dropped not)");
        }
      }
    let toks = [];
    let carry = "";
    for (let p of pieces) {
      if (equal(p.body, "")) {
        if (toks.length) {
          toks[subtract(toks.length, 1)] += p.post;
        }
        carry += p.pre;
        continue;
      }
      toks.push(carry + p.pre + p.body + p.post);
      carry = "";
    }
    function lambda14(t) {
      function lambda13(c) {
        let r12 = equal(c, "’") || equal(c, "‘") ? c : "";
        return r12;
      }
      let r13 = t.replace(/[“”‘’"]/g, lambda13);
      return r13;
    }
    toks = toks.map(lambda14);
    function lambda15(t) {
      let neq2 = not_equal(t, "");
      return neq2;
    }
    toks = toks.filter(lambda15);
    out.push({
      verse_number: vn,
      words: toks,
    });
    report.push(
      vn +
        " | " +
        text +
        "\n" +
        vn +
        " > " +
        toks.join(" ") +
        (supplied.length ? "\n   supplied: " + supplied.join(" ") : "") +
        (dropped.length ? "\n   gloss-not-in-bsb: " + dropped.join(" ") : ""),
    );
  }
  function lambda16(x, y) {
    let r14 = subtract(y[1], x[1]) || (less_than(x[0], y[0]) ? -1 : 1);
    return r14;
  }
  let freq = Object.entries(tally).sort(lambda16);
  function lambda17([k, v]) {
    let r15 = v + " " + k;
    return r15;
  }
  let freq_line = freq.map(lambda17).join(" ");
  let reasons = bible_glyph_reasons();
  let pieces_all = new Set();
  for (let k of object_property_names(tally))
    for (let p of k.slice(1).split("+")) pieces_all.add(p);
  function lambda18(p) {
    let n2 = not(p in reasons);
    return n2;
  }
  let unreasoned = [...pieces_all].filter(lambda18).join(" ");
  let v4 = report.join("\n");
  let json = json_to(out);
  let text_all = [
    v4,
    "=== marks by frequency",
    freq_line,
    "=== pieces without reason: " + unreasoned,
    "=== JSON",
    json,
  ].join("\n");
  return text_all;
}
