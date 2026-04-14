import { file_overwrite_cached } from "../../../love/public/src/file_overwrite_cached.mjs";
import { file_read_cached_initialize } from "../../../love/public/src/file_read_cached_initialize.mjs";
export async function file_transform_cached(f_path, lambda) {
  let overwrite = await file_read_cached_initialize(f_path);
  let r = await lambda();
  if (overwrite) {
    await file_overwrite_cached(f_path);
  }
  return r;
}
