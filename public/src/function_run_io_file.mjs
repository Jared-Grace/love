import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_io_file(temp_path_input, temp_path_output) {
  let data = await file_read_json(file_path);
  marker("1");
}
