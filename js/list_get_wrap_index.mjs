import { mod } from "./mod.mjs";
import { list_size } from "./list_size.mjs";
export function list_get_wrap_index(cycles, index) {
  let size = list_size(cycles);
  let r = mod(index, size);
  return r;
}
