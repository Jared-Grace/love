import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { functions_fold_shape_of } from "./functions_fold_shape_of.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
export function functions_fold_blocks_of(f_name, blocks_kept, shapes, entries) {
  arguments_assert(arguments, 4);
  let kept = blocks_kept[f_name];
  if (not_equal(kept, undefined)) {
    return kept;
  }
  let ast = functions_fold_shape_of(f_name, shapes, entries);
  let found = js_blocks_all(ast);
  blocks_kept[f_name] = found;
  return found;
}
