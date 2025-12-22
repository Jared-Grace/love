import LZString from "lz-string";
export function string_decompress() {
  let v = LZString.compressToUTF16(text);
  return v;
}
