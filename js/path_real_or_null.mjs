import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_get } from "./property_get.mjs";
export async function path_real_or_null(path) {
  "The spelling of a path with every link along it followed through, or nothing at all when the path is not on the disk.";
  "Nothing rather than a throw, because the caller asking this is usually asking whether the path is what it appears to be, and a path that is not there is an ordinary answer to that rather than a fault.";
  arguments_assert(arguments, 1);
  let fs = await import("fs");
  let v = fs.promises;
  let realpath = property_get(v, "realpath");
  async function take() {
    let resolved = await realpath(path);
    return resolved;
  }
  let r = await catch_null_async(take);
  return r;
}
