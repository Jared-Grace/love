import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function text_decompress(compressed) {
  let LZModule = null;
  if (browser_is()) {
    LZModule = await import("lz-string");
  } else {
    const LZ = await import("lz-string");
    LZModule = LZ;
  }
  const LZString = LZModule.default ?? LZModule;
  const result = LZString.decompressFromUTF16(compressed);
  return result;
}
