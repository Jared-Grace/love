import { memory_index_hooks_compress_line_kept } from "./memory_index_hooks_compress_line_kept.mjs";
import { memory_index_hooks_compress_line_line } from "./memory_index_hooks_compress_line_line.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function memory_index_hooks_compress_line(lines) {
  arguments_assert(arguments, 1);
  let r22 = memory_index_hooks_compress_line_kept();
  let kept2 = property_get(r22, "kept");
  let dash2 = property_get(r22, "dash");
  let link_open2 = property_get(r22, "link_open");
  let opener = property_get(r22, "opener");
  let ceiling = property_get(r22, "ceiling");
  let r42 = {
    kept: kept2,
    dash: dash2,
    link_open: link_open2,
    opener,
    ceiling,
  };
  let r23 = r42;
  let ceiling2 = property_get(r23, "ceiling");
  let opener2 = property_get(r23, "opener");
  let link_open3 = property_get(r23, "link_open");
  let dash3 = property_get(r23, "dash");
  let kept3 = property_get(r23, "kept");
  let shortened2 = [];
  let r5 = {
    ceiling: ceiling2,
    opener: opener2,
    link_open: link_open3,
    dash: dash3,
    kept: kept3,
    shortened: shortened2,
  };
  let r32 = r5;
  let shortened3 = property_get(r32, "shortened");
  let kept4 = property_get(r32, "kept");
  let dash4 = property_get(r32, "dash");
  let link_open4 = property_get(r32, "link_open");
  let r6 = {
    r3: r32,
    shortened: shortened3,
    kept: kept4,
    dash: dash4,
    link_open: link_open4,
  };
  let r2 = r6;
  let link_open = property_get(r2, "link_open");
  let dash = property_get(r2, "dash");
  let r3 = memory_index_hooks_compress_line_line(r2, lines, link_open, dash);
  let shortened = property_get(r3, "shortened");
  let kept = property_get(r3, "kept");
  let r4 = {
    kept,
    shortened,
  };
  let r = r4;
  return r;
}
