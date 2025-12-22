import LZString from "lz-string";
export function string_decompress(compressed) {
  let text = LZString.decompressFromUTF16(compressed);
  return text;
}
