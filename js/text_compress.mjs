import i from "lz-string";
export async function text_compress(text) {
  let LZModule = await import("lz-string");
  let LZString = LZModule.default ?? LZModule;
  let compressed = LZString.compressToUTF16(text);
  return compressed;
}
