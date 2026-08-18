import { arguments_assert } from "./arguments_assert.mjs";
import { memory_index_hooks_compress_line_kept } from "./memory_index_hooks_compress_line_kept.mjs";
import { property_get } from "./property_get.mjs";
export function memory_index_hooks_compress_line_ceiling() {
  arguments_assert(arguments, 0);
  let r2 = memory_index_hooks_compress_line_kept();
  let kept = property_get(r2, "kept");
  let dash = property_get(r2, "dash");
  let link_open = property_get(r2, "link_open");
  let opener = property_get(r2, "opener");
  let ceiling = property_get(r2, "ceiling");
  let r = {
    kept,
    dash,
    link_open,
    opener,
    ceiling,
  };
  return r;
}
