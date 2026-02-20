export async function text_decompress(compressed) {
  let LZModule = await import("lz-string");
  const LZString = LZModule.default ?? LZModule;
  const result = LZString.decompressFromUTF16(compressed);
  return result;
}
