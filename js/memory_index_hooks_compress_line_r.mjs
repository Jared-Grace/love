import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { memory_index_hooks_compress_line_line } from "./memory_index_hooks_compress_line_line.mjs";
export function memory_index_hooks_compress_line_r(r2, lines, link_open) {
  arguments_assert(arguments, 3);
  let dash = property_get(r2, "dash");
  let r3 = memory_index_hooks_compress_line_line(r2, lines, link_open, dash);
  let shortened = property_get(r3, "shortened");
  let kept = property_get(r3, "kept");
  let r = {
    kept,
    shortened,
  };
  return r;
}
