import { list_slice } from "../../../love/public/src/list_slice.mjs";
export function list_take(list, count) {
  let taken = list_slice(list, 0, count);
  return taken;
}
