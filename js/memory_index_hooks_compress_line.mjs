import { memory_index_hooks_compress_line_line } from "./memory_index_hooks_compress_line_line.mjs";
import { memory_index_hooks_compress_line_link_open } from "./memory_index_hooks_compress_line_link_open.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function memory_index_hooks_compress_line(lines) {
  arguments_assert(arguments, 1);
  let r2 = memory_index_hooks_compress_line_link_open();
  let link_open = property_get(r2, "link_open");
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
