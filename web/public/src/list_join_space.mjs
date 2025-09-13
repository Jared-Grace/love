import { list_join } from "./list_join.mjs";
export function list_join_space(args) {
  let joined = list_join(args, " ");
  return joined;
}
