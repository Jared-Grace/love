import { marker } from "./marker.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
export async function file_overwrite_buffer(file_path, contents) {
  marker("1");
  let fs = await import("fs");
  await file_parent_exists_ensure(file_path);
  await fs.promises.writeFile(file_path, contents, "utf-8");
}
