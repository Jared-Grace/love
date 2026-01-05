import { browser_is } from "../../../love/public/src/browser_is.mjs";
import LZString from "lz-string";
export async function string_decompress(compressed) {
  let LZString = null;
  if (browser_is()) {
    LZString = (await import("lz-string")).default;
  } else {
  }
  let v = LZString.decompressFromUTF16(compressed);
  return v;
}
