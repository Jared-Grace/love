import { file_read_json } from "./file_read_json.mjs";
import { file_temp } from "./file_temp.mjs";
import { py_script_run } from "./py_script_run.mjs";
export async function ics_to_json(path_calendar) {
  async function lambda(temp_path) {
    let r = await py_script_run("ics_to_json", [path_calendar, temp_path]);
    let data = await file_read_json(temp_path);
    return data;
  }
  let result = await file_temp(lambda);
  return result;
}
