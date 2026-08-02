export async function text_decompress(compressed) {
  let imported = await import("lz-string");
  let l = imported.default ?? imported;
  let decompressed = l.decompressFromUTF(compressed);
  return decompressed;
}
