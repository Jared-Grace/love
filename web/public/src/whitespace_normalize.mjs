import { marker } from "./marker.mjs";
export function whitespace_normalize(str) {
  marker("1");
  let v = str.replace(/\s+/g, " ").trim();
  return v;
}
