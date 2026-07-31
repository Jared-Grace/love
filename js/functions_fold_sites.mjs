import { fn_name } from "./fn_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_fn_fold_pattern } from "./js_fn_fold_pattern.mjs";
import { js_fold } from "./js_fold.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_fold_sites() {
  "Auto-DRY linter: report every site where a fn's body was hand-written inline instead of calling an";
  ("existing fn that already does it — i.e. every place `",
    fn_name("function_fold"),
    " <x> <f>` would apply. Reads all js");
  ("fns fresh (not the possibly-stale identifier index), keeps the foldable-shaped ones, and for each");
  ("tries ",
    fn_name("js_fold"),
    " against the files that call all its callees. Complement of the miner: this finds reuse");
  ("of fns that EXIST. Returns { x, f } pairs; a mutual x<->f pair means two duplicate DEFINITIONS.");
  arguments_assert(arguments, 0);
  let records = await js_files_texts();
  let entries = {};
  let callee_index = {};
  function file_load(record) {
    let text = property_get(record, "text");
    let name = null;
    let pattern = null;
    let callees = [];
    try {
      let ast = js_parse(text);
      name = js_flo_name(ast);
      let list = js_flo_body(ast);
      let sigs = list_map(list, js_atomic_statement_signature);
      pattern = js_fn_fold_pattern(ast);
      function lambda(s) {
        let r = s.callee;
        return r;
      }
      callees = sigs.map(lambda).filter(Boolean);
    } catch (e) {
      return;
    }
    entries[name] = {
      text: text,
      pattern: pattern,
    };
    for (let callee of callees) {
      if (not(callee_index[callee])) {
        callee_index[callee] = {};
      }
      callee_index[callee][name] = true;
    }
  }
  list_map(records, file_load);
  let sites = [];
  for (let x_name in entries) {
    let pattern = entries[x_name].pattern;
    if (not(pattern)) {
      continue;
    }
    function lambda2(s) {
      let r2 = s.callee;
      return r2;
    }
    let x_callees = property_get(pattern, "pattern_sigs").map(lambda2);
    function lambda3(c) {
      let r3 = callee_index[c] || {};
      return r3;
    }
    let candidate_sets = x_callees.map(lambda3);
    if (equal(candidate_sets.length, 0)) {
      continue;
    }
    function lambda5(name) {
      function lambda4(set) {
        let r4 = set[name];
        return r4;
      }
      let r5 = not_equal(name, x_name) && candidate_sets.every(lambda4);
      return r5;
    }
    let candidates = Object.keys(candidate_sets[0]).filter(lambda5);
    let x_ast = js_parse(entries[x_name].text);
    for (let f_name of candidates) {
      try {
        let f_ast = js_parse(entries[f_name].text);
        let folded = js_fold(x_ast, f_ast);
        if (not_equal(folded, null)) {
          sites.push({
            x: x_name,
            f: f_name,
          });
        }
      } catch (e) {
        continue;
      }
    }
  }
  return sites;
}
