import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function memory_index_hooks_compress_line_shortened(r2) {
  arguments_assert(arguments, 1);
  let ceiling = property_get(r2, "ceiling");
  let opener = property_get(r2, "opener");
  let link_open = property_get(r2, "link_open");
  let dash = property_get(r2, "dash");
  let kept = property_get(r2, "kept");
  let shortened = [];
  let r = {
    ceiling,
    opener,
    link_open,
    dash,
    kept,
    shortened,
  };
  return r;
}
