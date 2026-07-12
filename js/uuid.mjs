import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function uuid() {
  let r = await import_install("uuid");
  let uuidv4 = property_get(r, "v4");
  let u = uuidv4();
  return u;
}
