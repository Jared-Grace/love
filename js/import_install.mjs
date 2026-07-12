import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export async function import_install(name) {
  try {
    let v = await import(name);
    return v;
  } catch (err) {
    if (
      err.code === "ERR_MODULE_NOT_FOUND" ||
      err.code === "MODULE_NOT_FOUND"
    ) {
      "lazy import so the server-only npm install path (command_line -> child_process.spawn) stays out of the static browser bundle graph and only loads if this catch actually fires";
      let m = await import("./npm_install.mjs");
      let npm_install = property_get(m, fn_name("npm_install"));
      await npm_install(name);
      let v2 = await import(name);
      return v2;
    }
    throw err;
  }
}
