import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
export function list_slice_end(prompts, offset) {
  let end = list_size(prompts);
  let start = end - offset;
  if (start < 0) {
    start = 0;
  }
  return list_slice(prompts, start, end);
}
