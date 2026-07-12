import { object_values } from "./object_values.mjs";
import { object_pick_try } from "./object_pick_try.mjs";
export function object_pick_try_values(o, properties) {
  let picked = object_pick_try(o, properties);
  let v = object_values(picked);
  return v;
}
