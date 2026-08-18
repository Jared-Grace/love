import { arguments_assert } from "./arguments_assert.mjs";
import { memory_index_hooks_compress_line_ceiling } from "./memory_index_hooks_compress_line_ceiling.mjs";
import { memory_index_hooks_compress_line_shortened } from "./memory_index_hooks_compress_line_shortened.mjs";
import { property_get } from "./property_get.mjs";
export function memory_index_hooks_compress_line_link_open() {
  arguments_assert(arguments, 0);
  let r2 = memory_index_hooks_compress_line_ceiling();
  let r3 = memory_index_hooks_compress_line_shortened(r2);
  let shortened = property_get(r3, "shortened");
  let kept = property_get(r3, "kept");
  let dash = property_get(r3, "dash");
  let link_open = property_get(r3, "link_open");
  let r = {
    r3,
    shortened,
    kept,
    dash,
    link_open,
  };
  return r;
}
