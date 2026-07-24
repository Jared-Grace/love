import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { folder_src } from "./folder_src.mjs";
import { path_join } from "./path_join.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_pair_canonical } from "./js_pair_canonical.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes } from "./list_includes.mjs";
export async function functions_call_pairs_frequent() {
  "Auto-DRY recommender: scan every js fn, count how often each ORDERED pair of consecutive";
  "call-declarations recurs across files (alpha-renamed via js_pair_canonical), and return the top";
  "WIRED pairs — where the second statement consumes the first's output — ranked by how many files hold";
  "them. A wired pair recurring across many files is a candidate to extract into one named fn. The";
  "complement of the fold: the fold reuses fns that EXIST, this proposes fns that SHOULD.";
  arguments_assert(arguments, 0);
  let directory = folder_src();
  let files = await folder_read_files(directory);
  let module_fs = await import("fs");
  let tally = {};
  function file_scan(file) {
    let path = path_join([directory, file]);
    let text = module_fs.readFileSync(path, "utf8");
    let sigs = null;
    try {
      let ast = js_parse(text);
      let statements = js_flo_body(ast);
      sigs = list_map(statements, js_atomic_statement_signature);
    } catch (e) {
      return;
    }
    let last = sigs.length - 1;
    let i = 0;
    while (i < last) {
      let s1 = sigs[i];
      let s2 = sigs[i + 1];
      i = i + 1;
      let callee1 = property_get(s1, "callee");
      let callee2 = property_get(s2, "callee");
      let both_calls = callee1 && callee2;
      if (!both_calls) {
        continue;
      }
      let key = js_pair_canonical(s1, s2);
      let name1 = property_get(s1, "name");
      let args2 = property_get(s2, "args");
      let wired = list_includes(args2, name1);
      let seen = property_exists(tally, key);
      if (!seen) {
        let example =
          callee1 + "(" + property_get(s1, "args").join(", ") + ") -> " +
          callee2 + "(" + args2.join(", ") + ")";
        property_set(tally, key, { count: 0, files: {}, wired: wired, example: example });
      }
      let record = property_get(tally, key);
      record.count = record.count + 1;
      record.files[file] = true;
    }
  }
  list_map(files, file_scan);
  let rows = [];
  for (let key in tally) {
    let record = tally[key];
    if (!record.wired) {
      continue;
    }
    let file_count = Object.keys(record.files).length;
    rows.push({ files: file_count, count: record.count, pair: record.example });
  }
  rows.sort((a, b) => b.files - a.files);
  let top = rows.slice(0, 25);
  return top;
}
