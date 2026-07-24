import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { folder_src } from "./folder_src.mjs";
import { path_join } from "./path_join.mjs";
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
  "existing fn that already does it — i.e. every place `function_fold <x> <f>` would apply. Reads all js";
  "fns fresh (not the possibly-stale identifier index), keeps the foldable-shaped ones, and for each";
  "tries js_fold against the files that call all its callees. Complement of the miner: this finds reuse";
  "of fns that EXIST. Returns { x, f } pairs; a mutual x<->f pair means two duplicate DEFINITIONS.";
  arguments_assert(arguments, 0);
  let directory = folder_src();
  let files = await folder_read_files(directory);
  let module_fs = await import("fs");
  let entries = {};
  let callee_index = {};
  function file_load(file) {
    let text = module_fs.readFileSync(path_join([directory, file]), "utf8");
    let name = null;
    let pattern = null;
    let callees = [];
    try {
      let ast = js_parse(text);
      name = js_flo_name(ast);
      let sigs = list_map(js_flo_body(ast), js_atomic_statement_signature);
      pattern = js_fn_fold_pattern(ast);
      callees = sigs.map((s) => s.callee).filter(Boolean);
    } catch (e) {
      return;
    }
    entries[name] = { text: text, pattern: pattern };
    for (let callee of callees) {
      if (!callee_index[callee]) {
        callee_index[callee] = {};
      }
      callee_index[callee][name] = true;
    }
  }
  list_map(files, file_load);
  let sites = [];
  for (let x_name in entries) {
    let pattern = entries[x_name].pattern;
    if (!pattern) {
      continue;
    }
    let x_callees = property_get(pattern, "pattern_sigs").map((s) => s.callee);
    let candidate_sets = x_callees.map((c) => callee_index[c] || {});
    if (candidate_sets.length === 0) {
      continue;
    }
    let candidates = Object.keys(candidate_sets[0]).filter(function (name) {
      return name !== x_name && candidate_sets.every((set) => set[name]);
    });
    let x_ast = js_parse(entries[x_name].text);
    for (let f_name of candidates) {
      try {
        let folded = js_fold(x_ast, js_parse(entries[f_name].text));
        if (folded !== null) {
          sites.push({ x: x_name, f: f_name });
        }
      } catch (e) {
        continue;
      }
    }
  }
  return sites;
}
