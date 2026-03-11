import { list_get } from "../../../love/public/src/list_get.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_get_wrap(cycles, index) {
  let size = list_size(cycles);
  let r = mod(index, size);
  let item = list_get(cycles, r);
  return item;
}
