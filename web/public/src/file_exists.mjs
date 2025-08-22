import { throws_not_async } from "./throws_not_async.mjs";
import { error } from "./error.mjs";
import { promise_is } from "./promise_is.mjs";
export async function file_exists(file_path) {
  if (promise_is(file_path)) {
    error();
  }
  let fs = await import("fs");
  let { access } = fs.promises;
  let { constants } = fs;
  let success = await throws_not_async(lambda);
  return success;
  async function lambda() {
    await access(file_path, constants.F_OK);
  }
}
