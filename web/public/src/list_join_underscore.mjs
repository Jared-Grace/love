import { list_join } from "../../../love/public/src/list_join.mjs";
export function list_join_underscore(list) {
  let joined = list_join(list, "_");
  return joined;
}
