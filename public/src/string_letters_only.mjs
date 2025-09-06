import { marker } from "./marker.mjs";
export function string_letters_only(str) {
  marker("1");
  let v = str.replace(/[^a-zA-Z]/g, "");
  return v;
}
