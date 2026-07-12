import { json_to } from "./json_to.mjs";
import { set_includes } from "./set_includes.mjs";
export function set_includes_json(set, item) {
  let json = json_to(item);
  let si = set_includes(set, json);
  return si;
}
