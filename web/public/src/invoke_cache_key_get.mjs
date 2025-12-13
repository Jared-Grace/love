import { invoke_cache_key } from "../../../love/public/src/invoke_cache_key.mjs";
export function invoke_cache_key_get(fn, args) {
  let l = function lambda() {
    let json = invoke_cache_key(fn, args);
    return json;
  };
  return l;
}
