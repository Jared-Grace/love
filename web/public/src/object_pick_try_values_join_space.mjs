import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { object_pick_try_values } from "../../../love/public/src/object_pick_try_values.mjs";
export function object_pick_try_values_join_space(o, properties) {
  let v = object_pick_try_values(o, properties);
  let joined = list_join_space(v);
  return joined;
}
