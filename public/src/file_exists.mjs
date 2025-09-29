import { marker } from "../../../love/public/src/marker.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { error } from "./error.mjs";
import { promise_is } from "./promise_is.mjs";
export async function file_exists(file_path) {
  marker("1");
  if (promise_is(file_path)) {
    error();
  }
  let fs = await import("fs");
  let { access } = fs.promises;
  let { constants } = fs;
  let exists = await throws_not_async(lambda);
  async function lambda() {
    await access(file_path, constants.F_OK);
  }
  return exists;
}
