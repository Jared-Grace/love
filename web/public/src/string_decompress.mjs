export async function string_decompress(compressed) {
  const LZString = (await import("lz-string")).default;
  let v = LZString.decompressFromUTF16(compressed);
  return v;
}
