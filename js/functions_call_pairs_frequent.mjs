import { fn_name } from "./fn_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_pair_canonical } from "./js_pair_canonical.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_name_pair_composed } from "./function_name_pair_composed.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { js_return_name } from "./js_return_name.mjs";
export async function functions_call_pairs_frequent() {
  "Auto-DRY recommender: scan every js fn, count how often each ORDERED pair of consecutive";
  ("call-declarations recurs across files (alpha-renamed via ",
    fn_name("js_pair_canonical"),
    "), and return the top");
  ("WIRED pairs — where the second statement consumes the first's output — ranked by how many files hold");
  ("them. A wired pair recurring across many files is a candidate to extract into one named fn. The");
  ("complement of the fold: the fold reuses fns that EXIST, this proposes fns that SHOULD.");
  ("Each row also carries the name the pair WOULD have here (",
    fn_name("function_name_pair_composed"),
    ") and whether a function already answers to it, because reading the report and");
  ("judging that by eye is how a function that already existed came within one command");
  ("of being written a second time: the word you reach for to describe a wrapper is");
  ("the one word its name is least likely to hold. An `exists: true` row is not noise");
  ("either - it says the atom is there and the sites were never folded onto it.");
  arguments_assert(arguments, 0);
  let entries = await js_files_texts();
  let tally = {};
  let file_keys = {};
  function file_scan(entry) {
    let file = property_get(entry, "file");
    let text = property_get(entry, "text");
    let body = null;
    let blocks = null;
    let return_name = null;
    try {
      let ast = js_parse(text);
      body = js_flo_body(ast);
      blocks = js_blocks_all(ast);
      return_name = js_return_name(ast);
    } catch (e) {
      return;
    }
    let body_sigs = list_map(body, js_atomic_statement_signature);
    let calls = 0;
    for (let sig of body_sigs) {
      if (property_get(sig, "callee")) {
        calls = calls + 1;
      }
    }
    let keys_here = [];
    property_set(file_keys, file, { keys: keys_here, calls: calls });
    function statements_scan(statements, body_is) {
      let sigs = list_map(statements, js_atomic_statement_signature);
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
        if (wired && body_is) {
          let name2 = property_get(s2, "name");
          let returned = equal(name2, return_name);
          keys_here.push({ key: key, returned: returned });
        }
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
    ("Every run of statements, not the one the function opens with. Two lines written");
    ("under an if or inside a lambda are the same two lines, and counting only the top");
    ("of each file made this agree with a fold that had the same blind spot - both");
    ("reported a tidy repo about the same unread half of it.");
    for (let block of blocks) {
      let statements = property_get(block, "body");
      let body_is = equal(statements, body);
      statements_scan(statements, body_is);
    }
  }
  list_map(entries, file_scan);
  ("A function whose whole body IS one of these pairs is the atom the pair is asking");
  ("for, already written under a name the composed one never guesses: the pair");
  ("list_size then equal-to-zero is called ", fn_name("list_empty_is"), " here.");
  ("Whole body means the file holds one wired pair, that pair's result is what the");
  ("function hands back, and there is no third worked-out value - which is what tells");
  ("an atom apart from a long function that happens to hold one wired pair in the");
  ("middle of it.");
  let atom_by_key = {};
  for (let file in file_keys) {
    let scanned = property_get(file_keys, file);
    let keys_here = property_get(scanned, "keys");
    let calls = property_get(scanned, "calls");
    let alone = equal(keys_here.length, 1);
    let bare = less_than(calls, 4);
    let atom_is = alone && bare;
    if (not(atom_is)) {
      continue;
    }
    let single = keys_here[0];
    if (not(property_get(single, "returned"))) {
      continue;
    }
    let only_key = property_get(single, "key");
    let f_name = function_path_to_name(file);
    let seen_names = property_get_or_null(atom_by_key, only_key);
    if (not(seen_names)) {
      seen_names = [];
      property_set(atom_by_key, only_key, seen_names);
    }
    seen_names.push(f_name);
  }
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
      atoms: property_get_or_null(atom_by_key, key),
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
