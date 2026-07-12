import { file_write_json_if_exists_not } from "./file_write_json_if_exists_not.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
export async function file_json_transform_initialize(
  f_path,
  initial,
  lambda$data,
) {
  await file_write_json_if_exists_not(f_path, initial);
  await file_json_transform(f_path, lambda$data);
}
