import { equal } from "./equal.mjs";
import { npm_install } from "./npm_install.mjs";
export async function import_install(name) {
  try {
    let v = await import(name);
    return v;
  } catch (err) {
    if (
      equal(err.code, "ERR_MODULE_NOT_FOUND") ||
      equal(err.code, "MODULE_NOT_FOUND")
    ) {
      await npm_install(name);
      let v2 = await import(name);
      return v2;
    }
    throw err;
  }
}
