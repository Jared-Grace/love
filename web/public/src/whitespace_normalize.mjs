import { marker } from "../../../love/public/src/marker.mjs";
export function whitespace_normalize(s) {
  marker("1");
  let n = s.replace(/\s+/g, " ").trim();
  return n;
}
