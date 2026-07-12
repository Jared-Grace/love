import { json_to } from "./json_to.mjs";
import { set_add } from "./set_add.mjs";
export function set_add_json(found, item) {
  let json = json_to(item);
  let r = set_add(found, json);
  return r;
}
