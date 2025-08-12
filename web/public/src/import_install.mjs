import { npm_install } from "./npm_install.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function import_install(name) {
  try {
    return await import(name);
    return true;
  } catch (err) {
    if (
      err.code === "ERR_MODULE_NOT_FOUND" ||
      err.code === "MODULE_NOT_FOUND"
    ) {
      npm_install(name);
      return await import(name);
    }
    throw err;
  }
}
