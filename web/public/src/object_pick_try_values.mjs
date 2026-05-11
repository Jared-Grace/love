import { object_values } from "../../../love/public/src/object_values.mjs";
import { object_pick_try } from "../../../love/public/src/object_pick_try.mjs";
export function object_pick_try_values(o, properties) {
  let picked = object_pick_try(o, properties);
  let v = object_values(picked);
  return v;
}
