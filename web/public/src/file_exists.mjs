import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { promise_is } from "./promise_is.mjs";
import { string_is } from "./string_is.mjs";

export async function file_exists(file_path) {
    if (promise_is(file_path)) {
        error()
    }
  let fs = await import("fs");
  let { access } = fs.promises;
  let { constants } = fs;
  try {
    await access(file_path, constants.F_OK);
    return true;
  } catch (e){
    return false;
  }
}
