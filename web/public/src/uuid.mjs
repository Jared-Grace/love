import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function uuid() {
  const r = await import_install("uuid");
  let uuidv4 = property_get(r, "v4");
  let u = uuidv4();
  return u;
}
