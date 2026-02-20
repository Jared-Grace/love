export async function text_decompress(compressed) {
  let imported = await import("lz-string");
  const l = imported.default ?? imported;
  const result = l.decompressFromUTF16(compressed);
  return result;
}
