import { log } from "./log.mjs";
import { import_install } from "./import_install.mjs";
export async function uuid() {
  await import_install(name);
  const { v4: uuidv4 } = import("uuid");
  let v = uuidv4();
  console.log(v);
}
