import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { add_1 } from "./add_1.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
export function js_fold_block_escapes(target_statements, start, k, internal_locals) {
  // Brick 3b: the fold soundness gate. The matched block produces internal locals — every matched F
  // local except the return-output. Folding collapses the block into one opaque call, deleting those
  // locals, so each must be USED NOWHERE in F outside the block; only the return-output may escape.
  // Returns true when some internal local is referenced outside [start, start+k) (fold NOT allowed),
  // false when the fold is sound.
  arguments_assert(arguments, 4);
  let block_end = add(start, k);
  let n = list_size(target_statements);
  let j = 0;
  while (j < n) {
    let before = j < start;
    let after = j >= block_end;
    let outside = before || after;
    if (outside) {
      let statement = list_get(target_statements, j);
      let names = js_identifiers_names(statement);
      let local_count = list_size(internal_locals);
      let x = 0;
      while (x < local_count) {
        let local = list_get(internal_locals, x);
        let leaked = list_includes(names, local);
        if (leaked) {
          return true;
        }
        x = add_1(x);
      }
    }
    j = add_1(j);
  }
  return false;
}
