import { browser_is } from "../../../love/public/src/browser_is.mjs";
export function buffer_text_to(buffer) {
  let s = null;
  let b = browser_is();
  if (b) {
    if (buffer instanceof ArrayBuffer) {
      s = new TextDecoder("utf-8").decode(new Uint8Array(buffer));
    } else if (buffer instanceof Uint8Array) {
      s = new TextDecoder("utf-8").decode(buffer);
    } else {
      throw new Error("Unsupported buffer type");
    }
  } else {
    s = buffer.toString("utf8");
  }
  return s;
}
