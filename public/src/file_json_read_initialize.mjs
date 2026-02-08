import { file_write_json_if_exists_not } from "../../../love/public/src/file_write_json_if_exists_not.mjs";
export async function file_json_read_initialize(initial, joined) {
  await file_write_json_if_exists_not(f_path, initial);
  let data = await file_json_read(joined);
  return data;
}
