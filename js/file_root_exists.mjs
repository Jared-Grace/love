import { throws_not_async } from "./throws_not_async.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
export async function file_root_exists(file_path) {
  let path = await import("path");
  let parsed = path.parse(file_path);
  let root = property_get(parsed, "root");
  let en = text_empty_not_is(root);
  let exists = true;
  if (en) {
    async function lambda() {
      let fs = await import("fs");
      await fs.promises.access(root);
    }
    exists = await throws_not_async(lambda);
  }
  let v = {
    exists,
    root,
  };
  return v;
}
