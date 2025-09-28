import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function file_json_transform(fb_path, lambda$data) {
  let data = await file_read_json(fb_path);
  lambda$data(data);
  await file_overwrite_json(fb_path, data);
}
