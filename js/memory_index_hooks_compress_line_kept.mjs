import { arguments_assert } from "./arguments_assert.mjs";
import { memory_index_line_length_ceiling } from "./memory_index_line_length_ceiling.mjs";
export function memory_index_hooks_compress_line_kept() {
  arguments_assert(arguments, 0);
  let ceiling = memory_index_line_length_ceiling();
  let opener = "- [";
  let link_open = "[[";
  let dash = "—";
  let kept = [];
  let r = {
    ceiling,
    opener,
    link_open,
    dash,
    kept,
  };
  return r;
}
