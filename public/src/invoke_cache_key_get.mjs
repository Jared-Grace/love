import { json_to } from "../../../love/public/src/json_to.mjs";
export function invoke_cache_key_get(fn, args) {
  let f = function lambda() {
    let json = json_to([fn.name, args]);
    return json;
  };
  return f;
}
