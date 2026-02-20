export async function text_decompress(compressed) {
  let imported = await import("lz-string");
  const l = imported.default ?? imported;
  const decompressed = l.decompressFromUTF16(compressed);
  return decompressed;
}
