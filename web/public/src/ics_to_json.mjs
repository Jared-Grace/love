import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { py_script_run } from "../../../love/public/src/py_script_run.mjs";
export async function ics_to_json(path_calendar) {
  async function lambda(temp_path) {
    let r = await py_script_run("ics_to_json", [path_calendar, temp_path]);
    let data = await file_read_json(file_path);
    return data;
  }
  let result = await file_temp(lambda);
  return result;
}
