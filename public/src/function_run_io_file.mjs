import { function_read } from "../../../love/public/src/function_read.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export async function function_run_io_file(temp_path_input, temp_path_output) {
  let data = await file_read_json(temp_path_input);
  let f_name = object_property_get(data, "f_name");
  let args = object_property_get(data, "args");
  let v = await function_read(f_name2);
}
