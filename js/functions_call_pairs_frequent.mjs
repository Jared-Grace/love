import { fn_name } from "./fn_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  ("call-declarations recurs across files (alpha-renamed via ",
    fn_name("js_pair_canonical"),
    "), and return the top");
  ("WIRED pairs — where the second statement consumes the first's output — ranked by how many files hold");
  ("them. A wired pair recurring across many files is a candidate to extract into one named fn. The");
  ("complement of the fold: the fold reuses fns that EXIST, this proposes fns that SHOULD.");
  arguments_assert(arguments, 0);
  let entries = await js_files_texts();
  let tally = {};
  function file_scan(entry) {
    let file = property_get(entry, "file");
    let text = property_get(entry, "text");
    let sigs = null;
    try {
      let ast = js_parse(text);
      let statements = js_flo_body(ast);
      sigs = list_map(statements, js_atomic_statement_signature);
    } catch (e) {
      return;
    }
    let last = subtract(sigs.length, 1);
    let i = 0;
    while (less_than(i, last)) {
      let s = sigs[i];
      let s2 = sigs[i + 1];
      i = i + 1;
      let callee = property_get(s, "callee");
      let callee2 = property_get(s2, "callee");
      let both_calls = callee && callee2;
      if (not(both_calls)) {
        continue;
      }
      let key = js_pair_canonical(s, s2);
      let name = property_get(s, "name");
      let args = property_get(s2, "args");
      let wired = list_includes(args, name);
      let seen = property_exists(tally, key);
      if (not(seen)) {
        let example =
          callee +
          "(" +
          property_get(s, "args").join(", ") +
          ") -> " +
          callee2 +
          "(" +
          args.join(", ") +
          ")";
        property_set(tally, key, {
          count: 0,
          files: {},
          wired: wired,
          example: example,
          left: callee,
          right: callee2,
        });
      }
      let record = property_get(tally, key);
      record.count = record.count + 1;
      record.files[file] = true;
    }
  }
  list_map(entries, file_scan);
  let rows = [];
  for (let key in tally) {
    let record = tally[key];
    if (not(record.wired)) {
      continue;
    }
    let file_count = Object.keys(record.files).length;
    rows.push({
      files: file_count,
      count: record.count,
      pair: record.example,
      left: record.left,
      right: record.right,
    });
  }
  function lambda(a, b) {
    let difference = subtract(b.files, a.files);
    return difference;
  }
  rows.sort(lambda);
  let top = rows.slice(0, 25);
  for (let row of top) {
    let composed = function_name_pair_composed(row.left, row.right);
    row.composed = composed;
    let search = await function_exists(composed);
    row.exists = property_get(search, "exists");
  }
  return top;
}
