import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export function text_transform(s, lambda$c) {
  let l = list_to(s);
  let mapped = list_map(l, lambda$c);
  let joined = list_join_empty(mapped);
  return joined;
}
