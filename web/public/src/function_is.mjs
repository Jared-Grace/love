import { marker } from "../../../love/public/src/marker.mjs";
export function function_is(f) {
  marker("1");
  let fi = typeof f === "function";
  return fi;
}
