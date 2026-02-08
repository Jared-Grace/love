import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { file_write_json } from "../../../love/public/src/file_write_json.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function file_json_transform_initialize(
  f_path,
  initial,
  lambda$data,
) {
  let exists = await file_exists(f_path);
  if (not(exists)) {
    await file_write_json(f_path, initial);
  }
  await file_json_transform(f_path, lambda$data);
}
