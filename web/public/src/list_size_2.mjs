import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_(body_block) {
  let r = list_size(body_block) === 2;
  return r;
}
