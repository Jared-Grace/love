import { browser_is } from "../../../love/public/src/browser_is.mjs";
export function text_base64_to(s) {
  let b = browser_is();
  if (b) {
    let b64 = btoa(s);
    return b64;
  }
  let b64node = Buffer.from(s, "utf-8").toString("base64");
  return b64node;
}
