import { import_install } from "./import_install.mjs";
export async function uuid() {
  const { v4: uuidv4 } = await import_install("uuid");
  let u = uuidv4();
  return u;
}
