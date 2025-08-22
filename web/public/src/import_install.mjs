import { npm_install } from "./npm_install.mjs";
export async function import_install(name) {
  try {
    let v = await import(name);
    return v;
  } catch (err) {
    if (
      err.code === "ERR_MODULE_NOT_FOUND" ||
      err.code === "MODULE_NOT_FOUND"
    ) {
      await npm_install(name);
      let v2 = await import(name);
      return v2;
    }
    throw err;
  }
}
