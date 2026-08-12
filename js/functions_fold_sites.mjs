import { js_block_callee_names } from "./js_block_callee_names.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { tallies_any_covers_is } from "./tallies_any_covers_is.mjs";
import { js_fold_blocks } from "./js_fold_blocks.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
import { js_fn_fold_pattern } from "./js_fn_fold_pattern.mjs";
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
    " against the files that call all its callees.");
  ("Which files those are is read off every run of statements in each file, not the");
  ("one it opens with. Reading only the top left this blind where it mattered most:");
  ("nine live sites of ",
    fn_name("list_first_property"),
    " sat inside ifs and lambdas, so the files holding them were never even offered");
  ("as candidates, and this reported a clean repo while ",
    fn_name("function_fold_everywhere"),
    " - which asks the identifier index, and so sees a call wherever it is written -");
  ("folded all nine.");
  ("Complement of the miner: this finds reuse");
  ("of fns that EXIST. Returns { x, f } pairs; a mutual x<->f pair means two duplicate DEFINITIONS.");
  arguments_assert(arguments, 0);
  let records = await js_files_texts();
  let entries = {};
  let callee_index = {};
  ("What each run of statements calls, counted, is kept per file beside the index of who calls what. The index answers WHETHER a file calls a name and this answers HOW OFTEN, within a single run - which is the question a fold actually asks, because a body is folded into one run and not gathered across a file.");
  let block_tallies = {};
  function file_load(record) {
    let text = property_get(record, "text");
    let name = null;
    let pattern = null;
    let callees = [];
    let tallies = [];
    try {
      let ast = js_parse(text);
      name = js_flo_name(ast);
      let blocks = js_blocks_all(ast);
      for (let block of blocks) {
        let block_names = js_block_callee_names(block);
        let item = list_tally(block_names);
        list_add(tallies, item);
        callees = callees.concat(block_names);
      }
      pattern = js_fn_fold_pattern(ast);
    } catch (e) {
      return;
    }
    entries[name] = {
      text: text,
      pattern: pattern,
    };
    block_tallies[name] = tallies;
    for (let callee of callees) {
      if (not(callee_index[callee])) {
        callee_index[callee] = {};
      }
      callee_index[callee][name] = true;
    }
  }
  list_map(records, file_load);
  ("A file is read into its shape once and kept, because the pairing asks about the same files over and over. Counted 2026-08-11 across this repo: 57,709 readings of 2,772 different files, twenty-one times each, and this was the second slowest gate there is.");
  ("What is kept has to be given up the moment a fold succeeds, and only then. Folding writes the call back into the shape it was given - that is how the folded version is handed back - so the kept shape is no longer the file after a success, and the next function pairing against it would be pairing against somebody else's fold. A fold that finds nothing changes nothing, which is every reading but a handful, so almost nothing is ever given up.");
  let shapes = {};
  function shape_of(f_name) {
    let kept = shapes[f_name];
    if (not_equal(kept, undefined)) {
      return kept;
    }
    let text2 = property_get(entries, f_name).text;
    let read = js_parse(text2);
    shapes[f_name] = read;
    return read;
  }
  ("Which runs of statements a file holds is kept beside its shape, for the same reason and with the same care. What those runs are depends on the file alone and never on the function being paired against it, and one file is paired against many: counted 2026-08-12, 56,751 pairings over 2,790 different files, which was twenty-two and a half seconds of finding the same runs again against nine tenths of a second to find them once each.");
  ("They are given up exactly when the shape is, because they are the runs of that tree and a fold writes the call back into it.");
  let blocks_kept = {};
  function blocks_of(f_name) {
    let kept2 = blocks_kept[f_name];
    if (not_equal(kept2, undefined)) {
      return kept2;
    }
    let ast2 = shape_of(f_name);
    let found = js_blocks_all(ast2);
    blocks_kept[f_name] = found;
    return found;
  }
  function shape_forget(f_name) {
    delete shapes[f_name];
    delete blocks_kept[f_name];
  }
  let sites = [];
  for (let x_name in entries) {
    let pattern = entries[x_name].pattern;
    if (not(pattern)) {
      continue;
    }
    function lambda2(s) {
      let r = s.callee;
      return r;
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
    let candidates = object_property_names(candidate_sets[0]).filter(lambda5);
    ("What x wants, counted. Reading a candidate's shape and trying the fold against it was ninety-two percent of this gate, measured 2026-08-12, and nearly all of it was spent on files that could not have held the body however hard they were read.");
    ("The cheap question asked first is whether some single run of the candidate calls everything x calls, as many times as x calls it. That is necessary for a fold and nothing like sufficient, which is the right shape for a question asked before an expensive one: it can only ever send work away that was going to come back empty.");
    ("Counted rather than merely present, and per run rather than per file, because both weaker forms let through exactly the files that are slowest to read - the large ones, which call everything somewhere.");
    ("Measured over the whole repo: 65,677 pairings fell to 25,728 for two tenths of a second of counting, and every site found without it was still found with it.");
    function lambda6(c) {
      let missing = null_is(c);
      let r6 = not(missing);
      return r6;
    }
    let list = x_callees.filter(lambda6);
    let x_wanted = list_tally(list);
    let x_ast = shape_of(x_name);
    for (let f_name of candidates) {
      try {
        let f_tallies = block_tallies[f_name];
        let possible = tallies_any_covers_is(f_tallies, x_wanted);
        let hopeless = not(possible);
        if (hopeless) {
          continue;
        }
        let f_ast = shape_of(f_name);
        let f_blocks = blocks_of(f_name);
        let folded = js_fold_blocks(x_ast, f_ast, f_blocks);
        if (not_equal(folded, null)) {
          shape_forget(f_name);
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
