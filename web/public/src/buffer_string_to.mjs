import { marker } from "./marker.mjs";
export function buffer_string_to(buffer) {
  marker("1");
  let v = buffer.toString("utf8");
  return v;
}
