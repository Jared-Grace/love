import { object_pick_try_json } from "./object_pick_try_json.mjs";
export function object_pick_try_json_curried_right(properties_name) {
  let c = function object_pick_try_json_curried_right_result(o) {
    let json = object_pick_try_json(o, properties_name);
    return json;
  };
  return c;
}
