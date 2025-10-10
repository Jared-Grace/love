import { list_join } from "../../../love/public/src/list_join.mjs";
export function list_join_comma_space(args) {
  let v = list_join(args, ", ");
  return v;
}
