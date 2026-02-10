import { throws_not_async } from "../../../love/public/src/throws_not_async.mjs";
import { text_empty_not_is } from "../../../love/public/src/text_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function file_root_exists(file_path) {
  let path = await import("path");
  let parsed = path.parse(file_path);
  let root = property_get(parsed, "root");
  let en = text_empty_not_is(root);
  let exists = true;
  if (en) {
    async function lambda2() {
      let fs = await import("fs");
      await fs.promises.access(root);
    }
    exists = await throws_not_async(lambda2);
  }
  let v = {
    exists,
    root,
  };
  return v;
}
