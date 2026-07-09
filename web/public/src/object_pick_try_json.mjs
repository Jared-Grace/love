import { json_to } from "../../../love/public/src/json_to.mjs";
import { object_pick_try } from "../../../love/public/src/object_pick_try.mjs";
export function object_pick_try_json(o, properties_name) {
  let picked = object_pick_try(o, properties_name);
  let json = json_to(picked);
  return json;
}
