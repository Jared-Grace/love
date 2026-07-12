import { json_to } from "./json_to.mjs";
import { object_pick_try } from "./object_pick_try.mjs";
export function object_pick_try_json(o, properties_name) {
  let picked = object_pick_try(o, properties_name);
  let json = json_to(picked);
  return json;
}
