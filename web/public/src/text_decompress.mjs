export async function text_decompress(compressed) {
  let l = await import("lz-string");
  const LZString = l.default ?? l;
  const result = LZString.decompressFromUTF16(compressed);
  return result;
}
