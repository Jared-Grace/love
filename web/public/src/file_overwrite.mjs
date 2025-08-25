import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
export async function file_overwrite(file_path, contents) {
  let fs = await import("fs");
  await file_parent_exists_ensure(file_path);
  await fs.promises.writeFile(file_path, contents, "utf-8");
}
