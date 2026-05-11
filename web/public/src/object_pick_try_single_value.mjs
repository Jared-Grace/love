import { object_property_single_value } from "../../../love/public/src/object_property_single_value.mjs";
import { object_pick_try } from "../../../love/public/src/object_pick_try.mjs";
export function object_pick_try_single_value(o, properties) {
  let picked = object_pick_try(o, properties);
  let value = object_property_single_value(picked);
  return value;
}
