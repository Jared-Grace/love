import { file_root_exists_assert } from "../../../love/public/src/file_root_exists_assert.mjs";
export async function file_parent_exists_ensure(file_path) {
  let fs = await import("fs");
  let path = await import("path");
  const dir = path.dirname(file_path);
  await fs.promises.mkdir(dir, {
    recursive: true,
  });
  return;
  await file_root_exists_assert(file_path);
}
