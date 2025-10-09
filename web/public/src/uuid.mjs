import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function uuid() {
  if (browser_is()) {
    let v = crypto.randomUUID();
    return v;
  }
  const { v4: uuidv4 } = await import_install("uuid");
  let u = uuidv4();
  return u;
}
