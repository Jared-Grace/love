import { browser_is } from "./browser_is.mjs";
export function string_base64_to() {
  let b = browser_is();
  if (b) {
    const b64 = btoa(str);
    return b64;
  }
  const b64node = Buffer.from(str, "utf-8").toString("base64");
  return b64node;
}
