import { log } from "../../../love/public/src/log.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
export async function file_read_json(file_path) {
  let json = await file_read(file_path);
  let data = json_from(json);
  return data;
  log(file_read_json.name, {
    json,
  });
}
