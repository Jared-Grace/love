import { marker } from "../../../love/public/src/marker.mjs";
import LZString from "lz-string";
export function string_decompress() {
  marker("1");
  let v = LZString.compressToUTF16(text);
  return v;
}
