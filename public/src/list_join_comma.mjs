import { list_join } from "../../../love/public/src/list_join.mjs";
export function list_join_comma(names) {
  let result = list_join(names, ",");
  return result;
}
