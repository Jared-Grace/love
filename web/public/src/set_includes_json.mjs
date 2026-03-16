import { json_to } from "../../../love/public/src/json_to.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
export function set_includes_json(set, item) {
  let json = json_to(item);
  let si = set_includes(set, json);
  return si;
}
