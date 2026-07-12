import { file_overwrite } from "./file_overwrite.mjs";
export async function file_overwrite_empty(file_path) {
  let r = await file_overwrite(file_path, "");
  return r;
}
