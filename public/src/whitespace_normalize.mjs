import { marker } from "../../../love/public/src/marker.mjs";
export function whitespace_normalize(s) {
  let n = s.replace(/\s+/g, " ").trim();
  return n;
}
