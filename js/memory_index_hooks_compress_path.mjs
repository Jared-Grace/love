import { arguments_assert } from "./arguments_assert.mjs";
import { memory_index_hooks_compress_line } from "./memory_index_hooks_compress_line.mjs";
import { property_get } from "./property_get.mjs";
import { memory_index_path } from "./memory_index_path.mjs";
export function memory_index_hooks_compress_path(lines) {
  arguments_assert(arguments, 1);
  let r2 = memory_index_hooks_compress_line(lines);
  let shortened = property_get(r2, "shortened");
  let kept = property_get(r2, "kept");
  let rebuilt = kept.join("\n");
  let path = memory_index_path();
  let r = {
    shortened,
    rebuilt,
    path,
  };
  return r;
}
