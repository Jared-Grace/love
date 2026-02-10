import { undefined_is } from "../../../love/public/src/undefined_is.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
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
