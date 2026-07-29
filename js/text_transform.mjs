import { list_join_empty } from "./list_join_empty.mjs";
import { list_map } from "./list_map.mjs";
import { list_to } from "./list_to.mjs";
export function text_transform(s, lambda$c) {
  let l = list_to(s);
  let joined = list_map_join_empty(l, lambda$c);
  return joined;
}
