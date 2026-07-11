import i from "lz-string";
export async function text_compress(text) {
  const LZModule = await import("lz-string");
  const LZString = LZModule.default ?? LZModule;
  const compressed = LZString.compressToUTF16(text);
  return compressed;
}
