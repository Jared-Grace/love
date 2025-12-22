import LZString from "lz-string";
export function string_decompress() {
  let v = LZString.decompressFromUTF16(compressed);
  return v;
}
