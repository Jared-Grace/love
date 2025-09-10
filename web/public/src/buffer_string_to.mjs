import { browser_is } from "./browser_is.mjs";
export function buffer_string_to(buffer) {
  let b = browser_is();
  if (b) {
    if (buffer instanceof ArrayBuffer) {
      let s = null;
      s = new TextDecoder("utf-8").decode(new Uint8Array(buffer));
      return s;
    }
    if (buffer instanceof Uint8Array) {
      let v3 = new TextDecoder("utf-8").decode(buffer);
      return v3;
    }
    throw new Error("Unsupported buffer type");
  }
  let v = buffer.toString("utf8");
  return v;
}
