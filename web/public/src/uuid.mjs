import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
export async function uuid() {
  const { v4: uuidv4 } = await import_install("uuid");
  let v = uuidv4();
  console.log(v);
}
