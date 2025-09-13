import { list_join } from "./list_join.mjs";
export function list_join_slash_forward(list) {
  let joined = list_join(list, "/");
  return joined;
}
