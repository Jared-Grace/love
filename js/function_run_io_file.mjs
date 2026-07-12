import { undefined_is } from "./undefined_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { function_run } from "./function_run.mjs";
import { property_get } from "./property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function function_run_io_file(temp_path_input, temp_path_output) {
  let data = await file_read_json(temp_path_input);
  let f_name = property_get(data, "f_name");
  let args = property_get(data, "args");
  let result = await function_run(f_name, args);
  let u = undefined_is(result);
  if (u) {
    result = null;
  }
  await file_overwrite_json(temp_path_output, {
    result,
  });
}
