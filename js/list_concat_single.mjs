import { list_add_multiple } from "./list_add_multiple.mjs";
export function list_concat_single(single, list) {
  let concated = [single];
  list_add_multiple(concated, list);
  return concated;
}
