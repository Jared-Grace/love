import { file_overwrite_cached } from "../../../love/public/src/file_overwrite_cached.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
export async function file_transform_cached(f_path, lambda) {
  let overwrite = await file_read_cached(f_path);
  let r = await lambda();
  if (overwrite) {
    await file_overwrite_cached(f_path);
  }
  return r;
}
