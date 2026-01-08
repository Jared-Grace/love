import { file_overwrite_cached } from "../../../love/public/src/file_overwrite_cached.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
export async function file_transform_cached(d_path, lambda) {
  await file_read_cached(d_path);
  let r = await lambda();
  await file_overwrite_cached(d_path);
  return r;
}
