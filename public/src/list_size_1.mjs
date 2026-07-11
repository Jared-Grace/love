import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_(list) {
  const s = list_size(list) === 1;
  return s;
}
