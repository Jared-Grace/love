import { ceil } from "./ceil.mjs";
import { half } from "./half.mjs";
import { list_size } from "./list_size.mjs";
export function list_size_half_ceil(start_indices) {
  let size = list_size(start_indices);
  let divided = half(size);
  let ceiling = ceil(divided);
  return ceiling;
}
