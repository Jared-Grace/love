import { set_add } from "../../../love/public/src/set_add.mjs";
export function set_add_json(found, item) {
  let r = set_add(found, item);
  return r;
}
