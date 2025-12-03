import { marker } from "../../../love/public/src/marker.mjs";
export function whitespace_normalize(str) {
  marker("1");
  let n = str.replace(/\s+/g, " ").trim();
  return n;
}
