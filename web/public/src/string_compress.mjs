import { marker } from "../../../love/public/src/marker.mjs";
export function string_compress() {
  marker("1");
  let v = LZString.compressToUTF16(text);
  return v;
}
