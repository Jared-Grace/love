import { arguments_assert } from "./arguments_assert.mjs";
import { memory_index_hooks_compress_line_ceiling } from "./memory_index_hooks_compress_line_ceiling.mjs";
import { memory_index_hooks_compress_line_shortened } from "./memory_index_hooks_compress_line_shortened.mjs";
import { property_get } from "./property_get.mjs";
export function memory_index_hooks_compress_line_link_open() {
  arguments_assert(arguments, 0);
  let r22 = memory_index_hooks_compress_line_kept();
  let kept2 = property_get(r22, "kept");
  let dash2 = property_get(r22, "dash");
  let link_open2 = property_get(r22, "link_open");
  let opener = property_get(r22, "opener");
  let ceiling = property_get(r22, "ceiling");
  let r4 = {
    kept: kept2,
    dash: dash2,
    link_open: link_open2,
    opener,
    ceiling,
  };
  let r2 = r4;
  let ceiling2 = property_get(r2, "ceiling");
  let opener2 = property_get(r2, "opener");
  let link_open3 = property_get(r2, "link_open");
  let dash3 = property_get(r2, "dash");
  let kept3 = property_get(r2, "kept");
  let shortened2 = [];
  let r5 = {
    ceiling: ceiling2,
    opener: opener2,
    link_open: link_open3,
    dash: dash3,
    kept: kept3,
    shortened: shortened2,
  };
  let r3 = r5;
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
