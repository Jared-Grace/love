import LZString from "lz-string";
export function string_compress(text) {
  let v = LZString.compressToUTF16(text);
  return v;
}
