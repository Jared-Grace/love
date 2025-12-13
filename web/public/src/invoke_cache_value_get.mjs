import { marker } from "../../../love/public/src/marker.mjs";
export function invoke_cache_value_get(fn, args) {
  marker("1");
  let v3 = async function lambda() {
    let v = await fn(...args);
    return v;
  };
  return v3;
}
