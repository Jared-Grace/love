import { arguments_assert } from "./arguments_assert.mjs";
export function functions_fold_shape_forget(f_name, shapes, blocks_kept) {
  arguments_assert(arguments, 3);
  delete shapes[f_name];
  delete blocks_kept[f_name];
}
