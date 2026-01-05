import { browser_is } from "../../../love/public/src/browser_is.mjs";
import LZString from "lz-string";
export async function string_decompress(compressed) {
  if (browser_is()) {
  }
  const LZString = (await import("lz-string")).default;
  let v = LZString.decompressFromUTF16(compressed);
  return v;
}
