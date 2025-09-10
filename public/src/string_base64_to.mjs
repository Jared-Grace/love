import { browser_is } from "./browser_is.mjs";
export function string_base64_to(s) {
  let b = browser_is();
  if (b) {
    const b64 = btoa(s);
    return b64;
  }
  const b64node = Buffer.from(s, "utf-8").toString("base64");
  return b64node;
}
