import { json_to } from "../../../love/public/src/json_to.mjs";
export function invoke_cache_key(fn, args) {
  let json2 = json_to([fn.name, args]);
  return json2;
}
