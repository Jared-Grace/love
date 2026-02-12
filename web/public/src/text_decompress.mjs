import { ternary } from "../../../love/public/src/ternary.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import LZString from "lz-string";
export async function text_decompress(compressed) {
  let lz = null;
  lz = ternary(browser_is(), LZString, (await import("lz-string")).default);
  let v = lz.decompressFromUTF16(compressed);
  return v;
}
