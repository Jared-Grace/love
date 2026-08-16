import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
import { js_block_callee_names } from "./js_block_callee_names.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_add } from "./list_add.mjs";
import { js_fn_fold_pattern } from "./js_fn_fold_pattern.mjs";
import { not } from "./not.mjs";
export function functions_fold_sites_file_load(
  record,
  entries,
  block_tallies,
  callee_index,
) {
  arguments_assert(arguments, 4);
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
