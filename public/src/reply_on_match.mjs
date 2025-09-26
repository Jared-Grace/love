import { marker } from "./marker.mjs";
export function reply_on_match(fn, on_match) {
  let fn = function reply_on_match_inner() {};
  return fn;
}
