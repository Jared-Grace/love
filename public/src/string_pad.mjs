import { marker } from "../../../love/public/src/marker.mjs";
export function string_pad(s, padding) {
  marker("1");
  const padded = padding + s + padding;
  return padded;
}
