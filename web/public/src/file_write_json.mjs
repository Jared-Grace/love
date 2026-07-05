import { file_write } from "../../../love/public/src/file_write.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
export async function file_write_json(file_path, object) {
  let json = json_format_to(object);
  await file_write(file_path, json);
}
