import { throws_not_async } from "../../../love/public/src/throws_not_async.mjs";
import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function file_root_exists(file_path) {
  let path = await import("path");
  let parsed = path.parse(file_path);
  let root = object_property_get(parsed, "root");
  let en = string_empty_not_is(root);
  let exists = true;
  if (en) {
    async function lambda2() {
      let fs = await import("fs");
      await fs.promises.access(root);
    }
    exists = await throws_not_async(lambda2);
  }
  return exists;
}
