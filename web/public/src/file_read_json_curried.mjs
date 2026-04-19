import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export function file_read_json_curried(file_path) {
  let c = async function file_read_json_curried_result() {
    return await file_read_json(file_path);
  };
  return c;
}
