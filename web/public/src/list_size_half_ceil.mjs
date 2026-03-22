import { ceil } from "../../../love/public/src/ceil.mjs";
import { half } from "../../../love/public/src/half.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_half_ceil(start_indices) {
  let size = list_size(start_indices);
  let divided = half(size);
  let ceiling = ceil(divided);
  return ceiling;
}
