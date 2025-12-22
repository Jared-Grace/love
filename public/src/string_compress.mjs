import LZString from "lz-string";

export function string_compress() {
  let v = LZString.compressToUTF16(text);
  return v;
}
