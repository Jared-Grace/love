import i from "lz-string";
export async function text_decompress(compressed) {
  let imported = await import("lz-string");
  let l = imported.default ?? imported;
  let decompressed = l.decompressFromUTF16(compressed);
  return decompressed;
}
