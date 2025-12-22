import LZString from "lz-string";
export function string_compress(text) {
  let compressed = LZString.compressToUTF16(text);
  return compressed;
}
