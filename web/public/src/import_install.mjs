import { file_read_json } from "./file_read_json.mjs";
export async function import_install(name) {
      try {
    await import(name);
    return true;
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' || err.code === 'MODULE_NOT_FOUND') {
      return false;
    }
    throw err; // rethrow unexpected errors
  }
}
