import { arguments_assert } from "./arguments_assert.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_fold_block_escapes } from "./js_fold_block_escapes.mjs";
import { js_pair_canonical } from "./js_pair_canonical.mjs";
import { less_than } from "./less_than.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { subtract } from "./subtract.mjs";
export function functions_call_pairs_statements_scan(
  statements,
  body_is,
  tally,
  keys_here,
  file,
  return_name,
) {
  arguments_assert(arguments, 6);
  ("Counts every neighbouring pair of calls in one run of statements into the tally, and notes the ones this file could actually be folded on.");
  ("One run of statements rather than one file, because the same two lines written under an if or inside a lambda are the same two lines. What arrives is a run and what is counted is every pair inside it, so the caller decides how much of a file gets read rather than this deciding it for them.");
  ("The tally and the file's own list arrive rather than being made here, because both outlive a single run - one gathers the whole repo and the other gathers one file, and this is called many times over for each.");
  let sigs = list_map(statements, js_atomic_statement_signature);
  let last = subtract(sigs.length, 1);
  let i = 0;
  while (less_than(i, last)) {
    let s = sigs[i];
    let s2 = sigs[i + 1];
    let start = i;
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
      let returned = property_equals(s2, "name", return_name);
      keys_here.push({
        key: key,
        returned: returned,
      });
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
        closed_files: {},
        wired: wired,
        example: example,
        left: callee,
        right: callee2,
      });
    }
    let record = property_get(tally, key);
    record.count = record.count + 1;
    record.files[file] = true;
    ("Whether the name standing between the two lines is read anywhere else in this");
    ("same run of statements. If it is, the pair cannot be collapsed here whatever");
    ("atom is written for it, because the collapsed call would delete a name");
    ("something later still needs. Asked with the fold's own gate rather than a");
    ("reading of my own, so a row promising a fold and the fold itself cannot");
    ("disagree.");
    if (wired) {
      let escapes = js_fold_block_escapes(statements, start, 2, [name]);
      if (not(escapes)) {
        record.closed_files[file] = true;
      }
    }
  }
}
