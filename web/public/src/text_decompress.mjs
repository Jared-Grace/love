import { browser_is } from "../../../love/public/src/browser_is.mjs";
import LZString from "lz-string";
export async function text_decompress(compressed) {
  let lz = null;
  if (browser_is()) {
    lz = (await import("lz-string")).default;
  } else {
    lz = LZString;
  }
  let v = lz.decompressFromUTF16(compressed);
  return v;
}
